const API_KEY = "fp_a8a1a6d19873ae33c5dd22b7f4667ec1";
const API_BASE = "https://fiveprayer.com/wp-json/fiveprayer/v1/external";
async function fetchPrayerTimes(langs = "en,ar", timeFormat = "12h") {
  const url = `${API_BASE}/next-prayer?langs=${langs}&time_format=${timeFormat}`;
  const response = await fetch(url, {
    headers: {
      "X-API-Key": API_KEY
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch prayer times: ${response.statusText}`);
  }
  return response.json();
}

export { fetchPrayerTimes as f };
