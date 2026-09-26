import { RoomAgentDispatch, RoomConfiguration } from "@livekit/protocol";
import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOKEN_TTL = "10m";

function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    const requestHost =
      request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? request.nextUrl.host;

    return new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const serverUrl = process.env.LIVEKIT_URL;
  const agentName = process.env.LIVEKIT_AGENT_NAME;

  if (!apiKey || !apiSecret || !serverUrl || !agentName) {
    console.error("LiveKit token endpoint is missing required environment variables.");
    return NextResponse.json(
      { error: "The portfolio agent is not configured." },
      { status: 503 },
    );
  }

  const sessionId = crypto.randomUUID();
  const roomName = `portfolio-${sessionId}`;
  const participantIdentity = `visitor-${crypto.randomUUID()}`;

  try {
    const token = new AccessToken(apiKey, apiSecret, {
      identity: participantIdentity,
      name: "Portfolio visitor",
      ttl: TOKEN_TTL,
    });

    token.addGrant({
      room: roomName,
      roomJoin: true,
      canPublish: true,
      canPublishData: true,
      canSubscribe: true,
    });

    token.roomConfig = new RoomConfiguration({
      agents: [
        new RoomAgentDispatch({
          agentName,
          metadata: JSON.stringify({ sessionId, source: "portfolio" }),
        }),
      ],
      emptyTimeout: 60,
      departureTimeout: 30,
      maxParticipants: 1,
    });

    const participantToken = await token.toJwt();

    return NextResponse.json(
      {
        participant_token: participantToken,
        server_url: serverUrl,
      },
      {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch (error) {
    console.error("Failed to create a LiveKit session token.", error);
    return NextResponse.json(
      { error: "The portfolio agent could not be started." },
      { status: 500 },
    );
  }
}
