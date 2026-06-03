(function () {
  // ====== DATA: Depts from your ui.kv (same order) ======
  const DEPARTMENTS = [
    { key: "operations", ar: "عمليات", en: "Operations" },
    { key: "cold", ar: "البارد", en: "Cold" },
    { key: "hot", ar: "الساخن", en: "Hot" },
    { key: "pastry", ar: "الحلو", en: "Pastry" },
    { key: "bakery", ar: "المخبز", en: "Bakery" },
    { key: "tray_setup", ar: "التحضير", en: "Tray Setup" },
    { key: "equipment", ar: "المعدات", en: "Equipment" },
    { key: "dry_store", ar: "الدراي ستور", en: "Dry Store" },
    { key: "bar_library", ar: "البار / المكتبة", en: "Bar / Library" },
    { key: "maintenance", ar: "الصيانة", en: "Maintenance" },
  ];
// ====== ICONS (inline SVG) ======
(function(){
  const ICONS = {
  "operations": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
<defs>
  <!-- Glass iOS circle -->
  <radialGradient id="bgRad" cx="30%" cy="25%" r="80%">
    <stop offset="0" stop-color="#60a5fa"/>
    <stop offset="0.55" stop-color="#2563eb"/>
    <stop offset="1" stop-color="#0b3aa3"/>
  </radialGradient>
  <linearGradient id="glassHi" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
    <stop offset="0.35" stop-color="#ffffff" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.16"/>
  </linearGradient>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <linearGradient id="truckBody" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/>
    <stop offset="1" stop-color="#dbe3ee"/>
  </linearGradient>
  <linearGradient id="truckBlue" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#1d4ed8"/>
    <stop offset="1" stop-color="#0ea5e9"/>
  </linearGradient>
  <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f1f5f9"/>
    <stop offset="1" stop-color="#94a3b8"/>
  </linearGradient>
  <linearGradient id="tire" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#111827"/>
    <stop offset="1" stop-color="#000000"/>
  </linearGradient>
</defs>

<!-- Circle -->
<g filter="url(#shadow)">
  <circle cx="64" cy="64" r="54" fill="url(#bgRad)"/>
  <circle cx="64" cy="64" r="54" fill="url(#glassHi)" opacity="0.85"/>
  <!-- top-left gloss -->
  <path d="M24 52c6-20 22-32 40-34 10-1 18 1 25 5-9-2-19 1-27 6-11 7-18 17-22 29-1 4-4 6-8 6h-3c-4 0-7-4-5-12z"
        fill="#fff" opacity="0.18"/>
</g>

<!-- Highloader truck (dnata-style: white body + blue stripe + visible lifting platform) -->
<g transform="translate(0,0)">
  <!-- Ground shadow -->
  <ellipse cx="66" cy="92" rx="34" ry="8" fill="#000" opacity="0.12"/>

  <!-- Wheels -->
  <g>
    <circle cx="46" cy="92" r="9" fill="url(#tire)"/>
    <circle cx="46" cy="92" r="4.2" fill="#cbd5e1"/>
    <circle cx="84" cy="92" r="9" fill="url(#tire)"/>
    <circle cx="84" cy="92" r="4.2" fill="#cbd5e1"/>
  </g>

  <!-- Main chassis -->
  <path d="M32 78c0-6 5-11 11-11h29c5 0 10 3 13 7l8 11c2 3 1 7-2 9l-4 3H36c-2 0-4-2-4-5z"
        fill="url(#truckBody)"/>
  <!-- Blue dnata stripe -->
  <path d="M34 79h55c4 0 7 2 9 5l2 4H36c-1 0-2-1-2-2z" fill="url(#truckBlue)" opacity="0.95"/>

  <!-- Cabin -->
  <path d="M38 66c0-5 4-9 9-9h20c4 0 8 2 10 6l3 6H44c-3 0-6-2-6-3z"
        fill="url(#truckBody)"/>
  <path d="M52 58h12c3 0 5 2 6 4l2 4H52z" fill="#93c5fd" opacity="0.45"/>
  <rect x="44" y="61" width="10" height="7" rx="2" fill="#0b1220" opacity="0.55"/>

  <!-- Lifting arm / scissors (make platform obvious) -->
  <g>
    <!-- base column -->
    <rect x="83" y="60" width="6" height="25" rx="3" fill="url(#metal)"/>
    <!-- scissor -->
    <path d="M71 86l22-24" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
    <path d="M75 60l18 22" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
    <!-- hydraulic -->
    <rect x="75" y="77" width="18" height="4" rx="2" fill="#64748b" opacity="0.9"/>
  </g>

  <!-- Platform (raised) -->
  <g>
    <path d="M66 46c0-4 3-7 7-7h32c4 0 7 3 7 7v8c0 4-3 7-7 7H73c-4 0-7-3-7-7z"
          fill="url(#metal)"/>
    <!-- platform top -->
    <path d="M70 42h42c2 0 4 2 4 4v3H70z" fill="#f8fafc" opacity="0.9"/>
    <!-- rail -->
    <path d="M72 37h40" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/>
    <path d="M72 37v10M112 37v10" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round"/>
    <!-- little load box -->
    <rect x="94" y="44" width="12" height="8" rx="2" fill="#0ea5e9" opacity="0.75"/>
  </g>

  <!-- tiny dnata label -->
  <text x="55" y="75" font-size="7" font-family="Arial, sans-serif" fill="#0b3aa3" opacity="0.75">dnata</text>
</g>
</svg>`,
  "cold": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#22c55e"/>
    <stop offset="1" stop-color="#0ea5e9"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <path d="M30 70 C34 94, 94 94, 98 70 Z" fill="#e5e7eb"/>
  <path d="M34 70 C38 88, 90 88, 94 70 Z" fill="#cbd5e1"/>
  <path d="M36 66 C44 52, 60 46, 76 50 C88 54, 94 60, 94 66 C94 74, 82 78, 64 78 C46 78, 36 74, 36 66 Z" fill="#22c55e"/>
  <path d="M44 62 C50 56, 60 54, 70 56" stroke="#86efac" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  <circle cx="60" cy="60" r="6" fill="#f472b6" opacity="0.9"/>
  <circle cx="74" cy="62" r="5" fill="#fb7185" opacity="0.9"/>
  <path d="M82 42 L98 50 L90 66 L74 58 Z" fill="#93c5fd" opacity="0.9"/>
  <path d="M82 42 L90 46 L82 62 L74 58 Z" fill="#bfdbfe" opacity="0.9"/>
  <path d="M82 42 L98 50" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
</g>

</svg>`,
  "hot": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ef4444"/>
    <stop offset="1" stop-color="#f97316"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <path d="M78 44 C94 52, 96 72, 84 84 C72 96, 50 94, 42 78 C34 62, 42 44, 60 40 C66 38, 72 40, 78 44 Z" fill="#f59e0b"/>
  <path d="M70 46 C82 52, 84 68, 76 76 C68 84, 54 82, 48 72 C42 62, 48 48, 60 46 C64 45, 67 45, 70 46 Z" fill="#fbbf24" opacity="0.9"/>
  <path d="M40 76 L30 86" stroke="#92400e" stroke-width="10" stroke-linecap="round"/>
  <path d="M30 86 C24 92, 20 94, 18 92 C16 90, 18 86, 24 80" stroke="#f3f4f6" stroke-width="10" stroke-linecap="round"/>
  <circle cx="22" cy="86" r="6" fill="#f3f4f6"/>
  <circle cx="32" cy="96" r="6" fill="#f3f4f6"/>
  <path d="M58 52 C62 50, 70 52, 74 58" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.45"/>
</g>

</svg>`,
  "pastry": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f472b6"/>
    <stop offset="1" stop-color="#f59e0b"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <path d="M34 82 L86 70 L94 86 L42 98 Z" fill="#fde68a"/>
  <path d="M34 52 L86 40 L86 70 L34 82 Z" fill="#fff7ed"/>
  <path d="M86 40 L94 56 L94 86 L86 70 Z" fill="#fee2e2"/>
  <path d="M40 56 L82 46" stroke="#fda4af" stroke-width="6" stroke-linecap="round" opacity="0.85"/>
  <circle cx="70" cy="50" r="6" fill="#fb7185"/>
  <path d="M38 82 L90 70" stroke="#d97706" stroke-width="4" opacity="0.6"/>
  <path d="M44 60 C52 58, 64 58, 74 60" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.4"/>
</g>

</svg>`,
  "bakery": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f59e0b"/>
    <stop offset="1" stop-color="#b45309"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <path d="M30 74 C30 54, 44 42, 64 42 C84 42, 98 54, 98 74 C98 88, 88 96, 64 96 C40 96, 30 88, 30 74 Z" fill="#d97706"/>
  <path d="M38 72 C38 58, 48 50, 64 50 C80 50, 90 58, 90 72 C90 82, 82 88, 64 88 C46 88, 38 82, 38 72 Z" fill="#f59e0b" opacity="0.95"/>
  <path d="M52 54 C50 64, 50 74, 52 84" stroke="#92400e" stroke-width="6" stroke-linecap="round" opacity="0.75"/>
  <path d="M64 52 C62 64, 62 74, 64 86" stroke="#92400e" stroke-width="6" stroke-linecap="round" opacity="0.65"/>
  <path d="M76 54 C74 64, 74 74, 76 84" stroke="#92400e" stroke-width="6" stroke-linecap="round" opacity="0.55"/>
  <path d="M46 56 C52 52, 66 50, 78 54" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.35"/>
</g>

</svg>`,
  "tray_setup": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#a78bfa"/>
    <stop offset="1" stop-color="#60a5fa"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <rect x="30" y="56" width="68" height="42" rx="10" fill="#e5e7eb"/>
  <rect x="34" y="60" width="60" height="34" rx="8" fill="#cbd5e1"/>
  <rect x="40" y="66" width="22" height="22" rx="6" fill="#fff" opacity="0.9"/>
  <rect x="66" y="66" width="22" height="22" rx="6" fill="#fff" opacity="0.9"/>
  <path d="M24 44 L24 88" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M104 44 L104 88" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M104 44 C112 46, 112 54, 104 56" stroke="#9ca3af" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M18 44 L30 44" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M18 54 L30 54" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M18 64 L30 64" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
  <path d="M24 44 L24 64" stroke="#9ca3af" stroke-width="6" stroke-linecap="round"/>
</g>

</svg>`,
  "equipment": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
<defs>
  <radialGradient id="bgRad2" cx="28%" cy="22%" r="82%">
    <stop offset="0" stop-color="#7dd3fc"/>
    <stop offset="0.55" stop-color="#0ea5e9"/>
    <stop offset="1" stop-color="#075985"/>
  </radialGradient>
  <linearGradient id="glassHi2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
    <stop offset="0.35" stop-color="#ffffff" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.16"/>
  </linearGradient>
  <filter id="shadow2" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>

  <linearGradient id="trolleySteel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f8fafc"/>
    <stop offset="1" stop-color="#94a3b8"/>
  </linearGradient>
  <linearGradient id="trolleyDark" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#64748b"/>
    <stop offset="1" stop-color="#334155"/>
  </linearGradient>
  <linearGradient id="cupTea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/>
    <stop offset="1" stop-color="#e5e7eb"/>
  </linearGradient>
  <linearGradient id="wine" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fb7185"/>
    <stop offset="1" stop-color="#be123c"/>
  </linearGradient>
</defs>

<!-- Circle -->
<g filter="url(#shadow2)">
  <circle cx="64" cy="64" r="54" fill="url(#bgRad2)"/>
  <circle cx="64" cy="64" r="54" fill="url(#glassHi2)" opacity="0.85"/>
  <path d="M24 52c6-20 22-32 40-34 10-1 18 1 25 5-9-2-19 1-27 6-11 7-18 17-22 29-1 4-4 6-8 6h-3c-4 0-7-4-5-12z"
        fill="#fff" opacity="0.18"/>
</g>

<!-- Equipment icon: Trolley (dominant) + wine glass + mug + tea cup -->
<g>
  <!-- Ground shadow -->
  <ellipse cx="64" cy="94" rx="34" ry="7" fill="#000" opacity="0.12"/>

  <!-- Trolley dominant (airport/catering cart) -->
  <g>
    <!-- body -->
    <path d="M38 48c0-6 5-11 11-11h30c6 0 11 5 11 11v36c0 6-5 11-11 11H49c-6 0-11-5-11-11z"
          fill="url(#trolleySteel)"/>
    <!-- side depth -->
    <path d="M83 37h-9c6 0 11 5 11 11v36c0 6-5 11-11 11h9c6 0 11-5 11-11V48c0-6-5-11-11-11z"
          fill="#cbd5e1" opacity="0.85"/>
    <!-- dark base -->
    <path d="M38 76h52v8c0 6-5 11-11 11H49c-6 0-11-5-11-11z" fill="url(#trolleyDark)" opacity="0.9"/>
    <!-- handles -->
    <path d="M34 55h6v18h-6z" fill="#94a3b8"/>
    <path d="M88 55h6v18h-6z" fill="#94a3b8"/>
    <!-- door lines -->
    <path d="M50 45v46M64 45v46M78 45v46" stroke="#94a3b8" stroke-width="2" opacity="0.55"/>
    <!-- small latch -->
    <rect x="58" y="60" width="12" height="6" rx="3" fill="#e2e8f0" opacity="0.9"/>
    <circle cx="70" cy="63" r="2" fill="#64748b" opacity="0.9"/>

    <!-- wheels -->
    <g>
      <circle cx="48" cy="94" r="7" fill="#0b1220"/>
      <circle cx="48" cy="94" r="3" fill="#cbd5e1"/>
      <circle cx="80" cy="94" r="7" fill="#0b1220"/>
      <circle cx="80" cy="94" r="3" fill="#cbd5e1"/>
    </g>
  </g>

  <!-- Foreground service items -->
  <g transform="translate(0,2)">
    <!-- Wine glass -->
    <path d="M94 58c0-8 6-14 14-14-1 12-4 19-12 23v10h-4V67c-6-3-9-7-10-13z"
          fill="url(#wine)" opacity="0.95"/>
    <rect x="92" y="77" width="4" height="10" rx="2" fill="#e2e8f0" opacity="0.9"/>
    <path d="M88 89h12" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round" opacity="0.9"/>

    <!-- Mug -->
    <path d="M26 73c0-5 4-9 9-9h11c3 0 6 2 6 6v14c0 4-3 7-7 7H35c-5 0-9-4-9-9z"
          fill="#ffffff" opacity="0.95"/>
    <path d="M52 71h5c3 0 6 2 6 6s-3 6-6 6h-5" fill="none" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/>
    <path d="M28 72h22v8H28z" fill="#93c5fd" opacity="0.35"/>

    <!-- Tea cup + saucer -->
    <path d="M54 82c0-4 3-7 7-7h16c3 0 6 2 6 6v6c0 4-3 7-7 7H61c-4 0-7-3-7-7z"
          fill="url(#cupTea)" opacity="0.98"/>
    <path d="M83 83h4c3 0 5 2 5 5s-2 5-5 5h-4" fill="none" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="68" cy="96" rx="18" ry="4.5" fill="#e2e8f0" opacity="0.9"/>
    <ellipse cx="68" cy="95" rx="13" ry="2.5" fill="#cbd5e1" opacity="0.9"/>
  </g>
</g>
</svg>`,
  "dry_store": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#22c55e"/>
    <stop offset="1" stop-color="#f97316"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <rect x="36" y="40" width="22" height="58" rx="8" fill="#22c55e"/>
  <rect x="40" y="46" width="14" height="40" rx="6" fill="#86efac" opacity="0.9"/>
  <rect x="70" y="46" width="22" height="52" rx="8" fill="#f97316"/>
  <rect x="74" y="52" width="14" height="34" rx="6" fill="#fdba74" opacity="0.9"/>
  <path d="M36 42 L58 42" stroke="#14532d" stroke-width="6" stroke-linecap="round" opacity="0.5"/>
  <path d="M70 48 L92 48" stroke="#7c2d12" stroke-width="6" stroke-linecap="round" opacity="0.45"/>
  <circle cx="47" cy="38" r="6" fill="#166534"/>
  <circle cx="81" cy="44" r="6" fill="#9a3412"/>
</g>

</svg>`,
  "bar_library": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f59e0b"/>
    <stop offset="1" stop-color="#22c55e"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <rect x="32" y="46" width="40" height="52" rx="10" fill="#fff7ed"/>
  <rect x="36" y="50" width="32" height="44" rx="8" fill="#fde68a" opacity="0.9"/>
  <path d="M40 60 L64 60" stroke="#92400e" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
  <path d="M40 70 L62 70" stroke="#92400e" stroke-width="4" stroke-linecap="round" opacity="0.65"/>
  <path d="M40 80 L58 80" stroke="#92400e" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
  <path d="M84 40 C92 46, 92 58, 86 64 L86 96 C86 104, 70 104, 70 96 L70 64 C64 58, 64 46, 72 40 Z" fill="#22c55e"/>
  <path d="M76 40 L80 40" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
  <path d="M72 64 L84 64" stroke="#bbf7d0" stroke-width="6" opacity="0.7" stroke-linecap="round"/>
  <circle cx="78" cy="56" r="5" fill="#fef3c7" opacity="0.9"/>
</g>

</svg>`,
  "maintenance": `<svg class="deptIconSvg" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">

<defs>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.12"/>
  </linearGradient>
  <filter id="ds" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.25"/>
  </filter>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#64748b"/>
    <stop offset="1" stop-color="#fbbf24"/>
  </linearGradient>
</defs>
<rect x="10" y="10" width="108" height="108" rx="26" fill="url(#bg)" filter="url(#ds)"/>
<path d="M18 36 C34 20, 60 18, 92 18 C104 18, 112 22, 116 26 L116 34 C110 28, 102 24, 92 24 C60 24, 40 26, 24 40 Z" fill="white" opacity="0.22"/>
<rect x="14" y="14" width="100" height="100" rx="24" fill="url(#g1)" opacity="0.45"/>

<g filter="url(#glow)">
  <path d="M40 86 L78 48" stroke="#60a5fa" stroke-width="14" stroke-linecap="round"/>
  <path d="M74 44 L88 30" stroke="#93c5fd" stroke-width="14" stroke-linecap="round"/>
  <path d="M84 30 C92 24, 104 26, 108 34 C112 42, 108 54, 98 58" stroke="#9ca3af" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M40 86 L30 96" stroke="#fbbf24" stroke-width="14" stroke-linecap="round"/>
  <path d="M26 98 L18 106" stroke="#92400e" stroke-width="14" stroke-linecap="round"/>
  <path d="M44 82 L34 92" stroke="#ffffff" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
</g>

</svg>`
  };
  window.deptIconSvg = function(key){
    return ICONS[key] || "";
  };
})();


  const LEVELS = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

  // ====== CATEGORY MAP (per section) ======
  const CATEGORY_MAP = {
    operations: [
      "Security",
      "Delay & Reschedule",
      "Loaders & Van",
      "General"
    ],
    cold: [
      "Ingredient Shortage",
      "Food Quality",
      "Storage Issue",
      "Equipment Shortage",
      "Temperature Issue",
      "Machinery Equipment",
      "Cooking Issue",
      "Hygiene",
      "General"
    ],
    hot: [
      "Ingredient Shortage",
      "Food Quality",
      "Storage Issue",
      "Equipment Shortage",
      "Temperature Issue",
      "Machinery Equipment",
      "Cooking Issue",
      "Hygiene",
      "General"
    ],
    pastry: [
      "Ingredient Shortage",
      "Food Quality",
      "Storage Issue",
      "Equipment Shortage",
      "Temperature Issue",
      "Machinery Equipment",
      "Cooking Issue",
      "Hygiene",
      "General"
    ],
    bakery: [
      "Ingredient Shortage",
      "Food Quality",
      "Storage Issue",
      "Equipment Shortage",
      "Temperature Issue",
      "Machinery Equipment",
      "Cooking Issue",
      "Hygiene",
      "General"
    ],
    tray_setup: [
      "Setup Delay",
      "Checklist Non-Compliance",
      "Stock Shortage",
      "Hygiene Issue",
      "Equipment Shortage",
      "General"
    ],
    equipment: [
      "Equipment Fault",
      "Equipment Shortage",
      "Calibration Issue",
      "Maintenance Required",
      "General"
    ],
    dry_store: [
      "Stock Shortage",
      "Expiry Issue",
      "Storage Condition",
      "Receiving Issue",
      "General"
    ],
    bar_library: [
      "Beverage Shortage",
      "Service Issue",
      "Display Issue",
      "Cleanliness Issue",
      "General"
    ],
    maintenance: [
      "Electrical Issue",
      "Plumbing Issue",
      "HVAC Issue",
      "Preventive Maintenance",
      "Corrective Maintenance",
      "General"
    ],
    safety: [
      "Fire Safety",
      "PPE Non-Compliance",
      "Slip / Trip Hazard",
      "Equipment Safety",
      "Incident / Near Miss",
      "General"
    ]
  };

  function fillCategorySelect(selectEl, deptKey, selected){
    if(!selectEl) return;
    const k = String(deptKey||"").trim();
    const list = CATEGORY_MAP[k] || CATEGORY_MAP[k.toLowerCase()] || CATEGORY_MAP[k.toUpperCase()] || ["General"];
    selectEl.innerHTML = list.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("\n");
    const val = (selected && String(selected).trim()) ? selected : "General";
    selectEl.value = list.includes(val) ? val : "General";
  }


function parseGeneralCategory(val){
  const s = (val==null) ? "" : String(val);
  const lower = s.trim().toLowerCase();
  if(lower.startsWith("general:")){
    return { isGeneral:true, other: s.trim().slice(8).trim() };
  }
  if(lower.startsWith("general -")){
    return { isGeneral:true, other: s.trim().slice(9).trim() };
  }
  if(lower === "general"){
    return { isGeneral:true, other: "" };
  }
  return { isGeneral:false, other: "" };
}

function syncGeneralOtherUI(selectId, otherId, storedVal){
  const sel = $(selectId);
  const other = $(otherId);
  if(!sel || !other) return;
  const p = parseGeneralCategory(storedVal ?? sel.value);
  if(p.isGeneral){
    sel.value = "General";
    other.style.display = "block";
    other.value = p.other || other.value || "";
  }else{
    other.value = "";
    other.style.display = "none";
  }
}

function getCategoryValue(selectId, otherId){
  const sel = $(selectId);
  if(!sel) return "General";
  const v = (sel.value || "General").trim() || "General";
  if(v.toLowerCase() === "general"){
    const other = $(otherId);
    const extra = (other?.value || "").trim();
    if(extra) return "General: " + extra;
    return "General";
  }
  return v;
}



  const $ = (id) => document.getElementById(id);

  // ====== STATE ======
   let currentDept = null;
   let editIndex = -1;
   let tempImages = [];
   let summaryImages = [];
  let notesImages = [];
  let issueImages = [];


  // ====== UX HELPERS (Toast + Unsaved Changes) ======
  let __dirty = false;
  let __toastTimer = null;

  function t(ar, en){
    return ((window.currentLang || "AR") === "AR") ? ar : en;
  }

  function setDirty(v){
    __dirty = !!v;
    // optional small indicator
    const st = $("saveStatus");
    if(st && __dirty){
      st.textContent = t("غير محفوظ", "Unsaved");
    }
  }
  function clearDirty(){
    __dirty = false;
    const st = $("saveStatus");
    if(st) st.textContent = "";
  }

  function showToast(message, kind="success", ms=2200){
    const el = $("toast");
    if(!el) return;
    el.classList.remove("success","error","warn","show");
    el.textContent = message;
    el.classList.add(kind);
    // force reflow for consistent animation
    void el.offsetWidth;
    el.classList.add("show");
    if(__toastTimer) clearTimeout(__toastTimer);
    __toastTimer = setTimeout(()=>{ el.classList.remove("show"); }, ms);
  }

  function confirmDiscardIfDirty(){
    if(!__dirty) return true;
    const ok = confirm(t("لديك تغييرات غير محفوظة. هل تريد الخروج بدون حفظ؟", "You have unsaved changes. Leave without saving?"));
    if(ok){
      clearDirty();
      showToast(t("تم تجاهل التغييرات", "Changes discarded"), "warn", 1600);
    }
    return ok;
  }

  window.addEventListener("beforeunload", (e)=>{
    if(!__dirty) return;
    e.preventDefault();
    e.returnValue = "";
    return "";
  });


  
  // ====== MULTI-LINE NOTE UI ( + / delete ) ======
  function parseNoteLines(text){
    return (text||"").split("\n").map(s=>s.trim()).filter(Boolean);
  }
  function syncHiddenFromLines(hiddenId, lines){
    const el = $(hiddenId);
    if(!el) return;
    el.value = lines.filter(s=>s.trim().length>0).join("\n");
  }
  function renderNoteLines(listId, hiddenId, lines){
    const box = $(listId);
    if(!box) return;
    box.innerHTML = "";
    lines.forEach((val, idx)=>{
      const row = document.createElement("div");
      row.className = "noteItem";

      const ta = document.createElement("textarea");
      ta.className = "noteLine";
      ta.rows = 2;
      ta.placeholder = "اكتب ملاحظة...";
      ta.value = val;

      // smart dir + auto numbering hooks (provided by lang module)
      if(window.__applySmartDir) window.__applySmartDir(ta);
      if(window.__enableAutoNumberingEl) window.__enableAutoNumberingEl(ta);

      ta.addEventListener("input", ()=>{
        lines[idx] = ta.value;
        syncHiddenFromLines(hiddenId, lines);
        if(window.__markUnsaved) window.__markUnsaved();
      });

      const del = document.createElement("button");
      del.type = "button";
      del.className = "noteDel";
      del.textContent = "✕";
      del.title = "حذف الملاحظة";
      del.addEventListener("click", ()=>{
        lines.splice(idx,1);
        syncHiddenFromLines(hiddenId, lines);
        renderNoteLines(listId, hiddenId, lines);
      });

      row.appendChild(ta);
      row.appendChild(del);
      box.appendChild(row);
    });
    if(window.updateNoteCounters) window.updateNoteCounters();

    // show empty hint
    if(lines.length === 0){
      const hint = document.createElement("div");
      hint.className = "noteEmpty";
      hint.textContent = "اضغط + لإضافة ملاحظة";
      box.appendChild(hint);
    }
  }
  
  function updateNoteCounters(){
    const sc = $("summaryCount");
    const nc = $("notesCount");
    if(sc && window.__summaryLines) sc.textContent = `(${window.__summaryLines.length})`;
    if(nc && window.__notesLines) nc.textContent = `(${window.__notesLines.length})`;
  }
  window.updateNoteCounters = updateNoteCounters;

function wireAddNoteButton(btnId, listId, hiddenId, lines){
    const btn = $(btnId);
    if(!btn) return;
    btn.addEventListener("click", ()=>{
      lines.push("");
      renderNoteLines(listId, hiddenId, lines);
      syncHiddenFromLines(hiddenId, lines);
      if(window.__markUnsaved) window.__markUnsaved();
      // focus last textarea
      const box = $(listId);
      const tas = box ? box.querySelectorAll("textarea.noteLine") : null;
      if(tas && tas.length) tas[tas.length-1].focus();
    });
  }
// ====== STORAGE ======
  function storageKey(deptKey) {
    return `duty_report_v5_${deptKey}`;
  }

  function loadReport(deptKey) {
    try {
      const raw = localStorage.getItem(storageKey(deptKey));
      if (!raw) {
        return {
          shift: "A",
          employeeCount: "",
          summary: "",
          notes: "",
          summaryImages: [],
          notesImages: [],
          issueImages: [],
          sectionCategory: "General",
          sectionSeverity: "LOW",
          sectionAction: "",
          sectionIssueDesc: "",
          safetyNotes: [],
          issueNotes: [],
          sectionNotes: []
        };
      }
      return JSON.parse(raw);
    } catch {
      return {
          shift: "A",
          employeeCount: "",
          summary: "",
          notes: "",
          summaryImages: [],
          notesImages: [],
          issueImages: [],
          sectionCategory: "General",
          sectionSeverity: "LOW",
          sectionAction: "",
          sectionIssueDesc: "",
          safetyNotes: [],
          issueNotes: [],
          sectionNotes: []
        };
    }
  }

  function saveReport(deptKey, report) {
    localStorage.setItem(storageKey(deptKey), JSON.stringify(report));
  }

  // ====== REPORT-LEVEL SHIFT ======
  function getGlobalShift(){
    try{
      const v = (localStorage.getItem('globalShift') || '').trim();
      return v || 'A';
    }catch(e){ return 'A'; }
  }

  function setGlobalShift(v){
    try{ localStorage.setItem('globalShift', (v || 'A').trim() || 'A'); }catch(e){}
  }

  function syncGlobalShiftInput(){
    const el = $('globalShift');
    if(el) el.value = getGlobalShift();
  }

  // ====== RESET HELPERS ======
  function clearDeptStorage(deptKey){
    try{ localStorage.removeItem(storageKey(deptKey)); }catch(e){ /* ignore */ }
  }

  function resetDeptUI(){
    // reset form + multi-note UI + images for current dept screen
    if(!$('employeeCount')) return;

    $('employeeCount').value = '';

    // reset category/severity/action
    if($("deptCategory")) fillCategorySelect($("deptCategory"), currentDept?.key || "", "General");
    syncGeneralOtherUI("deptCategory","deptCategoryOther","General");
    if($("deptSeverity")) $("deptSeverity").value = "LOW";
    if($("deptIssueDesc")) $("deptIssueDesc").value = "";
    if($("deptAction")) $("deptAction").value = "";

    // default: details OFF
    const en = $("deptEnableDetails");
    if(en){ en.checked = false; }
    applyDeptDetailsEnabled(false);

    // clear section notes
    $('summary').value = '';
    $('notes').value   = '';
    renderSectionNotes([]);

    // clear extra images
    summaryImages = [];
    notesImages = [];
    issueImages = [];
    renderExtraImages();

    // clear safety list UI (data already removed by caller if needed)
    renderSafety([]);
    renderSavedIssueNotes([]);

    if($('saveStatus')){
      $('saveStatus').textContent = 'Cleared ✓';
      setTimeout(() => { if ($('saveStatus')) $('saveStatus').textContent = ''; }, 1200);
    }
  }

  // ====== Dept "Add Note" toggle ======
  function applyDeptDetailsEnabled(enabled){
    const wrap = $("deptIssueWrap");
    const block = $("deptIssueBlock");
    const state = $("deptIssueState");

    if(state){
      state.textContent = enabled
        ? t("Issues / توجد ملاحظات", "Issues / توجد ملاحظات")
        : t("Issues / توجد ملاحظات", "Issues / توجد ملاحظات");
    }
    if(wrap){
      wrap.classList.toggle("issueOn", !!enabled);
    }

    const ids = [
      "deptCategory","deptCategoryOther","deptSeverity","deptIssueDesc","deptAction","btnAttachIssue","btnCameraIssue","btnSaveIssueNote","btnNewDeptIssueNote"
    ];
    if(block){
      block.style.display = enabled ? "" : "none";
    }
    ids.forEach(id=>{
      const el = $(id);
      if(!el) return;
      el.disabled = !enabled;
    });
    if(!enabled){
      setDeptIssueDraftMode(false);
    }
  }

    function inferDeptDetailsEnabled(report){
    // If explicit flag exists, respect it
    if(report && typeof report.sectionEnabled === "boolean") return report.sectionEnabled;

    // Infer ONLY from issue-classification fields (not from Summary/Notes).
    const rawCat = String(report?.sectionCategory || "").trim();
    const cat = rawCat.toLowerCase();
    const hasNonGeneralCat = rawCat && cat !== "general";
    const hasGeneralSpecify = rawCat.startsWith("General:") && rawCat.trim().length > "General:".length;
    const hasAction = (report?.sectionAction && String(report.sectionAction).trim()!=="");
    const hasDesc = (report?.sectionIssueDesc && String(report.sectionIssueDesc).trim()!=="");
    return !!(hasNonGeneralCat || hasGeneralSpecify || hasAction);
  }




  
  
  // ====== Undo Toast (used by Reset actions) ======
  let __undoTimer = null;
  function showUndoToast(message, payload, onUndo){
    try{
      let toast = document.getElementById("undoToast");
      if(!toast){
        toast = document.createElement("div");
        toast.id = "undoToast";
        toast.className = "undoToast";
        toast.innerHTML = `
          <div class="msg"></div>
          <button type="button" class="undoBtn">Undo</button>
          <button type="button" class="closeBtn" aria-label="Close">×</button>
        `;
        document.body.appendChild(toast);
      }

      const msgEl = toast.querySelector(".msg");
      const undoBtn = toast.querySelector(".undoBtn");
      const closeBtn = toast.querySelector(".closeBtn");

      msgEl.textContent = message || "Done";
      toast.style.display = "flex";

      // clear previous handlers safely
      undoBtn.onclick = null;
      closeBtn.onclick = null;

      undoBtn.onclick = ()=>{
        toast.style.display = "none";
        if(__undoTimer) { clearTimeout(__undoTimer); __undoTimer = null; }
        if(typeof onUndo === "function") onUndo(payload);
      };
      closeBtn.onclick = ()=>{
        toast.style.display = "none";
        if(__undoTimer) { clearTimeout(__undoTimer); __undoTimer = null; }
      };

      if(__undoTimer) clearTimeout(__undoTimer);
      __undoTimer = setTimeout(()=>{ toast.style.display="none"; __undoTimer=null; }, 6000);
    }catch(e){
      // If anything goes wrong, do not block reset actions
      console.warn("Undo toast failed:", e);
    }
  }

function snapshotDept(deptKey){
    return {
      kind: "dept",
      deptKey,
      data: localStorage.getItem(storageKey(deptKey))
    };
  }
  function restoreSnapshot(payload){
    if(!payload) return;
    if(payload.kind === "dept"){
      if(payload.data === null) localStorage.removeItem(storageKey(payload.deptKey));
      else localStorage.setItem(storageKey(payload.deptKey), payload.data);
      if(currentDept && currentDept.key === payload.deptKey){
        showDept(payload.deptKey); // reload UI
      }
      renderDepartments();
      return;
    }
    if(payload.kind === "all"){
      // payload.data is map of key->value
      Object.keys(payload.data).forEach(k=>{
        const v = payload.data[k];
        if(v === null) localStorage.removeItem(k);
        else localStorage.setItem(k, v);
      });
      renderDepartments();
      showHome();
      return;
    }
    if(payload.kind === "safetyDraft"){
      // restore draft fields only
      tempImages = payload.tempImages || [];
      $("sNoteText").value = payload.sNoteText || "";
      window.__safetyLines = parseNoteLines($("sNoteText").value);
      renderNoteLines("safetyNoteList","sNoteText", window.__safetyLines);
      wireAddNoteButton("btnAddSafetyLine","safetyNoteList","sNoteText", window.__safetyLines);
      if($("sRisk")) $("sRisk").value = payload.sRisk || "LOW";
      if($("sSeverity")) $("sSeverity").value = payload.sSeverity || "LOW";
      applyLevelSelectClass($("sRisk"));
      applyLevelSelectClass($("sSeverity"));
      if($("sAction")) $("sAction").value = payload.sAction || "CORRECTED";
      if($("sActionOther")) { $("sActionOther").value = payload.sActionOther || ""; $("sActionOther").style.display = (payload.sAction === "OTHER") ? "block" : "none"; }
      renderSafetyScreenImages();
      applySafetyDir();
      return;
    }
  }
  function snapshotAll(){
    const data = {};
    // only keys we own
    DEPARTMENTS.forEach(d=>{
      const k = storageKey(d.key);
      data[k] = localStorage.getItem(k);
    });
    return { kind:"all", data };
  }

function resetCurrentDept(){
    if(!currentDept) return;
    const ok = confirm('هل أنت متأكد؟ سيتم مسح جميع ملاحظات هذا القسم فقط.');
    if(!ok) return;
    const snap = snapshotDept(currentDept.key);
    showUndoToast("Section cleared.", snap, restoreSnapshot);
    clearDeptStorage(currentDept.key);
    resetDeptUI();
    renderDepartments();
  }

  function resetAllDepts(){
    const ok = confirm('هل أنت متأكد؟ سيتم مسح جميع الملاحظات والبيانات المحفوظة من كل الأقسام.');
    if(!ok) return;
    const snap = snapshotAll();
    showUndoToast("All data cleared.", snap, restoreSnapshot);
    DEPARTMENTS.forEach(d=> clearDeptStorage(d.key));
    // if user is in report, clear UI too
    if(currentDept) resetDeptUI();
    renderDepartments();
    showHome();
  }

  // ====== UI HELPERS ======
  function nowString() {
    const d = new Date();
    return d.toLocaleString();
  }

  function normalizeLevel(x) {
    const v = String(x || "").toUpperCase().trim();
    if (LEVELS.includes(v)) return v;
    // Edge cases:
    if (v === "LOW ") return "LOW";
    if (v === "MED") return "MEDIUM";
    if (v === "MID") return "MEDIUM";
    if (v === "CRIT") return "CRITICAL";
    return "LOW";
  }

  function levelClass(level) {
    const v = normalizeLevel(level);
    if (v === "LOW") return "low";
    if (v === "MEDIUM") return "medium";
    if (v === "HIGH") return "high";
    return "critical";
  }


function applyLevelSelectClass(sel){
  if(!sel) return;
  sel.classList.remove("low","medium","high","critical");
  sel.classList.add(levelClass(sel.value));
}

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (s) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[s]));
  }



function getFinalReportPlainText() {
  const area = $("finalReportArea");
  return (area?.innerText || "").trim();
}

let __activeFinalReportSnapshot = null;

function getInlineStyleCss() {
  const chunks = [];
  try {
    Array.from(document.styleSheets || []).forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        if (rules.length) {
          chunks.push(rules.map(rule => rule.cssText).join("\n"));
        }
      } catch (err) {
        const href = sheet?.href || "";
        console.warn("Skipping stylesheet while exporting report", href, err);
      }
    });
  } catch (e) {
    console.warn("Could not collect inline stylesheet rules", e);
  }

  chunks.push(`
.finalReportExportWrap{
  width:100%;
  max-width:900px;
  margin:0 auto;
  background:#fff;
}
@page{
  size:A4;
  margin:10mm;
}

  .finalSafetyBlock{border:1px solid rgba(239,68,68,.18) !important; background:#fffafa !important;}
  .finalSafetyEntry.high{border-left-color:#ef4444 !important;}
  .finalSafetyEntry.medium{border-left-color:#f59e0b !important;}
  .finalSafetyEntry.low{border-left-color:#22c55e !important;}
  .finalRiskFormula{font-size:10.5px; color:#334155; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:8px; padding:6px 8px; margin:6px 0 8px;}
  .finalSuggestedBox{background:#fff7ed !important; border-color:#fed7aa !important;}

@media print{
  html,body{
    background:#fff !important;
    color:#111 !important;
    margin:0 !important;
    padding:0 !important;
    -webkit-print-color-adjust:exact !important;
    print-color-adjust:exact !important;
  }
  .finalReportExportWrap{
    max-width:none !important;
    width:100% !important;
  }
  .finalReport{
    font-size:10px !important;
    line-height:1.16 !important;
  }
  
  .finalAviationHeader{
    display:block !important;
    text-align:center !important;
    padding:0 0 8px !important;
  }
  .finalHeaderMetaGrid{
    display:grid !important;
    grid-template-columns:repeat(3,minmax(0,1fr)) !important;
    gap:10px !important;
    width:100% !important;
    max-width:520px !important;
    min-width:0 !important;
    margin:10px auto 0 !important;
  }
  .finalHeaderMetaItem{
    min-width:0 !important;
    width:100% !important;
    padding:8px 10px !important;
    overflow:hidden !important;
  }
  .finalHeaderMetaItem span{
    font-size:8.5px !important;
    margin-bottom:3px !important;
    white-space:nowrap !important;
    overflow:hidden !important;
    text-overflow:ellipsis !important;
  }
  .finalHeaderMetaItem strong{
    display:block !important;
    font-size:10.5px !important;
    line-height:1.18 !important;
    white-space:nowrap !important;
    overflow:hidden !important;
    text-overflow:ellipsis !important;
    word-break:normal !important;
    overflow-wrap:normal !important;
  }

  .finalPrintOrg{font-size:24px !important; text-align:center !important;}
  .finalPrintSub{font-size:12px !important; margin-top:2px !important; text-align:center !important;}
  .finalHeaderMetaGrid,
  .finalSummaryGrid,
  .finalSummaryGridMain,
  .finalSummaryGridRisk,
  .finalSectionsWrap,
  .finalTwoCol{gap:8px !important;}
  .finalHeaderMetaItem,
  .finalSummaryExecutive,
  .finalKpiCard,
  .finalRiskCard,
  .finalSectionCard,
  .finalBlock,
  .finalEntryCard,
  .finalMiniMeta,
  .finalActionBox,
  .finalCategoryPill,
  .finalSectionStat{
    border-radius:10px !important;
    box-shadow:none !important;
  }
  .finalSummaryExecutive{padding:10px !important; margin:0 0 10px !important;}
  .finalSummaryHeader{margin-bottom:8px !important; gap:8px !important;}
  .finalSummaryTitle{font-size:16px !important;}
  .finalKpiCard,.finalRiskCard{padding:9px 10px !important; min-height:68px !important;}
  .finalKpiLabel,.finalSectionEyebrow,.finalSectionStatLabel,.finalMiniMeta span,.finalActionLabel{font-size:9px !important;}
  .finalKpiValue{font-size:20px !important;}
  .finalCategoryStrip{gap:6px !important; margin-top:8px !important;}
  .finalCategoryPill{padding:6px 9px !important; font-size:10.5px !important;}
  .finalSectionHeader{padding:9px 10px !important; gap:8px !important;}
  .finalSectionTitle{font-size:15px !important;}
  .finalSectionStat{min-width:92px !important; padding:6px 8px !important;}
  .finalSectionStatValue{font-size:16px !important; margin-top:2px !important;}
  .finalSectionBody{padding:10px !important;}
  .finalBlock{padding:8px 9px !important; margin-bottom:8px !important;}
  .finalBlockTitle{font-size:11px !important; margin-bottom:6px !important; padding-bottom:5px !important;}
  .finalEntryCard{padding:8px 9px !important; margin-bottom:8px !important; border-left-width:3px !important; page-break-inside:avoid !important; break-inside:avoid !important;}
  .finalEntryTop,.finalEntryMetaRow{gap:6px !important; margin-bottom:6px !important;}
  .finalEntryTitle{font-size:12px !important;}
  .finalRiskBadge{min-width:66px !important; padding:4px 8px !important; font-size:10px !important;}
  .finalMiniMeta{min-width:110px !important; padding:6px 7px !important;}
  .finalMiniMeta strong{font-size:10.5px !important;}
  .finalActionBox,.finalEmptyState{padding:8px 9px !important; font-size:10.5px !important;}
  .finalBullets{margin:4px 0 3px 14px !important;}
  .finalBullets li{margin:2px 0 !important; line-height:1.25 !important;}
  .finalImgs{gap:6px !important; margin-top:6px !important;}
  .finalImgs img{width:140px !important; max-width:100% !important; border-radius:8px !important;}

  .finalReport, .finalReport *{
    white-space:normal !important;
    word-break:normal !important;
    overflow-wrap:break-word !important;
    writing-mode:horizontal-tb !important;
    text-orientation:mixed !important;
    box-sizing:border-box !important;
  }
  .finalPrintOrg{
    text-transform:uppercase !important;
    white-space:nowrap !important;
    word-break:keep-all !important;
    overflow-wrap:normal !important;
    letter-spacing:.04em !important;
  }
  .finalSafetyBucketHeader{
    display:flex !important;
    flex-direction:row !important;
    align-items:center !important;
    justify-content:space-between !important;
    width:100% !important;
  }
  .finalSafetyBucketHeader > div:first-child{
    min-width:0 !important;
    flex:1 1 auto !important;
  }
  .finalSafetyBucketTitle,
  .finalSectionEyebrow,
  .finalBlockTitle,
  .finalEntryTitle{
    white-space:normal !important;
    word-break:keep-all !important;
    overflow-wrap:normal !important;
    writing-mode:horizontal-tb !important;
  }
  .finalRiskBadge{
    flex:0 0 auto !important;
    white-space:nowrap !important;
    word-break:keep-all !important;
  }
  .finalCategoryPill{
    white-space:nowrap !important;
    gap:4px !important;
  }

}
`);
  return chunks.join("\n\n");
}

function ensureFinalReportSnapshot() {
  try {
    const built = buildFinalReportHTML();
    const html = built?.html || "";
    const createdAt = built?.createdAt || new Date().toLocaleString();
    if ($("finalReportArea")) $("finalReportArea").innerHTML = html;
    if ($("finalMeta")) $("finalMeta").textContent = `Generated: ${createdAt}`;
    return { html, createdAt };
  } catch (err) {
    console.error("Failed to build final report snapshot", err);
    const fallbackHtml = $("finalReportArea")?.innerHTML || '<div class="finalReport"><div class="finalSummaryExecutive"><div class="finalSummaryTitle">OnDuty Final Report</div></div></div>';
    return { html: fallbackHtml, createdAt: new Date().toLocaleString() };
  }
}

function getFinalReportHtmlDocument(options = {}) {
  const snapshot = options.snapshot || __activeFinalReportSnapshot || ensureFinalReportSnapshot();
  const reportHtml = snapshot.html || $("finalReportArea")?.innerHTML || "";
  const title = options.title || "OnDuty Final Report";
  const extraCss = options.extraCss || "";
  const inlineCss = `${getInlineStyleCss()}
${extraCss}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>${inlineCss}</style>
</head>
<body>
  <div class="finalReportExportWrap">
    ${reportHtml}
  </div>
</body>
</html>`;
}

/* V66 PDF-CENTRIC OUTPUT ACTIONS: Save PDF is the official source; Share/Email use the saved PDF workflow. */
function buildFinalReportExportPayload(options = {}) {
  const baseName = options.baseName || buildFinalReportFileBase();
  let htmlDoc = "";
  let text = "";

  try {
    htmlDoc = getFinalReportHtmlDocument({ title: options.title || "OnDuty Final Report", snapshot: options.snapshot || __activeFinalReportSnapshot });
  } catch (e) {
    console.error("Failed to build HTML report", e);
    htmlDoc = `<!doctype html><html><head><meta charset="utf-8"><title>OnDuty Final Report</title></head><body><pre>Could not build formatted HTML report.</pre></body></html>`;
  }

  try {
    text = getFinalReportPlainText();
  } catch (e) {
    console.error("Failed to build plain text report", e);
    text = "OnDuty Final Report";
  }

  let jsonDoc = "";
  try {
    jsonDoc = JSON.stringify({
      app: "OnDuty",
      exportType: "Final Duty Manager Report",
      exportedAt: new Date().toISOString(),
      baseName,
      plainText: text,
      reportHtml: htmlDoc,
      localStorageBackup: Object.keys(localStorage || {}).reduce((acc, key) => {
        if (/onduty|duty|report|safety/i.test(key)) acc[key] = localStorage.getItem(key);
        return acc;
      }, {})
    }, null, 2);
  } catch (e) {
    console.warn("Failed to build JSON report package", e);
    jsonDoc = JSON.stringify({ app: "OnDuty", exportType: "Final Duty Manager Report", exportedAt: new Date().toISOString(), baseName, plainText: text }, null, 2);
  }

  return {
    baseName,
    htmlName: `${baseName}.html`,
    txtName: `${baseName}.txt`,
    jsonName: `${baseName}.json`,
    htmlDoc,
    text,
    jsonDoc
  };
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}


function buildOutputFiles(payload) {
  const safeText = payload.text || "OnDuty Final Report";
  return {
    html: new File([payload.htmlDoc], payload.htmlName, { type: "text/html" }),
    txt: new File([safeText], payload.txtName, { type: "text/plain" }),
    json: new File([payload.jsonDoc || "{}"], payload.jsonName, { type: "application/json" })
  };
}

function canShareFiles(files) {
  try {
    return !!(navigator.share && navigator.canShare && navigator.canShare({ files }));
  } catch (e) {
    return false;
  }
}

async function copyReportTextToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text || "OnDuty Final Report");
      return true;
    }
  } catch (e) {
    console.warn("Clipboard copy failed", e);
  }
  return false;
}

function getReportEmailBody(payload) {
  const shortText = (payload.text || "OnDuty Final Report").slice(0, 1800);
  return [
    "Final Duty Manager Report",
    "",
    shortText,
    "",
    "Note: For the official formatted PDF, press the PDF button in OnDuty and choose Save as PDF, then attach the generated PDF if required."
  ].join("\n");
}

function getCapacitorPlugin(name) {
  try {
    if (window.Capacitor?.Plugins?.[name]) return window.Capacitor.Plugins[name];
    if (window.Capacitor?.[name]) return window.Capacitor[name];
  } catch (e) {}
  return null;
}

function isNativeRuntime() {
  try {
    if (!window.Capacitor) return false;

    if (typeof window.Capacitor.isNativePlatform === "function") {
      const nativeFlag = window.Capacitor.isNativePlatform();
      if (typeof nativeFlag === "boolean") return nativeFlag;
    }

    if (typeof window.Capacitor.getPlatform === "function") {
      const platformName = window.Capacitor.getPlatform();
      if (typeof platformName === "string") return platformName !== "web";
    }

    const platform = window.Capacitor?.platform || window.Capacitor?.Platform;
    if (typeof platform === "string") return platform !== "web";

    const ua = navigator.userAgent || "";
    if (/Android|iPhone|iPad|iPod/i.test(ua) && window.location.protocol === "file:") return true;
  } catch (e) {}
  return false;
}

function getCapacitorDirectory() {
  const dir = window.Capacitor?.FilesystemDirectory || window.Capacitor?.Plugins?.FilesystemDirectory || {};
  return {
    Documents: dir.Documents || "DOCUMENTS",
    Cache: dir.Cache || "CACHE"
  };
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function buildFinalReportFileBase() {
  const now = new Date();
  return `OnDuty_Final_Report_${now.getFullYear()}-${pad2(now.getMonth()+1)}-${pad2(now.getDate())}_${pad2(now.getHours())}-${pad2(now.getMinutes())}`;
}


async function browserSaveFile(filename, content, mimeType) {
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{
          description: mimeType === "text/plain;charset=utf-8" ? "Text file" : "HTML file",
          accept: { [mimeType.split(";")[0]]: [filename.endsWith(".txt") ? ".txt" : ".html"] }
        }]
      });
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      return { mode: "browser", filename, via: "picker" };
    } catch (pickerErr) {
      console.warn("File picker save failed, fallback to direct download.", pickerErr);
    }
  }

  downloadBlob(filename, new Blob([content], { type: mimeType }));
  return { mode: "browser", filename, via: "download" };
}

async function writeReportToDevice(options = {}) {
  const payload = buildFinalReportExportPayload(options);
  const Filesystem = getCapacitorPlugin("Filesystem");
  const nativeRuntime = isNativeRuntime();

  const result = {
    mode: "browser",
    htmlName: payload.htmlName,
    txtName: payload.txtName,
    jsonName: payload.jsonName,
    htmlSaved: false,
    txtSaved: false,
    jsonSaved: false,
    htmlUri: "",
    txtUri: "",
    jsonUri: "",
    payload
  };

  if (!nativeRuntime || !Filesystem) {
    const htmlResult = await browserSaveFile(payload.htmlName, payload.htmlDoc, "text/html;charset=utf-8");
    result.htmlSaved = true;
    result.via = htmlResult.via;

    // Save a TXT sidecar as an operational summary. Browsers may ask twice or download twice.
    try {
      await new Promise(resolve => setTimeout(resolve, 250));
      const txtResult = await browserSaveFile(payload.txtName, payload.text || "OnDuty Final Report", "text/plain;charset=utf-8");
      result.txtSaved = true;
      result.txtVia = txtResult.via;
    } catch (txtErr) {
      console.warn("TXT sidecar browser save skipped", txtErr);
      result.txtError = true;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 250));
      const jsonResult = await browserSaveFile(payload.jsonName, payload.jsonDoc || "{}", "application/json;charset=utf-8");
      result.jsonSaved = true;
      result.jsonVia = jsonResult.via;
    } catch (jsonErr) {
      console.warn("JSON backup browser save skipped", jsonErr);
      result.jsonError = true;
    }
    return result;
  }

  const Directory = getCapacitorDirectory();
  const folder = "OnDutyReports";
  const htmlPath = `${folder}/${payload.htmlName}`;
  const txtPath = `${folder}/${payload.txtName}`;
  const jsonPath = `${folder}/${payload.jsonName}`;
  const attempts = [Directory.Documents, Directory.Cache].filter(Boolean);
  let lastErr = null;

  for (const directory of attempts) {
    try {
      await Filesystem.writeFile({
        path: htmlPath,
        data: payload.htmlDoc,
        directory,
        encoding: "utf8",
        recursive: true
      });
      result.htmlSaved = true;

      try {
        await Filesystem.writeFile({
          path: txtPath,
          data: payload.text || "OnDuty Final Report",
          directory,
          encoding: "utf8",
          recursive: true
        });
        result.txtSaved = true;
      } catch (txtErr) {
        console.warn("TXT sidecar save skipped", txtErr);
      }

      try {
        await Filesystem.writeFile({
          path: jsonPath,
          data: payload.jsonDoc || "{}",
          directory,
          encoding: "utf8",
          recursive: true
        });
        result.jsonSaved = true;
      } catch (jsonErr) {
        console.warn("JSON backup save skipped", jsonErr);
      }

      try { result.htmlUri = (await Filesystem.getUri({ path: htmlPath, directory })).uri || ""; } catch (e) {}
      try { result.txtUri = (await Filesystem.getUri({ path: txtPath, directory })).uri || ""; } catch (e) {}
      try { result.jsonUri = (await Filesystem.getUri({ path: jsonPath, directory })).uri || ""; } catch (e) {}
      result.mode = "native";
      result.folder = folder;
      result.htmlPath = htmlPath;
      result.txtPath = txtPath;
      result.jsonPath = jsonPath;
      result.directory = directory;
      return result;
    } catch (nativeErr) {
      lastErr = nativeErr;
      console.warn("Native filesystem save attempt failed.", directory, nativeErr);
    }
  }

  console.warn("Native filesystem save failed, switching to browser download.", lastErr);
  const htmlResult = await browserSaveFile(payload.htmlName, payload.htmlDoc, "text/html;charset=utf-8");
  result.mode = "browser";
  result.htmlSaved = true;
  result.via = htmlResult.via;
  result.fallbackFromNative = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 250));
    await browserSaveFile(payload.txtName, payload.text || "OnDuty Final Report", "text/plain;charset=utf-8");
    result.txtSaved = true;
  } catch (txtErr) {
    console.warn("TXT fallback save skipped", txtErr);
  }
  try {
    await new Promise(resolve => setTimeout(resolve, 250));
    await browserSaveFile(payload.jsonName, payload.jsonDoc || "{}", "application/json;charset=utf-8");
    result.jsonSaved = true;
  } catch (jsonErr) {
    console.warn("JSON fallback save skipped", jsonErr);
  }
  return result;
}

async function copyTextWithFallback(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "readonly");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    } catch (err) {
      return false;
    }
  }
}

function setDeptIssueDraftMode(active){
  const editor = $("deptIssueEditor");
  const hint = $("deptIssueDraftHint");
  if(editor) editor.style.display = active ? "" : "none";
  if(hint) hint.style.display = active ? "none" : "";
  if(active){ setTimeout(()=>{ try{ $("deptCategory")?.focus(); }catch(e){} }, 50); }
}

function setSafetyDraftMode(active){
  const editor = $("safetyDraftEditor");
  const hint = $("safetyDraftHint");
  if(editor) editor.style.display = active ? "" : "none";
  if(hint) hint.style.display = active ? "none" : "";
  if(active){ setTimeout(()=>{ try{ $("sNoteText")?.focus(); }catch(e){} }, 50); }
}

  function makeId(prefix){
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
  }

  function migrateLegacySectionNotes(report){
    if(!report) return report;
    if(!Array.isArray(report.sectionNotes)) report.sectionNotes = [];
    if(report.sectionNotes.length === 0){
      const legacy = parseNoteLines(report.summary || "");
      if(legacy.length){
        report.sectionNotes = legacy.map((text, i)=>({
          id: makeId('sec'),
          text,
          createdAt: Date.now() + i,
          updatedAt: Date.now() + i
        }));
      }
    }
    syncSectionNotesToSummary(report);
    return report;
  }

  function syncSectionNotesToSummary(report){
    if(!report) return report;
    const notes = Array.isArray(report.sectionNotes) ? report.sectionNotes : [];
    report.summary = notes.map(n => (n?.text || '').trim()).filter(Boolean).join("\n");
    return report;
  }

  function getSectionNotes(report){
    return Array.isArray(report?.sectionNotes) ? report.sectionNotes : [];
  }

  function renderSectionNotes(notes){
    const box = $("savedSectionNotes");
    const empty = $("savedSectionNotesEmpty");
    if(!box) return;
    const items = Array.isArray(notes) ? notes : [];
    box.innerHTML = "";
    if(empty) empty.style.display = items.length ? "none" : "";
    items.forEach((n, i)=>{
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'sectionNoteCard';
      card.innerHTML = `
        <div class="sectionNoteCardTop">
          <span class="sectionNoteBadge">${i+1}.</span>
          <span class="sectionNoteTime">${escapeHtml(new Date(n.updatedAt || n.createdAt || Date.now()).toLocaleString())}</span>
        </div>
        <div class="sectionNoteText">${escapeHtml((n.text || '').trim() || '-')}</div>
        <div class="sectionNoteActions">
          <span class="smallBtn" data-open="${escapeHtml(n.id)}">Open</span>
          <span class="smallBtn danger" data-del="${escapeHtml(n.id)}">Delete</span>
        </div>`;
      card.querySelector('[data-open]')?.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); openSectionNoteEditor(n.id); });
      card.querySelector('[data-del]')?.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); deleteSectionNote(n.id); });
      card.addEventListener('click', ()=> openSectionNoteEditor(n.id));
      box.appendChild(card);
    });
  }

  let __sectionNoteEditId = null;
  function openSectionNoteEditor(id=null){
    __sectionNoteEditId = id || null;
    const report = currentDept ? migrateLegacySectionNotes(loadReport(currentDept.key)) : {sectionNotes:[]};
    const note = id ? getSectionNotes(report).find(n => n.id === id) : null;
    if($("sectionNoteText")) $("sectionNoteText").value = note?.text || "";
    if($("sectionNoteModalTitle")) $("sectionNoteModalTitle").textContent = note ? 'Edit Note / تعديل الملاحظة' : 'Add Note / إضافة ملاحظة';
    if($("sectionNoteModalBack")) $("sectionNoteModalBack").style.display = 'flex';
    setTimeout(()=> $("sectionNoteText")?.focus(), 50);
  }

  function closeSectionNoteEditor(){
    __sectionNoteEditId = null;
    if($("sectionNoteModalBack")) $("sectionNoteModalBack").style.display = 'none';
    if($("sectionNoteText")) $("sectionNoteText").value = '';
  }

  function saveSectionNote(){
    if(!currentDept) return;
    const text = ($("sectionNoteText")?.value || '').trim();
    if(!text){
      alert('اكتب الملاحظة أولاً.');
      $("sectionNoteText")?.focus();
      return;
    }
    const report = migrateLegacySectionNotes(collectReportFromForm());
    if(!Array.isArray(report.sectionNotes)) report.sectionNotes = [];
    if(__sectionNoteEditId){
      const idx = report.sectionNotes.findIndex(n => n.id === __sectionNoteEditId);
      if(idx >= 0){
        report.sectionNotes[idx].text = text;
        report.sectionNotes[idx].updatedAt = Date.now();
      }
    }else{
      if(report.sectionNotes.length >= 3){
        alert('الحد الأقصى 3 ملاحظات لكل قسم.');
        return;
      }
      report.sectionNotes.push({ id: makeId('sec'), text, createdAt: Date.now(), updatedAt: Date.now() });
    }
    syncSectionNotesToSummary(report);
    saveReport(currentDept.key, report);
    if($("summary")) $("summary").value = report.summary || '';
    renderSectionNotes(report.sectionNotes);
    closeSectionNoteEditor();
    showToast(t("تم حفظ الملاحظة ✓","Saved Note ✓"), "success", 1600);
    clearDirty();
  }

  function deleteSectionNote(id){
    if(!currentDept || !id) return;
    const ok = confirm(t('هل تريد حذف هذه الملاحظة؟','Delete this note?'));
    if(!ok) return;
    const report = migrateLegacySectionNotes(collectReportFromForm());
    report.sectionNotes = getSectionNotes(report).filter(n => n.id !== id);
    syncSectionNotesToSummary(report);
    saveReport(currentDept.key, report);
    if($("summary")) $("summary").value = report.summary || '';
    renderSectionNotes(report.sectionNotes);
    showToast(t("تم حذف الملاحظة","Note deleted"), "warn", 1400);
  }

  // ====== RENDER HOME ======
function renderDepartments(){
  const grid = document.getElementById("deptGrid");
  if(!grid){
    console.error("deptGrid not found in HTML");
    return;
  }

  grid.innerHTML = "";

  DEPARTMENTS.forEach(d=>{
    const btn = document.createElement("button");
    btn.className = "deptTile";
    btn.style.position = "relative";

    const r = loadReport(d.key);
    const hasData =
      (r && (
        (r.employeeCount && String(r.employeeCount).trim() !== "") ||
        (r.summary && r.summary.trim()) ||
        (r.notes && r.notes.trim()) ||
        (Array.isArray(r.safetyNotes) && r.safetyNotes.length > 0)
      ));

    btn.innerHTML = `
      <span class="deptIcon">${(window.deptIconSvg ? window.deptIconSvg(d.key) : "")}</span>
      <span class="deptText">
        <span class="ar">${escapeHtml(d.ar)}</span>
        <span class="en">${escapeHtml(d.en)}</span>
      </span>
      ${hasData ? '<span class="deptStar">★</span>' : ''}
`;
// ✅ مهم: هذا يستدعي openReport بطريقة تناسب أي نسخة عندك
    btn.onclick = () => {
      try{
        if (typeof openReport === "function") {
          // إذا openReport(d) موجود
          if (openReport.length === 1) return openReport(d);
          // إذا openReport(key, ar, en) موجود
          return openReport(d.key, d.ar, d.en);
        }
      }catch(e){
        console.error(e);
      }
    };

    grid.appendChild(btn);
  });
}


  
function updateTopResetUI(mode){
  const tr = $("btnTopReset");
  if(!tr) return;
  tr.classList.remove("is-home","is-section","is-safety");
  if(mode==="home"){
    tr.classList.add("is-home");
    tr.textContent = "Reset All";
    tr.title = "Reset All";
  } else if(mode==="section"){
    tr.classList.add("is-section");
    tr.textContent = "Reset Section";
    tr.title = "Reset Section";
  } else if(mode==="safety"){
    tr.classList.add("is-safety");
    tr.textContent = "Reset Form";
    tr.title = "Reset Form";
  } else {
    tr.textContent = "Reset";
    tr.title = "Reset";
  }
}

// ====== NAV ======
  function showHome() {
    // prevent losing unsaved changes when leaving report/safety
    if($("screenHome").style.display === "none"){
      if(!confirmDiscardIfDirty()) return;
    }
    $("screenHome").style.display = "";
    $("screenReport").style.display = "none";
    $("screenSafety").style.display = "none";
    currentDept = null;
    $("saveStatus").textContent = "";
    updateTopResetUI("home");
  }

  function showReport() {
    $("screenHome").style.display = "none";
    $("screenReport").style.display = "";
    $("screenSafety").style.display = "none";
    updateTopResetUI("section");
  }

  // ====== REPORT SCREEN ======
  

let __deptIssueEditId = null;
let __safetyEditIndex = null;

function getIssueNotes(report){
  return Array.isArray(report?.issueNotes) ? report.issueNotes : [];
}
function ensureIssueNoteShape(note){
  if(!note || typeof note !== 'object') return null;
  const createdAt = note.createdAt || Date.now();
  return {
    id: note.id || makeId('iss'),
    category: note.category || "General",
    severity: normalizeLevel(note.severity || "LOW"),
    issueDesc: note.issueDesc || "",
    action: note.action || "",
    images: Array.isArray(note.images) ? [...note.images] : [],
    createdAt,
    updatedAt: note.updatedAt || createdAt
  };
}
function hasLegacyIssue(report){
  return !!((report?.sectionIssueDesc || "").trim() || (report?.sectionAction || "").trim());
}
function migrateLegacyIssueNotes(report){
  if(!report) return report;
  if(!Array.isArray(report.issueNotes)) report.issueNotes = [];
  report.issueNotes = report.issueNotes.map(ensureIssueNoteShape).filter(Boolean);
  if(report.issueNotes.length === 0 && hasLegacyIssue(report)){
    const createdAt = Date.now();
    report.issueNotes.push({
      id: makeId('iss'),
      category: report.sectionCategory || "General",
      severity: normalizeLevel(report.sectionSeverity || "LOW"),
      issueDesc: report.sectionIssueDesc || "",
      action: report.sectionAction || "",
      images: Array.isArray(report.issueImages) ? [...report.issueImages] : [],
      createdAt,
      updatedAt: createdAt
    });
  }
  return report;
}
function renderSavedIssueNotes(notes){
  const box = $("savedIssueNotesChips");
  const empty = $("savedIssueNotesEmpty");
  if(!box) return;
  const items = Array.isArray(notes) ? notes : [];
  box.innerHTML = items.map((n,i)=>{
    const sev = normalizeLevel(n.severity || "LOW");
    const actionText = (n.action || '').trim();
    return `
    <div class="issueCard enhanced ${(n.id||'')===__deptIssueEditId?'active':''}">
      <div class="issueCardTop">
        <span class="issueNumber">${i+1}.</span>
        <span class="issueCategory">${escapeHtml(n.category || 'General')}</span>
        <span class="severityBadge sev${escapeHtml(sev)}">${escapeHtml(sev)}</span>
      </div>
      <div class="issueCardSection">
        <div class="issueCardLabel">Description / وصف المشكلة</div>
        <div class="issueDescription">${escapeHtml(n.issueDesc || '-')}</div>
      </div>
      <div class="issueCardSection">
        <div class="issueCardLabel">Action Taken / الإجراء المتخذ</div>
        <div class="issueActionText">${escapeHtml(actionText || '-')}</div>
      </div>
      <div class="issueCardActions">
        <button type="button" class="smallBtn" data-open-id="${escapeHtml(n.id || '')}">Edit</button>
        <button type="button" class="smallBtn danger" data-del-id="${escapeHtml(n.id || '')}">Delete</button>
      </div>
    </div>`;
  }).join("\n");
  if(empty) empty.style.display = items.length ? "none" : "";
  box.querySelectorAll("[data-open-id]").forEach(btn=>{
    btn.addEventListener("click", ()=> openDeptIssueNote(btn.dataset.openId));
  });
  box.querySelectorAll("[data-del-id]").forEach(btn=>{
    btn.addEventListener("click", ()=> deleteDeptIssueNote(btn.dataset.delId));
  });
}
function clearDeptIssueDraftUI(){
  __deptIssueEditId = null;
  if($("deptCategory")) fillCategorySelect($("deptCategory"), currentDept?.key || "", "General");
  syncGeneralOtherUI("deptCategory","deptCategoryOther","General");
  if($("deptSeverity")) $("deptSeverity").value = "LOW";
  if($("deptIssueDesc")) $("deptIssueDesc").value = "";
  if($("deptAction")) $("deptAction").value = "";
  issueImages = [];
  renderExtraImages();
  setDeptIssueDraftMode(false);
  if(currentDept) renderSavedIssueNotes(migrateLegacyIssueNotes(loadReport(currentDept.key))?.issueNotes || []);
}
function openDeptIssueNote(noteId){
  if(!currentDept || !noteId) return;
  const report = migrateLegacyIssueNotes(loadReport(currentDept.key));
  const notes = getIssueNotes(report);
  const n = notes.find(x => (x.id || '') === noteId);
  if(!n) return;
  __deptIssueEditId = noteId;
  if($("deptEnableDetails")) $("deptEnableDetails").checked = true;
  applyDeptDetailsEnabled(true);
  setDeptIssueDraftMode(true);
  fillCategorySelect($("deptCategory"), currentDept.key, n.category || "General");
  syncGeneralOtherUI("deptCategory","deptCategoryOther", n.category || "General");
  if($("deptSeverity")) $("deptSeverity").value = normalizeLevel(n.severity || "LOW");
  if($("deptIssueDesc")) $("deptIssueDesc").value = n.issueDesc || "";
  if($("deptAction")) $("deptAction").value = n.action || "";
  issueImages = Array.isArray(n.images) ? [...n.images] : [];
  renderExtraImages();
  renderSavedIssueNotes(notes);
}
function openNewDeptIssueNote(){
  if(!currentDept) return;
  if($("deptEnableDetails")) $("deptEnableDetails").checked = true;
  applyDeptDetailsEnabled(true);
  __deptIssueEditId = null;
  if($("deptCategory")) fillCategorySelect($("deptCategory"), currentDept?.key || "", "General");
  syncGeneralOtherUI("deptCategory","deptCategoryOther","General");
  if($("deptSeverity")) $("deptSeverity").value = "LOW";
  if($("deptIssueDesc")) $("deptIssueDesc").value = "";
  if($("deptAction")) $("deptAction").value = "";
  issueImages = [];
  renderExtraImages();
  renderSavedIssueNotes(migrateLegacyIssueNotes(loadReport(currentDept.key))?.issueNotes || []);
  setDeptIssueDraftMode(true);
}
function normalizeIssueText(v){
  return String(v || '').trim().replace(/\s+/g, ' ');
}

function isSameIssueDraft(a, b){
  if(!a || !b) return false;
  return normalizeIssueText(a.issueDesc) === normalizeIssueText(b.issueDesc) &&
         normalizeIssueText(a.action) === normalizeIssueText(b.action) &&
         normalizeIssueText(a.category || 'General') === normalizeIssueText(b.category || 'General') &&
         normalizeLevel(a.severity || 'LOW') === normalizeLevel(b.severity || 'LOW');
}

function dedupeIssueNotes(notes){
  const seen = new Set();
  const out = [];
  (Array.isArray(notes) ? notes : []).forEach((n)=>{
    if(!n) return;
    const shaped = ensureIssueNoteShape(n);
    const key = [
      normalizeIssueText(shaped.issueDesc),
      normalizeIssueText(shaped.action),
      normalizeIssueText(shaped.category || 'General'),
      normalizeLevel(shaped.severity || 'LOW')
    ].join('||');
    if(seen.has(key)) return;
    seen.add(key);
    out.push(shaped);
  });
  return out;
}

function saveCurrentDeptIssueNote(){
  if(!currentDept) return;
  if($("deptEnableDetails") && !$("deptEnableDetails").checked){
    alert("فعّل يوجد مشكلة أولاً.");
    return;
  }
  const report = migrateLegacyIssueNotes(loadReport(currentDept.key));
  if(!Array.isArray(report.issueNotes)) report.issueNotes = [];
  report.issueNotes = dedupeIssueNotes(report.issueNotes);
  const category = getCategoryValue("deptCategory","deptCategoryOther");
  const severity = $("deptSeverity")?.value || "LOW";
  const issueDesc = $("deptIssueDesc")?.value?.trim() || "";
  const action = $("deptAction")?.value?.trim() || "";
  if(!issueDesc){
    alert("اكتب وصف المشكلة أولاً.");
    $("deptIssueDesc")?.focus();
    return;
  }
  const now = Date.now();
  let existing = __deptIssueEditId ? report.issueNotes.find(n => n.id === __deptIssueEditId) : null;
  let existingIdx = __deptIssueEditId ? report.issueNotes.findIndex(n => n.id === __deptIssueEditId) : -1;

  // Auto Save keeps the open issue draft in legacy fields. When Save Issue is pressed,
  // migration may already have converted that same draft into issueNotes. Reuse it instead
  // of creating a second card with identical content.
  if(!existing){
    const draftProbe = { category, severity: normalizeLevel(severity), issueDesc, action };
    existingIdx = report.issueNotes.findIndex(n => isSameIssueDraft(n, draftProbe));
    if(existingIdx >= 0) existing = report.issueNotes[existingIdx];
  }

  const item = {
    id: existing?.id || makeId('iss'),
    category,
    severity: normalizeLevel(severity),
    issueDesc,
    action,
    images: [...issueImages],
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };
  if(existing && existingIdx >= 0){
    report.issueNotes[existingIdx] = item;
  }else{
    if(report.issueNotes.length >= 3){
      alert("الحد الأقصى 3 ملاحظات لكل قسم.");
      return;
    }
    report.issueNotes.push(item);
  }
  report.issueNotes = dedupeIssueNotes(report.issueNotes);
  report.sectionEnabled = true;
  report.issueImages = [];
  report.sectionIssueDesc = "";
  report.sectionAction = "";
  saveReport(currentDept.key, report);
  renderSavedIssueNotes(report.issueNotes);
  clearDeptIssueDraftUI();
  if($("deptEnableDetails")) $("deptEnableDetails").checked = true;
  applyDeptDetailsEnabled(true);
  setDeptIssueDraftMode(false);
  showToast(t("تم حفظ الملاحظة ✓","Saved Note ✓"), "success", 1600);
}
function deleteDeptIssueNote(noteId){
  if(!currentDept || !noteId) return;
  const ok = confirm(t("هل تريد حذف هذه الملاحظة؟","Delete this note?"));
  if(!ok) return;
  const report = migrateLegacyIssueNotes(loadReport(currentDept.key));
  report.issueNotes = getIssueNotes(report).filter(n => (n.id || '') !== noteId);
  saveReport(currentDept.key, report);
  if(__deptIssueEditId === noteId) clearDeptIssueDraftUI();
  renderSavedIssueNotes(report.issueNotes);
  showToast(t("تم حذف الملاحظة","Note deleted"), "warn", 1400);
}

function renderSavedSafetyDraftNotes(notes){
  const box = $("savedSafetyNotesChips");
  const empty = $("savedSafetyNotesEmpty");
  if(!box) return;
  const items = Array.isArray(notes) ? notes : [];
  box.innerHTML = items.map((n,i)=>{
    const risk = normalizeLevel(n.risk || "LOW");
    const text = (n.note_en || n.note_ar || "-").trim();
    return `
    <div class="safetyDraftCard ${(n.id||'')===__safetyEditIndex?'active':''}">
      <div class="safetyDraftTop">
        <span class="issueNumber">${i+1}.</span>
        <span class="pill ${levelClass(risk)}">Risk: ${risk}</span>
      </div>
      <div class="safetyDraftMeta">
        <span>Likelihood: ${escapeHtml(n.likelihood || "-")}</span>
        <span>Severity: ${escapeHtml(n.severityImpact || n.severity || "-")}</span>
      </div>
      <div class="riskCalcLine">Risk Score: ${escapeHtml(n.riskFormula || ((n.riskScore != null) ? String(n.riskScore) : "Likelihood × Severity"))}</div>
      <div class="safetyDraftText">${escapeHtml(text)}</div>
      <div class="issueCardActions">
        <button type="button" class="smallBtn" data-open-id="${escapeHtml(n.id || '')}">Edit</button>
        <button type="button" class="smallBtn danger" data-del-id="${escapeHtml(n.id || '')}" title="Delete note">Delete</button>
      </div>
    </div>`;
  }).join("\n");
  if(empty) empty.style.display = items.length ? "none" : "";
  box.querySelectorAll("[data-open-id]").forEach(btn=>{
    btn.addEventListener("click", ()=> openSafetySavedNote(btn.dataset.openId));
  });
  box.querySelectorAll("[data-del-id]").forEach(btn=>{
    btn.addEventListener("click", ()=> deleteSafetySavedNote(btn.dataset.delId));
  });
}

function deleteSafetySavedNote(noteId){
  deleteSafetyNote(noteId);
}

function openSafetySavedNote(noteId){
  if(!currentDept) return;
  const report = loadReport(currentDept.key);
  const notes = Array.isArray(report.safetyNotes) ? report.safetyNotes : [];
  const n = notes.find(x => (x.id || '') === noteId);
  if(!n) return;
  __safetyEditIndex = noteId;
  showSafety();
  setSafetyDraftMode(true);
  const text = (n.note_en || n.note_ar || "").trim();
  $("sNoteText").value = text;
  window.__safetyLines = parseNoteLines(text);
  if(window.__safetyLines.length === 0) window.__safetyLines.push("");
  renderNoteLines("safetyNoteList","sNoteText", window.__safetyLines);
  $("sEntryType").value = n.entryType || "NOTE";
  $("sConsequence").value = n.consequence || "People";
  $("sLikelihood").value = n.likelihood || "POSSIBLE";
  $("sSeverityImpact").value = n.severityImpact || "MEDIUM";
  $("actionTaken").value = n.action_taken || "";
  tempImages = Array.isArray(n.images) ? [...n.images] : [];
  renderSafetyScreenImages();
  applySafetyDir();
  updateSafetySmartFields();
  renderSavedSafetyDraftNotes(notes);
}

function openReport(dept) {
    currentDept = dept;
    showReport();

    $("deptKeySmall").textContent = dept.key;
    $("deptTitle").textContent = `${dept.en} | ${dept.ar}`;
    $("dateTime").textContent = nowString();

    const report = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport(dept.key)));
    summaryImages = report.summaryImages || [];
    notesImages   = [];
    issueImages   = [];
    renderExtraImages();

    syncGlobalShiftInput();
    $("employeeCount").value = report.employeeCount ?? "";
    $("summary").value = report.summary ?? "";
    $("notes").value = "";
    renderSectionNotes(getSectionNotes(report));

    fillCategorySelect($("deptCategory"), dept.key, report.sectionCategory);
    syncGeneralOtherUI("deptCategory","deptCategoryOther", report.sectionCategory);
    if($("deptSeverity")) $("deptSeverity").value = normalizeLevel(report.sectionSeverity || "LOW");
    if($("deptIssueDesc")) $("deptIssueDesc").value = report.sectionIssueDesc || "";
    if($("deptAction")) $("deptAction").value = report.sectionAction || "";

    const en = $("deptEnableDetails");
    if(en){
      en.checked = getIssueNotes(report).length > 0 || inferDeptDetailsEnabled(report);
      applyDeptDetailsEnabled(en.checked);
    }

    clearDeptIssueDraftUI();
    renderSavedIssueNotes(getIssueNotes(report));
    setDeptIssueDraftMode(false);
    clearDirty();


    applyV63StaticLayout();
    renderSafety(report.safetyNotes || []);
    $("saveStatus").textContent = "Loaded ✓";
  }

  
function collectReportFromForm() {
    const report = loadReport(currentDept.key);

    report.shift = getGlobalShift();
    report.employeeCount = $("employeeCount").value;

    report.notes = "";
    if($("notes")) $("notes").value = "";
    report.sectionNotes = getSectionNotes(report);
    syncSectionNotesToSummary(report);
    if($("summary")) $("summary").value = report.summary || "";

    const en = $("deptEnableDetails");
    report.sectionEnabled = en ? !!en.checked : true;

    report.summaryImages = summaryImages;
    report.notesImages = [];

    if(report.sectionEnabled){
      report.issueImages = issueImages;
      if(!Array.isArray(report.issueNotes)) report.issueNotes = [];
      report.sectionCategory = getCategoryValue("deptCategory","deptCategoryOther");
      report.sectionSeverity = $("deptSeverity")?.value || "LOW";
      report.sectionIssueDesc = $("deptIssueDesc")?.value || "";
      report.sectionAction = $("deptAction")?.value || "";
    }else{
      report.issueImages = [];
      report.issueNotes = [];
      issueImages = [];
      report.sectionCategory = "General";
      report.sectionSeverity = "LOW";
      report.sectionIssueDesc = "";
      report.sectionAction = "";
    }
    return report;
  }

  function isoNow(){
    return new Date().toISOString();
  }
  function dateStamp(){
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth()+1).padStart(2,"0");
    const da = String(d.getDate()).padStart(2,"0");
    return `${y}-${m}-${da}`;
  }
  function makeReportId(deptKey){
    // DR-YYYY-MM-DD-XXXX (counter per-day, per-browser)
    const day = dateStamp();
    const counterKey = `dutyReport_counter_${day}`;
    const n = (parseInt(localStorage.getItem(counterKey)||"0",10) || 0) + 1;
    localStorage.setItem(counterKey, String(n));
    const seq = String(n).padStart(4,"0");
    return `DR-${day}-${seq}`;
  }
  function normalizeForCompare(obj){
    const clone = JSON.parse(JSON.stringify(obj||{}));
    // exclude volatile fields
    delete clone.updatedAt;
    return clone;
  }
  function hashReport(obj){
    try{
      const s = JSON.stringify(normalizeForCompare(obj));
      // simple non-crypto hash
      let h = 0;
      for(let i=0;i<s.length;i++){
        h = ((h<<5)-h) + s.charCodeAt(i);
        h |= 0;
      }
      return String(h);
    }catch{
      return String(Math.random());
    }
  }

  let __saving = false;
  let __lastSaveHash = null;
  let __lastSaveAt = 0;

  function validateBeforeSave(){
    // Saving must stay available even when some section fields are intentionally left empty.
    // Final export/save/share/email/PDF should depend on the current report state, not full field completion.
    return true;
  }

  function doSave() {
    if (!currentDept) return;
    if(__saving) return;

    if(!validateBeforeSave()) return;

    __saving = true;
    const btn = $("btnSave");
    if(btn) btn.disabled = true;

    const report = collectReportFromForm();
    const prev = loadReport(currentDept.key) || {};

    // keep createdAt + reportId stable
    report.createdAt = prev.createdAt || isoNow();
    report.reportId = prev.reportId || makeReportId(currentDept.key);

    // only bump updatedAt if something changed
    const prevComparable = normalizeForCompare(prev);
    const nextComparable = normalizeForCompare(report);
    // ensure createdAt/reportId included in compare (they are stable)
    const changed = JSON.stringify(prevComparable) !== JSON.stringify(nextComparable);

    const now = Date.now();
    const h = hashReport(report);

    // quick double-click duplicate guard (same content within 5s)
    if(__lastSaveHash && __lastSaveHash === h && (now - __lastSaveAt) < 5000){
      showToast(t("تم الحفظ مسبقًا (لا تغييرات).","Already saved (no changes)."), "info", 1800);
      if(btn) btn.disabled = false;
      __saving = false;
      return;
    }

    if(changed){
      report.updatedAt = isoNow();
      saveReport(currentDept.key, report);
      clearDirty();
      showToast(t("تم الحفظ ✓","Saved ✓"), "success", 1800);
    }else{
      // still refresh images/state but avoid noisy timestamps
      saveReport(currentDept.key, prev);
      clearDirty();
      showToast(t("لا توجد تغييرات للحفظ.","No changes to save."), "info", 1600);
    }

    __lastSaveHash = h;
    __lastSaveAt = now;

    if(btn) btn.disabled = false;
    __saving = false;
}


function normalizeLikelihoodValue(v){
  return String(v || "POSSIBLE").toUpperCase().trim().replace(/\s+/g, "_");
}

function normalizeSeverityImpactValue(v){
  const x = String(v || "MEDIUM").toUpperCase().trim().replace(/\s+/g, "_");
  const legacyMap = {
    MINOR: "LOW",
    MODERATE: "MEDIUM",
    MAJOR: "HIGH",
    SEVERE: "CRITICAL",
    CRITICAL: "CRITICAL",
    EXTREME: "EXTREME"
  };
  return legacyMap[x] || x;
}

function safetyRiskDetails(likelihood, severityImpact){
  const likelihoodMap = {
    RARE: 1,
    UNLIKELY: 2,
    POSSIBLE: 3,
    LIKELY: 4,
    ALMOST_CERTAIN: 5
  };
  const severityMap = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    CRITICAL: 4,
    EXTREME: 5
  };
  const lKey = normalizeLikelihoodValue(likelihood);
  const sKey = normalizeSeverityImpactValue(severityImpact);
  const lVal = likelihoodMap[lKey] || 1;
  const sVal = severityMap[sKey] || 1;
  const score = lVal * sVal;
  const risk = score <= 4 ? "LOW" : (score <= 12 ? "MEDIUM" : "HIGH");
  return { lKey, sKey, lVal, sVal, score, risk };
}

function safetyRiskMatrix(likelihood, severityImpact){
  return safetyRiskDetails(likelihood, severityImpact).risk;
}

function classifySafetyNote(noteText){
  const t = String(noteText||"").toLowerCase();
  if(/slip|trip|fall|wet|floor|انزلاق|تعثر|ارضية|مبلل/.test(t)) return "Slip/Trip/Fall";
  if(/temperature|cold|hot|temp|حرارة|تبريد|تجميد/.test(t)) return "Food Safety";
  if(/hygiene|clean|sanitize|dirty|نظافة|اتساخ|تعقيم/.test(t)) return "Hygiene";
  if(/fire|smoke|flamm|حريق|دخان/.test(t)) return "Fire Risk";
  if(/electric|socket|wire|cable|power|كهرب|سلك|قابس/.test(t)) return "Electrical";
  if(/equipment|machine|tool|blade|forklift|conveyor|آلة|معدة|جهاز/.test(t)) return "Equipment Safety";
  if(/storage|stack|shelf|rack|store|تخزين|رف|رص/.test(t)) return "Storage";
  return "General Safety";
}

function suggestedActionsFor(classification){
  const map = {
    "Slip/Trip/Fall": [
      "Clean the area immediately",
      "Place warning sign",
      "Restrict access until safe"
    ],
    "Food Safety": [
      "Inspect affected items",
      "Isolate unsafe stock",
      "Verify temperature / holding conditions"
    ],
    "Hygiene": [
      "Clean and sanitize area",
      "Replace contaminated items if needed",
      "Inform supervisor"
    ],
    "Fire Risk": [
      "Remove ignition source if safe",
      "Inform supervisor immediately",
      "Check extinguisher / emergency readiness"
    ],
    "Electrical": [
      "Stop using the equipment",
      "Isolate power if safe",
      "Inform maintenance"
    ],
    "Equipment Safety": [
      "Stop using equipment",
      "Tag / isolate if unsafe",
      "Inform maintenance"
    ],
    "Storage": [
      "Re-arrange storage safely",
      "Separate damaged / unsafe items",
      "Inform supervisor"
    ],
    "General Safety": [
      "Inspect the area",
      "Take immediate corrective action if needed",
      "Inform supervisor"
    ]
  };
  return (map[classification] || map["General Safety"]).join("\n");
}

function updateSafetySmartFields(){
  const likelihood = $("sLikelihood")?.value || "POSSIBLE";
  const severityImpact = $("sSeverityImpact")?.value || "MEDIUM";
  const riskDetails = safetyRiskDetails(likelihood, severityImpact);
  const risk = riskDetails.risk;

  let noteText = "";
  if(Array.isArray(window.__safetyLines) && window.__safetyLines.length){
    noteText = window.__safetyLines
      .map(v => String(v || "").trim())
      .filter(Boolean)
      .join("\n");
  }
  if(!noteText){
    noteText = $("sNoteText")?.value || "";
  }
  if($("sNoteText")) $("sNoteText").value = noteText;

  const classification = classifySafetyNote(noteText);
  const baseSuggestions = suggestedActionsFor(classification);
  const showSuggested = ["MEDIUM","HIGH","CRITICAL"].includes(normalizeLevel(risk));
  const fullSuggestion = showSuggested
    ? `Suggested Action / الإجراء المقترح

${baseSuggestions}

Source: dnata dCROM chapter 2.7`
    : "";

  const riskEl = $("sRiskLevel");
  if(riskEl){
    riskEl.textContent = risk;
    riskEl.className = "pill " + levelClass(risk);
  }
  const formulaEl = $("sRiskFormula");
  if(formulaEl){
    formulaEl.textContent = `Risk Score = Likelihood (${riskDetails.lKey.replace(/_/g," ")}=${riskDetails.lVal}) × Severity (${riskDetails.sKey}=${riskDetails.sVal}) = ${riskDetails.score}. LOW ≤4, MEDIUM 5–12, HIGH >12.`;
  }
  if($("sAutoCategory")) $("sAutoCategory").value = classification;
  if($("sActionWrapV63")) $("sActionWrapV63").style.display = showSuggested ? "" : "none";
  if($("sSuggestedAction")) $("sSuggestedAction").value = fullSuggestion;

  const warn = $("sEscalationWarn");
  if(warn){
    if(["HIGH","CRITICAL"].includes(normalizeLevel(risk))){
      warn.style.display = "";
      warn.textContent = "High Risk – Escalation Required / مخاطر عالية – يلزم التصعيد";
    } else {
      warn.style.display = "none";
      warn.textContent = "";
    }
  }
}

function applyV63StaticLayout(){
  const ns = $("notesSection");
  if(ns) ns.style.display = "none";

  // Keep old hidden values empty when using V63 flow
  if($("notes")) $("notes").value = "";

  const oldCatWrap = $("sCategory")?.parentElement;
  if(oldCatWrap) oldCatWrap.style.display = "none";
}

  // ====== SAFETY NOTES ======
  
function countLevels(notes) {
    const c = { LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0 };
    (notes || []).forEach(n => {
      const risk = normalizeLevel(n.risk || n.calculated_risk || "LOW");
      c[risk] = (c[risk] || 0) + 1;
    });
    return c;
  }

  
function renderCounters(notes) {
    const c = countLevels(notes || []);
    const el = $("sevCounters");
    if(!el) return;
    el.innerHTML = `
      <span class="badge"><span class="dot critical"></span> CRITICAL: ${c.CRITICAL}</span>
      <span class="badge"><span class="dot high"></span> HIGH: ${c.HIGH}</span>
      <span class="badge"><span class="dot medium"></span> MEDIUM: ${c.MEDIUM}</span>
      <span class="badge"><span class="dot low"></span> LOW: ${c.LOW}</span>
    `;
  }

  function levelRank(v){
    const x = normalizeLevel(v);
    return (x==="CRITICAL")?4:(x==="HIGH")?3:(x==="MEDIUM")?2:(x==="LOW")?1:0;
  }
  function filterAndSortSafety(notes){
    const q = ($("safetySearch")?.value || "").trim().toLowerCase();
    const f = ($("safetyFilter")?.value || "ALL").toUpperCase();

    let arr = Array.isArray(notes) ? [...notes] : [];
    if(f !== "ALL"){
      arr = arr.filter(n => normalizeLevel(n.risk) === f || normalizeLevel(n.severity) === f);
    }
    if(q){
      arr = arr.filter(n => {
        const t = ((n.note_ar||"") + " " + (n.note_en||"") + " " + (n.action_taken||"")).toLowerCase();
        return t.includes(q);
      });
    }
    // Sort: highest risk then newest
    arr.sort((a,b)=>{
      const ra = Math.max(levelRank(a.risk), levelRank(a.severity));
      const rb = Math.max(levelRank(b.risk), levelRank(b.severity));
      if(rb !== ra) return rb - ra;
      return (b.createdAt||0) - (a.createdAt||0);
    });
    return arr;
  }


function renderSafety(notes) {
    renderCounters(notes || []);
    const viewNotes = filterAndSortSafety(notes || []);
    const list = $("safetyList");
    if(!list) return;
    list.innerHTML = "";

    viewNotes.forEach((n, i) => {
      const noteId = n.id || makeId('saf');
      if(!n.id) n.id = noteId;
      const risk = normalizeLevel(n.risk || "LOW");
      const div = document.createElement("div");
      div.className = "noteItem";
      div.innerHTML = `
        <div class="noteTop">
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span class="issueNumber">${i+1}.</span>
            <span class="muted">${escapeHtml(new Date(n.createdAt || Date.now()).toLocaleString())}</span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span class="pill ${levelClass(risk)}">Risk: ${risk}</span>
            <span class="pill">Likelihood: ${escapeHtml(n.likelihood || "-")}</span>
            <span class="pill">Severity: ${escapeHtml(n.severityImpact || n.severity || "-")}</span>
            <span class="pill">Class: ${escapeHtml(n.classification || "General Safety")}</span>
          </div>
        </div>
        <div class="riskCalcLine">Risk Score: ${escapeHtml(n.riskFormula || ((n.riskScore != null) ? String(n.riskScore) : "Likelihood × Severity"))}</div>

        <div class="noteText">
          ${n.note_en ? `<div class="en">${escapeHtml(n.note_en)}</div>` : ""}
          ${n.note_ar ? `<div class="ar">${escapeHtml(n.note_ar)}</div>` : ""}
        </div>

        ${n.suggested_actions ? `<div class="muted" style="white-space:pre-wrap; margin-top:8px;">${escapeHtml(n.suggested_actions)}</div>` : ""}
        ${n.action_taken ? `<div class="finalAction" style="margin-top:8px;"><span class="finalLabelInline">Action Taken / Required:</span> ${escapeHtml(n.action_taken)}</div>` : ""}

        ${Array.isArray(n.images) && n.images.length ? `
          <div class="imgStrip">
            ${n.images.map((src) => `<img class="imgThumb" src="${src}" alt="img" />`).join("")}
          </div>
        ` : ""}

        <div class="noteActions">
          <button class="smallBtn" data-open="${escapeHtml(noteId)}">Edit</button>
          <button class="smallBtn danger" data-del="${escapeHtml(noteId)}">Delete</button>
        </div>
      `;
      list.appendChild(div);
    });

    list.querySelectorAll("[data-open]").forEach(btn => {
      btn.addEventListener("click", () => openSafetySavedNote(btn.getAttribute("data-open")));
    });
    list.querySelectorAll("[data-del]").forEach(btn => {
      btn.addEventListener("click", () => deleteSafetyNote(btn.getAttribute("data-del")));
    });

    list.querySelectorAll(".imgThumb").forEach(img => {
      img.addEventListener("click", () => window.open(img.src, "_blank"));
    });
  }

  function deleteSafetyNote(noteId) {
    if (!currentDept || !noteId) return;
    const ok = confirm(t("هل تريد حذف هذه الملاحظة؟","Delete this note?"));
    if(!ok) return;
    const report = loadReport(currentDept.key) || {};
    const notes = Array.isArray(report.safetyNotes) ? report.safetyNotes : [];
    report.safetyNotes = notes.filter(n => (n.id || '') !== noteId);
    saveReport(currentDept.key, report);
    if(__safetyEditIndex === noteId) resetSafetyDraftUI();
    renderSafety(report.safetyNotes);
    renderSavedSafetyDraftNotes(report.safetyNotes);
    $("saveStatus").textContent = "Deleted ✓";
    setTimeout(() => { if ($("saveStatus")) $("saveStatus").textContent = ""; }, 900);
  }

  function deleteNote(noteId) {
    deleteSafetyNote(noteId);
  }

  // ====== MODAL ======
  function openModal() {
    $("modalBack").style.display = "flex";
  }
  function closeModal() {
    $("modalBack").style.display = "none";
  }

  function clearModal() {
    $("mAction").value = "";
    $("mNoteAr").value = "";
    $("mNoteEn").value = "";
    $("mSeverity").value = "LOW";
    $("mRisk").value = "LOW";
    $("mImages").value = "";
    tempImages = [];
    renderModalImages();
    setDirty(true);
  }

  function renderModalImages() {
    const p = $("mPreview");
    p.innerHTML = "";
    tempImages.forEach((src, i) => {
      const img = document.createElement("img");
      img.className = "imgThumb";
      img.src = src;
      img.title = "Click to remove";
      img.addEventListener("click", () => {
        tempImages.splice(i, 1);
        renderModalImages();
        setDirty(true);
      });
      p.appendChild(img);
    });
  }

function renderSafetyScreenImages(){
  const area = $("safetyImgs");
  if(!area) return;
  area.innerHTML = "";
  tempImages.forEach((src, i)=>{
    const img = document.createElement("img");
    img.className = "imgThumb";
    img.src = src;
    img.title = "Click to remove";
    img.addEventListener("click", ()=>{
      tempImages.splice(i,1);
      renderSafetyScreenImages();
      scheduleSafetyDraftAutoSave();
    });
    area.appendChild(img);
  });
}


function showSafety(){
  applyV63StaticLayout();
  $("screenHome").style.display = "none";
  $("screenReport").style.display = "none";
  $("screenSafety").style.display = "";
  updateTopResetUI("safety");
  if($("sLikelihood") && !$("sLikelihood").value) $("sLikelihood").value = "POSSIBLE";
  if($("sSeverityImpact") && !$("sSeverityImpact").value) $("sSeverityImpact").value = "MEDIUM";
  updateSafetySmartFields();
  const r = currentDept ? loadReport(currentDept.key) : null;
  renderSavedSafetyDraftNotes(r?.safetyNotes || []);
  setSafetyDraftMode(!!__safetyEditIndex);
  restoreSafetyDraft();
}

function backFromSafety(){
  if(!confirmDiscardIfDirty()) return;
  $("screenSafety").style.display = "none";
  $("screenReport").style.display = "";
  updateTopResetUI("section");
}

function applySafetyDir(){
  const lang = window.currentLang || "AR";
  const dir = (lang === "AR") ? "rtl" : "ltr";
  const el = $("sNoteText");
  if(!el) return;
  el.style.setProperty("direction", dir, "important");
  el.style.setProperty("text-align", (dir==="rtl") ? "right" : "left", "important");
}


function resetSafetyDraftUI(){
  clearSafetyDraftStorage();
  const snap = {kind:"safetyDraft", tempImages:[...tempImages], sNoteText: $("sNoteText")?.value || "" };
  showUndoToast("Safety draft cleared.", snap, restoreSnapshot);
  tempImages = [];
  if($("sNoteText")) $("sNoteText").value = "";
  window.__safetyLines = [];
  renderNoteLines("safetyNoteList","sNoteText", window.__safetyLines);
  wireAddNoteButton("btnAddSafetyLine","safetyNoteList","sNoteText", window.__safetyLines);

  __safetyEditIndex = null;
  if($("sLikelihood")) $("sLikelihood").value = "POSSIBLE";
  if($("sSeverityImpact")) $("sSeverityImpact").value = "MEDIUM";
  if($("sAutoCategory")) $("sAutoCategory").value = "";
  if($("sSuggestedAction")) $("sSuggestedAction").value = "";
  if($("actionTaken")) $("actionTaken").value = "";
  if($("sActionWrapV63")) $("sActionWrapV63").style.display = "none";
  if($("sEscalationWarn")) { $("sEscalationWarn").style.display = "none"; $("sEscalationWarn").textContent = ""; }
  renderSafetyScreenImages();
  applySafetyDir();
  updateSafetySmartFields();
  setSafetyDraftMode(false);
  const r = currentDept ? loadReport(currentDept.key) : null;
  renderSavedSafetyDraftNotes(r?.safetyNotes || []);
}

function openSafetyNewNote(){
  if(!currentDept) return;
  resetSafetyDraftUI();
  showSafety();
  setSafetyDraftMode(true);
  // User already chose to add a safety entry, so the first note field is ready immediately.
  window.__safetyLines = [""];
  renderNoteLines("safetyNoteList","sNoteText", window.__safetyLines);
  syncHiddenFromLines("sNoteText", window.__safetyLines);
  setTimeout(()=>{
    const first = document.querySelector("#safetyNoteList textarea.noteLine");
    if(first) first.focus();
  }, 80);
}



function saveSafetyFromScreen(){
  if(!currentDept) return;

  if(window.__safetyLines) syncHiddenFromLines("sNoteText", window.__safetyLines);
  const noteText = $("sNoteText").value.trim();
  if(!noteText){
    alert("اكتب الملاحظة أولاً.");
    return;
  }

  const report = collectReportFromForm();
  const notes = report.safetyNotes || [];

  const entryType = $("sEntryType")?.value || "NOTE";
  const observationCount = notes.filter(n => (n.entryType||"NOTE")==="OBSERVATION").length;
  const noteCount = notes.filter(n => (n.entryType||"NOTE")==="NOTE").length;

  if(!__safetyEditIndex){
    if(entryType === "NOTE" && noteCount >= 3){
      alert("الحد الأقصى 3 Safety Notes لكل قسم.");
      return;
    }
    if(entryType === "OBSERVATION" && observationCount >= 3){
      alert("الحد الأقصى 3 Safety Observations لكل قسم.");
      return;
    }
  }

  const likelihood = $("sLikelihood")?.value || "POSSIBLE";
  const severityImpact = $("sSeverityImpact")?.value || "MEDIUM";
  const riskDetails = safetyRiskDetails(likelihood, severityImpact);
  const calculatedRisk = riskDetails.risk;
  const classification = classifySafetyNote(noteText);
  const actionTaken = $("actionTaken")?.value?.trim() || "";
  const suggestedActions = $("sSuggestedAction")?.value || (["MEDIUM","HIGH","CRITICAL"].includes(normalizeLevel(calculatedRisk))
    ? `Suggested Action / الإجراء المقترح

${suggestedActionsFor(classification)}

Source: dnata dCROM chapter 2.7`
    : "");

  const existingId = __safetyEditIndex || makeId('saf');
  const item = {
    id: existingId,
    entryType,
    consequence: $("sConsequence")?.value || "People",
    category: classification,
    classification: classification,
    note_ar: noteText,
    note_en: noteText,
    likelihood: likelihood,
    severityImpact: severityImpact,
    risk: calculatedRisk,
    riskScore: riskDetails.score,
    riskFormula: `${riskDetails.lKey.replace(/_/g," ")} (${riskDetails.lVal}) × ${riskDetails.sKey} (${riskDetails.sVal}) = ${riskDetails.score}`,
    severity: calculatedRisk,
    suggested_actions: suggestedActions,
    action_taken: actionTaken,
    images: [...tempImages],
    createdAt: (__safetyEditIndex && notes.find(n => (n.id || '') === __safetyEditIndex)?.createdAt) ? notes.find(n => (n.id || '') === __safetyEditIndex).createdAt : Date.now(),
    updatedAt: Date.now()
  };

  if(__safetyEditIndex){
    const idx = notes.findIndex(n => (n.id || '') === __safetyEditIndex);
    if(idx >= 0) notes[idx] = item;
    else notes.push(item);
  }else{
    notes.push(item);
  }

  report.safetyNotes = notes;
  saveReport(currentDept.key, report);
  clearSafetyDraftStorage();
  renderSafety(notes);
  renderSavedSafetyDraftNotes(notes);
  resetSafetyDraftUI();
  setSafetyDraftMode(false);
  clearDirty();
  showToast(t("تم حفظ ملاحظة السلامة ✓","Saved Safety Note ✓"), "success", 1800);
}


  function openNoteModal(index) {
  if (!currentDept) return;

  const report = collectReportFromForm();
  const notes = report.safetyNotes || [];

  editIndex = (typeof index === "number") ? index : -1;

  if (editIndex >= 0) {
    $("modalTitle").textContent = "تعديل ملاحظة";
    const n = notes[editIndex];

    $("mNoteAr").value = n.note_ar || "";
    $("mNoteEn").value = n.note_en || "";
    $("mSeverity").value = normalizeLevel(n.severity);
    $("mRisk").value = normalizeLevel(n.risk);
    $("mAction").value = n.action_taken || "";

    tempImages = Array.isArray(n.images) ? [...n.images] : [];
    renderModalImages();
  } else {
    $("modalTitle").textContent = "إضافة ملاحظة";
    clearModal();
  }

  openModal();
}

  async function filesToDataUrls(files) {
  // Convert selected images to compressed/resized dataURLs (saves localStorage size)
  const list = [];
  for (const f of files) {
    const dataUrl = await fileToDataURL(f);
    list.push(dataUrl);
  }
  return list;
}

  async function onPickImages(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    // Edge case limit: keep it reasonable (like Kivy UX)
    const remaining = Math.max(0, 6 - tempImages.length);
    const take = files.slice(0, remaining);

    const urls = await filesToDataUrls(take);
    tempImages = tempImages.concat(urls);
    renderModalImages();
  }

  function saveNoteFromModal() {
    if (!currentDept) return;
    const action_taken = $("mAction").value.trim();
    const note_ar = $("mNoteAr").value.trim();
    const note_en = $("mNoteEn").value.trim();
    const severity = normalizeLevel($("mSeverity").value);
    const risk = normalizeLevel($("mRisk").value);

    if (!note_ar && !note_en) {
      alert("اكتب ملاحظة واحدة على الأقل (عربي أو إنجليزي).");
      return;
    }

    const report = collectReportFromForm();
    const notes = report.safetyNotes || [];

    const payload = {
      action_taken,
      note_ar,
      note_en,
      severity,
      risk,
      images: [...tempImages],
      createdAt: (editIndex >= 0 && notes[editIndex]?.createdAt) ? notes[editIndex].createdAt : Date.now()
    };

    if (editIndex >= 0) {
      notes[editIndex] = payload;
    } else {
      notes.unshift(payload);
    }

    report.safetyNotes = notes;
    saveReport(currentDept.key, report);
    renderSafety(notes);

    closeModal();
    editIndex = -1;
    clearDirty();
    showToast(t("تم حفظ الملاحظة ✓","Saved Note ✓"), "success", 1800);
}


  // ====== PHASE 0.1 AUTO SAVE (safe layer) ======
  // Silent auto-save for the current section. This does not replace the explicit
  // Save Issue / Save Safety buttons; it only protects open page fields from being lost.
  let __autoSaveTimer = null;
  let __autoSaveBusy = false;

  function markUnsaved(){
    setDirty(true);
    scheduleAutoSave();
  }
  window.__markUnsaved = markUnsaved;

  function setSaveStatus(msg, ms=1200){
    const st = $("saveStatus");
    if(!st) return;
    st.textContent = msg || "";
    if(ms){
      setTimeout(()=>{ if(st.textContent === msg) st.textContent = ""; }, ms);
    }
  }

  function saveCurrentReportSilent(){
    if(!currentDept || __autoSaveBusy) return false;
    try{
      __autoSaveBusy = true;
      const report = collectReportFromForm();
      const prev = loadReport(currentDept.key) || {};
      report.createdAt = prev.createdAt || isoNow();
      report.reportId = prev.reportId || makeReportId(currentDept.key);

      const changed = JSON.stringify(normalizeForCompare(prev)) !== JSON.stringify(normalizeForCompare(report));
      if(changed){
        report.updatedAt = isoNow();
        saveReport(currentDept.key, report);
      }else{
        saveReport(currentDept.key, prev);
      }
      clearDirty();
      setSaveStatus(t("تم الحفظ تلقائيًا ✓", "Auto saved ✓"), 1000);
      return true;
    }catch(e){
      console.warn("Auto save failed", e);
      setDirty(true);
      setSaveStatus(t("تعذر الحفظ التلقائي", "Auto save failed"), 1600);
      return false;
    }finally{
      __autoSaveBusy = false;
    }
  }

  function scheduleAutoSave(delay=450){
    if(!currentDept) return;
    if(__autoSaveTimer) clearTimeout(__autoSaveTimer);
    __autoSaveTimer = setTimeout(saveCurrentReportSilent, delay);
  }

  function safetyDraftKey(){
    return currentDept ? `duty_report_v5_${currentDept.key}_safety_draft` : null;
  }
  function saveSafetyDraftSilent(){
    const key = safetyDraftKey();
    if(!key) return;
    try{
      const payload = {
        editId: __safetyEditIndex || null,
        entryType: $("sEntryType")?.value || "NOTE",
        consequence: $("sConsequence")?.value || "People",
        noteText: $("sNoteText")?.value || "",
        likelihood: $("sLikelihood")?.value || "POSSIBLE",
        severityImpact: $("sSeverityImpact")?.value || "MEDIUM",
        actionTaken: $("actionTaken")?.value || "",
        suggestedAction: $("sSuggestedAction")?.value || "",
        images: Array.isArray(tempImages) ? [...tempImages] : [],
        updatedAt: isoNow()
      };
      localStorage.setItem(key, JSON.stringify(payload));
      setSaveStatus(t("تم حفظ مسودة السلامة تلقائيًا ✓", "Safety draft auto saved ✓"), 1000);
    }catch(e){ console.warn("Safety draft auto save failed", e); }
  }
  function scheduleSafetyDraftAutoSave(delay=450){
    if(!currentDept) return;
    if(__autoSaveTimer) clearTimeout(__autoSaveTimer);
    __autoSaveTimer = setTimeout(saveSafetyDraftSilent, delay);
  }
  function restoreSafetyDraft(){
    const key = safetyDraftKey();
    if(!key) return;
    try{
      const raw = localStorage.getItem(key);
      if(!raw) return;
      const d = JSON.parse(raw);
      if(!d) return;
      if($("sEntryType")) $("sEntryType").value = d.entryType || "NOTE";
      if($("sConsequence")) $("sConsequence").value = d.consequence || "People";
      if($("sNoteText")) $("sNoteText").value = d.noteText || "";
      if($("sLikelihood")) $("sLikelihood").value = d.likelihood || "POSSIBLE";
      if($("sSeverityImpact")) $("sSeverityImpact").value = d.severityImpact || "MEDIUM";
      if($("actionTaken")) $("actionTaken").value = d.actionTaken || "";
      if($("sSuggestedAction")) $("sSuggestedAction").value = d.suggestedAction || "";
      tempImages = Array.isArray(d.images) ? [...d.images] : [];
      renderSafetyScreenImages();
      applySafetyDir();
      updateSafetySmartFields();
      if((d.noteText || "").trim() || tempImages.length){
        setSaveStatus(t("تم استرجاع مسودة السلامة", "Safety draft restored"), 1400);
      }
    }catch(e){ console.warn("Safety draft restore failed", e); }
  }
  function clearSafetyDraftStorage(){
    const key = safetyDraftKey();
    if(!key) return;
    try{ localStorage.removeItem(key); }catch(e){}
  }




  // ====== V66 PHASE 3: REPORT ARCHIVE / SHIFT HISTORY ======
  const ARCHIVE_STORAGE_KEY = "duty_report_archive_v66";
  const ARCHIVE_MAX_ITEMS = 80;

  function archiveTodayKey(dateObj, shift){
    const d = dateObj || new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}_${String(shift || "-").trim() || "-"}`;
  }

  function readArchive(){
    try{
      const raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(Boolean) : [];
    }catch(e){
      console.warn("Archive read failed", e);
      return [];
    }
  }

  function writeArchive(items){
    try{
      const clean = (Array.isArray(items) ? items : []).filter(Boolean).slice(0, ARCHIVE_MAX_ITEMS);
      localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(clean));
    }catch(e){
      console.warn("Archive write failed", e);
    }
  }

  function collectArchiveMeta(){
    const departments = Array.isArray(DEPARTMENTS) ? DEPARTMENTS : [];
    const catCount = {};
    const safetyCount = {LOW:0, MEDIUM:0, HIGH:0, CRITICAL:0};
    let sectionsWithEntries = 0;
    let totalIssues = 0;
    let totalNotes = 0;
    let employeeTotal = 0;

    function addCat(cat){
      const c = String(cat || "General").trim() || "General";
      catCount[c] = (catCount[c] || 0) + 1;
    }

    departments.forEach(d => {
      const report = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport(d.key) || {}));
      const sectionNotes = Array.isArray(report.sectionNotes) ? report.sectionNotes : [];
      const issueNotes = Array.isArray(report.issueNotes) ? report.issueNotes : [];
      const safetyNotes = Array.isArray(report.safetyNotes) ? report.safetyNotes : [];
      const hasImages = Array.isArray(report.issueImages) && report.issueImages.length > 0;
      const emp = Number(String(report.employeeCount || "").trim());
      if(Number.isFinite(emp) && emp > 0) employeeTotal += emp;

      if(sectionNotes.length || issueNotes.length || safetyNotes.length || hasImages || emp > 0){
        sectionsWithEntries += 1;
      }
      totalNotes += sectionNotes.length + issueNotes.length + safetyNotes.length;
      totalIssues += issueNotes.length;
      issueNotes.forEach(n => addCat(n.category || report.sectionCategory));
      safetyNotes.forEach(n => {
        const risk = normalizeLevel(n.risk || n.calculated_risk || n.severity || "LOW");
        if(safetyCount[risk] == null) safetyCount[risk] = 0;
        safetyCount[risk] += 1;
        addCat(n.category || n.classification || "General Safety");
      });
    });

    const topCats = Object.entries(catCount).sort((a,b)=>b[1]-a[1]).slice(0,6);
    return { sectionsWithEntries, totalIssues, totalNotes, employeeTotal, safetyCount, topCats };
  }

  function saveSnapshotToArchive(snapshot){
    try{
      if(!snapshot || !snapshot.html) return;
      const now = new Date();
      const shift = getGlobalShift() || "-";
      let onDuty = "";
      try{ onDuty = (localStorage.getItem("onDutyName") || "").trim(); }catch(e){}
      const meta = collectArchiveMeta();
      const key = archiveTodayKey(now, shift);
      const item = {
        id: key,
        key,
        savedAt: now.toISOString(),
        displayDate: now.toLocaleDateString(),
        displayTime: now.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"}),
        shift,
        onDuty: onDuty || "Not Provided",
        title: `Duty Manager Report · ${now.toLocaleDateString()} · Shift ${shift || "-"}`,
        html: snapshot.html,
        createdAt: snapshot.createdAt || now.toLocaleString(),
        meta,
        recurringEntries: collectRecurringEntriesFromCurrentReports()
      };
      const existing = readArchive();
      const withoutSame = existing.filter(x => x && x.key !== key);
      withoutSame.unshift(item);
      writeArchive(withoutSame);
      renderArchiveList();
    }catch(e){
      console.warn("Archive save failed", e);
    }
  }

  function archiveRiskChip(meta){
    const s = meta?.safetyCount || {};
    if((s.CRITICAL || 0) > 0 || (s.HIGH || 0) > 0) return `<span class="archiveChip high">High Risk ${(s.CRITICAL||0)+(s.HIGH||0)}</span>`;
    if((s.MEDIUM || 0) > 0) return `<span class="archiveChip medium">Medium Risk ${s.MEDIUM||0}</span>`;
    return `<span class="archiveChip good">Normal Safety</span>`;
  }

  function renderArchiveList(){
    const list = $("archiveList");
    if(!list) return;
    const items = readArchive();
    if(!items.length){
      list.innerHTML = `<div class="archiveEmpty">No archived reports yet.<br>Open Final Report once to save the current shift report into the archive.</div>`;
      return;
    }
    list.innerHTML = items.map(item => {
      const meta = item.meta || {};
      const cats = Array.isArray(meta.topCats) ? meta.topCats.slice(0,3).map(([k,v])=>`${escapeHtml(k)} (${v})`).join(" • ") : "";
      return `
        <div class="archiveItem" data-archive-id="${escapeHtml(item.id)}">
          <div>
            <div class="archiveItemTitle">${escapeHtml(item.title || "Duty Manager Report")}</div>
            <div class="archiveItemMeta">
              <span class="archiveChip">Date ${escapeHtml(item.displayDate || "-")}</span>
              <span class="archiveChip">Time ${escapeHtml(item.displayTime || "-")}</span>
              <span class="archiveChip">Shift ${escapeHtml(item.shift || "-")}</span>
              <span class="archiveChip">On Duty ${escapeHtml(item.onDuty || "Not Provided")}</span>
              <span class="archiveChip">Entries ${meta.sectionsWithEntries || 0}</span>
              <span class="archiveChip">Notes ${meta.totalNotes || 0}</span>
              <span class="archiveChip">Employees ${meta.employeeTotal || "Not Reported"}</span>
              ${archiveRiskChip(meta)}
            </div>
            ${cats ? `<div class="archiveItemMeta" style="margin-top:8px;">${cats}</div>` : ``}
          </div>
          <div class="archiveActions">
            <button type="button" class="secondaryBtn archiveOpenBtn" data-archive-open="${escapeHtml(item.id)}">Open</button>
            <button type="button" class="secondaryBtn archiveDeleteBtn" data-archive-delete="${escapeHtml(item.id)}">Delete</button>
          </div>
        </div>
      `;
    }).join("");
  }

  function openArchiveModal(){
    renderArchiveList();
    const back = $("archiveBack");
    if(back) back.style.display = "flex";
  }

  function closeArchiveModal(){
    const back = $("archiveBack");
    if(back) back.style.display = "none";
  }

  function openArchivedReport(id){
    const item = readArchive().find(x => x && x.id === id);
    if(!item) return;
    closeArchiveModal();
    __activeFinalReportSnapshot = { html: item.html || "", createdAt: item.createdAt || item.savedAt || "Archived Report", archived: true, archiveId: item.id };
    if($("finalReportArea")) $("finalReportArea").innerHTML = __activeFinalReportSnapshot.html;
    if($("finalMeta")) $("finalMeta").textContent = `Archived: ${item.displayDate || "-"} ${item.displayTime || ""} · Shift ${item.shift || "-"}`;
    if($("finalBack")) $("finalBack").style.display = "flex";
  }

  function deleteArchivedReport(id){
    const items = readArchive();
    writeArchive(items.filter(x => x && x.id !== id));
    renderArchiveList();
  }

  function handleArchiveListClick(e){
    const openBtn = e.target.closest?.("[data-archive-open]");
    if(openBtn){ openArchivedReport(openBtn.getAttribute("data-archive-open")); return; }
    const delBtn = e.target.closest?.("[data-archive-delete]");
    if(delBtn){
      const id = delBtn.getAttribute("data-archive-delete");
      if(confirm("Delete this archived report from this device?")) deleteArchivedReport(id);
    }
  }



  // ====== V66 PHASE 4: RECURRING ISSUES DETECTION ======
  function normalizeRecurringText(v){
    return String(v || "")
      .toLowerCase()
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .replace(/[\W_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function recurringTokens(v){
    return normalizeRecurringText(v).split(" ").filter(w => w && w.length > 2);
  }

  function recurringSimilarity(a, b){
    const aa = normalizeRecurringText(a);
    const bb = normalizeRecurringText(b);
    if(!aa || !bb) return 0;
    if(aa === bb) return 1;
    if(aa.length > 10 && bb.length > 10 && (aa.includes(bb) || bb.includes(aa))) return 0.85;
    const ta = new Set(recurringTokens(aa));
    const tb = new Set(recurringTokens(bb));
    if(!ta.size || !tb.size) return 0;
    let hit = 0;
    ta.forEach(x => { if(tb.has(x)) hit += 1; });
    return hit / Math.max(ta.size, tb.size);
  }

  function collectRecurringEntriesFromCurrentReports(){
    const entries = [];
    (Array.isArray(DEPARTMENTS) ? DEPARTMENTS : []).forEach(d => {
      const r = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport(d.key) || {}));
      const issueNotes = dedupeIssueNotes(Array.isArray(r.issueNotes) ? r.issueNotes : []);
      issueNotes.forEach(n => {
        const text = String(n.issueDesc || "").trim();
        if(text){
          entries.push({
            type: "issue",
            section: d.en || d.key,
            category: n.category || "General",
            text,
            action: n.action || ""
          });
        }
      });
      (Array.isArray(r.safetyNotes) ? r.safetyNotes : []).forEach(n => {
        const text = String(n.note_en || n.note_ar || n.text || "").trim();
        if(text){
          entries.push({
            type: "safety",
            section: d.en || d.key,
            category: n.classification || n.category || "General Safety",
            text,
            action: n.action_taken || n.action || ""
          });
        }
      });
    });
    return entries;
  }

  function currentArchiveKey(){
    return archiveTodayKey(new Date(), getGlobalShift() || "-");
  }

  function findRecurringMatches(entry, limit=3){
    if(!entry || !entry.text) return [];
    const currentKey = currentArchiveKey();
    const matches = [];
    readArchive().forEach(item => {
      if(!item || item.key === currentKey) return;
      const oldEntries = Array.isArray(item.recurringEntries) ? item.recurringEntries : [];
      oldEntries.forEach(old => {
        if(!old || old.type !== entry.type) return;
        const sameCategory = normalizeRecurringText(old.category) === normalizeRecurringText(entry.category);
        const sameSection = normalizeRecurringText(old.section) === normalizeRecurringText(entry.section);
        const sim = recurringSimilarity(old.text, entry.text);
        const isMatch = (sameCategory && sim >= 0.55) || (sameSection && sim >= 0.65) || sim >= 0.78;
        if(isMatch){
          matches.push({
            date: item.displayDate || "Previous report",
            shift: item.shift || "-",
            section: old.section || "-",
            category: old.category || "-",
            score: sim
          });
        }
      });
    });
    const uniq = [];
    const seen = new Set();
    matches.sort((a,b)=>(b.score||0)-(a.score||0)).forEach(m => {
      const key = `${m.date}|${m.shift}|${m.section}|${m.category}`;
      if(seen.has(key)) return;
      seen.add(key);
      uniq.push(m);
    });
    return uniq.slice(0, limit);
  }

  function renderRecurringNotice(matches){
    if(!Array.isArray(matches) || !matches.length) return "";
    const dates = matches.map(m => `${escapeHtml(m.date)} · Shift ${escapeHtml(m.shift || "-")}`).join(" • ");
    return `<div class="finalRecurringBox"><strong>Recurring Observation:</strong> This item was previously reported on ${dates}.</div>`;
  }

  // ====== V66 PHASE 1: REPORT COMPLETENESS CHECK ======
  let __completenessContinueAction = null;

  function shortDeptNameByKey(key){
    const d = (Array.isArray(DEPARTMENTS) ? DEPARTMENTS : []).find(x => x.key === key);
    return d ? (d.en || d.ar || key) : key;
  }

  function isBlankText(v){
    return !String(v || "").trim();
  }

  function summarizeDraftText(v){
    const t = String(v || "").trim().replace(/\s+/g, " ");
    return t.length > 70 ? t.slice(0, 67) + "..." : t;
  }

  function getSafetyDraftForDept(deptKey){
    try{
      const raw = localStorage.getItem(`duty_report_v5_${deptKey}_safety_draft`);
      if(!raw) return null;
      return JSON.parse(raw);
    }catch(e){
      return null;
    }
  }

  function collectReportCompletenessIssues(){
    const issues = [];

    let onDuty = "";
    try{ onDuty = (localStorage.getItem("onDutyName") || "").trim(); }catch(e){}
    if(!onDuty){
      issues.push({
        title: "On Duty name not provided",
        detail: "Add the report owner name from the top bar before issuing the final report."
      });
    }

    const departments = Array.isArray(DEPARTMENTS) ? DEPARTMENTS : [];
    let anyEmployeeCount = false;

    departments.forEach(d => {
      const report = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport(d.key) || {}));
      const deptName = d.en || d.ar || d.key;

      if(String(report.employeeCount || "").trim()){
        anyEmployeeCount = true;
      }

      const savedIssues = Array.isArray(report.issueNotes) ? report.issueNotes : [];
      savedIssues.forEach((n, idx) => {
        if(!isBlankText(n.issueDesc) && isBlankText(n.action)){
          issues.push({
            title: `${deptName}: Issue ${idx + 1} missing Action Taken`,
            detail: summarizeDraftText(n.issueDesc) || "Issue description is present but no action was recorded."
          });
        }
      });

      // Open Issue draft protected by Auto Save. It should be approved with Save Issue or cleared.
      const legacyDesc = String(report.sectionIssueDesc || "").trim();
      const legacyAction = String(report.sectionAction || "").trim();
      if(legacyDesc || legacyAction || (Array.isArray(report.issueImages) && report.issueImages.length)){
        issues.push({
          title: `${deptName}: unsaved Issue draft`,
          detail: legacyDesc ? `Draft: ${summarizeDraftText(legacyDesc)}` : "Issue draft/images exist but were not saved as an Issue card."
        });
      }

      const safetyNotes = Array.isArray(report.safetyNotes) ? report.safetyNotes : [];
      safetyNotes.forEach((n, idx) => {
        const risk = normalizeLevel(n.risk || n.calculated_risk || n.severity || "LOW");
        const noteText = (n.note_en || n.note_ar || "").trim();
        if(["MEDIUM", "HIGH", "CRITICAL"].includes(risk) && isBlankText(n.action_taken)){
          issues.push({
            title: `${deptName}: Safety Entry ${idx + 1} missing Action Taken / Required`,
            detail: noteText ? `${risk}: ${summarizeDraftText(noteText)}` : `${risk} safety entry requires an action.`
          });
        }
      });

      const draft = getSafetyDraftForDept(d.key);
      if(draft){
        const hasDraft = String(draft.noteText || "").trim() || String(draft.actionTaken || "").trim() || (Array.isArray(draft.images) && draft.images.length);
        if(hasDraft){
          issues.push({
            title: `${deptName}: unsaved Safety draft`,
            detail: draft.noteText ? `Draft: ${summarizeDraftText(draft.noteText)}` : "Safety draft/images exist but were not saved as a Safety Entry."
          });
        }
      }
    });

    if(!anyEmployeeCount){
      issues.unshift({
        title: "Employees Total not reported",
        detail: "Enter employee count in at least one relevant section so the final report has an accurate total."
      });
    }

    return issues;
  }

  function renderCompletenessIssues(issues){
    const list = $("completenessList");
    if(!list) return;
    if(!issues.length){
      list.innerHTML = `<div class="completenessItem completenessOk"><span class="completenessIcon">✓</span><div><strong>Report looks complete</strong><div>No missing required follow-up items were detected.</div></div></div>`;
      return;
    }
    list.innerHTML = issues.map(item => `
      <div class="completenessItem">
        <span class="completenessIcon">⚠</span>
        <div><strong>${escapeHtml(item.title)}</strong><div>${escapeHtml(item.detail || "")}</div></div>
      </div>
    `).join("");
  }

  function closeCompletenessModal(){
    const back = $("completenessBack");
    if(back) back.style.display = "none";
    __completenessContinueAction = null;
  }

  function showCompletenessModal(issues, continueAction){
    const back = $("completenessBack");
    if(!back){
      continueAction && continueAction();
      return;
    }
    __completenessContinueAction = continueAction || null;
    renderCompletenessIssues(issues || []);
    back.style.display = "flex";
  }

  function requestFinalReport(){
    const issues = collectReportCompletenessIssues();
    if(!issues.length){
      openFinalModal();
      return;
    }
    showCompletenessModal(issues, openFinalModal);
  }

  // ====== PDF ======
  function exportPdf() {
    // Open preview (Final Report) first, then user can print to PDF from there.
    requestFinalReport();
  }



  // ====== V66 PHASE 5: WEEKLY KPI ANALYTICS ======
  const WEEKLY_KPI_DISMISS_KEY = "duty_weekly_kpi_dismissed_v66";

  function getWeekStart(d = new Date()){
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const day = x.getDay(); // Sunday=0
    const diff = (day + 6) % 7; // Monday start
    x.setDate(x.getDate() - diff);
    x.setHours(0,0,0,0);
    return x;
  }

  function getWeeklyArchiveItems(){
    const start = getWeekStart(new Date());
    const end = new Date();
    return readArchive().filter(item => {
      const t = Date.parse(item.savedAt || item.createdAt || "");
      return Number.isFinite(t) && t >= start.getTime() && t <= end.getTime();
    });
  }

  function buildWeeklyKpiData(){
    const items = getWeeklyArchiveItems();
    const totals = { issues:0, notes:0, safety:0, high:0, medium:0, low:0, critical:0, employees:0 };
    const sectionCount = {};
    const categoryCount = {};
    const recurringMap = {};
    items.forEach(item => {
      const meta = item.meta || {};
      const sc = meta.safetyCount || {};
      totals.issues += Number(meta.totalIssues || 0);
      totals.notes += Number(meta.totalNotes || 0);
      totals.high += Number(sc.HIGH || 0);
      totals.critical += Number(sc.CRITICAL || 0);
      totals.medium += Number(sc.MEDIUM || 0);
      totals.low += Number(sc.LOW || 0);
      totals.safety += Number(sc.HIGH || 0) + Number(sc.CRITICAL || 0) + Number(sc.MEDIUM || 0) + Number(sc.LOW || 0);
      totals.employees = Math.max(totals.employees, Number(meta.employeeTotal || 0));
      (Array.isArray(meta.topCats) ? meta.topCats : []).forEach(([cat, count]) => {
        const c = String(cat || "General").trim() || "General";
        categoryCount[c] = (categoryCount[c] || 0) + Number(count || 0);
      });
      (Array.isArray(item.recurringEntries) ? item.recurringEntries : []).forEach(e => {
        const sec = String(e.section || "General").trim() || "General";
        sectionCount[sec] = (sectionCount[sec] || 0) + 1;
        const key = `${e.type || "entry"}|${e.category || "General"}|${normalizeRecurringText(e.text || "")}`;
        if(!recurringMap[key]) recurringMap[key] = { count:0, text:e.text || "", category:e.category || "General", section:e.section || "-", type:e.type || "entry", dates:[] };
        recurringMap[key].count += 1;
        if(item.displayDate && !recurringMap[key].dates.includes(item.displayDate)) recurringMap[key].dates.push(item.displayDate);
      });
    });
    const topSection = Object.entries(sectionCount).sort((a,b)=>b[1]-a[1])[0] || null;
    const topCategory = Object.entries(categoryCount).sort((a,b)=>b[1]-a[1])[0] || null;
    const recurring = Object.values(recurringMap).filter(x => x.count > 1).sort((a,b)=>b.count-a.count).slice(0,5);
    return { items, totals, topSection, topCategory, recurring, weekStart:getWeekStart(new Date()) };
  }

  function buildWeeklyKpiHtml(){
    const data = buildWeeklyKpiData();
    const { items, totals, topSection, topCategory, recurring, weekStart } = data;
    const startLabel = weekStart.toLocaleDateString();
    const endLabel = new Date().toLocaleDateString();
    const riskStatus = (totals.critical + totals.high) > 0 ? "High risk follow-up required" : (totals.medium > 0 ? "Safety observations managed" : "No high safety risk trend");
    const summaryLines = [];
    summaryLines.push(items.length ? `${items.length} archived daily report(s) were reviewed for this week.` : "No archived daily reports are available for this week yet.");
    summaryLines.push((totals.critical + totals.high) > 0 ? "High or critical safety items require management review." : "No critical weekly safety trend was identified from archived reports.");
    if(topCategory) summaryLines.push(`Most reported category: ${topCategory[0]} (${topCategory[1]}).`);
    if(recurring.length) summaryLines.push(`${recurring.length} recurring observation(s) were detected across the week.`);
    return `
      <div class="weeklyReport">
        <div class="weeklyTitle">Weekly KPI Analytics</div>
        <div class="weeklyPeriod">${escapeHtml(startLabel)} – ${escapeHtml(endLabel)} · Friday 07:30 Review</div>
        <div class="weeklySummaryBox">${summaryLines.map(l=>`<div>• ${escapeHtml(l)}</div>`).join("")}</div>
        <div class="weeklyGrid">
          <div class="weeklyKpi"><span>Total Issues</span><strong>${totals.issues}</strong></div>
          <div class="weeklyKpi"><span>Safety Entries</span><strong>${totals.safety}</strong></div>
          <div class="weeklyKpi"><span>High / Critical</span><strong>${totals.high + totals.critical}</strong></div>
          <div class="weeklyKpi"><span>Medium</span><strong>${totals.medium}</strong></div>
          <div class="weeklyKpi"><span>Reports</span><strong>${items.length}</strong></div>
          <div class="weeklyKpi"><span>Risk Status</span><strong>${escapeHtml(riskStatus)}</strong></div>
        </div>
        <div class="weeklySection">
          <strong>Top Section:</strong> ${topSection ? `${escapeHtml(topSection[0])} (${topSection[1]})` : "Not available"}<br>
          <strong>Top Category:</strong> ${topCategory ? `${escapeHtml(topCategory[0])} (${topCategory[1]})` : "Not available"}
        </div>
        <div class="weeklySection">
          <strong>Recurring Issues:</strong>
          ${recurring.length ? `<ul>${recurring.map(r=>`<li>${escapeHtml(r.category)} · ${escapeHtml(r.text).slice(0,120)} — repeated ${r.count} times (${r.dates.map(escapeHtml).join(", ")})</li>`).join("")}</ul>` : `<div>No recurring issues detected in archived reports for this week.</div>`}
        </div>
      </div>
    `;
  }

  function openWeeklyKpiModal(){
    const area = $("weeklyKpiArea");
    if(area) area.innerHTML = buildWeeklyKpiHtml();
    const back = $("weeklyKpiBack");
    if(back) back.style.display = "flex";
  }

  function closeWeeklyKpiModal(){
    const back = $("weeklyKpiBack");
    if(back) back.style.display = "none";
  }

  async function shareWeeklyKpiReport(){
    const html = buildWeeklyKpiHtml();
    const text = (new DOMParser().parseFromString(html, "text/html").body.innerText || "Weekly KPI Analytics").trim();
    const doc = `<!doctype html><html><head><meta charset="utf-8"><title>Weekly KPI Analytics</title><style>${getInlineStyleCss()}</style></head><body>${html}</body></html>`;
    const fileName = `OnDuty_Weekly_KPI_${new Date().toISOString().slice(0,10)}.html`;
    try{
      const file = new File([doc], fileName, {type:"text/html"});
      if(navigator.share && navigator.canShare && navigator.canShare({files:[file]})){
        await navigator.share({ title:"Weekly KPI Analytics", text, files:[file] });
        return;
      }
      if(navigator.share){ await navigator.share({ title:"Weekly KPI Analytics", text }); return; }
    }catch(e){ console.warn("Weekly share failed", e); }
    downloadBlob(fileName, new Blob([doc], {type:"text/html;charset=utf-8"}));
  }

  function checkWeeklyKpiReminder(){
    const now = new Date();
    if(now.getDay() !== 5) return; // Friday
    if(now.getHours() < 7 || (now.getHours() === 7 && now.getMinutes() < 30)) return;
    const key = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
    try{ if(localStorage.getItem(WEEKLY_KPI_DISMISS_KEY) === key) return; }catch(e){}
    const items = getWeeklyArchiveItems();
    if(!items.length) return;
    if(confirm("Weekly KPI Report is ready. Generate weekly summary now?")) openWeeklyKpiModal();
    try{ localStorage.setItem(WEEKLY_KPI_DISMISS_KEY, key); }catch(e){}
  }

  // ====== EVENTS ======
  function wireEvents() {
    $("btnFinal").addEventListener("click", requestFinalReport);
    $("btnArchive")?.addEventListener("click", openArchiveModal);
    $("btnWeeklyKpi")?.addEventListener("click", openWeeklyKpiModal);
    $("btnWeeklyKpiClose")?.addEventListener("click", closeWeeklyKpiModal);
    $("btnWeeklyKpiShare")?.addEventListener("click", shareWeeklyKpiReport);
    $("weeklyKpiBack")?.addEventListener("click", (e)=>{ if(e.target && e.target.id === "weeklyKpiBack") closeWeeklyKpiModal(); });
    $("btnArchiveClose")?.addEventListener("click", closeArchiveModal);
    $("archiveBack")?.addEventListener("click", (e)=>{ if(e.target && e.target.id === "archiveBack") closeArchiveModal(); });
    $("archiveList")?.addEventListener("click", handleArchiveListClick);
    $("btnFinalClose").addEventListener("click", closeFinalModal);
    $("btnFinalMail").addEventListener("click", emailFinalReport);
    $("btnFinalPdf").addEventListener("click", printFinalToPdf);
    $("btnFinalShare")?.addEventListener("click", shareFinalReport);
    $("btnFinalDownload")?.addEventListener("click", downloadFinalReport);
    // V66 PDF-Centric Output: Save PDF=official output; Share/Email PDF guide the user to use the saved PDF file. No HTML/TXT/JSON user-facing output.
    $("btnCompletenessBack")?.addEventListener("click", closeCompletenessModal);
    $("btnCompletenessContinue")?.addEventListener("click", ()=>{ const action = __completenessContinueAction; closeCompletenessModal(); if(action) action(); });
    $("btnHome").addEventListener("click", showHome);
    $("btnBack").addEventListener("click", showHome);
    $("btnSave")?.addEventListener("click", doSave);
    $("btnPdf")?.addEventListener("click", exportPdf);

    // Dept Add Note toggle
    $("deptEnableDetails")?.addEventListener("change", (e)=>{
      const checked = !!e.target.checked;
      if(!checked){
        // Turning OFF issue classification: reset only category/severity/action.
        if($("deptCategory")) fillCategorySelect($("deptCategory"), currentDept?.key || "", "General");
        syncGeneralOtherUI("deptCategory","deptCategoryOther","General");
        if($("deptSeverity")) $("deptSeverity").value = "LOW";
        if($("deptIssueDesc")) $("deptIssueDesc").value = "";
    if($("deptAction")) $("deptAction").value = "";
        // clear issue images
        issueImages = [];
        renderExtraImages();
      }
      applyDeptDetailsEnabled(checked);
      setDirty(true);
    });
    $("btnAddSectionNote")?.addEventListener("click", ()=> openSectionNoteEditor());
    $("btnSectionNoteCancel")?.addEventListener("click", closeSectionNoteEditor);
    $("btnSectionNoteSave")?.addEventListener("click", saveSectionNote);
    $("sectionNoteModalBack")?.addEventListener("click", (e)=>{ if(e.target.id === 'sectionNoteModalBack') closeSectionNoteEditor(); });
    $("btnAddSafety").addEventListener("click", openSafetyNewNote);
    $("btnNewDeptIssueNote")?.addEventListener("click", openNewDeptIssueNote);
    $("btnSaveIssueNote")?.addEventListener("click", saveCurrentDeptIssueNote);
    $("btnNewSafetyNote")?.addEventListener("click", openSafetyNewNote);
    $("safetySearch")?.addEventListener("input", ()=>{ const r = loadReport(currentDept?.key); renderSafety(r?.safetyNotes||[]); });
    $("safetyFilter")?.addEventListener("change", ()=>{ const r = loadReport(currentDept?.key); renderSafety(r?.safetyNotes||[]); });
    $("btnSafetyBack")?.addEventListener("click", backFromSafety);
    $("btnSafetySave")?.addEventListener("click", saveSafetyFromScreen);
    $("sLikelihood")?.addEventListener("change", ()=>{ updateSafetySmartFields(); scheduleSafetyDraftAutoSave(); });
    $("sSeverityImpact")?.addEventListener("change", ()=>{ updateSafetySmartFields(); scheduleSafetyDraftAutoSave(); });
    $("sNoteText")?.addEventListener("input", ()=>{ updateSafetySmartFields(); scheduleSafetyDraftAutoSave(); });
    $("sAction")?.addEventListener("change", ()=>{
      $("sActionOther").style.display = ($("sAction").value === "OTHER") ? "block" : "none";
      scheduleSafetyDraftAutoSave();
    });

// Category "General" -> show specify input
$("deptCategory")?.addEventListener("change", ()=>{
  syncGeneralOtherUI("deptCategory","deptCategoryOther", $("deptCategory")?.value || "General");
  setDirty(true);
});
$("sCategory")?.addEventListener("change", ()=>{
  syncGeneralOtherUI("sCategory","sCategoryOther", $("sCategory")?.value || "General");
  setDirty(true);
});
$("deptCategoryOther")?.addEventListener("input", ()=> setDirty(true));
$("sCategoryOther")?.addEventListener("input", ()=> setDirty(true));
    // risk/severity color (select background)
    $("sRisk")?.addEventListener("change", ()=> applyLevelSelectClass($("sRisk")));
    $("sSeverity")?.addEventListener("change", ()=> applyLevelSelectClass($("sSeverity")));
    // initial paint
    applyLevelSelectClass($("sRisk"));
    applyLevelSelectClass($("sSeverity"));
    $("btnAttachSafety")?.addEventListener("click", ()=>{ activeImageTarget = "safety"; document.getElementById("imgPick")?.click(); });
    $("btnCancel")?.addEventListener("click", () => { closeModal(); editIndex = -1; });
    $("btnSaveNote")?.addEventListener("click", saveNoteFromModal);
    const mi = $("mImages"); if (mi) mi.addEventListener("change", onPickImages); // legacy modal input (if exists)

    // top reset button (context-aware)
    const tr = $("btnTopReset");
    if(tr) tr.addEventListener("click", ()=>{
      const homeVisible = $("screenHome") && $("screenHome").style.display !== "none";
      const safetyVisible = $("screenSafety") && $("screenSafety").style.display !== "none";
      if(homeVisible) return resetAllDepts();
      if(safetyVisible){
        const ok = confirm("هل تريد مسح نموذج صفحة Safety Note فقط؟");
        if(!ok) return;
        return resetSafetyDraftUI();
      }
      return resetCurrentDept();
    });

    // reset buttons
    const ra = $("btnResetAll");
    if (ra) ra.addEventListener("click", resetAllDepts);
    const rd = $("btnResetDept");
    if (rd) rd.addEventListener("click", ()=>{
      // Context-aware: Safety screen resets draft only; Report screen resets current dept
      const safetyVisible = $("screenSafety") && $("screenSafety").style.display !== "none";
      if(safetyVisible) {
        const ok = confirm("هل تريد مسح نموذج صفحة Safety Note فقط؟");
        if(!ok) return;
        resetSafetyDraftUI();
      } else {
        resetCurrentDept();
      }
    });

    // Auto-save open report fields. Explicit Save Issue / Save Safety buttons still approve entries.
    ["employeeCount", "deptCategory", "deptCategoryOther", "deptSeverity", "deptIssueDesc", "deptAction", "deptEnableDetails", "summary", "notes"].forEach(id => {
      const el = $(id);
      if(!el) return;
      el.addEventListener("input", () => { if (currentDept) markUnsaved(); });
      el.addEventListener("change", () => { if (currentDept) markUnsaved(); });
    });

    const globalShiftEl = $("globalShift");
    if(globalShiftEl){
      globalShiftEl.value = getGlobalShift();
      globalShiftEl.addEventListener("change", () => {
        setGlobalShift(globalShiftEl.value);
        if(currentDept) markUnsaved();
      });
    }

    // mark dirty on edits (Safety screen)
    ["sNoteText","sActionOther"].forEach(id=>{
      const el = $(id);
      if(!el) return;
      el.addEventListener("input", ()=> { setDirty(true); scheduleSafetyDraftAutoSave(); });
    });
    ["sCategory","sRisk","sSeverity","sAction"].forEach(id=>{
      const el = $(id);
      if(!el) return;
      el.addEventListener("change", ()=> { setDirty(true); scheduleSafetyDraftAutoSave(); });
    });

  }


  // ====== INIT ======
  function init() {
    window.addEventListener('beforeunload', (e)=>{
      if(!__unsaved) return;
      e.preventDefault();
      e.returnValue = '';
    });
    renderDepartments();
    wireEvents();
    showHome();
    wireExtraImageButtons();
    setTimeout(checkWeeklyKpiReminder, 800);
    console.log("Duty Report JS loaded (V66_MASTER_BUILD_VISUAL_FIXED)");
  }
function isReportEmpty(r){
  if(!r) return true;
  const hasMain = (r.employeeCount && String(r.employeeCount).trim() !== "") ||
                  (r.summary && r.summary.trim()) ||
                  (r.notes && r.notes.trim());
  const hasSafety = Array.isArray(r.safetyNotes) && r.safetyNotes.length > 0;
  return !(hasMain || hasSafety);
}



function buildFinalReportHTML() {
  const createdAt = new Date().toLocaleString();

  let globalShift = getGlobalShift();
  if(!globalShift){
    try{
      const op = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport("OPERATIONS")));
      globalShift = (op && op.shift) ? op.shift : "";
    }catch(e){}
  }
  if(!globalShift){
    for(const d of DEPARTMENTS){
      const r = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport(d.key)));
      if(r && r.shift){ globalShift = r.shift; break; }
    }
  }

  const sevCount = {LOW:0, MEDIUM:0, HIGH:0, CRITICAL:0};
  const safetyCount = {LOW:0, MEDIUM:0, HIGH:0, CRITICAL:0};
  const catCount = {};
  let sectionsWithEntries = 0;
  let totalNotes = 0;
  let totalIssues = 0;
  let employeeTotal = 0;
  let employeeSections = 0;

  const safetyBuckets = {CRITICAL:[], HIGH:[], MEDIUM:[], LOW:[]};
  const activeSectionCards = [];
  const inactiveSectionNames = [];

  function incCat(cat){
    const c = (cat && String(cat).trim()) ? String(cat).trim() : "General";
    catCount[c] = (catCount[c]||0)+1;
  }
  function incSev(sev){
    const v = normalizeLevel(sev);
    if(sevCount[v] == null) sevCount[v]=0;
    sevCount[v] += 1;
  }
  function incSafety(sev){
    const v = normalizeLevel(sev);
    if(safetyCount[v] == null) safetyCount[v]=0;
    safetyCount[v] += 1;
    incSev(v);
  }
  function badgeClass(sev){
    const v = normalizeLevel(sev);
    return (v === "CRITICAL") ? "critical" : (v === "HIGH") ? "high" : (v === "MEDIUM") ? "medium" : "low";
  }
  function renderImgs(imgs){
    const arr = Array.isArray(imgs) ? imgs.filter(Boolean) : [];
    if(!arr.length) return "";
    return `<div class="finalImgs">${arr.map(src=>`<img src="${src}" alt="img"/>`).join("")}</div>`;
  }
  function nonEmptyLines(text){
    return (text||"").split("\n").map(s=>s.trim()).filter(Boolean);
  }
  function getSectionNoteLines(report){
    const notes = Array.isArray(report?.sectionNotes) ? report.sectionNotes : [];
    const direct = notes.map(n => (n?.text || "").trim()).filter(Boolean);
    if(direct.length) return direct;
    return nonEmptyLines(report?.summary || "");
  }
  function escapeLines(lines){
    return lines.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
  }
  function renderSafetyEntry(item, idx){
    const sev = normalizeLevel(item.level || item.risk || item.severity || "LOW");
    const cls = badgeClass(sev);
    const textLines = nonEmptyLines(item.text || "");
    const action = (item.action || "").trim();
    const suggested = (item.suggested || "").trim();
    return `
      <div class="finalEntryCard finalSafetyEntry ${cls}">
        <div class="finalEntryTop">
          <div class="finalEntryTitle">${escapeHtml(item.section)} · Safety Entry ${idx + 1}</div>
          <div class="finalRiskBadge ${cls}">${escapeHtml(sev)}</div>
        </div>
        <div class="finalEntryMetaRow">
          <div class="finalMiniMeta"><span>Classification</span><strong>${escapeHtml(item.category || "General Safety")}</strong></div>
          <div class="finalMiniMeta"><span>Likelihood</span><strong>${escapeHtml(item.likelihood || "-")}</strong></div>
          <div class="finalMiniMeta"><span>Severity</span><strong>${escapeHtml(item.severityImpact || "-")}</strong></div>
        </div>
        <div class="finalRiskFormula">Risk Calculation: ${escapeHtml(item.formula || "Risk = Likelihood × Severity")} · LOW ≤4, MEDIUM 5–12, HIGH &gt;12</div>
        ${textLines.length ? `<ul class="finalBullets">${escapeLines(textLines)}</ul>` : `<div class="finalEmptyLine">No safety details recorded.</div>`}
        ${suggested ? `<div class="finalActionBox finalSuggestedBox"><div class="finalActionLabel">Recommended / Suggested Action</div><div>${escapeHtml(suggested).replace(/\n/g,"<br>")}</div><div class="finalSourceLine">Source: dnata dCROM chapter 2.7</div></div>` : ``}
        ${renderImgs(item.images)}
        <div class="finalActionBox">
          <div class="finalActionLabel">Action Taken / Required</div>
          <div>${escapeHtml(action || "-")}</div>
        </div>
        ${renderRecurringNotice(item.recurringMatches)}
      </div>
    `;
  }
  function renderSafetyBucket(title, list, level){
    const cls = badgeClass(level);
    if(!list.length) return "";
    return `
      <section class="finalSafetyBucket ${cls}">
        <div class="finalSafetyBucketHeader">
          <div>
            <div class="finalSectionEyebrow">Detailed Safety Entries</div>
            <div class="finalSafetyBucketTitle">${escapeHtml(title)}</div>
          </div>
          <div class="finalRiskBadge ${cls}">${list.length}</div>
        </div>
        ${list.map((item, i)=>renderSafetyEntry(item, i)).join("")}
      </section>
    `;
  }

  function renderSafetyMatrix(){
    const rows = [
      { level:"CRITICAL", label:"Critical", count:safetyCount.CRITICAL || 0, status:(safetyCount.CRITICAL || 0) ? "Immediate management escalation required" : "No critical risks identified" },
      { level:"HIGH", label:"High", count:safetyCount.HIGH || 0, status:(safetyCount.HIGH || 0) ? "High-risk follow-up required" : "No high risks identified" },
      { level:"MEDIUM", label:"Medium", count:safetyCount.MEDIUM || 0, status:(safetyCount.MEDIUM || 0) ? "Monitoring / corrective follow-up required" : "No medium risks identified" },
      { level:"LOW", label:"Low", count:safetyCount.LOW || 0, status:(safetyCount.LOW || 0) ? "Low-risk observations recorded" : "No low risks identified" }
    ];
    return `
      <div class="finalSafetyMatrix" role="table" aria-label="Safety Risk Matrix">
        <div class="finalSafetyMatrixHead" role="row">
          <div>Risk Level</div>
          <div>Count</div>
          <div>Status</div>
        </div>
        ${rows.map(r => {
          const cls = badgeClass(r.level);
          return `
            <div class="finalSafetyMatrixRow ${cls}" role="row">
              <div class="finalSafetyMatrixLevel"><span class="sevDot ${cls}"></span>${escapeHtml(r.label)}</div>
              <div class="finalSafetyMatrixCount">${r.count}</div>
              <div class="finalSafetyMatrixStatus">${escapeHtml(r.status)}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  DEPARTMENTS.forEach(d => {
    const r = migrateLegacySectionNotes(migrateLegacyIssueNotes(loadReport(d.key)));
    const sectionLines = getSectionNoteLines(r);
    const imgs = [
      ...(Array.isArray(r?.summaryImages) ? r.summaryImages : []),
      ...(Array.isArray(r?.notesImages) ? r.notesImages : [])
    ];
    const sectionCategory = (r?.sectionCategory && String(r.sectionCategory).trim()) ? r.sectionCategory : "General";
    const sectionSeverity = normalizeLevel(r?.sectionSeverity || "LOW");
    const sectionAction = (r?.sectionAction||"").trim();
    const safetyNotes = Array.isArray(r?.safetyNotes) ? r.safetyNotes : [];
    const issueNotes = dedupeIssueNotes(Array.isArray(r?.issueNotes) ? r.issueNotes : []);
    const sectionEmployeeCount = String(r?.employeeCount ?? "").trim();
    const sectionEmployeeNum = Number(sectionEmployeeCount);

    if(Number.isFinite(sectionEmployeeNum) && sectionEmployeeNum > 0){
      employeeTotal += sectionEmployeeNum;
      employeeSections += 1;
    }

    safetyNotes.forEach((n) => {
      const sev = normalizeLevel(n.risk || n.severity || "LOW");
      const cat = (n.classification || n.category || "General Safety").trim();
      const text = (n.note_en || n.note_ar || n.text || "").trim();
      const action = (n.action_taken || n.action || "").trim();
      const suggested = (n.suggested_actions || n.suggested || "").trim();
      const likelihood = (n.likelihood || n.sLikelihood || "").trim();
      const severityImpact = (n.severityImpact || n.severity_impact || "").trim();
      const formula = (n.riskFormula || (n.riskScore != null ? `Score: ${n.riskScore}` : "Risk = Likelihood × Severity")).trim();
      incCat(cat);
      incSafety(sev);
      totalNotes += 1;
      safetyBuckets[sev].push({
        section: d.en,
        level: sev,
        category: cat,
        text,
        action,
        suggested,
        likelihood,
        severityImpact,
        formula,
        images: Array.isArray(n.images) ? n.images : [],
        recurringMatches: findRecurringMatches({ type: "safety", section: d.en, category: cat, text })
      });
    });

    const hasSectionNotes = sectionLines.length > 0;
    const hasIssueNotes = issueNotes.length > 0;
    const hasLegacyIssue = sectionAction.length > 0;
    const hasImages = imgs.length > 0;
    const showEmployeeStat = Number.isFinite(sectionEmployeeNum) && sectionEmployeeNum > 0;
    const hasOperationalEntry = hasSectionNotes || hasIssueNotes || hasLegacyIssue || hasImages || showEmployeeStat;
    const hasAnyEntry = hasOperationalEntry || safetyNotes.length > 0;

    if(hasAnyEntry) sectionsWithEntries += 1;
    if(!hasOperationalEntry){
      inactiveSectionNames.push(d.en);
      return;
    }

    const sectionParts = [];
    sectionParts.push(`
      <section class="finalSectionCard finalOperationalSection">
        <div class="finalSectionHeader">
          <div class="finalSectionHeaderMain">
            <div class="finalSectionEyebrow">Operations Report Section</div>
            <div class="finalSectionTitle">SECTION: ${escapeHtml(d.en)}</div>
          </div>
          ${showEmployeeStat ? `
          <div class="finalSectionStat">
            <span class="finalSectionStatLabel">Employees</span>
            <span class="finalSectionStatValue">${escapeHtml(sectionEmployeeCount)}</span>
          </div>` : ""}
        </div>
        <div class="finalSectionBody">
    `);

    if(hasSectionNotes || hasImages){
      sectionParts.push(`
        <div class="finalBlock">
          <div class="finalBlockTitle">General Section Notes</div>
          ${hasSectionNotes ? `<ul class="finalBullets">${escapeLines(sectionLines)}</ul>` : `<div class="finalEmptyState"><span class="sevDot low"></span>No general section notes recorded.</div>`}
          ${renderImgs(imgs)}
        </div>
      `);
      totalNotes += sectionLines.length;
    }

    if(hasIssueNotes || hasLegacyIssue){
      sectionParts.push(`<div class="finalBlock"><div class="finalBlockTitle">Issue Reported</div>`);
      if(hasIssueNotes){
        totalIssues += issueNotes.length;
        issueNotes.forEach((n, i) => {
          totalNotes += 1;
          const cat = (n.category && String(n.category).trim()) ? n.category : "General";
          const sev = normalizeLevel(n.severity || "LOW");
          const descLines = nonEmptyLines(n.issueDesc || "");
          const nImgs = Array.isArray(n.images) ? n.images : [];
          const act = (n.action || "").trim();
          incCat(cat);
          incSev(sev);
          sectionParts.push(`
            <div class="finalEntryCard">
              <div class="finalEntryTop">
                <div class="finalEntryTitle">Issue Reported ${i + 1}</div>
                <div class="finalRiskBadge ${badgeClass(sev)}">${escapeHtml(sev)}</div>
              </div>
              <div class="finalEntryMetaRow">
                <div class="finalMiniMeta"><span>Category</span><strong>${escapeHtml(cat)}</strong></div>
              </div>
              ${descLines.length ? `<ul class="finalBullets">${escapeLines(descLines)}</ul>` : `<div class="finalEmptyLine">No issue details recorded.</div>`}
              ${renderImgs(nImgs)}
              <div class="finalActionBox">
                <div class="finalActionLabel">Action Taken</div>
                <div>${escapeHtml(act || "-")}</div>
              </div>
              ${renderRecurringNotice(findRecurringMatches({ type: "issue", section: d.en, category: cat, text: n.issueDesc || "" }))}
            </div>
          `);
        });
      } else if(hasLegacyIssue){
        totalIssues += 1;
        incCat(sectionCategory);
        incSev(sectionSeverity);
        sectionParts.push(`
          <div class="finalEntryCard">
            <div class="finalEntryTop">
              <div class="finalEntryTitle">Issue Reported</div>
              <div class="finalRiskBadge ${badgeClass(sectionSeverity)}">${escapeHtml(sectionSeverity)}</div>
            </div>
            <div class="finalEntryMetaRow">
              <div class="finalMiniMeta"><span>Category</span><strong>${escapeHtml(sectionCategory)}</strong></div>
            </div>
            <div class="finalActionBox">
              <div class="finalActionLabel">Action Taken</div>
              <div>${escapeHtml(sectionAction)}</div>
            </div>
          </div>
        `);
      }
      sectionParts.push(`</div>`);
    }

    if(showEmployeeStat && !hasSectionNotes && !hasIssueNotes && !hasLegacyIssue && !hasImages){
      sectionParts.push(`<div class="finalBlock"><div class="finalBlockTitle">Employee Count</div><div class="finalEmptyState"><span class="sevDot low"></span>Employees recorded for this section: ${escapeHtml(sectionEmployeeCount)}</div></div>`);
    }

    sectionParts.push(`</div></section>`);
    activeSectionCards.push(sectionParts.join(""));
  });

  const topCats = Object.entries(catCount).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const totalSafety = safetyCount.CRITICAL + safetyCount.HIGH + safetyCount.MEDIUM + safetyCount.LOW;
  const hasOperationalEntries = activeSectionCards.length > 0;
  const hasSafetyEntries = totalSafety > 0;
  const hasHighOrCriticalRisk = (safetyCount.CRITICAL || 0) > 0 || (safetyCount.HIGH || 0) > 0;
  const employeeTotalDisplay = employeeTotal > 0 ? String(employeeTotal) : "Not Reported";
  const onDutyName = (function(){ try { const v = (localStorage.getItem('onDutyName') || '').trim(); return v || 'Not Provided'; } catch(e) { return 'Not Provided'; } })();

  const executiveStatusLines = (() => {
    if(!hasOperationalEntries && !hasSafetyEntries){
      return [
        { cls: "good", text: "No operational issues reported during this shift" },
        { cls: "good", text: "No safety risks identified" },
        { cls: "good", text: "Operations running under normal conditions" }
      ];
    }
    const lines = [];
    lines.push({ cls: hasOperationalEntries ? "warn" : "good", text: hasOperationalEntries ? "Operational entries recorded for follow-up" : "No operational issues reported during this shift" });
    lines.push({ cls: hasSafetyEntries ? (hasHighOrCriticalRisk ? "danger" : "warn") : "good", text: hasSafetyEntries ? (hasHighOrCriticalRisk ? "High or critical safety risk requires management attention" : "Safety observations recorded and managed") : "No safety risks identified" });
    lines.push({ cls: hasHighOrCriticalRisk ? "danger" : "good", text: hasHighOrCriticalRisk ? "Immediate follow-up required for highlighted risk items" : "Operations under control" });
    return lines;
  })();

  
function renderOperationalOverview(data){
  const safety = data.safetyCount || {};
  const notes = Number(data.totalNotes || 0);
  const issues = Number(data.totalIssues || 0);
  const sections = Number(data.sectionsWithEntries || 0);
  const totalSafetyEntries = Number((safety.CRITICAL||0) + (safety.HIGH||0) + (safety.MEDIUM||0) + (safety.LOW||0));
  const highCritical = Number((safety.CRITICAL||0) + (safety.HIGH||0));
  const mediumSafety = Number(safety.MEDIUM || 0);
  const lines = [];

  if(!notes && !issues && !totalSafetyEntries && !sections){
    lines.push('Operations remained stable throughout this shift with no operational disruptions or reportable safety concerns identified.');
    lines.push('Reviewed sections indicate normal operating conditions and no follow-up items requiring escalation.');
  } else {
    if(highCritical > 0){
      lines.push('High-priority safety observations were recorded during this shift and require management follow-up in accordance with operational safety protocols.');
    } else if(mediumSafety > 0){
      lines.push('Safety observations requiring monitoring were identified during this shift, with corrective recommendations documented for follow-up.');
    } else if(totalSafetyEntries > 0){
      lines.push('Low-level safety observations were documented and remained within controlled operational thresholds.');
    }

    if(issues > 0 || notes > 0){
      const scopeText = sections > 1 ? 'across selected sections' : 'within the relevant section';
      lines.push(`Operational observations were recorded ${scopeText} and are available in the detailed section reports.`);
    }

    if(highCritical > 0){
      lines.push('Overall operational continuity should be reviewed against the highlighted risk items before final closure.');
    } else {
      lines.push('Despite the recorded observations, overall operational continuity remained stable with no critical escalation event identified.');
    }
  }

  const cats = (data.topCats||[]).slice(0,3).map(c => Array.isArray(c) ? c[0] : (c.label || c.name || c.category)).filter(Boolean);
  if(cats.length){
    lines.push('Primary follow-up categories: ' + cats.join(', ') + '.');
  }

  return `
    <div class="finalOperationalOverview finalExecutiveOverviewBlock">
      <div class="finalOperationalOverviewHead">
        <div>
          <div class="finalSectionEyebrow">Executive Narrative</div>
          <div class="finalOperationalOverviewTitle">Operational Overview</div>
        </div>
        <div class="finalOperationalOverviewTag">Auto-generated from report entries</div>
      </div>
      <div class="finalOperationalOverviewBody">
        ${lines.map(line => `<p>${escapeHtml(line)}</p>`).join('')}
      </div>
    </div>
  `;
}

function renderSmartStatus(lines){
    return `<div class="finalSmartStatus finalExecutiveStatusBlock">${lines.map(l=>`<div class="finalSmartStatusLine ${escapeHtml(l.cls)}"><span></span><strong>${escapeHtml(l.text)}</strong></div>`).join("")}</div>`;
  }

  const html = `
    <div class="finalPrintHeader">
      <div class="finalAviationHeader">
        <div>
          <div class="finalPrintOrg">DUTY MANAGER REPORT</div>
          <div class="finalPrintSub">dnata Catering & Retail – Jordan</div>
        </div>
        <div class="finalHeaderMetaGrid">
          <div class="finalHeaderMetaItem"><span>Date</span><strong>${escapeHtml(new Date().toLocaleDateString())}</strong></div>
          <div class="finalHeaderMetaItem"><span>Shift</span><strong>${escapeHtml(globalShift || "-")}</strong></div>
          <div class="finalHeaderMetaItem"><span>On Duty</span><strong id="finalOnDutyValue">${escapeHtml(onDutyName)}</strong></div>
        </div>
      </div>
    </div>

    <div class="finalReport finalAviationTheme finalReportV2">
      <section class="finalSummaryCard finalSummaryExecutive">
        <div class="finalSummaryHeader">
          <div>
            <div class="finalSectionEyebrow">Executive Snapshot</div>
            <div class="finalSummaryTitle">Report Summary</div>
          </div>
        </div>

        ${renderSmartStatus(executiveStatusLines)}

        <div class="finalSummaryGrid finalSummaryGridMain finalExecutiveMetrics finalExecutiveMetricsBlock">
          <div class="finalKpiCard"><span class="finalKpiLabel">Sections</span><strong class="finalKpiValue">${sectionsWithEntries}</strong></div>
          <div class="finalKpiCard"><span class="finalKpiLabel">Total Notes</span><strong class="finalKpiValue">${totalNotes}</strong></div>
          <div class="finalKpiCard"><span class="finalKpiLabel">Employees</span><strong class="finalKpiValue ${employeeTotal > 0 ? '' : 'finalKpiTextValue'}">${escapeHtml(employeeTotalDisplay)}</strong></div>
          <div class="finalKpiCard"><span class="finalKpiLabel">Safety Entries</span><strong class="finalKpiValue">${totalSafety}</strong></div>
        </div>

        <div class="finalSummaryGrid finalSummaryGridRisk finalExecutiveRiskMetrics finalExecutiveRiskBlock">
          <div class="finalRiskCard critical"><span class="finalKpiLabel">Critical</span><strong class="finalKpiValue">${safetyCount.CRITICAL || 0}</strong></div>
          <div class="finalRiskCard high"><span class="finalKpiLabel">High</span><strong class="finalKpiValue">${safetyCount.HIGH || 0}</strong></div>
          <div class="finalRiskCard medium"><span class="finalKpiLabel">Medium</span><strong class="finalKpiValue">${safetyCount.MEDIUM || 0}</strong></div>
          <div class="finalRiskCard low"><span class="finalKpiLabel">Low</span><strong class="finalKpiValue">${safetyCount.LOW || 0}</strong></div>
        </div>

        ${renderOperationalOverview({
          safetyCount,
          totalNotes,
          totalIssues,
          sectionsWithEntries,
          topCats
        })}

        ${topCats.length ? `
          <div class="finalCategoryStrip finalExecutiveCategoryBlock">
            ${topCats.map(([k,v])=>`<div class="finalCategoryPill"><span>${escapeHtml(k)} (${v})</span></div>`).join("")}
          </div>
        ` : ``}

      </section>
      <section class="finalSafetyReportPage finalAnchoredReportSection">
        <div class="finalReportSectionHeader">
          <div>
            <div class="finalSectionEyebrow">Preventive Safety Review</div>
            <div class="finalSummaryTitle">Safety Report</div>
          </div>
          <div class="finalSafetyFormulaBox">Risk = Likelihood × Severity · LOW ≤4 · MEDIUM 5–12 · HIGH &gt;12</div>
        </div>
        ${!hasSafetyEntries ? renderSmartStatus([{ cls: "good", text: "No safety risks reported during this shift" }]) : renderSmartStatus([{ cls: hasHighOrCriticalRisk ? "danger" : "warn", text: hasHighOrCriticalRisk ? "Safety risks recorded — review highlighted high-priority items" : "Safety observations recorded and managed as per procedure" }])}
        ${renderSafetyMatrix()}
        ${hasSafetyEntries ? `
          <div class="finalSafetyDetailsTitle">Detailed Safety Entries</div>
          ${renderSafetyBucket("CRITICAL RISK", safetyBuckets.CRITICAL, "CRITICAL")}
          ${renderSafetyBucket("HIGH RISK", safetyBuckets.HIGH, "HIGH")}
          ${renderSafetyBucket("MEDIUM RISK", safetyBuckets.MEDIUM, "MEDIUM")}
          ${renderSafetyBucket("LOW RISK", safetyBuckets.LOW, "LOW")}
        ` : ``}
      </section>

      <section class="finalOperationsReportPage finalAnchoredReportSection">
        <div class="finalReportSectionHeader">
          <div>
            <div class="finalSectionEyebrow">Operational Follow-up</div>
            <div class="finalSummaryTitle">Operations Report</div>
          </div>
        </div>
        ${!hasOperationalEntries ? renderSmartStatus([{ cls: "good", text: "No operational disruptions or issues reported" }]) : renderSmartStatus([{ cls: "warn", text: "Operational entries recorded and available for follow-up" }])}
        <div class="finalSectionsWrap">
          ${activeSectionCards.length ? activeSectionCards.join("") : `<div class="finalEmptyState finalLargeEmpty"><span class="sevDot low"></span>All reviewed sections show no notable operational issues.</div>`}
        </div>
        ${inactiveSectionNames.length ? `<div class="finalInactiveSections"><strong>Sections reviewed with no notable operational entries:</strong> ${inactiveSectionNames.map(escapeHtml).join(", ")}</div>` : ``}
      </section>
    </div>
  `;

  return { html, createdAt };
}
function openFinalModal() {
  const snapshot = ensureFinalReportSnapshot();
  const { html, createdAt } = snapshot;
  __activeFinalReportSnapshot = snapshot;
  saveSnapshotToArchive(snapshot);
  $("finalReportArea").innerHTML = html;
  $("finalMeta").textContent = `Generated: ${createdAt}`;
  $("finalBack").style.display = "flex";
}

function closeFinalModal() {
  $("finalBack").style.display = "none";
}

function copyFinalSummary() {
  // Edge case: mailto/body length limits → copy a short summary, not full HTML
  const lines = [];
  lines.push("Final Duty Report Summary");
  lines.push("------------------------");
  DEPARTMENTS.forEach(d => {
    const r = loadReport(d.key) || {};
    const safetyCount = (r.safetyNotes || []).length;
    lines.push(`${d.en} | ${d.ar} - Emp: ${r.employeeCount || ""} - Safety Notes: ${safetyCount}`);
  });

  const text = lines.join("\n");
  navigator.clipboard?.writeText(text).then(() => {
    alert("تم نسخ الملخص إلى الحافظة. الصقه داخل الإيميل.");
  }).catch(() => {
    alert("تعذر النسخ تلقائياً. انسخ يدويًا من التقرير.");
  });
}

function openEmailClient() {
  // mailto has size limits; keep it short. Attachment must be added by the user from the saved PDF file.
  const subject = encodeURIComponent("Duty Manager Report PDF");
  const body = encodeURIComponent(
    "تم إنشاء التقرير النهائي.\n\n" +
    "احفظ التقرير من زر Save PDF، ثم أرفق ملف الـ PDF المحفوظ داخل الإيميل.\n"
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

async function printFinalToPdf() {
  try {
    const snapshot = __activeFinalReportSnapshot || ensureFinalReportSnapshot();
    if ($("finalReportArea") && snapshot?.html) {
      $("finalReportArea").innerHTML = snapshot.html;
    }
    if ($("finalMeta") && snapshot?.createdAt) {
      $("finalMeta").textContent = `Generated: ${snapshot.createdAt}`;
    }
    if ($("finalBack")) {
      $("finalBack").style.display = "flex";
    }

    const waitForReady = () => new Promise(resolve => {
      const finish = () => setTimeout(resolve, 600);
      try {
        const container = $("finalReportArea");
        const imgs = Array.from(container?.querySelectorAll("img") || []);
        if (!imgs.length) return finish();
        let remaining = imgs.length;
        const done = () => {
          remaining -= 1;
          if (remaining <= 0) finish();
        };
        imgs.forEach(img => {
          if (img.complete) done();
          else {
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          }
        });
      } catch (e) {
        finish();
      }
    });

    await waitForReady();
    window.print();
  } catch (err) {
    console.error(err);
    alert("تعذر إنشاء ملف PDF حالياً.");
  }
}
let activeImageTarget = null;

function bindExtraImageActions(){
  document.querySelectorAll('.imgDel[data-del="1"]').forEach(b=>{
    b.onclick = ()=>{
      const t=b.getAttribute('data-t');
      const i=Number(b.getAttribute('data-i'));
      if(t==='summary'){ summaryImages.splice(i,1); }
      if(t==='notes'){ notesImages.splice(i,1); }
      if(t==='issue'){ issueImages.splice(i,1); }
      renderExtraImages();
      markUnsaved();
    };
  });
  document.querySelectorAll('img.imgThumb[data-open="1"]').forEach(img=>{
    img.onclick = ()=>{
      const src = img.getAttribute('src');
      const w = window.open();
      if(w) w.document.write(`<img src="${src}" style="max-width:100%">`);
    };
  });
}

function renderExtraImages(){
  const s = document.getElementById("summaryImgs");
  const n = document.getElementById("notesImgs");
  const i = document.getElementById("issueImgs");
  if(s) s.innerHTML = summaryImages.map((src,i)=>`<span class="imgWrap"><img class="imgThumb" src="${src}" data-open="1" data-t="summary" data-i="${i}"><button class="imgDel" data-del="1" data-t="summary" data-i="${i}">×</button></span>`).join("\n");
  if(n) n.innerHTML = notesImages.map((src,i)=>`<span class="imgWrap"><img class="imgThumb" src="${src}" data-open="1" data-t="notes" data-i="${i}"><button class="imgDel" data-del="1" data-t="notes" data-i="${i}">×</button></span>`).join("\n");
  if(i) i.innerHTML = issueImages.map((src,i)=>`<span class="imgWrap"><img class="imgThumb" src="${src}" data-open="1" data-t="issue" data-i="${i}"><button class="imgDel" data-del="1" data-t="issue" data-i="${i}">×</button></span>`).join("\n");
  bindExtraImageActions();
}

async function fileToDataURL(file){
  // Compress/resize images to reduce localStorage usage
  const dataUrl = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });

  // If not an image, return as-is
  if(!String(file.type||"").startsWith("image/")) return dataUrl;

  try{
    const img = new Image();
    img.src = dataUrl;
    await new Promise((res, rej)=>{ img.onload=res; img.onerror=rej; });

    const maxDim = 1024;
let w = img.naturalWidth || img.width;
let h = img.naturalHeight || img.height;

// Resize if needed, otherwise only recompress if file is large
const scale = Math.min(1, maxDim / Math.max(w,h));
const needsResize = scale < 0.999;
const needsRecompress = (file.size || 0) > 400000; // ~400KB

// If it's small and doesn't need resize, keep original to avoid quality loss
if(!needsResize && !needsRecompress) return dataUrl;

const canvas = document.createElement("canvas");
canvas.width = Math.round(w*scale);
canvas.height = Math.round(h*scale);
const ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

// Keep PNG only when original is PNG and we didn't resize (preserve transparency),
// otherwise export as JPEG for much smaller storage.
const isPng = String(file.type||"") === "image/png";
if(isPng && !needsResize) {
  return canvas.toDataURL("image/png");
}
return canvas.toDataURL("image/jpeg", 0.70);

  }catch(e){
    console.warn("Image compress failed, using original.", e);
    return dataUrl;
  }
}

async function handleExtraImageFiles(files){
  const arr = Array.from(files || []);
  for(const f of arr){
    await handleExtraImage(f);
  }
}
async function handleExtraImage(file){
  if(!file) return;
  const url = await fileToDataURL(file);

  if(activeImageTarget === "summary") {
    if(summaryImages.length >= 6) { alert("Max 6 images for Summary."); return; }
    summaryImages.push(url);
    renderExtraImages();
    markUnsaved();
    return;
  }
  if(activeImageTarget === "notes") {
    if(notesImages.length >= 6) { alert("Max 6 images for Notes."); return; }
    notesImages.push(url);
    renderExtraImages();
    markUnsaved();
    return;
  }
  if(activeImageTarget === "issue") {
    if(issueImages.length >= 6) { alert("Max 6 images for Issue."); return; }
    issueImages.push(url);
    renderExtraImages();
    markUnsaved();
    return;
  }

  // Safety Note screen uses tempImages
  if(activeImageTarget === "safety") {
    if (tempImages.length >= 6) return;
    tempImages.push(url);
    renderSafetyScreenImages();
    scheduleSafetyDraftAutoSave();
    return;
  }
}

function wireExtraImageButtons(){
  const pick = document.getElementById("imgPick");
  const cam  = document.getElementById("imgCam");

  document.getElementById("btnAttachSummary")?.addEventListener("click", ()=>{activeImageTarget="summary"; pick.click();});
  document.getElementById("btnCameraSummary")?.addEventListener("click", ()=>{activeImageTarget="summary"; cam.click();});

  document.getElementById("btnAttachNotes")?.addEventListener("click", ()=>{activeImageTarget="notes"; pick.click();});
  document.getElementById("btnCameraNotes")?.addEventListener("click", ()=>{activeImageTarget="notes"; cam.click();});

  // Dept Issue box
  document.getElementById("btnAttachIssue")?.addEventListener("click", ()=>{activeImageTarget="issue"; pick.click();});
  document.getElementById("btnCameraIssue")?.addEventListener("click", ()=>{activeImageTarget="issue"; cam.click();});

  // Safety Note screen
  document.getElementById("btnAttachSafety")?.addEventListener("click", ()=>{activeImageTarget="safety"; pick.click();});
  document.getElementById("btnCameraSafety")?.addEventListener("click", ()=>{activeImageTarget="safety"; cam.click();});

  pick.addEventListener("change", async e=>{ await handleExtraImageFiles(e.target.files); e.target.value=""; });
  cam.addEventListener("change", async e=>{ await handleExtraImageFiles(e.target.files); e.target.value=""; });
}

  init();
})();

/* ===== Language + Smart direction + Auto-numbering (Option A) ===== */
(function(){
  const deviceLanguage = (navigator.language || navigator.userLanguage || "ar").toLowerCase();
  let currentLang = window.currentLang || (deviceLanguage.startsWith("ar") ? "AR" : "EN");
  window.currentLang = currentLang;
  try{ document.documentElement.lang = currentLang === "AR" ? "ar" : "en"; }catch(e){}

  function detectDirFromText(value){
    for(const ch of (value||"")){
      if(/\s/.test(ch)) continue;
      if(/[0-9٠-٩۰-۹\-\.\)\(\[\]\{\}:;,_'"`~!@#$%^&*+=<>?/\\|]/.test(ch)) continue;
      if(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(ch)) return "rtl";
      if(/[A-Za-z]/.test(ch)) return "ltr";
      return "ltr";
    }
    return null;
  }

  function applySmartDir(el){
    if(!el) return;
    const apply = ()=>{
      const fallback = (currentLang === "AR") ? "rtl" : "ltr";
      const d = detectDirFromText(el.value) || fallback;
      el.style.direction = d;
      el.style.textAlign = (d === "rtl") ? "right" : "left";
    };
    apply();
    el.addEventListener("input", apply);
  }

  function enableAutoNumberingEl(el){
    if(!el) return;
    el.addEventListener("keydown", (e)=>{
      if(e.key !== "Enter") return;
      const start = el.selectionStart;
      const textBefore = el.value.substring(0, start);
      const currentLine = textBefore.split("\n").pop() || "";
      const m = currentLine.match(/^(\s*)([0-9\u0660-\u0669\u06F0-\u06F9]+)\s*([\-\.\)])\s*(.*)$/);
      if(!m) return; // Option A
      e.preventDefault();
      const indent = m[1] || "";
      const rawNum = m[2];
      const sep = m[3] || "-";
      const toEn = (s)=>s.replace(/[٠-٩]/g, d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d));
      const n = parseInt(toEn(rawNum), 10);
      if(isNaN(n)) return;
      const next = n + 1;
      const outNum = (currentLang === "AR") ? String(next).replace(/\d/g, d=>"٠١٢٣٤٥٦٧٨٩"[d]) : String(next);
      const insert = "\n" + indent + outNum + sep + " ";
      const after = el.value.substring(start);
      el.value = textBefore + insert + after;
      const pos = (textBefore + insert).length;
      el.setSelectionRange(pos, pos);
      // trigger dir update if needed
      el.dispatchEvent(new Event('input', {bubbles:true}));
    });
  }

  function setDirForStaticFields(){
    ["summary","notes","sNoteText","sActionOther"].forEach(id=>{
      const el = document.getElementById(id);
      if(el) applySmartDir(el);
    });
  }

  function wireLangButton(){
  const toggle = document.getElementById("langToggle");
  const btn = document.getElementById("btnLang"); // legacy
  const applyLangUI = ()=>{
    if(toggle) toggle.checked = (currentLang === "EN");
    if(btn) btn.textContent = (currentLang === "AR") ? "AR / EN" : "EN / AR";
    try{ document.documentElement.lang = currentLang === "AR" ? "ar" : "en"; }catch(e){}
  };
  const applyAllDirs = ()=>{
    setDirForStaticFields();
    // apply to dynamic note lines
    document.querySelectorAll("textarea.noteLine").forEach(applySmartDir);
  };

  // Initial sync
  applyLangUI();
  applyAllDirs();

  if(toggle){
    toggle.addEventListener("change", ()=>{
      currentLang = toggle.checked ? "EN" : "AR";
      window.currentLang = currentLang;
      applyLangUI();
      applyAllDirs();
    });
    return;
  }

  // Fallback: old button
  if(btn){
    btn.addEventListener("click", ()=>{
      currentLang = (currentLang === "AR") ? "EN" : "AR";
      window.currentLang = currentLang;
      applyLangUI();
      applyAllDirs();
    });
  }
}

  // expose helpers for dynamic note rows for dynamic note rows
  window.__applySmartDir = applySmartDir;
  window.__enableAutoNumberingEl = enableAutoNumberingEl;

  document.addEventListener("DOMContentLoaded", ()=>{
    setDirForStaticFields();
    wireLangButton();
    applyV63StaticLayout();
    updateSafetySmartFields();
    // Apply to any existing dynamic note lines
    document.querySelectorAll("textarea.noteLine").forEach((ta)=>{
      applySmartDir(ta);
      enableAutoNumberingEl(ta);
    });
  });
})();



/* ===== V64.2 CORE (Unified CRUD + Edit State + Safety Engine) ===== */
(function(){
  try {
    const STORE_KEY = "onduty_store_v642";
    const MAX_NOTES = 3;
    const likelihoodMap = {RARE:1, UNLIKELY:2, POSSIBLE:3, LIKELY:4, ALMOST_CERTAIN:5};
    const severityMap = {LOW:1, MEDIUM:2, HIGH:3, CRITICAL:4, EXTREME:5};

    function loadStore(){
      try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {sections:{}, safety:{}}; }
      catch(e){ return {sections:{}, safety:{}}; }
    }
    function saveStore(s){ localStorage.setItem(STORE_KEY, JSON.stringify(s)); }

    let store = loadStore();
    let currentEdit = { section:null, id:null, type:null }; // type: 'note' | 'safety'

    function uid(){ return 'id_' + Math.random().toString(36).slice(2) + Date.now(); }

    function getItems(section){
      store.sections[section] = store.sections[section] || [];
      return store.sections[section];
    }

    function isDuplicate(section, data){
      const items = getItems(section);
      return items.some(x => (x.text||'').trim().toLowerCase() === (data.text||'').trim().toLowerCase());
    }

    function addItem(section, data){
      const items = getItems(section);
      if(items.length >= MAX_NOTES) return {ok:false, reason:"limit"};
      if(isDuplicate(section, data)) return {ok:false, reason:"duplicate"};
      const item = { id: uid(), text: data.text || "", createdAt: Date.now(), updatedAt: Date.now() };
      items.push(item);
      saveStore(store);
      return {ok:true, item};
    }

    function updateItem(section, id, data){
      const items = getItems(section);
      const i = items.findIndex(x => x.id === id);
      if(i === -1) return {ok:false};
      items[i] = { ...items[i], text: data.text ?? items[i].text, updatedAt: Date.now() };
      saveStore(store);
      return {ok:true, item: items[i]};
    }

    function deleteItem(section, id){
      const items = getItems(section);
      const next = items.filter(x => x.id !== id);
      store.sections[section] = next;
      saveStore(store);
      return {ok:true};
    }

    function resetEdit(){
      currentEdit = { section:null, id:null, type:null };
      const active = document.querySelector('.note-card.active');
      if(active) active.classList.remove('active');
      const saveBtn = document.querySelector('[data-action="save-note"]');
      if(saveBtn) saveBtn.textContent = 'Add';
    }

    function enterEdit(section, id){
      currentEdit = { section, id, type:'note' };
      const items = getItems(section);
      const item = items.find(x => x.id === id);
      const input = document.querySelector('[data-bind="note-input"]');
      if(input && item) input.value = item.text;
      document.querySelectorAll('.note-card').forEach(el=>el.classList.remove('active'));
      const el = document.querySelector('[data-id="'+id+'"]');
      if(el) el.classList.add('active');
      const saveBtn = document.querySelector('[data-action="save-note"]');
      if(saveBtn) saveBtn.textContent = 'Update';
    }

    // Safety
    function calculateRisk(likelihood, severity){
      const l = likelihoodMap[likelihood] || 0;
      const s = severityMap[severity] || 0;
      const score = l * s;
      let level = "LOW";
      if(score <= 4) level = "LOW";
      else if(score <= 12) level = "MEDIUM";
      else level = "HIGH";
      return {score, level};
    }

    function getSafety(section){
      store.safety[section] = store.safety[section] || [];
      return store.safety[section];
    }

    function addSafety(section, data){
      const arr = getSafety(section);
      if(arr.length >= MAX_NOTES) return {ok:false, reason:"limit"};
      const risk = calculateRisk(data.likelihood, data.severity);
      const item = {
        id: uid(),
        text: data.text || "",
        likelihood: data.likelihood,
        severity: data.severity,
        risk,
        action: data.action || "",
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      arr.push(item);
      saveStore(store);
      return {ok:true, item};
    }

    function updateSafety(section, id, data){
      const arr = getSafety(section);
      const i = arr.findIndex(x => x.id === id);
      if(i === -1) return {ok:false};
      const risk = calculateRisk(data.likelihood ?? arr[i].likelihood, data.severity ?? arr[i].severity);
      arr[i] = {
        ...arr[i],
        text: data.text ?? arr[i].text,
        likelihood: data.likelihood ?? arr[i].likelihood,
        severity: data.severity ?? arr[i].severity,
        risk,
        action: data.action ?? arr[i].action,
        updatedAt: Date.now()
      };
      saveStore(store);
      return {ok:true, item: arr[i]};
    }

    function deleteSafety(section, id){
      const arr = getSafety(section);
      store.safety[section] = arr.filter(x => x.id !== id);
      saveStore(store);
      return {ok:true};
    }

    function safetySummary(section){
      const arr = getSafety(section);
      const summary = {LOW:0, MEDIUM:0, HIGH:0};
      arr.forEach(x => { summary[x.risk.level] = (summary[x.risk.level]||0) + 1; });
      return summary;
    }

    // expose to window (non-breaking)
    window.V642 = {
      addItem, updateItem, deleteItem, getItems,
      enterEdit, resetEdit,
      addSafety, updateSafety, deleteSafety, calculateRisk, safetySummary
    };
  } catch(e) {
    console.error("V64.2 CORE init error", e);
  }
})();


async function shareFinalReport() {
  try {
    alert([
      "Share PDF / مشاركة التقرير PDF",
      "",
      "1) اضغط Save PDF أولاً واحفظ التقرير كملف PDF على الجهاز.",
      "2) بعد الحفظ، افتح ملف الـ PDF من Downloads / Files.",
      "3) اختر Share من تطبيق الملفات وأرسله عبر WhatsApp / Email / Teams / Drive.",
      "",
      "مهم: التطبيق لا يشارك نسخة HTML أو TXT. الملف الرسمي الوحيد هو PDF المحفوظ."
    ].join("\n"));
  } catch (err) {
    console.error(err);
    alert("استخدم زر Save PDF أولاً، ثم شارك ملف الـ PDF من تطبيق الملفات.");
  }
}

async function emailFinalReport() {
  const subject = "Duty Manager Report PDF";
  const body = [
    "Dear Team,",
    "",
    "Please find attached the Duty Manager Report PDF.",
    "",
    "Note: The official report file should be attached after saving it from OnDuty using Save PDF.",
    "",
    "Regards"
  ].join("\n");

  try {
    const ready = confirm(
      "Email PDF / إرسال التقرير PDF\n\n" +
      "قبل فتح الإيميل، تأكد أنك ضغطت Save PDF وحفظت التقرير كملف PDF على الجهاز.\n\n" +
      "OK = فتح مسودة البريد الآن لإرفاق ملف PDF يدويًا.\n" +
      "Cancel = الرجوع لحفظ PDF أولاً."
    );

    if (!ready) {
      return;
    }

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } catch (err) {
    console.error(err);
    alert("احفظ التقرير كـ PDF أولاً، ثم أرسله يدويًا من تطبيق البريد.");
  }
}

async function downloadFinalReport() {
  // Kept for compatibility with older builds where the button id was btnFinalDownload.
  // In the PDF-centric layout, Save PDF is the official output and calls printFinalToPdf().
  return printFinalToPdf();
}


/* ===== ON DUTY box binding ===== */
(function(){
  function getOnDutyValue(){
    try { return localStorage.getItem('onDutyName') || ''; } catch(e){ return ''; }
  }
  function setOnDutyValue(v){
    try { localStorage.setItem('onDutyName', v || ''); } catch(e){}
  }
  function refreshOnDutyPreview(){
    try{
      var live = document.getElementById('finalOnDutyValue');
      if(live){ live.textContent = getOnDutyValue() || '-'; }
    }catch(e){}
  }
  document.addEventListener('DOMContentLoaded', function(){
    var inp = document.getElementById('onDutyInput');
    if(inp){
      inp.value = getOnDutyValue();
      inp.addEventListener('input', function(){
        setOnDutyValue(inp.value);
        refreshOnDutyPreview();
        try { var st = document.getElementById('saveStatus'); if(st){ st.textContent = 'Auto saved ✓'; setTimeout(function(){ if(st.textContent==='Auto saved ✓') st.textContent=''; }, 1000); } } catch(e){}
        try { var st = document.getElementById('saveStatus'); if(st){ st.textContent = 'Auto saved ✓'; setTimeout(function(){ if(st.textContent==='Auto saved ✓') st.textContent=''; }, 1000); } } catch(e){}
      });
      inp.addEventListener('change', function(){
        setOnDutyValue(inp.value);
        refreshOnDutyPreview();
      });
    }
    refreshOnDutyPreview();
  });
})();
