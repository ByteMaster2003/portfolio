import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pocket Ops",
  description:
    "Privacy Policy for Pocket Ops (com.viveksahani.pocket_ops) mobile SSH client by Vivek Sahani.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PocketOpsPrivacyPolicy() {
  const lastUpdated = "October 27, 2026";

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Navigation / Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-zinc-200 transition-colors">
            viveksahani.com
          </Link>
          <span>/</span>
          <span className="text-zinc-200">Pocket Ops</span>
          <span>/</span>
          <span className="text-emerald-400">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="border-b border-zinc-800 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Package: com.viveksahani.pocket_ops
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy for Pocket Ops
          </h1>
          <p className="text-sm text-zinc-400">
            Last Updated:{" "}
            <span className="text-zinc-300 font-mono">{lastUpdated}</span> |
            Developer:{" "}
            <span className="text-zinc-300 font-medium">Vivek Sahani</span>
          </p>
        </header>

        {/* Policy Body */}
        <div className="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {/* Section: Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Overview
            </h2>
            <p>
              Pocket Ops (&quot;the Application&quot;) is a developer productivity utility
              designed to provide an interactive Secure Shell (SSH) terminal and
              server profile management. The application operates on a{" "}
              <strong>zero-knowledge, local-first</strong> architecture.
            </p>
            <p>
              We do not run tracking servers, telemetry services, ad networks,
              or external profiling platforms. Your remote infrastructure data
              and authentication materials never leave your device unless
              transmitted directly to the host servers you explicitly connect
              to.
            </p>
          </section>

          {/* Section: Data Collection */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Information Collection and Processing
            </h2>
            <p>
              Pocket Ops does <strong>not</strong> collect, harvest, or transmit
              any Personally Identifiable Information (PII) to the developer or
              any third party:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              <li>
                <strong className="text-white">
                  Credentials & Private Keys:
                </strong>{" "}
                SSH private keys (RSA, Ed25519), passphrases, and connection
                passwords are stored exclusively inside hardware-backed secure
                storage on your mobile device (Android Keystore /
                EncryptedSharedPreferences). They are never synced, backed up to
                external clouds by the app, or logged.
              </li>
              <li>
                <strong className="text-white">Connection Profiles:</strong>{" "}
                Hostnames, IP addresses, custom port numbers, labels, and
                command histories reside strictly within local SQLite storage on
                your physical device.
              </li>
              <li>
                <strong className="text-white">Analytics & Diagnostics:</strong>{" "}
                The application does not integrate analytics frameworks (e.g.,
                Google Analytics, Firebase Analytics) or third-party
                crash-reporting monitors.
              </li>
            </ul>
          </section>

          {/* Section: Device Permissions */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Device Permissions Used
            </h2>
            <p>
              Pocket Ops requests only the minimum runtime permissions strictly
              required to execute core SSH operations:
            </p>
            <div className="border border-zinc-800 rounded-lg overflow-hidden divide-y divide-zinc-800 bg-zinc-900/50">
              <div className="p-3.5 sm:p-4">
                <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold">
                  android.permission.INTERNET
                </span>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Required exclusively to establish direct outbound TCP sockets
                  from your device to the target SSH servers and IP endpoints
                  you manually specify.
                </p>
              </div>
              <div className="p-3.5 sm:p-4">
                <span className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold">
                  android.permission.USE_BIOMETRIC
                </span>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Used purely on-device to gate access to the app and authorize
                  the hardware Keystore when unlocking protected private keys.
                  Biometric data is evaluated entirely by the Android OS and is
                  never accessible to the app.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Third-Party Sharing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              4. Third-Party Sharing & Advertising
            </h2>
            <p>
              We do not share, sell, rent, or trade your data with any
              commercial third party, data broker, or advertising provider.
              Pocket Ops contains{" "}
              <strong>zero third-party advertisements</strong>.
            </p>
          </section>

          {/* Section: Data Retention & Deletion */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              5. Data Retention & Deletion Policy
            </h2>
            <p>Because all data is stored locally on your device:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li>
                You can delete individual server profiles, keys, or logs at any
                time from within the application interface.
              </li>
              <li>
                Clearing the app storage via Android Settings or uninstalling
                Pocket Ops permanently purges all stored credentials, host
                configurations, and session records from your device
                immediately.
              </li>
            </ul>
          </section>

          {/* Section: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              6. Children&apos;s Privacy
            </h2>
            <p>
              Pocket Ops is a technical utility intended for system
              administrators and developers. We do not knowingly collect or
              solicit any information from children under the age of 13 (or
              under the age of 16 in the European Union).
            </p>
          </section>

          {/* Section: Contact */}
          <section className="space-y-3 border-t border-zinc-800 pt-8">
            <h2 className="text-xl font-bold text-white tracking-tight">
              7. Contact & Developer Information
            </h2>
            <p>
              If you have any questions or feedback regarding this Privacy
              Policy or the security practices of Pocket Ops, please contact:
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 space-y-1 text-sm">
              <p>
                <span className="text-zinc-400">Developer:</span>{" "}
                <span className="text-white font-medium">Vivek Sahani</span>
              </p>
              <p>
                <span className="text-zinc-400">Website:</span>{" "}
                <a
                  href="https://viveksahani.com"
                  className="text-emerald-400 hover:underline"
                >
                  https://viveksahani.com
                </a>
              </p>
              <p>
                <span className="text-zinc-400">Email:</span>{" "}
                <a
                  href="mailto:contact@viveksahani.com"
                  className="text-emerald-400 hover:underline"
                >
                  contact@viveksahani.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-900 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Vivek Sahani. All rights reserved. Pocket
          Ops is an independent software tool.
        </footer>
      </div>
    </main>
  );
}
