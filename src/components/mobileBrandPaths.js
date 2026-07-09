/* Identidade mobile — traços em portrait, sensação de fluxo contínuo */

export const MOBILE_VIEWBOX_HERO = "0 0 390 844";
export const MOBILE_VIEWBOX_FLOW = "0 0 320 200";

/** Duas linhas de fluxo no hero — entram pelo canto e deslizam para baixo */
export const MOBILE_HERO_FLOW = [
  "M -6 0 C 72 28 138 88 188 158 C 222 206 228 268 208 332",
  "M 10 24 C 84 50 146 108 194 176 C 226 222 232 280 212 342",
];

/**
 * S parcial à direita — só uma parte visível, traço fino e elegante
 */
export const MOBILE_S_OUTER =
  "M 408 58 C 318 58 262 102 262 182 C 262 248 308 268 348 282 C 388 296 408 318 408 382 C 408 452 342 486 252 486";

export const MOBILE_S_INNER =
  "M 392 78 C 318 78 282 114 282 182 C 282 244 322 262 348 272 C 374 282 392 300 392 382 C 392 446 328 472 248 472";

/**
 * Fluxo por seção — mesma linguagem visual, leve deslocamento
 * 0=solucoes, 1=diferenciais, 2=metodo, 3=contato
 */
export const MOBILE_SECTION_FLOW = [
  [
    "M -8 0 C 58 18 122 58 172 108 C 202 142 206 178 182 214",
    "M 6 22 C 70 38 132 76 180 124 C 208 156 212 190 188 224",
  ],
  [
    "M -4 6 C 62 22 126 62 176 112 C 206 146 210 182 186 218",
    "M 10 28 C 74 44 136 82 184 130 C 212 162 216 196 192 230",
  ],
  [
    "M -10 2 C 54 18 118 58 168 108 C 198 142 202 178 178 214",
    "M 4 24 C 68 40 130 78 178 126 C 206 158 210 192 186 226",
  ],
  [
    "M -6 4 C 60 20 124 60 174 110 C 204 144 208 180 184 216",
    "M 8 26 C 72 42 134 80 182 128 C 210 160 214 194 190 228",
  ],
];
