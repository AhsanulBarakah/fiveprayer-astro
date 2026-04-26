import { NextResponse } from 'next/server';
import { fetchPrayerTimes } from '../../../lib/api';

export async function GET() {
  try {
    const prayerTimes = await fetchPrayerTimes();
    return NextResponse.json(prayerTimes);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch prayer times' },
      { status: 500 }
    );
  }
}
