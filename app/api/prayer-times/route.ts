import { NextResponse } from 'next/server';
import { fetchPrayerTimes } from '../../../lib/api';

export async function GET() {
  try {
    console.log('API Key available:', !!process.env.FIVEPRAYER_API_KEY);
    const prayerTimes = await fetchPrayerTimes();
    return NextResponse.json(prayerTimes);
  } catch (error) {
    console.error('Error in prayer-times API:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch prayer times' },
      { status: 500 }
    );
  }
}
