# Russia Student Connect BD

Next.js 15 information hub for Bangladeshi students studying in Russia. It creates concise multilingual summaries and links readers to the original publisher.

## Setup

1. Copy `.env.example` to `.env.local` and set Supabase and OpenAI credentials. Keep service-role and OpenAI keys server-only.
2. Run the SQL migrations in `supabase/migrations` in order.
3. Run `npm install`, then `npm run dev`.
4. In Supabase Auth, create the administrator account and put its email in `ADMIN_EMAILS`.
5. Deploy to Vercel. `vercel.json` invokes the protected cron endpoint every six hours; set `CRON_SECRET` in Vercel.

## Sources and administration

Add only permitted official or reputable sources to `lib/sources.ts`, with exact allowed hosts. The ingestion process rejects off-domain links and irrelevant items. The admin API requires a Supabase bearer token and an allowlisted email; it can publish, hide, or send an item back to review.

## Launch checklist

- Point `russiastudentbd.com` to Vercel and configure the canonical domain.
- Configure Supabase URL, anon key, service-role key, database migrations, and Auth.
- Set all production environment variables and the administrator allowlist.
- Review source permissions, robots.txt, rate limits, and the legal/policy copy.
- Test the cron authorization and article source links.
- Only enable GAM after network/ad-unit IDs, consent behavior, and AdSense `ads.txt` are ready.
