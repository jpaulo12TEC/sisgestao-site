/* Identidade mobile — traços pensados para portrait, sensação de fluxo */

export const MOBILE_VIEWBOX_HERO = "-20 0 420 820";
export const MOBILE_VIEWBOX_FLOW = "-20 0 340 260";

/** Arcos de fluxo no hero — entram pelo canto e descem suavemente */
export const MOBILE_HERO_FLOW = [
  "M -12 24 C 55 12 118 48 178 98 C 218 132 228 178 205 228",
  "M 0 52 C 72 38 132 72 188 118 C 224 152 232 196 210 244",
  "M 12 78 C 88 64 148 98 202 142 C 236 174 242 218 220 266",
];

/** S refinado — fino, elegante, alinhado à direita */
export const MOBILE_S_OUTER =
  "M 388 72 C 302 72 248 108 248 178 C 248 238 292 258 332 272 C 372 286 392 308 392 368 C 392 438 338 468 252 468";

export const MOBILE_S_INNER =
  "M 372 92 C 302 92 268 122 268 178 C 268 232 306 248 332 258 C 358 268 372 286 372 368 C 372 422 322 446 258 446";

/**
 * Fluxo por seção — curvas curtas com leve variação entre seções
 * section: 0=solucoes, 1=diferenciais, 2=metodo, 3=contato
 */
export const MOBILE_SECTION_FLOW = [
  [
    "M -14 8 C 48 0 108 32 162 68 C 192 90 200 124 182 158",
    "M -2 32 C 58 22 112 52 164 86 C 192 106 198 138 180 170",
  ],
  [
    "M -10 12 C 52 4 112 36 166 72 C 196 94 204 128 186 162",
    "M 2 36 C 62 26 116 56 168 90 C 196 110 202 142 184 174",
  ],
  [
    "M -16 4 C 44 -4 104 28 158 64 C 188 86 196 120 178 154",
    "M -4 28 C 54 18 108 48 160 82 C 188 102 194 134 176 166",
  ],
  [
    "M -12 10 C 50 2 110 34 164 70 C 194 92 202 126 184 160",
    "M 0 34 C 60 24 114 54 166 88 C 194 108 200 140 182 172",
  ],
];
