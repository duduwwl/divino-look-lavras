// @ts-nocheck
/* eslint-disable */
// Clothing Rail Hero — versão compilada (esbuild, charset utf8). Tipos exportados no topo.
"use client";
import{Fragment as te,jsx as r,jsxs as g}from"react/jsx-runtime";
import*as d from"react";
import{createPortal as ce}from"react-dom";
export type GarmentKind = "tee" | "knit" | "hoodie" | "shirt" | "jacket" | "coat";
export interface RailGarment {
  id: string;
  name: string;
  description?: string;
  kind?: GarmentKind;
  color?: string;
  trim?: string;
  image?: string;
  backImage?: string;
  sideImage?: string;
  tag?: string;
  details?: string[];
}
export interface ClothingRailHeroLabels { front: string; back: string; close: string; show: string; }
const A=200,w=310,Wt=A/w,At=4,le=4.6,H=-70,$t=1100,Tt=.035,de=400,he=200,ue=340,pe={front:"Frente",back:"Costas",close:"Fechar",show:"Mostrar"},fe="M80,34 C88,45 112,45 120,34",ge={tee:{front:{body:`${fe} C132,36 146,40 156,45 C160,48 163,52 164,57 C158,72 152,88 152,102 L153,236 C128,241 72,241 47,236 L48,102 C48,88 42,72 36,57 C37,52 40,48 44,45 C54,40 68,36 80,34 Z`,sleeves:["M44,45 C38,47 33,50 31,55 C24,64 17,76 13,92 C18,100 24,106 30,110 C35,106 42,102 48,102 C47,84 45,62 44,45 Z","M156,45 C162,47 167,50 169,55 C176,64 183,76 187,92 C182,100 176,106 170,110 C165,106 158,102 152,102 C153,84 155,62 156,45 Z"],under:"M80,34 C90,30 110,30 120,34 C112,45 88,45 80,34 Z",ribs:["M80,34 C88,45 112,45 120,34 L124,36 C114,50 86,50 76,36 Z"],panels:[],seams:["M80,34 C68,36 54,40 44,45","M120,34 C132,36 146,40 156,45","M48,102 C47,84 45,62 44,45","M152,102 C153,84 155,62 156,45"],stitches:["M14,93 C19,101 25,106 30,109","M186,93 C181,101 175,106 170,109","M50,229 C74,233 126,233 150,229"],folds:["M40,56 C58,76 76,94 90,120","M160,56 C142,76 124,94 110,120","M70,126 C66,164 72,204 66,234","M131,128 C135,164 129,204 134,234","M100,112 C98,160 103,204 100,236","M31,62 C27,74 23,84 21,96","M169,62 C173,74 177,84 179,96","M78,50 C88,58 112,58 122,50"]},back:{body:"M80,34 C90,31 110,31 120,34 C132,36 146,40 156,45 C160,48 163,52 164,57 C158,72 152,88 152,102 L153,236 C128,241 72,241 47,236 L48,102 C48,88 42,72 36,57 C37,52 40,48 44,45 C54,40 68,36 80,34 Z",sleeves:["M44,45 C38,47 33,50 31,55 C24,64 17,76 13,92 C18,100 24,106 30,110 C35,106 42,102 48,102 C47,84 45,62 44,45 Z","M156,45 C162,47 167,50 169,55 C176,64 183,76 187,92 C182,100 176,106 170,110 C165,106 158,102 152,102 C153,84 155,62 156,45 Z"],ribs:["M80,34 C90,31 110,31 120,34 L121,38 C110,35 90,35 79,38 Z"],panels:[],seams:["M80,34 C68,36 54,40 44,45","M120,34 C132,36 146,40 156,45"],stitches:["M14,93 C19,101 25,106 30,109","M186,93 C181,101 175,106 170,109","M50,229 C74,233 126,233 150,229"],folds:["M40,56 C60,74 80,88 96,104","M160,56 C140,74 120,88 104,104","M72,120 C68,164 74,204 68,234","M128,122 C132,164 126,204 132,234","M100,60 C98,150 102,200 100,236","M31,62 C27,74 23,84 21,96","M169,62 C173,74 177,84 179,96"]}},knit:{front:{body:"M80,34 C88,46 112,46 120,34 L158,46 C162,52 163,60 163,70 L163,226 C140,231 60,231 37,226 L37,70 C37,60 38,52 42,46 Z",sleeves:["M42,46 C32,52 27,62 26,76 L20,216 C26,221 36,222 44,219 L47,98 C46,80 45,62 42,46 Z","M158,46 C168,52 173,62 174,76 L180,216 C174,221 164,222 156,219 L153,98 C154,80 155,62 158,46 Z"],under:"M80,34 C90,30 110,30 120,34 C112,46 88,46 80,34 Z",ribs:["M37,211 L163,211 L163,226 C140,231 60,231 37,226 Z","M21,203 L45,206 L44,219 C36,222 26,221 20,216 Z","M179,203 L155,206 L156,219 C164,222 174,221 180,216 Z","M80,34 C88,46 112,46 120,34 L125,37 C115,53 85,53 75,37 Z"],panels:[],seams:["M47,98 C46,80 45,62 42,46","M153,98 C154,80 155,62 158,46"],stitches:[],folds:["M66,60 C62,110 70,160 64,210","M134,62 C138,112 130,162 136,210","M100,56 C98,110 102,160 100,210","M33,80 C31,130 33,170 30,204","M167,80 C169,130 167,170 170,204"]},back:{body:"M80,34 C90,31 110,31 120,34 L158,46 C162,52 163,60 163,70 L163,226 C140,231 60,231 37,226 L37,70 C37,60 38,52 42,46 Z",sleeves:["M42,46 C32,52 27,62 26,76 L20,216 C26,221 36,222 44,219 L47,98 C46,80 45,62 42,46 Z","M158,46 C168,52 173,62 174,76 L180,216 C174,221 164,222 156,219 L153,98 C154,80 155,62 158,46 Z"],ribs:["M37,211 L163,211 L163,226 C140,231 60,231 37,226 Z","M21,203 L45,206 L44,219 C36,222 26,221 20,216 Z","M179,203 L155,206 L156,219 C164,222 174,221 180,216 Z","M80,34 C90,31 110,31 120,34 L122,39 C110,35 90,35 78,39 Z"],panels:[],seams:["M47,98 C46,80 45,62 42,46","M153,98 C154,80 155,62 158,46"],stitches:[],folds:["M68,60 C64,110 70,160 66,210","M132,62 C136,112 130,162 134,210","M100,50 C99,110 101,160 100,210"]}},hoodie:{front:{body:"M80,36 C88,47 112,47 120,36 L160,48 C164,54 165,62 165,72 L165,228 C141,233 59,233 35,228 L35,72 C35,62 36,54 40,48 Z",sleeves:["M40,48 C30,54 25,64 24,80 L18,218 C24,223 35,224 43,221 L46,100 C45,82 43,64 40,48 Z","M160,48 C170,54 175,64 176,80 L182,218 C176,223 165,224 157,221 L154,100 C155,82 157,64 160,48 Z"],hood:"M72,42 C64,28 68,12 86,8 L114,8 C132,12 136,28 128,42 C116,30 84,30 72,42 Z",under:"M78,38 C88,31 112,31 122,38 C112,48 88,48 78,38 Z",ribs:["M35,213 L165,213 L165,228 C141,233 59,233 35,228 Z","M19,205 L45,208 L43,221 C35,224 24,223 18,218 Z","M181,205 L155,208 L157,221 C165,224 176,223 182,218 Z"],panels:[{d:"M62,148 L138,148 L150,196 L50,196 Z",t:.035},{d:"M80,36 C76,46 80,56 92,60 L96,55 C88,52 84,45 85,38 Z",t:-.12},{d:"M120,36 C124,46 120,56 108,60 L104,55 C112,52 116,45 115,38 Z",t:-.12}],seams:["M62,148 L52,186","M138,148 L148,186","M46,100 C45,82 43,64 40,48","M154,100 C155,82 157,64 160,48"],stitches:["M64,151 L136,151","M51,193 L149,193"],folds:["M68,64 C64,110 70,140 66,148","M132,66 C136,110 130,140 134,148","M100,62 C98,100 102,130 100,148","M31,84 C29,130 31,170 28,206","M169,84 C171,130 169,170 172,206","M76,198 C74,204 76,208 74,212","M124,198 C126,204 124,208 126,212"],cords:["M92,50 C91,72 89,88 90,104","M108,50 C109,72 111,88 110,104"]},back:{body:"M80,36 C90,32 110,32 120,36 L160,48 C164,54 165,62 165,72 L165,228 C141,233 59,233 35,228 L35,72 C35,62 36,54 40,48 Z",sleeves:["M40,48 C30,54 25,64 24,80 L18,218 C24,223 35,224 43,221 L46,100 C45,82 43,64 40,48 Z","M160,48 C170,54 175,64 176,80 L182,218 C176,223 165,224 157,221 L154,100 C155,82 157,64 160,48 Z"],ribs:["M35,213 L165,213 L165,228 C141,233 59,233 35,228 Z","M19,205 L45,208 L43,221 C35,224 24,223 18,218 Z","M181,205 L155,208 L157,221 C165,224 176,223 182,218 Z"],panels:[{d:"M76,36 C66,50 64,82 80,110 C88,120 112,120 120,110 C136,82 134,50 124,36 C112,30 88,30 76,36 Z",t:-.06}],seams:["M100,32 L100,118","M46,100 C45,82 43,64 40,48","M154,100 C155,82 157,64 160,48"],stitches:["M80,108 C90,116 110,116 120,108"],folds:["M70,120 C66,160 72,190 68,212","M130,120 C134,160 128,190 132,212","M31,84 C29,130 31,170 28,206","M169,84 C171,130 169,170 172,206"]}},shirt:{front:{body:"M80,34 C88,40 112,40 120,34 L160,47 C164,53 165,60 165,70 L163,232 C150,244 124,242 100,238 C76,242 50,244 37,232 L35,70 C35,60 36,53 40,47 Z",sleeves:["M40,47 C30,53 26,63 25,78 L21,204 L45,206 L47,98 C46,80 44,63 40,47 Z","M160,47 C170,53 174,63 175,78 L179,204 L155,206 L153,98 C154,80 156,63 160,47 Z"],under:"M80,34 C90,29 110,29 120,34 L120,39 C110,34 90,34 80,39 Z",ribs:[],panels:[{d:"M21,204 L45,206 L45,218 C37,220 28,220 21,217 Z",t:-.05},{d:"M179,204 L155,206 L155,218 C163,220 172,220 179,217 Z",t:-.05},{d:"M96,46 L104,46 L104,238 L96,238 Z",t:-.03},{d:"M55,84 L87,84 L87,118 L71,124 L55,118 Z",t:.02},{d:"M113,84 L145,84 L145,118 L129,124 L113,118 Z",t:.02},{d:"M54,81 L88,81 L88,92 L71,96 L54,92 Z",t:-.06},{d:"M112,81 L146,81 L146,92 L129,96 L112,92 Z",t:-.06},{d:"M100,48 L80,34 C78,42 74,52 69,62 L90,64 Z",t:.04},{d:"M100,48 L120,34 C122,42 126,52 131,62 L110,64 Z",t:.04}],seams:["M96,64 L96,238","M104,64 L104,238","M47,98 C46,80 44,63 40,47","M153,98 C154,80 156,63 160,47"],stitches:["M57,116 L71,121 L85,116","M115,116 L129,121 L143,116","M39,230 C54,239 76,238 100,234 C124,238 146,239 161,230"],folds:["M66,128 C62,170 68,200 62,234","M134,128 C138,170 132,200 138,234","M31,90 C29,130 31,170 28,200","M169,90 C171,130 169,170 172,200"],buttons:[[100,72],[100,102],[100,132],[100,162],[100,192],[100,222],[71,92],[129,92]]},back:{body:"M80,34 C90,30 110,30 120,34 L160,47 C164,53 165,60 165,70 L163,232 C150,244 124,242 100,238 C76,242 50,244 37,232 L35,70 C35,60 36,53 40,47 Z",sleeves:["M40,47 C30,53 26,63 25,78 L21,204 L45,206 L47,98 C46,80 44,63 40,47 Z","M160,47 C170,53 174,63 175,78 L179,204 L155,206 L153,98 C154,80 156,63 160,47 Z"],ribs:[],panels:[{d:"M21,204 L45,206 L45,218 C37,220 28,220 21,217 Z",t:-.05},{d:"M179,204 L155,206 L155,218 C163,220 172,220 179,217 Z",t:-.05},{d:"M80,34 C90,30 110,30 120,34 L122,41 C110,36 90,36 78,41 Z",t:.03},{d:"M40,47 L80,34 C90,30 110,30 120,34 L160,47 C162,56 163,62 164,68 C130,74 70,74 36,68 C37,62 38,56 40,47 Z",t:.025}],seams:["M36,68 C70,74 130,74 164,68","M97,72 L97,238","M103,72 L103,238"],stitches:["M39,230 C54,239 76,238 100,234 C124,238 146,239 161,230"],folds:["M70,90 C66,150 72,200 66,234","M130,90 C134,150 128,200 134,234","M31,90 C29,130 31,170 28,200","M169,90 C171,130 169,170 172,200"]}},jacket:{front:{body:"M80,34 C88,40 112,40 120,34 L162,48 C166,54 167,61 167,72 L166,230 L34,230 L33,72 C33,61 34,54 38,48 Z",sleeves:["M38,48 C28,54 24,64 23,80 L19,218 C26,222 37,222 44,219 L46,100 C45,82 42,64 38,48 Z","M162,48 C172,54 176,64 177,80 L181,218 C174,222 163,222 156,219 L154,100 C155,82 158,64 162,48 Z"],under:"M80,34 C90,30 110,30 120,34 L122,40 C110,35 90,35 78,40 Z",ribs:[],panels:[{d:"M100,58 L106,58 L106,230 L100,230 Z",t:-.07},{d:"M112,86 L142,86 L142,118 L112,118 Z",t:.025},{d:"M46,152 L88,152 L88,198 L46,198 Z",t:.025},{d:"M112,152 L154,152 L154,198 L112,198 Z",t:.025},{d:"M100,58 L80,34 C72,40 64,50 58,64 L90,72 Z",t:-.04},{d:"M100,58 L120,34 C128,40 136,50 142,64 L110,72 Z",t:-.04}],seams:["M100,58 L100,230","M46,100 C45,82 42,64 38,48","M154,100 C155,82 158,64 162,48"],stitches:["M114,88 L140,88 L140,116 L114,116 Z","M48,154 L86,154 L86,196 L48,196 Z","M114,154 L152,154 L152,196 L114,196 Z","M35,224 L165,224","M22,208 L44,210","M178,208 L156,210"],folds:["M70,74 C66,110 72,130 68,150","M130,122 C134,136 130,146 132,150","M68,200 C66,212 70,220 66,228","M30,92 C28,140 30,180 27,214","M170,92 C172,140 170,180 173,214"],buttons:[[106,84],[106,118],[106,152],[106,186],[106,218]]},back:{body:"M80,34 C90,30 110,30 120,34 L162,48 C166,54 167,61 167,72 L166,230 L34,230 L33,72 C33,61 34,54 38,48 Z",sleeves:["M38,48 C28,54 24,64 23,80 L19,218 C26,222 37,222 44,219 L46,100 C45,82 42,64 38,48 Z","M162,48 C172,54 176,64 177,80 L181,218 C174,222 163,222 156,219 L154,100 C155,82 158,64 162,48 Z"],ribs:[],panels:[{d:"M80,34 C90,30 110,30 120,34 L126,46 C110,39 90,39 74,46 Z",t:-.04}],seams:["M36,76 C70,82 130,82 164,76","M46,100 C45,82 42,64 38,48","M154,100 C155,82 158,64 162,48"],stitches:["M35,224 L165,224","M36,80 C70,86 130,86 164,80"],folds:["M70,90 C66,150 72,196 68,228","M130,90 C134,150 128,196 132,228","M30,92 C28,140 30,180 27,214","M170,92 C172,140 170,180 173,214"]}},coat:{front:{body:"M80,34 C88,40 112,40 120,34 L164,50 C168,56 169,63 169,74 L174,294 L26,294 L31,74 C31,63 32,56 36,50 Z",sleeves:["M36,50 C26,56 22,66 21,82 L16,240 C23,244 34,244 42,241 L45,104 C44,86 40,66 36,50 Z","M164,50 C174,56 178,66 179,82 L184,240 C177,244 166,244 158,241 L155,104 C156,86 160,66 164,50 Z"],under:"M80,34 C90,28 110,28 120,34 L118,42 C110,37 90,37 82,42 Z",ribs:[],panels:[{d:"M100,128 L106,128 L106,294 L100,294 Z",t:-.06},{d:"M100,128 L80,34 C74,44 70,56 66,72 L76,78 L70,90 Z",t:.045},{d:"M100,128 L120,34 C126,44 130,56 134,72 L124,78 L130,90 Z",t:.045},{d:"M42,206 L84,206 L84,217 L42,217 Z",t:-.05},{d:"M116,206 L158,206 L158,217 L116,217 Z",t:-.05}],seams:["M100,128 L100,294","M45,104 C44,86 40,66 36,50","M155,104 C156,86 160,66 164,50","M42,217 L84,217","M116,217 L158,217"],stitches:["M28,288 L172,288"],folds:["M60,96 C56,170 64,230 54,292","M140,96 C144,170 136,230 146,292","M84,140 C82,200 86,250 82,292","M28,96 C26,150 28,200 24,236","M172,96 C174,150 172,200 176,236"],buttons:[[112,146],[112,180],[112,214]]},back:{body:"M80,34 C90,30 110,30 120,34 L164,50 C168,56 169,63 169,74 L174,294 L26,294 L31,74 C31,63 32,56 36,50 Z",sleeves:["M36,50 C26,56 22,66 21,82 L16,240 C23,244 34,244 42,241 L45,104 C44,86 40,66 36,50 Z","M164,50 C174,56 178,66 179,82 L184,240 C177,244 166,244 158,241 L155,104 C156,86 160,66 164,50 Z"],ribs:[],panels:[{d:"M80,34 C90,30 110,30 120,34 L124,48 C110,41 90,41 76,48 Z",t:.04},{d:"M100,232 L106,232 L106,294 L100,294 Z",t:-.07}],seams:["M100,44 L100,294","M45,104 C44,86 40,66 36,50","M155,104 C156,86 160,66 164,50"],stitches:["M28,288 L172,288"],folds:["M62,96 C58,170 66,230 56,292","M138,96 C142,170 134,230 144,292","M28,96 C26,150 28,200 24,236","M172,96 C174,150 172,200 176,236"]}}},Yt=["tee","knit","hoodie","shirt","jacket","coat"],Zt={tee:{hem:240,long:!1,hood:!1,width:.23},knit:{hem:232,long:!0,hood:!1,width:.25},hoodie:{hem:234,long:!0,hood:!0,width:.33},shirt:{hem:244,long:!0,hood:!1,width:.25},jacket:{hem:234,long:!0,hood:!1,width:.27},coat:{hem:296,long:!0,hood:!1,width:.27}};function It(a){const s=Zt[a],p=s.hem,x=s.long?p-24:104,$=`M86,60 C85,96 88,132 85,168 C83,196 84,${p-18} 85,${p} C92,${p+5} 109,${p+5} 116,${p} C117,${p-18} 118,196 116,168 C113,132 116,96 114,60 Z`,v=`M84,56 C84,47 90,43 100,43 C110,43 116,47 116,56 C117,${Math.round(x*.62)} 119,${x-14} 119,${x-2} C119,${x+4} 116,${x+7} 111,${x+7} C100,${x+8} 90,${x+6} 83,${x+2} C80,${x-1} 80,${x-6} 81,${x-10} C83,${x-24} 83,70 84,56 Z`,N=s.hood?"M110,46 C128,36 138,54 134,76 C130,90 118,94 113,86 C113,74 112,60 110,46 Z":null;return{body:$,sleeve:v,hood:N,cuff:x}}function Rt(a,s){const p=ge[a];return s==="front"?p.front:p.back}function qt(a){return[a.body,...a.sleeves,...a.hood?[a.hood]:[]]}const _t=new Map;function Pt(a,s){const p=`${a}:${s}`,x=_t.get(p);if(x)return x;const $=qt(Rt(a,s)).map(N=>`<path d='${N}'/>`).join(""),v=`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${A} ${w}' preserveAspectRatio='xMidYMin meet'>${$}</svg>`)}")`;return _t.set(p,v),v}function X(a,s){if(s===0)return a;const p=Math.round((1-Math.min(1,Math.abs(s)))*1e3)/10;return`color-mix(in oklab, ${a} ${p}%, ${s>0?"white":"black"})`}function B(a,s,p){return Math.max(s,Math.min(p,a))}function me(a){const s=a*Math.PI/180;return .66+.34*Math.max(0,Math.sin(s)*.42+Math.cos(s)*.91)}function Ot(a){const s=a.getBoundingClientRect();return{left:s.left,top:s.top,k:a.offsetWidth?s.width/a.offsetWidth:1}}function be({uid:a}){return r("svg",{"aria-hidden":"true",width:"0",height:"0",className:"crh-defs",focusable:"false",children:g("defs",{children:[Yt.map(s=>["front","back"].map(p=>r("clipPath",{id:`${a}-clip-${s}-${p}`,children:qt(Rt(s,p)).map(x=>r("path",{d:x},x))},`${s}-${p}`))),g("linearGradient",{id:`${a}-volume`,x1:"0",x2:"1",y1:"0",y2:"0",children:[r("stop",{offset:"0",stopColor:"black",stopOpacity:"0.34"}),r("stop",{offset:"0.16",stopColor:"black",stopOpacity:"0.1"}),r("stop",{offset:"0.42",stopColor:"white",stopOpacity:"0.07"}),r("stop",{offset:"0.58",stopColor:"white",stopOpacity:"0.04"}),r("stop",{offset:"0.84",stopColor:"black",stopOpacity:"0.12"}),r("stop",{offset:"1",stopColor:"black",stopOpacity:"0.38"})]}),g("linearGradient",{id:`${a}-drape`,x1:"0",x2:"0",y1:"0",y2:"1",children:[r("stop",{offset:"0",stopColor:"white",stopOpacity:"0.16"}),r("stop",{offset:"0.22",stopColor:"white",stopOpacity:"0"}),r("stop",{offset:"0.75",stopColor:"black",stopOpacity:"0.04"}),r("stop",{offset:"1",stopColor:"black",stopOpacity:"0.2"})]}),g("linearGradient",{id:`${a}-sidevol`,gradientUnits:"userSpaceOnUse",x1:"80",x2:"120",y1:"0",y2:"0",children:[r("stop",{offset:"0",stopColor:"white",stopOpacity:"0.14"}),r("stop",{offset:"0.28",stopColor:"white",stopOpacity:"0.04"}),r("stop",{offset:"0.7",stopColor:"black",stopOpacity:"0.08"}),r("stop",{offset:"0.95",stopColor:"black",stopOpacity:"0.3"}),r("stop",{offset:"1",stopColor:"black",stopOpacity:"0.18"})]}),g("filter",{id:`${a}-cloth`,x:"-12%",y:"-4%",width:"124%",height:"108%",children:[r("feTurbulence",{type:"fractalNoise",baseFrequency:"0.016 0.028",numOctaves:"2",seed:"3",result:"n"}),r("feDisplacementMap",{in:"SourceGraphic",in2:"n",scale:"2.6",xChannelSelector:"R",yChannelSelector:"G"})]}),Yt.map(s=>g(d.Fragment,{children:[r("clipPath",{id:`${a}-sb-${s}`,children:r("path",{d:It(s).body})}),r("clipPath",{id:`${a}-ss-${s}`,children:r("path",{d:It(s).sleeve})})]},`side-${s}`)),g("linearGradient",{id:`${a}-wood`,x1:"0",x2:"0",y1:"0",y2:"1",children:[r("stop",{offset:"0",stopColor:"color-mix(in oklab, sienna 55%, white)"}),r("stop",{offset:"0.45",stopColor:"color-mix(in oklab, sienna 80%, black)"}),r("stop",{offset:"1",stopColor:"color-mix(in oklab, sienna 45%, black)"})]}),g("linearGradient",{id:`${a}-woodgrain`,gradientUnits:"userSpaceOnUse",spreadMethod:"repeat",x1:"0",x2:"11",y1:"0",y2:"0.6",children:[r("stop",{offset:"0",stopColor:"black",stopOpacity:"0"}),r("stop",{offset:"0.45",stopColor:"black",stopOpacity:"0.16"}),r("stop",{offset:"0.6",stopColor:"white",stopOpacity:"0.08"}),r("stop",{offset:"1",stopColor:"black",stopOpacity:"0"})]}),g("linearGradient",{id:`${a}-chrome`,gradientUnits:"userSpaceOnUse",x1:"98.5",x2:"101.7",y1:"0",y2:"0",children:[r("stop",{offset:"0",stopColor:"color-mix(in oklab, white 45%, gray)"}),r("stop",{offset:"0.35",stopColor:"white"}),r("stop",{offset:"0.78",stopColor:"color-mix(in oklab, gray 65%, black)"}),r("stop",{offset:"1",stopColor:"color-mix(in oklab, gray 75%, white)"})]}),g("pattern",{id:`${a}-rib`,width:"2.6",height:"8",patternUnits:"userSpaceOnUse",children:[r("rect",{width:"1.1",height:"8",fill:"black",fillOpacity:"0.2"}),r("rect",{x:"1.3",width:"0.7",height:"8",fill:"white",fillOpacity:"0.08"})]}),r("pattern",{id:`${a}-knit`,width:"5",height:"4",patternUnits:"userSpaceOnUse",children:r("path",{d:"M0,0 L2.5,4 L5,0",fill:"none",stroke:"black",strokeOpacity:"0.09",strokeWidth:"0.7"})}),g("filter",{id:`${a}-grain`,x:"0",y:"0",width:"100%",height:"100%",children:[r("feTurbulence",{type:"fractalNoise",baseFrequency:"0.9",numOctaves:"2",seed:"7"}),r("feColorMatrix",{type:"saturate",values:"0"}),r("feComponentTransfer",{children:r("feFuncA",{type:"table",tableValues:"0 0.55"})})]}),r("filter",{id:`${a}-soft`,x:"-20%",y:"-5%",width:"140%",height:"110%",children:r("feGaussianBlur",{stdDeviation:"2.4"})})]})})}const Ut="M100,36 L100,-0.4 C100,-3.4 102.2,-4.2 103.9,-2.8 C104.9,-2 105.4,-1.2 105.6,-0.2",Ce="M99.5,30 L99.5,-0.2 C99.5,-2.4 101,-3.2 102.4,-2.6",Ht="M38,57 Q70,38 100,36 Q130,38 162,57",xe="M40,54.5 Q71,35.5 100,33.5 Q129,35.5 160,54.5";function jt({uid:a}){return g(te,{children:[r("path",{d:Ut,fill:"none",stroke:"black",strokeOpacity:"0.28",strokeWidth:"3.4",strokeLinecap:"round",transform:"translate(0.9 1.1)"}),r("path",{d:Ut,fill:"none",stroke:`url(#${a}-chrome)`,strokeWidth:"2.6",strokeLinecap:"round"}),r("path",{d:Ce,fill:"none",stroke:"white",strokeOpacity:"0.6",strokeWidth:"0.6",strokeLinecap:"round"}),r("ellipse",{cx:"105.9",cy:"0.6",rx:"1.9",ry:"0.9",fill:"black",fillOpacity:"0.4"}),r("rect",{x:"96",y:"27",width:"8",height:"9",rx:"2",fill:`url(#${a}-chrome)`}),r("rect",{x:"97.2",y:"28.2",width:"2",height:"6.6",rx:"1",fill:"white",fillOpacity:"0.5"})]})}function Qt({uid:a,side:s,kind:p,material:x}){const $=p?Rt(p,s):null,v=x==="wood"?`url(#${a}-wood)`:"currentColor";return g("svg",{"aria-hidden":"true",viewBox:`0 0 ${A} ${w}`,preserveAspectRatio:"xMidYMin meet",className:`crh-art${x==="matte"?" crh-matte":""}`,children:[$?.hood&&r("path",{d:$.hood,fill:"var(--garment-color)"}),$?.hood&&r("path",{d:$.hood,fill:"black",fillOpacity:"0.22"}),$?.under&&r("path",{d:$.under,fill:"var(--garment-under)"}),x!=="none"&&g(te,{children:[r("path",{d:Ht,fill:"none",stroke:"black",strokeOpacity:"0.25",strokeWidth:"9.5",strokeLinecap:"round",transform:"translate(0.6 1.6)"}),r("path",{d:Ht,fill:"none",stroke:v,strokeWidth:"8.5",strokeLinecap:"round"}),x==="wood"&&r("path",{d:Ht,fill:"none",stroke:`url(#${a}-woodgrain)`,strokeWidth:"8.5",strokeLinecap:"round"}),r("path",{d:xe,fill:"none",stroke:"white",strokeOpacity:x==="wood"?.3:.14,strokeWidth:"1.1",strokeLinecap:"round"}),r(jt,{uid:a})]})]})}function ke({uid:a,material:s}){if(s==="none")return null;const p=s==="wood"?`url(#${a}-wood)`:"currentColor";return g("svg",{"aria-hidden":"true",viewBox:`0 0 ${A} ${w}`,preserveAspectRatio:"xMidYMin meet",className:`crh-art${s==="matte"?" crh-matte":""}`,children:[r("path",{d:"M97.8,35 L102.2,35 L104.5,50 L95.5,50 Z",fill:p}),r("path",{d:"M98.6,36 L100,36 L100,49 L97.3,49 Z",fill:"white",fillOpacity:"0.22"}),r(jt,{uid:a})]})}function Vt({uid:a,kind:s,side:p,color:x,trim:$}){const v=Rt(s,p),N=`url(#${a}-clip-${s}-${p})`,C=s==="knit";return g("svg",{"aria-hidden":"true",viewBox:`0 0 ${A} ${w}`,preserveAspectRatio:"xMidYMin meet",className:"crh-art",children:[r("path",{d:v.body,fill:x}),v.sleeves.map(m=>r("path",{d:m,fill:x},m)),g("g",{clipPath:N,children:[C&&r("rect",{width:A,height:w,fill:`url(#${a}-knit)`}),v.panels.map(m=>r("path",{d:m.d,fill:X(x,m.t)},m.d)),v.ribs.map(m=>r("path",{d:m,fill:X($,0)},m)),v.ribs.map(m=>r("path",{d:m,fill:`url(#${a}-rib)`},`${m}-rib`)),g("g",{filter:`url(#${a}-soft)`,fill:"none",strokeLinecap:"round",children:[v.folds.map(m=>r("path",{d:m,stroke:"black",strokeOpacity:"0.22",strokeWidth:"4"},m)),v.folds.map(m=>r("path",{d:m,stroke:"white",strokeOpacity:"0.1",strokeWidth:"2",transform:"translate(2.2 0)"},`${m}-hi`)),v.sleeves.map(m=>r("path",{d:m,stroke:"black",strokeOpacity:"0.2",strokeWidth:"3"},`${m}-edge`))]}),r("rect",{width:A,height:w,fill:`url(#${a}-volume)`}),r("rect",{width:A,height:w,fill:`url(#${a}-drape)`}),r("rect",{width:A,height:w,filter:`url(#${a}-grain)`,opacity:"0.16",style:{mixBlendMode:"multiply"}})]}),g("g",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[v.seams.map(m=>r("path",{d:m,stroke:"black",strokeOpacity:"0.22",strokeWidth:"0.8"},m)),v.stitches.map(m=>r("path",{d:m,stroke:X(x,.35),strokeOpacity:"0.5",strokeWidth:"0.6",strokeDasharray:"1.6 1.4"},m)),v.cords?.map(m=>r("path",{d:m,stroke:$,strokeWidth:"1.8"},m))]}),v.cords?.map(m=>{const z=m.trim().split(" ").at(-1)?.split(",").map(Number)??[0,0];return r("rect",{x:(z[0]??0)-1.4,y:(z[1]??0)-1,width:"2.8",height:"6",rx:"1",fill:X($,-.3)},`${m}-tip`)}),v.buttons?.map(([m,z])=>g("g",{children:[r("circle",{cx:m,cy:z,r:"2.6",fill:X($,-.15)}),r("circle",{cx:(m??0)-.6,cy:(z??0)-.7,r:"0.9",fill:"white",fillOpacity:"0.45"})]},`${m}-${z}`))]})}function Me({uid:a,kind:s,color:p,trim:x}){const{body:$,sleeve:v,hood:N,cuff:C}=It(s),m=s==="knit",z=`url(#${a}-soft)`,Z=Zt[s].hem;return g("svg",{"aria-hidden":"true",viewBox:`0 0 ${A} ${w}`,preserveAspectRatio:"xMidYMin meet",className:"crh-art",children:[g("g",{filter:`url(#${a}-cloth)`,children:[N&&r("path",{d:N,fill:X(p,-.14)}),N&&r("path",{d:N,fill:"none",stroke:"black",strokeOpacity:"0.2",strokeWidth:"1.2"}),r("path",{d:$,fill:p}),g("g",{clipPath:`url(#${a}-sb-${s})`,children:[m&&r("rect",{width:A,height:w,fill:`url(#${a}-knit)`}),g("g",{filter:z,fill:"none",strokeLinecap:"round",children:[r("path",{d:`M90,${C+10} C87,150 92,190 88,${Z-4}`,stroke:"black",strokeOpacity:"0.24",strokeWidth:"2.6"}),r("path",{d:`M92,${C+10} C89,150 94,190 90,${Z-4}`,stroke:"white",strokeOpacity:"0.14",strokeWidth:"1.2"}),r("path",{d:`M106,${C+6} C109,140 104,186 108,${Z-2}`,stroke:"black",strokeOpacity:"0.17",strokeWidth:"2.2"}),r("path",{d:`M107.6,${C+6} C110.6,140 105.6,186 109.6,${Z-2}`,stroke:"white",strokeOpacity:"0.1",strokeWidth:"1"}),r("path",{d:`M99,${C+30} C97,170 101,205 98,${Z-2}`,stroke:"black",strokeOpacity:"0.1",strokeWidth:"2"}),r("path",{d:`M112,${C+40} C113,170 111,200 113,${Z-10}`,stroke:"black",strokeOpacity:"0.12",strokeWidth:"1.6"}),r("path",{d:`M84,${C+50} C86,160 85,200 86,${Z-6}`,stroke:"white",strokeOpacity:"0.2",strokeWidth:"1.4"}),r("path",{d:`M80,${C+6} C90,${C+12} 110,${C+12} 120,${C+7}`,stroke:"black",strokeOpacity:"0.4",strokeWidth:"6"}),r("path",{d:`M84,${Z+1} C92,${Z+6} 108,${Z+6} 116,${Z+1}`,stroke:"black",strokeOpacity:"0.32",strokeWidth:"6"})]}),r("rect",{width:A,height:w,fill:`url(#${a}-sidevol)`}),r("rect",{width:A,height:w,fill:`url(#${a}-drape)`}),r("rect",{width:A,height:w,filter:`url(#${a}-grain)`,opacity:"0.16",style:{mixBlendMode:"multiply"}})]}),r("path",{d:v,fill:p}),g("g",{clipPath:`url(#${a}-ss-${s})`,children:[m&&r("rect",{width:A,height:w,fill:`url(#${a}-knit)`}),g("g",{filter:z,fill:"none",strokeLinecap:"round",children:[r("path",{d:`M91,62 C88,78 90,${C-14} 91,${C}`,stroke:"black",strokeOpacity:"0.16",strokeWidth:"2.6"}),r("path",{d:`M92.6,62 C89.6,78 91.6,${C-14} 92.6,${C}`,stroke:"white",strokeOpacity:"0.12",strokeWidth:"1.1"}),r("path",{d:`M109,58 C112,76 110,${C-14} 109,${C}`,stroke:"black",strokeOpacity:"0.2",strokeWidth:"2.6"}),r("path",{d:`M86,72 C94,80 104,86 115,${C-10}`,stroke:"black",strokeOpacity:"0.1",strokeWidth:"2.4"}),r("path",{d:"M84,53 C92,49 108,49 116,53",stroke:"black",strokeOpacity:"0.24",strokeWidth:"3.6"}),r("path",{d:`M81,${C-2} C92,${C+4} 108,${C+5} 119,${C+2}`,stroke:"black",strokeOpacity:"0.34",strokeWidth:"3.2"}),r("path",{d:`M85,60 C84,80 85,${C-20} 85,${C-4}`,stroke:"white",strokeOpacity:"0.22",strokeWidth:"1.4"}),r("ellipse",{cx:"94",cy:"47.5",rx:"6",ry:"2.4",fill:"white",fillOpacity:"0.22",stroke:"none"})]}),r("rect",{width:A,height:w,fill:`url(#${a}-sidevol)`}),r("rect",{width:A,height:w,fill:`url(#${a}-drape)`}),r("rect",{width:A,height:w,filter:`url(#${a}-grain)`,opacity:"0.16",style:{mixBlendMode:"multiply"}})]}),r("path",{d:`M82,${C+1} C92,${C+6} 108,${C+7} 118,${C+4}`,fill:"none",stroke:X(p,.35),strokeOpacity:"0.45",strokeWidth:"0.6",strokeDasharray:"1.6 1.4"}),r("path",{d:`M86,${Z-3} C92,${Z+1} 109,${Z+1} 115,${Z-3}`,fill:"none",stroke:X(p,.35),strokeOpacity:"0.4",strokeWidth:"0.6",strokeDasharray:"1.6 1.4"})]}),r("ellipse",{cx:"100",cy:"46",rx:"10",ry:"3.2",fill:x}),r("ellipse",{cx:"100",cy:"46",rx:"10",ry:"3.2",fill:`url(#${a}-rib)`}),r("ellipse",{cx:"100",cy:"46",rx:"10",ry:"3.2",fill:"none",stroke:"black",strokeOpacity:"0.2",strokeWidth:"0.6"})]})}function Ft({src:a,alt:s,full:p}){return r("img",{src:a,alt:s,draggable:!1,className:`crh-photo ${p?"crh-photo-full":"crh-photo-hung"}`})}const ye=Number(d.version.split(".")[0])>=19;function ve(){return ye?r("style",{...{href:"clothing-rail-hero",precedence:"default"},children:Jt}):r("style",{hidden:!0,dangerouslySetInnerHTML:{__html:Jt}})}function Le(){return{x:[],vx:[],tx:[],px:[],turn:[],vturn:[],tturn:[],swing:[],vswing:[],tag:[],vtag:[],drag:-1,grab:0,free:0,last:0,raf:0}}function J(a,s,p=.4){const x=B(1-s/H,0,1),$=x*x*(3-2*x);return a*Wt*(p+(.94-p)*$)}export function ClothingRailHero({items:a,eyebrow:s,heading:p,caption:x,action:$,autoplay:v=!1,interval:N=2600,hanger:C="wood",theme:m="light",labels:z=pe,onOpenChange:Z=undefined as any,className:ut=undefined as any,...pt}){const D=d.useId().replace(/[^a-zA-Z0-9_-]/g,""),O=a.length,_=d.useRef(null),lt=d.useRef([]),tt=d.useRef([]),ft=d.useRef([]),kt=d.useRef([]),gt=d.useRef([]),Y=d.useRef([]),mt=d.useRef([]),bt=d.useRef([]),T=d.useRef(Le()),[E,Mt]=d.useState({width:0,h:300,carousel:!1}),[I,U]=d.useState(null),[et,yt]=d.useState(0),[P,o]=d.useState(null),[i,S]=d.useState(!1),[W,G]=d.useState(v),[F,dt]=d.useState(null),rt=d.useRef(null),at=d.useRef(-1),q=d.useRef({id:-1,index:-1,x:0,y:0,t:0,moved:!1,kind:"",swipe:0,lastX:0,lastT:0,v:0}),vt=d.useMemo(()=>a.map(e=>e.image?e.sideImage?.3:.4:Zt[e.kind??"tee"].width),[a]),k=d.useRef({active:null,size:E,reduced:i,count:O,openIndex:null,carouselIndex:0,sideWidths:vt});k.current={...k.current,active:I,size:E,reduced:i,count:O,openIndex:P,sideWidths:vt};const Dt=E.carousel?I??k.current.carouselIndex:null;d.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>S(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),d.useEffect(()=>{G(v)},[v]),d.useLayoutEffect(()=>{const e=_.current;if(!e)return;const t=f=>{const l=k.current.sideWidths.reduce((u,h)=>u+h,0)/Math.max(1,k.current.sideWidths.length),R=J(1,H,l)+Tt,L=J(1,0,l)+Tt,y=(f-24)/(O*R+(L-R)),c=y<he,b=c?Math.min(ue,Math.max(220,f*.86)):Math.min(de,y);Mt(u=>Math.abs(u.width-f)<.5&&u.carousel===c&&Math.abs(u.h-b)<.5?u:{width:f,h:Math.round(b),carousel:c})};t(e.clientWidth);const n=new ResizeObserver(f=>{const l=f[0];l&&t(l.contentRect.width)});return n.observe(e),()=>n.disconnect()},[O]);const St=d.useCallback((e,t,n,f)=>{const l=a.map((y,c)=>J(e,c===f?0:H,vt[c])+e*Tt);if(n){const y=f??0,c=l.map(()=>0);c[y]=t/2;for(let b=y+1;b<l.length;b++)c[b]=(c[b-1]??0)+((l[b-1]??0)+(l[b]??0))/2;for(let b=y-1;b>=0;b--)c[b]=(c[b+1]??0)-((l[b+1]??0)+(l[b]??0))/2;return c}const R=l.reduce((y,c)=>y+c,0);let L=(t-R)/2;return l.map(y=>{const c=L+y/2;return L+=y,c})},[a,vt]),st=d.useCallback(e=>{const t=T.current,{h:n}=k.current.size,f=n*Wt,l=lt.current[e];if(!l)return;const R=t.turn[e]??H,L=t.swing[e]??0;l.style.transform=`translate3d(${((t.x[e]??0)-f/2).toFixed(2)}px,0,0)`;const y=tt.current[e];y&&(y.style.transform=`rotate(${L.toFixed(3)}deg)`);const c=B(1-R/H,0,1),b=ft.current[e],u=kt.current[e];b&&(b.style.transform=`perspective(${$t}px) rotateY(${R.toFixed(2)}deg)`,b.style.opacity=u?B((c-.44)/.12,0,1).toFixed(3):"1"),u&&(u.style.opacity=B((.56-c)/.12,0,1).toFixed(3),u.style.transform=`perspective(${$t}px) rotateY(${(Math.min(1,c*2)*-84).toFixed(2)}deg)`);const h=B(-(t.vswing[e]??0)*.018,-5,5),M=gt.current[e];M&&M.style.setProperty("--drape",`${h.toFixed(3)}deg`);const K=Y.current[e];K&&K.style.setProperty("--shade",(1-me(R)).toFixed(3));const nt=mt.current[e];nt&&(nt.style.transform=`translate3d(${(f*.05).toFixed(1)}px, ${(n*.035).toFixed(1)}px, 0) scaleX(${Math.max(.12,Math.abs(Math.cos(R*Math.PI/180))).toFixed(3)})`);const Ct=bt.current[e];Ct&&(Ct.style.transform=`rotate(${(-12+(t.tag[e]??0)).toFixed(2)}deg)`)},[]),Nt=d.useCallback(e=>{const t=T.current,n=k.current.count,f=t.last?Math.min(.034,(e-t.last)/1e3):1/60;t.last=e;const{h:l,width:R,carousel:L}=k.current.size;let y=!1;const c=2,b=f/c;for(let u=0;u<c;u++){for(let h=0;h<n;h++){const M=t.vx[h]??0;if(h!==t.drag){const xt=e>t.free,Lt=xt?130:0,wt=xt?2*Math.sqrt(130)*.86:3.2,ie=-Lt*((t.x[h]??0)-(t.tx[h]??0))-wt*M;t.vx[h]=M+ie*b,t.x[h]=(t.x[h]??0)+(t.vx[h]??0)*b}const K=((t.vx[h]??0)-M)/b,nt=-150*((t.turn[h]??0)-(t.tturn[h]??0))-2*Math.sqrt(150)*.78*(t.vturn[h]??0);t.vturn[h]=(t.vturn[h]??0)+nt*b,t.turn[h]=(t.turn[h]??0)+(t.vturn[h]??0)*b;const Ct=-24*(t.swing[h]??0)-2.1*(t.vswing[h]??0)-B(K,-6e3,6e3)*.0045;t.vswing[h]=(t.vswing[h]??0)+Ct*b,t.swing[h]=B((t.swing[h]??0)+(t.vswing[h]??0)*b,-12,12);const ct=-46*((t.tag[h]??0)-(t.swing[h]??0)*.6)-3.4*(t.vtag[h]??0)-(t.vswing[h]??0)*.9;t.vtag[h]=(t.vtag[h]??0)+ct*b,t.tag[h]=B((t.tag[h]??0)+(t.vtag[h]??0)*b,-30,30)}for(let h=0;h<2;h++)for(let M=0;M<n-1;M++){const K=t.x[M]??0,nt=t.x[M+1]??0,ct=(J(l,t.turn[M]??H,k.current.sideWidths[M])+J(l,t.turn[M+1]??H,k.current.sideWidths[M+1]))/2+l*.012-(nt-K);if(ct<=0)continue;M===t.drag?t.x[M+1]=nt+ct:M+1===t.drag?t.x[M]=K-ct:(t.x[M]=K-ct/2,t.x[M+1]=nt+ct/2);const xt=t.vx[M]??0,Lt=t.vx[M+1]??0;if(xt>Lt){const wt=(xt+Lt)/2;M!==t.drag&&(t.vx[M]=wt),M+1!==t.drag&&(t.vx[M+1]=wt)}}if(!L&&n>0){const h=l*.06,M=h+J(l,t.turn[0]??H,k.current.sideWidths[0])/2,K=R-h-J(l,t.turn[n-1]??H,k.current.sideWidths[n-1])/2;(t.x[0]??0)<M&&(t.x[0]=M,t.vx[0]=Math.abs(t.vx[0]??0)*.3),(t.x[n-1]??0)>K&&(t.x[n-1]=K,t.vx[n-1]=-Math.abs(t.vx[n-1]??0)*.3)}}for(let u=0;u<n;u++)st(u),(Math.abs(t.vx[u]??0)>.4||e>t.free&&Math.abs((t.x[u]??0)-(t.tx[u]??0))>.25||Math.abs((t.turn[u]??0)-(t.tturn[u]??0))>.05||Math.abs(t.vturn[u]??0)>.05||Math.abs(t.swing[u]??0)>.02||Math.abs(t.vswing[u]??0)>.05||Math.abs(t.tag[u]??0)>.05||Math.abs(t.vtag[u]??0)>.08)&&(y=!0);if((t.drag>=0||e<t.free)&&(y=!0),y)t.raf=requestAnimationFrame(Nt);else{t.raf=0,t.last=0;for(let u=0;u<n;u++)e>t.free&&(t.x[u]=t.tx[u]??0),t.swing[u]=0,t.vswing[u]=0,t.tag[u]=0,t.vtag[u]=0,st(u)}},[st]),it=d.useCallback(()=>{const e=T.current;if(k.current.reduced){for(let t=0;t<k.current.count;t++)e.x[t]=e.tx[t]??0,e.turn[t]=e.tturn[t]??H,e.vx[t]=0,e.vturn[t]=0,e.swing[t]=0,e.vswing[t]=0,st(t);return}e.raf||(e.last=0,e.raf=requestAnimationFrame(Nt))},[st,Nt]),j=d.useCallback((e,t)=>{const n=T.current;k.current.reduced||e<0||e>=k.current.count||(n.vswing[e]=(n.vswing[e]??0)+t,it())},[it]);d.useLayoutEffect(()=>{if(!E.width)return;const e=T.current,t=E.carousel?I??k.current.carouselIndex:I,n=St(E.h,E.width,E.carousel,t),f=e.x.length!==O;for(let l=0;l<O;l++)e.tx[l]=(n[l]??0)+(E.carousel?q.current.swipe:0),e.tturn[l]=l===t?0:H,(f||i)&&(e.x[l]=e.tx[l]??0,e.vx[l]=0,e.px[l]=0,e.turn[l]=e.tturn[l]??H,e.vturn[l]=0,e.swing[l]=e.swing[l]??0,e.vswing[l]=e.vswing[l]??0,e.tag[l]=0,e.vtag[l]=0);if(f){e.x.length=O;for(let l=0;l<O;l++)st(l)}it()},[E,I,O,i,St,st,it]);const Gt=d.useRef(!1);d.useEffect(()=>{if(!E.width||Gt.current||i)return;Gt.current=!0;const e=a.map((t,n)=>window.setTimeout(()=>j(n,46-n*2.5),120+n*55));return()=>e.forEach(t=>window.clearTimeout(t))},[E.width,i,a,j]),d.useEffect(()=>()=>{cancelAnimationFrame(T.current.raf),T.current.raf=0},[]),d.useLayoutEffect(()=>{if(P!==null||F!==null||rt.current===null)return;const e=rt.current;rt.current=null,lt.current[e]?.focus({preventScroll:!0})},[P,F]);const Q=d.useCallback(e=>{U(t=>t===e?t:(e!==null&&(j(e-1,-30),j(e+1,30)),t!==null&&t!==e&&(j(t-1,14),j(t+1,-14)),e!==null&&(k.current.carouselIndex=e),e))},[j]),ot=d.useCallback(()=>G(!1),[]);d.useEffect(()=>{if(!W||i||P!==null||O===0||!E.width)return;let t=window.setTimeout(function n(){const f=k.current.active;Q(f===null?0:(f+1)%k.current.count),t=window.setTimeout(n,N)},I===null?1100:N);return()=>window.clearTimeout(t)},[W,i,P,O,N,E.width,Q,I]);const ee=d.useCallback(e=>{ot(),U(e),o(e),Z?.(e)},[Z,ot]),re=d.useCallback(()=>{o(null),Z?.(null)},[Z]);function Xt(e,t){const n=_.current;if(!n)return null;const f=Ot(n),l=(e-f.left)/f.k,R=(t-f.top)/f.k,{h:L}=k.current.size;if(R<0||R>L+46)return null;const y=T.current;let c=null,b=1/0;for(let u=0;u<k.current.count;u++){const h=J(L,y.turn[u]??H,k.current.sideWidths[u])/2+4,M=Math.abs(l-(y.x[u]??0));M<h&&M<b&&(c=u,b=M)}return c}const ae=e=>{const t=q.current,n=T.current,f=_.current;if(t.id===e.pointerId&&f){const L=e.clientX-t.x,y=performance.now();if(!t.moved&&Math.abs(L)>6&&Math.abs(L)>Math.abs(e.clientY-t.y)&&(t.moved=!0,ot(),f.isConnected&&f.setPointerCapture(e.pointerId),!k.current.size.carousel&&t.index>=0)){const c=Ot(f);n.drag=t.index,n.grab=(e.clientX-c.left)/c.k-(n.x[t.index]??0)}if(t.moved){const c=Ot(f),b=(e.clientX-t.lastX)/Math.max(1,y-t.lastT);if(t.v=t.v*.6+b*.4,t.lastX=e.clientX,t.lastT=y,n.drag>=0){const u=(e.clientX-c.left)/c.k-n.grab;n.vx[n.drag]=t.v*1e3/c.k,n.x[n.drag]=u,n.free=y+900,it()}else if(k.current.size.carousel){t.swipe=L/c.k;const u=St(k.current.size.h,k.current.size.width,!0,k.current.active??k.current.carouselIndex);for(let h=0;h<k.current.count;h++)n.tx[h]=(u[h]??0)+t.swipe;it()}}return}if(e.pointerType!=="mouse"||k.current.size.carousel||k.current.openIndex!==null)return;const l=Xt(e.clientX,e.clientY),R=k.current.active;if(R!==null&&l!==R&&f){const L=Ot(f);if(Math.abs((e.clientX-L.left)/L.k-(n.x[R]??0))<J(k.current.size.h,0)/2+14&&(l===null||Math.abs((e.clientY-L.top)/L.k)<k.current.size.h+40))return}l!==null&&(ot(),Q(l))},oe=e=>{if(e.button!==0)return;const t=Xt(e.clientX,e.clientY),n=performance.now();at.current=-1,q.current={id:e.pointerId,index:t??-1,x:e.clientX,y:e.clientY,t:n,moved:!1,kind:e.pointerType,swipe:0,lastX:e.clientX,lastT:n,v:0}},Bt=(e,t)=>{const n=q.current;if(n.id!==e.pointerId)return;const f=T.current,l=_.current;if(l?.hasPointerCapture(e.pointerId)&&l.releasePointerCapture(e.pointerId),q.current={...n,id:-1},f.drag>=0){f.drag=-1,f.free=performance.now()+700,it();return}if(n.moved&&k.current.size.carousel){const L=e.clientX-n.x,y=k.current.active??k.current.carouselIndex,c=Math.abs(L)>40||Math.abs(n.v)>.45?L<0?1:-1:0;q.current.swipe=0,Q(B(y+c,0,k.current.count-1));for(let b=0;b<k.current.count;b++)j(b,B(-n.v*22,-30,30));return}if(t||n.moved||n.index<0)return;ot(),n.kind!=="mouse"&&k.current.active!==n.index?Q(n.index):at.current=n.index},ne=e=>{if(!["ArrowRight","ArrowLeft","Home","End"].includes(e.key))return;e.preventDefault(),ot();const n=I??et,f=e.key==="Home"?0:e.key==="End"?O-1:B(n+(e.key==="ArrowRight"?1:-1),0,O-1);yt(f),Q(f),lt.current[f]?.focus({preventScroll:!0})},ht=I===null?null:a[I],V=E.h,Kt=V*Wt,Et=Math.round(V*.07)+10,zt=Math.max(3,Math.round(le/w*V*10)/10),se=O?Math.max(...a.map(e=>e.image?w:Zt[e.kind??"tee"].hem+8))/w:1;return g("section",{...pt,"data-slot":"clothing-rail-hero","data-mode":E.carousel?"carousel":"rail","data-active":I??"","data-crh-theme":m,"aria-roledescription":"arara de roupas",className:["crh-root",ut].filter(Boolean).join(" "),children:[r(ve,{}),r(be,{uid:D}),r("div",{"aria-hidden":"true",className:"crh-glow"}),(s||p)&&g("header",{className:"crh-header",children:[s&&r("p",{className:"crh-eyebrow",children:s}),p&&r("h2",{className:"crh-heading",children:p})]}),g("div",{ref:_,"data-stage":!0,role:"group","aria-label":p??"Arara de roupas",className:"crh-stage",style:{height:Math.round(Et+V*se+V*.05+12)},onPointerMove:ae,onPointerDown:oe,onPointerUp:e=>Bt(e,!1),onPointerCancel:e=>Bt(e,!0),onPointerLeave:e=>{e.pointerType==="mouse"&&q.current.id<0&&!E.carousel&&!document.activeElement?.matches("[data-garment]:focus-visible")&&Q(null)},onKeyDown:ne,children:[g("div",{"aria-hidden":"true","data-rail":!0,className:"crh-rail",style:{top:Et-zt,height:zt*2},children:[r("div",{className:"crh-rail-shadow",style:{top:zt*2+1}}),r("div",{className:"crh-rail-bar"}),r("div",{className:"crh-rail-brush"}),[0,1].map(e=>g("div",{className:"crh-rail-cap",style:{[e?"right":"left"]:6},children:[r("span",{className:"crh-rail-bolt",style:{top:4}}),r("span",{className:"crh-rail-bolt",style:{bottom:4}})]},e))]}),a.map((e,t)=>{const n=e.kind??"tee",f=e.color??"var(--crh-muted)",l=e.trim??X(f,-.12),R=I===t,L=e.image?`url("${e.image}")`:Pt(n,"front"),y=C==="none"?"crh-box-full":"crh-box-hung";return r("button",{ref:c=>{lt.current[t]=c},type:"button","data-garment":t,"data-front":R||void 0,tabIndex:t===(I??et)?0:-1,"aria-label":e.name,"aria-describedby":`${D}-caption`,"aria-pressed":R,className:"crh-garment",style:{top:Et-At/w*V,width:Kt,height:V,zIndex:R?30:10+t,visibility:F===t?"hidden":void 0,transform:`translate3d(${((T.current.x[t]??0)-Kt/2).toFixed(2)}px,0,0)`},onFocus:()=>{yt(t),q.current.id<0&&(ot(),Q(t))},onClick:c=>{const b=at.current;at.current=-1,(c.detail===0||b===t)&&ee(t)},children:g("span",{ref:c=>{tt.current[t]=c},className:"crh-fill",style:{transformOrigin:`50% ${At/w*100}%`},children:[r("span",{"aria-hidden":"true",className:"crh-fill crh-blur",style:{filter:`blur(${Math.max(3,V*.022).toFixed(1)}px)`},children:r("span",{ref:c=>{mt.current[t]=c},className:`crh-shadow ${e.image?y:"crh-box-full"}`,style:{WebkitMask:`${L} top center / contain no-repeat`,mask:`${L} top center / contain no-repeat`}})}),(e.sideImage||!e.image)&&g("span",{ref:c=>{kt.current[t]=c},"data-face":"side",className:"crh-fill",style:{transform:`perspective(${$t}px) rotateY(0deg)`},children:[r(ke,{uid:D,material:C}),e.sideImage?r(Ft,{src:e.sideImage,alt:"",full:C==="none"}):r(Me,{uid:D,kind:n,color:f,trim:l})]}),r("span",{ref:c=>{ft.current[t]=c},"data-turn":!0,className:"crh-fill crh-turn",style:{transform:`perspective(${$t}px) rotateY(${H}deg)`,opacity:e.image&&!e.sideImage?1:0},children:["front","back"].map(c=>g("span",{"data-face":c,className:"crh-fill crh-face",style:{transform:c==="back"?"rotateY(180deg)":void 0,"--garment-color":f,"--garment-under":X(f,-.42)},children:[r(Qt,{uid:D,side:c,kind:e.image?null:n,material:C}),g("span",{ref:c==="front"?b=>{gt.current[t]=b}:void 0,"data-drape":!0,className:"crh-fill crh-drape",style:c==="back"?{transform:"skewX(calc(var(--drape, 0deg) * -1))"}:void 0,children:[e.image?r(Ft,{src:(c==="back"?e.backImage:void 0)??e.image,alt:"",full:C==="none"}):r(Vt,{uid:D,kind:n,side:c,color:f,trim:l}),r("span",{ref:c==="front"?b=>{Y.current[t]=b}:void 0,className:`crh-shade ${e.image?y:"crh-box-full"}`,style:{WebkitMask:`${e.image?`url("${(c==="back"?e.backImage:void 0)??e.image}")`:Pt(n,c)} top center / contain no-repeat`,mask:`${e.image?`url("${(c==="back"?e.backImage:void 0)??e.image}")`:Pt(n,c)} top center / contain no-repeat`}})]})]},c))}),e.tag&&g("span",{ref:c=>{bt.current[t]=c},"aria-hidden":"true",className:"crh-tag",style:{top:32/w*V,transform:"rotate(-12deg)"},children:[r("span",{className:"crh-tag-string"}),g("span",{className:"crh-tag-card",children:[r("span",{className:"crh-tag-hole"}),e.tag]})]})]})},e.id)})]}),E.carousel&&O>1&&r("div",{className:"crh-dots",role:"group","aria-label":z.show,children:a.map((e,t)=>r("button",{type:"button","aria-label":`${z.show} ${e.name}`,"aria-current":Dt===t,onClick:()=>{ot(),Q(t)},className:"crh-dot","data-current":Dt===t||void 0},e.id))}),g("div",{className:"crh-foot",children:[g("div",{id:`${D}-caption`,"aria-live":"polite",className:"crh-caption",children:[r("p",{className:"crh-caption-title",children:ht?ht.name:x},ht?.id??"caption"),ht?.description&&r("p",{className:"crh-caption-text",children:ht.description},`${ht.id}-d`)]}),$]}),P!==null&&a[P]&&r(we,{uid:D,item:a[P],index:P,total:O,hanger:C,theme:m,labels:z,reduced:i,host:()=>_.current?.closest("dialog")??document.body,source:()=>ft.current[P]?.getBoundingClientRect()??null,onLift:e=>dt(e?P:null),onClose:()=>{const e=P;rt.current=e,re(),j(e,(e%2?1:-1)*44)}})]})}function we({uid:a,item:s,index:p,total:x,hanger:$,theme:v,labels:N,reduced:C,host:m,source:z,onLift:Z,onClose:ut}){const pt=d.useRef(null),D=d.useRef(null),O=d.useRef(null),_=d.useRef(null),[lt]=d.useState(m),[tt,ft]=d.useState("front"),[kt,gt]=d.useState(!1),Y=d.useRef({value:0,target:0,velocity:0,raf:0,last:0,dragging:!1,startX:0,startAngle:0}),mt=d.useRef(!1),bt=s.kind??"tee",T=s.color??"var(--crh-muted)",E=s.trim??X(T,-.12),Mt=`${a}-detail-title`,I=d.useCallback(()=>{const o=Y.current,i=O.current,S=W=>{const G=o.last?Math.min(.034,(W-o.last)/1e3):.016666666666666666;o.last=W;const F=-90*(o.value-o.target)-2*Math.sqrt(90)*.82*o.velocity;if(o.velocity+=F*G,o.value+=o.velocity*G,i&&(i.style.transform=`rotateY(${o.value.toFixed(2)}deg)`),Math.abs(o.value-o.target)<.05&&Math.abs(o.velocity)<.05){o.value=o.target,i&&(i.style.transform=`rotateY(${o.value}deg)`),o.raf=0,o.last=0;return}o.raf=requestAnimationFrame(S)};if(C){o.value=o.target,i&&(i.style.transform=`rotateY(${o.value}deg)`);return}o.raf||(o.raf=requestAnimationFrame(S))},[C]),U=d.useCallback(o=>{const i=Y.current,S=Math.round(i.value/360)*360;i.target=S+(o==="back"?180:0),Math.abs(i.target-i.value)>180&&(i.target-=360*Math.sign(i.target-i.value)),ft(o),I()},[I]);d.useLayoutEffect(()=>{const o=D.current,i=z();_.current?.focus({preventScroll:!0});const S=document.body.style.overflow;document.body.style.overflow="hidden";let W=null;if(o&&i&&!C&&i.width>0){const F=o.getBoundingClientRect(),dt=i.height/F.height,rt=i.left+i.width/2-(F.left+F.width/2),at=i.top-F.top,q=Math.min(90,Math.abs(at)*.25+30);Z(!0),W=o.animate([{transform:`translate(${rt}px, ${at}px) scale(${dt})`},{transform:`translate(${rt*.4}px, ${at*.4-q}px) scale(${(dt+1)/2*1.03}) rotate(${rt>0?-2.5:2.5}deg)`,offset:.5},{transform:"none"}],{duration:680,easing:"cubic-bezier(.22,.85,.3,1)"})}const G=requestAnimationFrame(()=>gt(!0));return()=>{cancelAnimationFrame(G),W?.cancel(),document.body.style.overflow=S,cancelAnimationFrame(Y.current.raf),Z(!1)}},[z,C,Z]);const et=d.useCallback(()=>{if(mt.current)return;mt.current=!0,gt(!1);const o=D.current,i=z();if(!o||!i||C||i.width===0){ut();return}const S=o.getBoundingClientRect(),W=i.height/S.height,G=i.left+i.width/2-(S.left+S.width/2),F=i.top-S.top,dt=o.animate([{transform:"none"},{transform:`translate(${G*.6}px, ${F*.6-30}px) scale(${(W+1)/2})`,offset:.55},{transform:`translate(${G}px, ${F}px) scale(${W})`}],{duration:560,easing:"cubic-bezier(.45,0,.55,1)",fill:"forwards"});dt.onfinish=()=>ut()},[z,C,ut]);d.useEffect(()=>{const o=i=>{const S=pt.current;if(!(!S||S.contains(i.target))){if(i.key==="Escape")i.preventDefault(),et();else if(i.key==="ArrowLeft"||i.key==="ArrowRight")U(tt==="front"?"back":"front");else if(i.key==="Tab"){const W=S.querySelector("button");W&&(i.preventDefault(),W.focus())}}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[et,U,tt]);const yt=o=>{if(o.key==="Escape"){o.preventDefault(),et();return}if(o.key==="ArrowLeft"||o.key==="ArrowRight"){U(tt==="front"?"back":"front");return}if(o.key!=="Tab")return;const i=[...pt.current?.querySelectorAll("button")??[]].filter(G=>!G.disabled),S=i[0],W=i.at(-1);!S||!W||(o.shiftKey&&document.activeElement===S?(o.preventDefault(),W.focus()):!o.shiftKey&&document.activeElement===W&&(o.preventDefault(),S.focus()))},P=g("div",{ref:D,className:"crh-figure",children:[r("div",{"aria-hidden":"true",className:"crh-rod",style:{top:`calc(-40vh + ${At/w*100}%)`}}),r("div",{className:"crh-spin-area",onPointerDown:o=>{const i=Y.current;i.dragging=!0,i.startX=o.clientX,i.startAngle=i.value,cancelAnimationFrame(i.raf),i.raf=0,i.last=0,o.currentTarget.setPointerCapture(o.pointerId)},onPointerMove:o=>{const i=Y.current;i.dragging&&(i.value=B(i.startAngle+(o.clientX-i.startX)*.45,i.startAngle-220,i.startAngle+220),O.current&&(O.current.style.transform=`rotateY(${i.value.toFixed(2)}deg)`))},onPointerUp:()=>{const o=Y.current;if(!o.dragging)return;o.dragging=!1;const i=(o.value%360+360)%360;U(i>90&&i<270?"back":"front")},onPointerCancel:()=>{Y.current.dragging=!1,U(tt)},children:r("div",{ref:O,className:"crh-fill crh-turn",children:["front","back"].map(o=>g("div",{className:"crh-fill crh-face",style:{transform:o==="back"?"rotateY(180deg)":void 0,"--garment-color":T,"--garment-under":X(T,-.42)},children:[r(Qt,{uid:a,side:o,kind:s.image?null:bt,material:$}),s.image?r(Ft,{src:(o==="back"?s.backImage:void 0)??s.image,alt:o==="front"?s.name:"",full:$==="none"}):r(Vt,{uid:a,kind:bt,side:o,color:T,trim:E})]},o))})})]});return ce(g("div",{ref:pt,role:"dialog","aria-modal":"true","aria-labelledby":Mt,className:"crh-detail","data-crh-theme":v,"data-shown":kt||void 0,onKeyDown:yt,children:[r("div",{"aria-hidden":"true",className:"crh-detail-backdrop",onClick:et}),g("button",{ref:_,type:"button",onClick:et,className:"crh-detail-close",children:[N.close,r("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:r("path",{d:"M3 3l10 10M13 3L3 13"})})]}),g("div",{className:"crh-detail-grid",children:[P,g("div",{className:"crh-detail-info",children:[g("p",{className:"crh-detail-count",children:[String(p+1).padStart(2,"0")," / ",String(x).padStart(2,"0")]}),r("h3",{id:Mt,className:"crh-detail-title",children:s.name}),s.description&&r("p",{className:"crh-detail-text",children:s.description}),s.details&&s.details.length>0&&r("ul",{className:"crh-detail-chips",children:s.details.map(o=>r("li",{children:o},o))}),r("div",{role:"group","aria-label":`${N.front} / ${N.back}`,className:"crh-detail-sides",children:["front","back"].map(o=>g("button",{type:"button","aria-pressed":tt===o,onClick:()=>U(o),children:[o==="front"?N.front:N.back,r("span",{"aria-hidden":"true"})]},o))})]})]})]}),lt)}export default ClothingRailHero;const Jt=`
/* o que o projeto pode trocar com uma classe (posição, margem, fundo): na camada base, que vem antes das classes de
   componente e dos utilitários (Tailwind v4, Panda, Chakra) e perde para o CSS fora de camada (Tailwind v3, CSS Modules,
   CSS comum) */
@layer base {
  .crh-root { position: relative; width: 100%; margin: 0; background: var(--crh-bg); }
}

/* as cores: claro de fábrica, escuro com theme="dark". O detalhe aberto sai da arara (ele vai para o body ou para o
   <dialog> em volta), então leva as mesmas variáveis */
.crh-root, .crh-detail {
  --crh-bg: #ffffff;
  --crh-fg: #0a0a0a;
  --crh-muted: #737373;
  --crh-card: #ffffff;
  --crh-card-fg: #0a0a0a;
  --crh-border: #e5e5e5;
  --crh-ring: #a1a1a1;
  --crh-shadow: 0.16;
}
.crh-root[data-crh-theme="dark"], .crh-detail[data-crh-theme="dark"] {
  --crh-bg: #0a0a0a;
  --crh-fg: #fafafa;
  --crh-muted: #a1a1a1;
  --crh-card: #171717;
  --crh-card-fg: #fafafa;
  --crh-border: rgba(255, 255, 255, 0.1);
  --crh-ring: #737373;
  --crh-shadow: 0.6;
}

/* nada de texto herdado da página: a arara fica igual em qualquer projeto */
.crh-root, .crh-detail {
  box-sizing: border-box;
  color: var(--crh-fg);
  font-family: ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.5;
  text-align: left;
  text-transform: none;
  text-shadow: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.crh-root *, .crh-root *::before, .crh-root *::after,
.crh-detail *, .crh-detail *::before, .crh-detail *::after { box-sizing: border-box; }
.crh-root :is(p, h2, h3, ul), .crh-detail :is(p, h2, h3, ul) { margin: 0; }
.crh-root button, .crh-detail button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  text-transform: none;
  -webkit-tap-highlight-color: transparent;
}

/* as colunas saem da largura da própria arara, não da tela */
.crh-root { isolation: isolate; overflow: hidden; container-type: inline-size; }
.crh-defs { position: absolute; width: 0; height: 0; overflow: hidden; }
.crh-glow {
  position: absolute;
  inset: 0;
  z-index: -10;
  pointer-events: none;
  background:
    radial-gradient(120% 70% at 18% 0%, color-mix(in oklab, var(--crh-fg) 7%, transparent), transparent 62%),
    linear-gradient(to bottom, transparent 55%, color-mix(in oklab, var(--crh-fg) 5%, transparent));
}

.crh-header {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 24px 0;
  text-align: center;
}
.crh-eyebrow {
  color: var(--crh-muted);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.crh-heading {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.025em;
  text-wrap: balance;
}
@container (min-width: 640px) {
  .crh-heading { font-size: 30px; line-height: 36px; }
}

/* a arara: o palco onde as peças correm */
.crh-stage {
  position: relative;
  width: 100%;
  margin-top: 20px;
  overflow-x: clip;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

/* o cano de metal escovado, com a sombra embaixo e os suportes nas pontas */
.crh-rail { position: absolute; left: 0; right: 0; z-index: 0; pointer-events: none; }
.crh-rail-shadow {
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--crh-fg) 10%, transparent);
  filter: blur(5px);
}
.crh-rail-bar {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(to bottom, color-mix(in oklab, var(--crh-muted) 35%, white) 0%, white 18%, color-mix(in oklab, var(--crh-muted) 70%, white) 38%, var(--crh-muted) 62%, color-mix(in oklab, var(--crh-muted) 55%, black) 100%);
  box-shadow: 0 1px 0 color-mix(in oklab, var(--crh-fg) 18%, transparent);
}
.crh-rail-brush {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  opacity: 0.4;
  mix-blend-mode: overlay;
  background: repeating-linear-gradient(90deg, transparent 0 2px, color-mix(in oklab, white 40%, transparent) 2px 3px, transparent 3px 7px);
}
.crh-rail-cap {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 28px;
  border-radius: 3px;
  translate: 0 -50%;
  background: linear-gradient(to right, color-mix(in oklab, var(--crh-muted) 60%, white), var(--crh-muted) 55%, color-mix(in oklab, var(--crh-muted) 60%, black));
  box-shadow: 0 3px 6px color-mix(in oklab, var(--crh-fg) 18%, transparent);
}
.crh-rail-bolt {
  position: absolute;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  translate: -50% 0;
  background: color-mix(in oklab, var(--crh-fg) 35%, transparent);
}

/* cada peça: um botão do tamanho da peça de frente, levado pelo cano */
.crh-garment {
  position: absolute;
  left: 0;
  display: block;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
}
.crh-garment:focus-visible { outline: 2px solid var(--crh-ring); outline-offset: 4px; }
.crh-fill { position: absolute; inset: 0; display: block; }
.crh-blur { pointer-events: none; }
.crh-shadow { position: absolute; display: block; background: #000; opacity: var(--crh-shadow); }
.crh-box-full { inset: 0; }
.crh-box-hung { left: 0; right: 0; bottom: 0; top: 8%; }
.crh-turn { border-radius: 8px; transform-style: preserve-3d; }
.crh-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.crh-drape { transform-origin: top; transform: skewX(var(--drape, 0deg)); }
.crh-shade { position: absolute; display: block; pointer-events: none; background: #000; opacity: var(--shade, 0.2); }
.crh-art { position: absolute; inset: 0; display: block; width: 100%; height: 100%; overflow: visible; }
.crh-matte { color: color-mix(in oklab, var(--crh-fg) 85%, transparent); }
.crh-photo {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  max-width: none;
  margin: 0;
  object-fit: contain;
  object-position: top;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}
.crh-photo-full { top: 0; height: 100%; }
.crh-photo-hung { top: 8%; height: 92%; }

/* a etiqueta pendurada no gancho, que balança com a peça */
.crh-tag { position: absolute; left: 50%; display: block; pointer-events: none; transform-origin: top; }
.crh-tag-string {
  display: block;
  width: 1px;
  height: 14px;
  translate: 3px 0;
  background: color-mix(in oklab, var(--crh-fg) 35%, transparent);
}
.crh-tag-card {
  display: block;
  padding: 8px 6px 4px;
  border: 1px solid color-mix(in oklab, var(--crh-fg) 10%, transparent);
  border-radius: 3px;
  translate: 3px 0;
  background: var(--crh-card);
  color: var(--crh-card-fg);
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.025em;
  white-space: nowrap;
  box-shadow: 0 2px 6px color-mix(in oklab, var(--crh-fg) 18%, transparent);
}
.crh-tag-hole {
  position: absolute;
  top: 3px;
  left: 50%;
  width: 3px;
  height: 3px;
  border-radius: 999px;
  translate: -50% 0;
  background: color-mix(in oklab, var(--crh-fg) 30%, transparent);
}

/* os pontos do carrossel */
.crh-dots { position: relative; z-index: 10; display: flex; justify-content: center; gap: 6px; margin-top: 4px; }
.crh-root .crh-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--crh-fg) 25%, transparent);
  outline: none;
  cursor: pointer;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-root .crh-dot:hover { background: color-mix(in oklab, var(--crh-fg) 45%, transparent); }
.crh-root .crh-dot[data-current] { width: 24px; background: var(--crh-fg); }
.crh-dot:focus-visible { box-shadow: 0 0 0 2px var(--crh-ring); }

/* a legenda e a chamada embaixo da arara */
.crh-foot {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 24px 32px;
  text-align: center;
}
.crh-caption { min-height: 52px; }
.crh-caption-title { font-size: 14px; font-weight: 500; line-height: 20px; animation: crh-in 0.3s ease; }
.crh-caption-text {
  max-width: 42ch;
  margin: 4px auto 0;
  color: var(--crh-muted);
  font-size: 13px;
  line-height: 1.625;
}
@keyframes crh-in { from { opacity: 0; } }

/* a peça de perto, por cima da página */
.crh-detail {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}
.crh-detail-backdrop {
  position: absolute;
  inset: 0;
  background: color-mix(in oklab, var(--crh-bg) 90%, transparent);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail[data-shown] .crh-detail-backdrop { opacity: 1; }
.crh-detail .crh-detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  color: var(--crh-muted);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.025em;
  outline: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail[data-shown] .crh-detail-close { opacity: 1; }
.crh-detail .crh-detail-close:hover { color: var(--crh-fg); }
.crh-detail-close:focus-visible { box-shadow: 0 0 0 2px var(--crh-ring); }
.crh-detail-close svg { display: block; width: 14px; height: 14px; }
.crh-detail-grid {
  position: relative;
  display: grid;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1024px;
  padding-top: 40px;
}
@media (min-width: 768px) {
  .crh-detail-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 352px); }
}
.crh-figure {
  position: relative;
  aspect-ratio: 200 / 310;
  height: min(62vh, 560px);
  max-height: 100%;
  margin: 0 auto;
  transform-origin: top;
}
.crh-rod {
  position: absolute;
  left: 50%;
  width: 3px;
  height: 40vh;
  border-radius: 999px;
  translate: -50% 0;
  background: linear-gradient(to right, color-mix(in oklab, var(--crh-muted) 50%, white), var(--crh-muted), color-mix(in oklab, var(--crh-muted) 50%, black));
}
.crh-spin-area { position: absolute; inset: 0; perspective: 1400px; touch-action: pan-y; cursor: grab; }
.crh-spin-area:active { cursor: grabbing; }
.crh-detail-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  opacity: 0;
  translate: 0 8px;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, translate 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
}
.crh-detail[data-shown] .crh-detail-info { opacity: 1; translate: 0 0; }
.crh-detail-count {
  color: var(--crh-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.2em;
}
.crh-detail-title { font-size: 24px; font-weight: 500; line-height: 32px; letter-spacing: -0.025em; }
.crh-detail-text { color: var(--crh-muted); font-size: 14px; line-height: 1.625; }
.crh-detail-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; padding: 0; list-style: none; }
.crh-detail-chips li {
  padding: 4px 12px;
  border: 1px solid var(--crh-border);
  border-radius: 999px;
  color: var(--crh-muted);
  font-size: 12px;
  line-height: 16px;
}
.crh-detail-sides { display: inline-flex; justify-content: center; gap: 24px; margin-top: 8px; }
.crh-detail-sides button {
  position: relative;
  padding-bottom: 6px;
  color: var(--crh-muted);
  font-size: 14px;
  line-height: 20px;
  outline: none;
  cursor: pointer;
  transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail-sides button:hover, .crh-detail-sides button[aria-pressed="true"] { color: var(--crh-fg); }
.crh-detail-sides button:focus-visible { box-shadow: 0 0 0 2px var(--crh-ring); }
.crh-detail-sides button span {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--crh-fg);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail-sides button[aria-pressed="true"] span { transform: scaleX(1); }
@media (min-width: 640px) {
  .crh-detail-title { font-size: 30px; line-height: 36px; }
}
@media (min-width: 768px) {
  .crh-detail-info { text-align: left; }
  .crh-detail-chips, .crh-detail-sides { justify-content: flex-start; }
}

/* com o reduzir movimento do sistema, nada desliza */
@media (prefers-reduced-motion: reduce) {
  .crh-caption-title { animation: none; }
  .crh-detail-backdrop, .crh-detail .crh-detail-close, .crh-detail-info, .crh-detail-sides button span { transition: none; }
}
`;