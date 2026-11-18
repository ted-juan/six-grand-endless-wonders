<!--
  CoachRide — a little intercity coach drives along a dashed road from one end to the other,
  drawing the road behind it, with dust puffs at the start. No words: put it between the labels the slide already has.
    <CoachRide class="w-[520px] mx-auto" />
  Final frame = coach parked at the right end, road fully drawn.
-->
<script setup lang="ts">
import { useMotion } from '../setup/motion'

const { play } = useMotion()
</script>

<template>
  <svg class="coach-ride motion" :class="{ go: play }" viewBox="0 0 520 44" aria-hidden="true">
    <line x1="10" y1="36" x2="510" y2="36" class="road-base" />
    <line x1="10" y1="36" x2="510" y2="36" class="road" pathLength="1" />
    <circle cx="10" cy="36" r="5" class="end" />
    <circle cx="510" cy="36" r="5" class="end" />
    <g class="coach">
      <!-- body -->
      <rect x="-46" y="-26" width="46" height="20" rx="5" fill="#7c3aed" stroke="#fff" stroke-width="1.5" />
      <rect x="-42" y="-22" width="8" height="7" rx="1.5" fill="#e0e7ff" />
      <rect x="-31" y="-22" width="8" height="7" rx="1.5" fill="#e0e7ff" />
      <rect x="-20" y="-22" width="8" height="7" rx="1.5" fill="#e0e7ff" />
      <path d="M-9 -22 h5 a3 3 0 0 1 3 3 v4 h-8 z" fill="#c7d2fe" />
      <!-- wheels -->
      <g class="wheel" style="transform-origin: -36px -5px"><circle cx="-36" cy="-5" r="4" fill="#1e293b" /><circle cx="-36" cy="-5" r="1.4" fill="#cbd5e1" /></g>
      <g class="wheel" style="transform-origin: -10px -5px"><circle cx="-10" cy="-5" r="4" fill="#1e293b" /><circle cx="-10" cy="-5" r="1.4" fill="#cbd5e1" /></g>
    </g>
    <circle cx="20" cy="30" r="4" class="puff p1" />
    <circle cx="12" cy="27" r="3" class="puff p2" />
  </svg>
</template>

<style scoped>
.coach-ride { display: block; height: auto; overflow: visible; }
.road-base { stroke: #cbd5e1; stroke-width: 3; stroke-dasharray: 7 7; }
.road { stroke: #7c3aed; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 1; stroke-dashoffset: 0; }
.end { fill: #fff; stroke: #7c3aed; stroke-width: 2.5; }
.coach { transform: translate(506px, 36px); }
.puff { fill: #cbd5e1; opacity: 0; }

.go .coach { animation: drive 2.6s cubic-bezier(.55, 0, .25, 1) .3s both; }
.go .wheel { animation: spin .35s linear 8 .3s; }
.go .road { animation: draw 2.6s cubic-bezier(.55, 0, .25, 1) .3s both; }
.go .p1 { animation: puff .9s ease-out .35s both; }
.go .p2 { animation: puff .9s ease-out .5s both; }
@keyframes drive { from { transform: translate(56px, 36px); } to { transform: translate(506px, 36px); } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes draw { from { stroke-dashoffset: .9; } to { stroke-dashoffset: 0; } }
@keyframes puff { 0% { opacity: .8; transform: translate(0, 0) scale(.6); } 100% { opacity: 0; transform: translate(-14px, -8px) scale(1.6); } }
</style>
