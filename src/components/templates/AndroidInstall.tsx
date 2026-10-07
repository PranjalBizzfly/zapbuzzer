import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

/** The real APK on zapbuzzer.com (verified 200, application/vnd.android.package-archive). */
const APK_URL = "https://zapbuzzer.com/downloads/zapbuzzer-latest.apk";

/**
 * Android install block for the Mobile App page only: a direct download button and a
 * QR code (encodes APK_URL) to scan from a desktop. Rendered once, on /mobile-app.
 */
export function AndroidInstall() {
  return (
    <section aria-labelledby="android-install" className="bg-bg py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-violet to-fuchsia" aria-hidden />
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div className="min-w-0 text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-text ring-1 ring-accent/20">
                <Icon name="phone" className="h-3.5 w-3.5" />
                Android
              </span>
              <h2 id="android-install" className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Get ZapBuzzer on Your Phone
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-muted md:mx-0">
                Install the Android app to accept and track requests on the move. It rings through even when the phone is on silent or locked. Your account and workspace live on the server, so nothing is lost when you update.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={APK_URL}
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-fg px-6 font-semibold text-bg shadow-lg transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  <svg className="h-[18px] w-[18px] transition group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span className="text-left leading-tight">
                    <span className="block">Download for Android</span>
                    <span className="block text-[11px] font-normal opacity-75">v1.16.0 · 61 MB · APK</span>
                  </span>
                </a>
              </div>
            </div>

            {/* QR: scan from a desktop screen to install on a phone */}
            <figure className="mx-auto flex flex-col items-center gap-3">
              <div className="rounded-2xl border border-line bg-white p-3 shadow-card">
                <Image
                  src="/images/android-app-qr.svg"
                  alt="QR code that downloads the ZapBuzzer Android app"
                  width={160}
                  height={160}
                  unoptimized
                  className="h-40 w-40 [image-rendering:pixelated]"
                />
              </div>
              <figcaption className="text-center text-xs text-muted">
                Scan to Install
                <br />
                on Your Phone
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
