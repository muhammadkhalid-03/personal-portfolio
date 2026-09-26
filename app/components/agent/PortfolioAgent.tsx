"use client";

import {
  BarVisualizer,
  LiveKitRoom,
  RoomAudioRenderer,
  StartAudio,
  VideoTrack,
  useChat,
  useLocalParticipant,
  useRoomContext,
  useTranscriptions,
  useVoiceAssistant,
} from "@livekit/components-react";
import {
  ArrowUp,
  LoaderCircle,
  MessageSquareText,
  Mic,
  MicOff,
  PhoneOff,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

type ConnectionDetails = {
  participant_token: string;
  server_url: string;
};

type TranscriptEntry = {
  id: string;
  message: string;
  speaker: "agent" | "visitor";
  timestamp: number;
};

const STATE_LABELS = {
  connecting: "Joining the room",
  "pre-connect-buffering": "Listening while the agent joins",
  initializing: "Waking up the agent",
  idle: "Ready",
  listening: "Listening",
  thinking: "Thinking",
  speaking: "Speaking",
  failed: "Agent unavailable",
  disconnected: "Disconnected",
} as const;

function AgentSession({ onEnd }: { onEnd: () => void }) {
  const room = useRoomContext();
  const { audioTrack, state, videoTrack } = useVoiceAssistant();
  const { isMicrophoneEnabled, localParticipant } = useLocalParticipant();
  const transcriptions = useTranscriptions();
  const { chatMessages, isSending, send } = useChat();
  const [message, setMessage] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);

  const transcript = useMemo<TranscriptEntry[]>(() => {
    const localIdentity = localParticipant.identity;
    const spokenEntries = transcriptions.map((item) => ({
      id: `transcript-${item.streamInfo.id}`,
      message: item.text,
      speaker:
        item.participantInfo.identity === localIdentity
          ? ("visitor" as const)
          : ("agent" as const),
      timestamp: item.streamInfo.timestamp,
    }));
    const typedEntries = chatMessages.map((item) => ({
      id: `chat-${item.id}`,
      message: item.message,
      speaker:
        item.from?.identity === localIdentity
          ? ("visitor" as const)
          : ("agent" as const),
      timestamp: item.timestamp,
    }));

    return [...spokenEntries, ...typedEntries]
      .filter((item) => item.message.trim().length > 0)
      .sort((a, b) => a.timestamp - b.timestamp)
      .slice(-6);
  }, [chatMessages, localParticipant.identity, transcriptions]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextMessage = message.trim();

    if (!nextMessage || isSending) {
      return;
    }

    setInputError(null);
    try {
      await send(nextMessage);
      setMessage("");
    } catch {
      setInputError("That message did not send. Please try again.");
    }
  };

  const toggleMicrophone = async () => {
    setInputError(null);
    try {
      await localParticipant.setMicrophoneEnabled(!isMicrophoneEnabled);
    } catch {
      setInputError(
        "Microphone access is unavailable. You can still type below.",
      );
    }
  };

  const endSession = async () => {
    await room.disconnect();
    onEnd();
  };

  return (
    <div className="flex h-full min-h-[36rem] flex-col">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.6rem] bg-[#020706]">
        {videoTrack ? (
          <VideoTrack
            trackRef={videoTrack}
            className="h-full min-h-[25rem] w-full object-cover"
          />
        ) : (
          <div className="flex min-h-[25rem] flex-col items-center justify-center gap-6 px-8 text-center">
            <div className="agent-visualizer-shell" aria-hidden="true">
              <BarVisualizer
                state={state}
                track={audioTrack}
                barCount={7}
                className="agent-audio-visualizer"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
                {STATE_LABELS[state]}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                The avatar will appear here as soon as its video stream is
                ready.
              </p>
            </div>
          </div>
        )}

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-md">
          <span
            className={`h-2 w-2 rounded-full ${
              state === "speaking"
                ? "animate-pulse bg-emerald-300"
                : state === "failed" || state === "disconnected"
                  ? "bg-rose-400"
                  : "bg-amber-300"
            }`}
            aria-hidden="true"
          />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white">
            {STATE_LABELS[state]}
          </span>
        </div>

        <StartAudio
          label="Enable agent audio"
          className="button-primary absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap"
        />
      </div>

      <div className="mt-4 flex min-h-28 flex-col justify-end rounded-2xl border border-white/10 bg-black/15 p-4">
        {transcript.length > 0 ? (
          <div className="agent-transcript space-y-2" aria-live="polite">
            {transcript.map((entry) => (
              <p key={entry.id} className="text-sm leading-5 text-slate-300">
                <span className="mr-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-emerald-300">
                  {entry.speaker === "visitor" ? "You" : "AI"}
                </span>
                {entry.message}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-sm leading-6 text-slate-400">
            Try asking about my experience building AI infrastructure, backend
            systems, or the kinds of problems I enjoy working on.
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleMicrophone}
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
            isMicrophoneEnabled
              ? "border-emerald-300/50 bg-emerald-300 text-[#04110f]"
              : "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
          aria-label={
            isMicrophoneEnabled ? "Mute microphone" : "Unmute microphone"
          }
        >
          {isMicrophoneEnabled ? (
            <Mic className="h-4 w-4" />
          ) : (
            <MicOff className="h-4 w-4" />
          )}
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex min-w-0 flex-1 items-center gap-2"
        >
          <label htmlFor="portfolio-agent-message" className="sr-only">
            Ask Muhammad&apos;s AI a question
          </label>
          <div className="relative min-w-0 flex-1">
            <MessageSquareText
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
            <input
              id="portfolio-agent-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Or type a question"
              maxLength={500}
              className="h-11 w-full rounded-full border border-white/15 bg-white/5 pl-10 pr-12 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-300/20"
            />
            <button
              type="submit"
              disabled={!message.trim() || isSending}
              className="absolute right-1.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-300 text-[#04110f] transition-colors hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              {isSending ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowUp className="h-4 w-4" />
              )}
            </button>
          </div>
        </form>

        <button
          type="button"
          onClick={endSession}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rose-300/30 bg-rose-400/10 text-rose-200 transition-colors hover:bg-rose-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          aria-label="End conversation"
        >
          <PhoneOff className="h-4 w-4" />
        </button>
      </div>

      {inputError && (
        <p className="mt-2 text-sm text-rose-200" role="alert">
          {inputError}
        </p>
      )}

      <RoomAudioRenderer />
    </div>
  );
}

export default function PortfolioAgent() {
  const [connectionDetails, setConnectionDetails] =
    useState<ConnectionDetails | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startSession = async () => {
    setError(null);
    setIsStarting(true);

    try {
      const response = await fetch("/api/livekit/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const body = (await response.json()) as
        | ConnectionDetails
        | { error?: string };

      if (
        !response.ok ||
        !("participant_token" in body) ||
        !("server_url" in body)
      ) {
        throw new Error("error" in body ? body.error : undefined);
      }

      setConnectionDetails(body);
    } catch (requestError) {
      setError(
        requestError instanceof Error && requestError.message
          ? requestError.message
          : "The portfolio agent is unavailable right now.",
      );
    } finally {
      setIsStarting(false);
    }
  };

  const endSession = () => {
    setConnectionDetails(null);
  };

  if (!connectionDetails) {
    return (
      <div className="surface-card overflow-hidden p-2">
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <Image
            src="/professionalphoto.jpg"
            alt="Muhammad Khalid"
            width={720}
            height={720}
            className="aspect-square h-auto w-full object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-5 pb-5 pt-20">
            <div className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.17em] text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Muhammad-as-a-Service
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-200">
              Knows way too much about me. Ask it anything. No gossip pls :)
            </p>
            <button
              type="button"
              onClick={startSession}
              disabled={isStarting}
              className="button-primary mt-4 w-full disabled:cursor-wait disabled:opacity-70"
            >
              {isStarting ? (
                <>
                  <LoaderCircle
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  Starting the agent
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4" aria-hidden="true" />
                  Talk to my AI
                </>
              )}
            </button>
          </div>
        </div>

        <div className="px-4 pb-4 pt-3">
          {error && (
            <p className="mt-3 text-sm text-rose-200" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="surface-card p-2">
      <LiveKitRoom
        token={connectionDetails.participant_token}
        serverUrl={connectionDetails.server_url}
        connect
        audio
        video={false}
        onDisconnected={endSession}
        onError={(roomError) => setError(roomError.message)}
        onMediaDeviceFailure={() =>
          setError(
            "Microphone access is unavailable. You can still use the text field.",
          )
        }
        className="h-full"
      >
        <AgentSession onEnd={endSession} />
      </LiveKitRoom>
      {error && (
        <p className="px-4 pb-3 pt-2 text-sm text-rose-200" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
