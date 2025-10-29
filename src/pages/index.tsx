import { useState, useEffect } from "react";
import {
  Copy,
  CheckCircle2,
  ExternalLink,
  Chrome,
  Globe,
  Smartphone,
} from "lucide-react";

export default function TikTokLanding() {
  const [copied, setCopied] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isTikTok, setIsTikTok] = useState(false);
  const websiteUrl = "https://mangeakkk.my.id";

  useEffect(() => {
    // Deteksi iOS
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Deteksi TikTok in-app browser
    const userAgent = navigator.userAgent || navigator.vendor;
    const inTikTok =
      userAgent.includes("BytedanceWebview") ||
      userAgent.includes("musical_ly") ||
      userAgent.includes("TikTok");
    setIsTikTok(inTikTok);

    // HANYA auto-redirect untuk Android (iOS butuh user interaction)
    if (inTikTok && !iOS) {
      setTimeout(() => {
        const intent = `intent://${websiteUrl.replace("https://", "")}#Intent;scheme=https;package=com.android.chrome;end`;
        window.location.href = intent;
      }, 100);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(websiteUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        const input = document.createElement("input");
        input.value = websiteUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const handleOpenBrowser = () => {
    if (isIOS) {
      // iOS: Buka Safari dengan universal link
      window.location.href = websiteUrl;

      // Fallback: Instruksikan user buka manual
      setTimeout(() => {
        alert(
          'Kalau tak buka automatik, sila tekan "..." kat atas kanan, pilih "Open in Safari" 🙏'
        );
      }, 500);
    } else {
      // Android: Cuba Chrome intent
      const intent = `intent://${websiteUrl.replace("https://", "")}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = intent;

      // Fallback ke browser default
      setTimeout(() => {
        window.location.href = websiteUrl;
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <img
                src="https://mangeakkk.my.id/logo/logo.png"
                alt="Logo"
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Mangeakk Drama</h1>
          <p className="text-white text-sm opacity-90">
            Tempat streaming Drama melayu HD tanpa iklan mengganggu
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Animation GIF */}
          <div className="flex justify-center mb-6">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE_XJ9TyHXdeE5eJ5DvHqQ0wiR4eYyfiT3H5KOFu9Su3zl-4srnIeEuuZE22E6ukGszw-49J435kct8A1j0yQIWzO2lUhEn_Ijs5lHyrnCPLOUjAaNjm3tWmEYrr4FGYmZLnI4_ACS9GK8/s1600/Mm7OeTA.gif"
              alt="Animation"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Alert Box - Dinamis based on device */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
            <div className="flex items-start">
              <ExternalLink className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-800 font-semibold mb-1 flex items-center gap-2">
                  {isIOS ? "📱 Pengguna iPhone/iPad" : "🤖 Penting!"}
                </p>
                {isIOS ? (
                  <p className="text-xs text-red-700 leading-relaxed">
                    Untuk iPhone/iPad: Tekan butang{" "}
                    <span className="font-bold">"Buka di Safari"</span> kat
                    bawah, atau tekan{" "}
                    <span className="font-bold">titik tiga "..."</span> kat atas
                    kanan → pilih{" "}
                    <span className="font-bold">"Open in Safari"</span>
                  </p>
                ) : (
                  <p className="text-xs text-red-700 leading-relaxed">
                    Tekan tombol{" "}
                    <span className="font-bold">"Buka di Browser"</span> kat
                    bawah, atau copy link dan paste dalam Chrome/Browser.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Link Website
            </label>
            <div className="relative">
              <input
                type="text"
                value={websiteUrl}
                readOnly
                className="w-full px-4 py-3 pr-24 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 text-sm focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={handleCopy}
                className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-md font-semibold text-sm transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {copied ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-4 h-4" />
                    Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Instructions - Dinamis iOS vs Android */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              {isIOS ? (
                <Smartphone className="w-5 h-5 text-purple-600" />
              ) : (
                <Chrome className="w-5 h-5 text-purple-600" />
              )}
              {isIOS ? "Cara Buka (iPhone/iPad):" : "Cara Buka (Android):"}
            </h3>
            {isIOS ? (
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Tekan butang <strong>"Buka di Safari"</strong> kat bawah
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    2
                  </span>
                  <span>
                    Atau tekan <strong>titik tiga "..."</strong> kat pojok kanan
                    atas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    3
                  </span>
                  <span>
                    Pilih <strong>"Open in Safari"</strong> atau{" "}
                    <strong>"Open in Browser"</strong>
                  </span>
                </li>
              </ol>
            ) : (
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Tekan butang <strong>"Buka di Browser"</strong> kat bawah
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    2
                  </span>
                  <span>
                    Atau tekan <strong>Copy</strong> dan paste di Chrome/Browser
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    3
                  </span>
                  <span>Website akan terbuka dengan sempurna!</span>
                </li>
              </ol>
            )}
          </div>

          {/* Main CTA Button */}
          <button
            onClick={handleOpenBrowser}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 mb-3"
          >
            <Globe className="w-5 h-5" />
            {isIOS ? "Buka di Safari" : "Buka di Browser"}
          </button>

          {/* Visual Guide for iOS */}
          {isIOS && isTikTok && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-blue-800 text-center mb-2 font-semibold">
                📍 Kalau tak berjaya, ikut gambar ni:
              </p>
              <div className="bg-white rounded-lg p-3 text-xs text-gray-600 space-y-1">
                <div>
                  1️⃣ Cari icon <strong>"..."</strong> atau{" "}
                  <strong>"Share"</strong> kat atas
                </div>
                <div>
                  2️⃣ Scroll cari pilihan <strong>"Safari"</strong> atau{" "}
                  <strong>"Open in Browser"</strong>
                </div>
                <div>3️⃣ Tap dan website akan terbuka!</div>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-3">
            {isIOS
              ? "💡 iOS perlu buka manual sebab keselamatan Apple"
              : "✨ Browser akan terbuka automatik atau ikut arahan kat atas"}
          </p>
        </div>
      </div>
    </div>
  );
}
