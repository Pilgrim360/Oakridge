This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Supabase Setup

This project uses [Supabase](https://supabase.com) for backend services including authentication and database.

### Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Get your credentials from your [Supabase Dashboard](https://supabase.com/dashboard) under Settings > API.

### Testing Connection

Test your Supabase connection:
```bash
node test-supabase.js
```

### Supabase Client

The Supabase client is configured in `lib/supabaseClient.ts` and can be imported in your components:

```typescript
import { supabase } from '@/lib/supabaseClient';

// Example usage
const { data, error } = await supabase.from('your_table').select('*');
```

## Turbopack Configuration Strategy

This project uses a **hybrid approach** to Turbopack configuration for optimal development experience and production stability:

### Current Configuration
```json
{
  "scripts": {
    "dev": "next dev --turbopack",    // ✅ Enabled for development speed
    "build": "next build"             // ✅ Disabled for production stability
  }
}
```

### Rationale
- **Development**: Turbopack provides significantly faster refresh times and better developer experience
- **Production**: Traditional webpack bundler ensures maximum compatibility and stability for deployments

### Risk Assessment
- **Development Risk**: Low - Turbopack is stable for development workflows
- **Production Risk**: High - Turbopack is experimental for production builds and may cause deployment issues

### Monitoring Plan
- Track [Next.js releases](https://github.com/vercel/next.js/releases) for Turbopack production readiness
- Periodically test `npm run build` with `--turbopack` flag to monitor improvements
- Re-evaluate production Turbopack usage when it reaches stable status (expected: Next.js 16+)

### Fallback Strategy
If production Turbopack issues occur:
1. Remove `--turbopack` from build script (current configuration)
2. Test build immediately: `npm run build`
3. Deploy with stable webpack build
4. Monitor Turbopack stability for future re-enablement

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
// Force Vercel redeploy
