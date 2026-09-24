# Project state
Last updated: 2026-09-23

## Works
- Live Next.js site deployed on Vercel at https://ai-workshop-three-pi.vercel.app/
- Supabase project created and linked to the repo.

## Broken or flaky
- Nothing known. Not checked in detail yet.

## Environment notes
- Stack: Next.js (App Router), TypeScript, plain CSS, Supabase, deployed on Vercel.
- The site does not use Supabase yet: no login, no database tables.
- Unknown: whether the Supabase URL and key are already set in Vercel's environment variables and in a local .env.local file. Check this at the start of Slice 1.
- Secrets (keys, passwords) go in .env.local and in Vercel's Environment Variables settings, never in chat and never in committed code.
- Supabase email confirmation is on by default. Fake test emails cannot receive confirmation links. Decision pending: turn it off for this project (recommended).

## Next session
- Decide on turning off Supabase email confirmation.
- Start Slice 1 (sign up and log in). Expect Claude Code to ask before adding the Supabase libraries.
