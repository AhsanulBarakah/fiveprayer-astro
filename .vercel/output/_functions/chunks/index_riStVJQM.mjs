import { c as createComponent } from './astro-component_Ecm3ilUL.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderHead, o as renderSlot, p as renderComponent } from './entrypoint_BhHrXlIa.mjs';
import 'clsx';
import { f as fetchPrayerTimes } from './api_CqBd0vA1.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$PrayerTimes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PrayerTimes;
  let prayerTimes = null;
  {
    try {
      prayerTimes = await fetchPrayerTimes();
    } catch (e) {
      e instanceof Error ? e.message : "Failed to load prayer times";
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="prayer-times-container" data-astro-cid-tye7vlpl> <div class="error-container" id="error-container" style="display: none;" data-astro-cid-tye7vlpl> <div class="error-icon" data-astro-cid-tye7vlpl>⚠️</div> <h3 class="error-title" data-astro-cid-tye7vlpl>Unable to Load Prayer Times</h3> <p class="error-message" id="error-message" data-astro-cid-tye7vlpl></p> <p class="error-hint" data-astro-cid-tye7vlpl>Please check your API key configuration and try again.</p> </div> ${prayerTimes && renderTemplate`<div class="prayer-times" id="prayer-times"${addAttribute(JSON.stringify(prayerTimes), "data-prayer-data")} style="display: block;" data-astro-cid-tye7vlpl> <div class="language-switcher" data-astro-cid-tye7vlpl> <label data-astro-cid-tye7vlpl> <input type="radio" name="language" value="en" checked data-astro-cid-tye7vlpl> <span data-astro-cid-tye7vlpl>English</span> </label> <label data-astro-cid-tye7vlpl> <input type="radio" name="language" value="ar" data-astro-cid-tye7vlpl> <span data-astro-cid-tye7vlpl>العربية</span> </label> </div> <div class="header" data-astro-cid-tye7vlpl> <h1 data-key="title" data-astro-cid-tye7vlpl>Prayer Times</h1> <p class="date" data-key="date" data-astro-cid-tye7vlpl>${prayerTimes.date_translated.en}</p> <p class="current-time" data-astro-cid-tye7vlpl> <span data-key="current_time_label" data-astro-cid-tye7vlpl>${prayerTimes.current_local_time_label.en}</span>: <span id="live-clock" data-astro-cid-tye7vlpl>${prayerTimes.current_time.en}</span> </p> </div> <div class="next-prayer" data-astro-cid-tye7vlpl> <span class="next-prayer-icon" id="next-prayer-icon" data-astro-cid-tye7vlpl>🌙</span> <h2 data-key="next_prayer_label" data-astro-cid-tye7vlpl>${prayerTimes.next_prayer_label.en}</h2> <div class="next-prayer-info" data-astro-cid-tye7vlpl> <div class="next-prayer-details" data-astro-cid-tye7vlpl> <span class="prayer-name" data-key="next_prayer" data-astro-cid-tye7vlpl>${prayerTimes.next_prayer.en}</span> <span class="prayer-time" data-key="next_time" data-astro-cid-tye7vlpl>${prayerTimes.next_time.en}</span> </div> </div> </div> <div class="prayer-schedule" data-astro-cid-tye7vlpl> <h3 data-key="schedule_label" data-astro-cid-tye7vlpl>Today's Schedule</h3> <div class="prayer-row" data-prayer="fajr" data-astro-cid-tye7vlpl> <span class="prayer-icon" data-astro-cid-tye7vlpl>🌙</span> <span class="prayer-name" data-key="fajr_name" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.fajr.name.en}</span> <span class="prayer-time" data-astro-cid-tye7vlpl> <span data-key="fajr_begins" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.fajr.begins.en}</span> <span class="iqamah" data-astro-cid-tye7vlpl><span data-key="iqamah_label" data-astro-cid-tye7vlpl>${prayerTimes.iqamah_label.en}</span>: <span data-key="fajr_iqamah" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.fajr.iqamah?.en}</span></span> </span> </div> <div class="prayer-row sunrise" data-prayer="sunrise" data-astro-cid-tye7vlpl> <span class="prayer-icon" data-astro-cid-tye7vlpl>🌅</span> <span class="prayer-name" data-key="sunrise_name" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.sunrise.name?.en}</span> <span class="prayer-time" data-key="sunrise_time" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.sunrise.time?.en}</span> </div> <div class="prayer-row" data-prayer="dhuhr" data-astro-cid-tye7vlpl> <span class="prayer-icon" data-astro-cid-tye7vlpl>☀️</span> <span class="prayer-name" data-key="dhuhr_name" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.dhuhr.name.en}</span> <span class="prayer-time" data-astro-cid-tye7vlpl> <span data-key="dhuhr_begins" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.dhuhr.begins.en}</span> <span class="iqamah" data-astro-cid-tye7vlpl><span data-key="iqamah_label" data-astro-cid-tye7vlpl>${prayerTimes.iqamah_label.en}</span>: <span data-key="dhuhr_iqamah" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.dhuhr.iqamah?.en}</span></span> </span> </div> <div class="prayer-row" data-prayer="asr" data-astro-cid-tye7vlpl> <span class="prayer-icon" data-astro-cid-tye7vlpl>🌤️</span> <span class="prayer-name" data-key="asr_name" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.asr.name.en}</span> <span class="prayer-time" data-astro-cid-tye7vlpl> <span data-key="asr_begins" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.asr.begins.en}</span> <span class="iqamah" data-astro-cid-tye7vlpl><span data-key="iqamah_label" data-astro-cid-tye7vlpl>${prayerTimes.iqamah_label.en}</span>: <span data-key="asr_iqamah" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.asr.iqamah?.en}</span></span> </span> </div> <div class="prayer-row" data-prayer="maghrib" data-astro-cid-tye7vlpl> <span class="prayer-icon" data-astro-cid-tye7vlpl>🌇</span> <span class="prayer-name" data-key="maghrib_name" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.maghrib.name.en}</span> <span class="prayer-time" data-astro-cid-tye7vlpl> <span data-key="maghrib_begins" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.maghrib.begins.en}</span> <span class="iqamah" data-astro-cid-tye7vlpl><span data-key="iqamah_label" data-astro-cid-tye7vlpl>${prayerTimes.iqamah_label.en}</span>: <span data-key="maghrib_iqamah" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.maghrib.iqamah?.en}</span></span> </span> </div> <div class="prayer-row" data-prayer="isha" data-astro-cid-tye7vlpl> <span class="prayer-icon" data-astro-cid-tye7vlpl>🌃</span> <span class="prayer-name" data-key="isha_name" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.isha.name.en}</span> <span class="prayer-time" data-astro-cid-tye7vlpl> <span data-key="isha_begins" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.isha.begins.en}</span> <span class="iqamah" data-astro-cid-tye7vlpl><span data-key="iqamah_label" data-astro-cid-tye7vlpl>${prayerTimes.iqamah_label.en}</span>: <span data-key="isha_iqamah" data-astro-cid-tye7vlpl>${prayerTimes.prayer_schedule.isha.iqamah?.en}</span></span> </span> </div> </div> <p class="timezone" data-astro-cid-tye7vlpl>Timezone: ${prayerTimes.timezone}</p> <p class="disclaimer" data-astro-cid-tye7vlpl>Please follow your local masjid prayer times. Data provided by fiveprayer API, built with Astro.</p> </div>`} </div>  ${renderScript($$result, "C:/Users/jamaal/Documents/projects/fiveprayer-astro/src/components/PrayerTimes.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jamaal/Documents/projects/fiveprayer-astro/src/components/PrayerTimes.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Prayer Times</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/jamaal/Documents/projects/fiveprayer-astro/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PrayerTimes", $$PrayerTimes, {})} ` })}`;
}, "C:/Users/jamaal/Documents/projects/fiveprayer-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/jamaal/Documents/projects/fiveprayer-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
