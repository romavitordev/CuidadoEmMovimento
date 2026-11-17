// Gera os arquivos finais do flyer usando o Microsoft Edge (ou Chrome) em modo headless.
// Uso:  node exportar.mjs
// Precisa de internet na primeira vez (as fontes vêm do Google Fonts).
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const saida = join(aqui, "exportados");
mkdirSync(saida, { recursive: true });
const url = pathToFileURL(join(aqui, "flyer.html")).href;

const candidatos = [
  process.env.BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const navegador = candidatos.find((c) => existsSync(c));
if (!navegador) throw new Error("Edge/Chrome não encontrado. Defina a variável BROWSER com o caminho do executável.");

const base = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--virtual-time-budget=10000", "--run-all-compositor-stages-before-draw"];
const rodar = (args) => execFileSync(navegador, [...base, ...args, url], { stdio: "inherit" });

// A4 = 794 × 1123 px CSS. Escala 3.125 → 2481 × 3509 px (300 dpi); escala 1.5625 → 1240 × 1754 px.
rodar([`--screenshot=${resolve(saida, "flyer-a4-300dpi.png")}`, "--window-size=794,1123", "--force-device-scale-factor=3.125"]);
rodar([`--screenshot=${resolve(saida, "flyer-a4-digital.png")}`, "--window-size=794,1123", "--force-device-scale-factor=1.5625"]);
rodar([`--print-to-pdf=${resolve(saida, "flyer-a4.pdf")}`, "--no-pdf-header-footer"]);
console.log("Pronto:", saida);
