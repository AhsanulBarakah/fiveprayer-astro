const API_KEY = process.env.NEXT_PUBLIC_FIVEPRAYER_API_KEY;
const API_BASE = 'https://fiveprayer.com/wp-json/fiveprayer/v1/external';

export interface PrayerTime {
  name: { en: string; ar: string };
  begins_label: { en: string; ar: string };
  begins: { en: string; ar: string };
  iqamah_label?: { en: string; ar: string };
  iqamah?: { en: string; ar: string };
  time?: { en: string; ar: string };
}

export interface PrayerSchedule {
  fajr: PrayerTime;
  sunrise: PrayerTime;
  dhuhr: PrayerTime;
  asr: PrayerTime;
  maghrib: PrayerTime;
  isha: PrayerTime;
}

export interface PrayerTimesResponse {
  date_translated: { en: string; ar: string };
  current_local_time_label: { en: string; ar: string };
  current_time: { en: string; ar: string };
  next_prayer_label: { en: string; ar: string };
  next_prayer: { en: string; ar: string };
  next_time: { en: string; ar: string };
  iqamah_label: { en: string; ar: string };
  prayer_schedule: PrayerSchedule;
  timezone: string;
  language: string;
  languages: string[];
  time_format: string;
}

export async function fetchPrayerTimes(
  langs: string = 'en,ar',
  timeFormat: string = '12h'
): Promise<PrayerTimesResponse> {
  const url = `${API_BASE}/next-prayer?langs=${langs}&time_format=${timeFormat}`;
  
  const response = await fetch(url, {
    headers: {
      'X-API-Key': API_KEY || '',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch prayer times: ${response.statusText}`);
  }

  return response.json();
}
