import { fetchPrayerTimes, type PrayerTimesResponse } from '../lib/api';
import PrayerTimesClient from './PrayerTimesClient';

export default async function Home() {
  let prayerData: PrayerTimesResponse | null = null;
  let error: string | null = null;

  try {
    prayerData = await fetchPrayerTimes();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load prayer times';
  }

  return <PrayerTimesClient initialData={prayerData} initialError={error} />;
}
