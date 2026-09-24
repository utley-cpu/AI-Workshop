# CLAUDE.md

## Project
Study task list for language learners. Tasks are tagged Listening, Speaking,
Reading or Writing; the app shows which skill the learner is avoiding.
Plan: roadmap.md. Current status: project-state.md. Read both before starting work.

## Stack
Next.js (App Router), TypeScript, plain CSS in app/globals.css, Supabase
(auth + database), deployed on Vercel.

## Rules
- Work only on the ACTIVE slice in roadmap.md. Anything else goes to the Backlog; ask first.
- Ask before adding any library, service or account.
- Styling: plain CSS in app/globals.css only. No Tailwind, CSS modules, CSS-in-JS or UI libraries.
- Fake names and fake content only. No real personal data.
- Secrets (Supabase keys, passwords) go in .env.local, which is gitignored, and in
  Vercel's environment variables. Never in code, commits or chat.
- Explain every change in plain language, not only in code.
- Run `npm run build` and fix all errors and warnings before committing.
- Work on a branch and open a pull request. Don't merge unless Lucas says so.
