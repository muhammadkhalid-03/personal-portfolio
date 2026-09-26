# Portfolio Website

### Link:

https://www.muhammadkhalid.dev

### Included Information:

- Homepage: Introduction, photo, skills
- Projects: Personal & Class Projects
- About: Professional Experience, Skills, Academic life, Hobbies & Interests
- Resume
- Contact: GitHub, LinkedIn, Contact Form
- Voice-first LiveKit agent with an Anam avatar stream

### Technologies:

- Next.js
- TypeScript
- Hosted on Vercel
- LiveKit React components and LiveKit Cloud

## LiveKit agent configuration

Copy `.env.example` to `.env.local` and provide the LiveKit Cloud project URL, API key, API
secret, and the registered agent name. The API key and secret are used only by the server-side
token route; they must not use `NEXT_PUBLIC_` prefixes.

```bash
npm install
npm run dev
```

The homepage requests a short-lived room token from `/api/livekit/token`. The token dispatches
the configured agent, and the UI automatically renders the video track published by its Anam
avatar worker. Anam credentials and avatar selection belong to the deployed agent, not this
frontend.
