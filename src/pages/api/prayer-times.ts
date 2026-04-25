import type { APIRoute } from 'astro';
import { fetchPrayerTimes } from '../../lib/api';

export const GET: APIRoute = async ({ url }) => {
  try {
    const clearCache = url.searchParams.get('clear_cache') === '1';
    const prayerTimes = await fetchPrayerTimes('en,ar', '12h', clearCache);
    return new Response(JSON.stringify(prayerTimes), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch prayer times' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
