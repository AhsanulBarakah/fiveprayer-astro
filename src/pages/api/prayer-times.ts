import type { APIRoute } from 'astro';
import { fetchPrayerTimes } from '../../lib/api';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const prayerTimes = await fetchPrayerTimes();
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
