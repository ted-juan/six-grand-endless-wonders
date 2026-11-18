// 三天行程的路線資料，給 components/JourneyMap.vue 使用。
// 座標是 [經度, 緯度]；leg = 「從上一站到這一站」用的交通方式與說明。
// 同一地點出現兩次（例如 Day 3 回到台中）也沒關係，地圖上會共用同一個標記。

export type Mode = 'walk' | 'train' | 'bus' | 'coach'

export interface Stop {
  name: string
  time: string
  lon: number
  lat: number
  thumb?: string
  /** 地圖上標籤放哪一側 */
  side?: 'left' | 'right' | 'top' | 'bottom'
  leg?: { mode: Mode, note: string }
  effect?: 'jiaobei'
}

export const modes: Record<Mode, { label: string, color: string, icon: string }> = {
  walk: { label: 'Walk / MRT', color: '#0d9488', icon: 'i-ph-person-simple-walk-bold' },
  train: { label: 'TRA Train', color: '#ea580c', icon: 'i-ph-train-bold' },
  bus: { label: 'Bus / Shuttle', color: '#2563eb', icon: 'i-ph-bus-bold' },
  coach: { label: 'Intercity Coach', color: '#7c3aed', icon: 'i-ph-van-bold' },
}

export const journeys: Record<number, Stop[]> = {
  1: [
    { name: 'Ximending (Yonghe Soy Milk)', time: '07:00', lon: 121.5078, lat: 25.0422, thumb: '/photos/yonghe.jpg', side: 'top' },
    { name: 'Longshan Temple', time: '08:30', lon: 121.4999, lat: 25.0372, thumb: '/photos/longshan.jpg', side: 'bottom', leg: { mode: 'walk', note: 'Walk · ~18 min' }, effect: 'jiaobei' },
    { name: 'Shifen Old Street', time: 'Afternoon', lon: 121.7756, lat: 25.0418, thumb: '/photos/shifen.jpg', side: 'bottom', leg: { mode: 'train', note: 'TRA · ~1 hr' } },
    { name: 'Jiufen Old Street', time: 'Dusk', lon: 121.8437, lat: 25.1093, thumb: '/jiufen.jpg', side: 'left', leg: { mode: 'bus', note: 'Bus · ~1 hr' } },
    { name: 'Changshengtang TCM (Acupuncture)', time: 'Evening', lon: 121.5202, lat: 25.0578, thumb: '/photos/acupuncture.jpg', side: 'right', leg: { mode: 'bus', note: 'Bus · ~1 hr' } },
    { name: 'Ningxia Night Market', time: 'Night', lon: 121.5153, lat: 25.0563, thumb: '/photos/ningxia.jpg', side: 'left', leg: { mode: 'walk', note: 'Walk · ~8 min' } },
  ],
  2: [
    { name: 'Four Four South Village', time: '09:00', lon: 121.5617, lat: 25.0312, thumb: '/photos/fourfour.jpg', side: 'left' },
    { name: 'Taipei 101', time: '10:30', lon: 121.5645, lat: 25.0339, thumb: '/photos/taipei101.jpg', side: 'right', leg: { mode: 'walk', note: 'Walk · ~10 min' } },
    { name: 'Taipei Bus Station', time: '12:00', lon: 121.5175, lat: 25.0492, thumb: '/photos/taipei-bus-station.jpg', side: 'left', leg: { mode: 'walk', note: 'MRT · ~25 min' } },
    { name: 'Miyahara Eye Hospital', time: '14:30', lon: 120.6838, lat: 24.1375, thumb: '/photos/miyahara.jpg', side: 'right', leg: { mode: 'coach', note: 'Coach · ~2.5 hrs' } },
    { name: 'Shenji New Village', time: '16:30', lon: 120.6627, lat: 24.1446, thumb: '/photos/shenji.jpg', side: 'left', leg: { mode: 'bus', note: 'Bus · ~20 min' } },
    { name: 'Taichung Eslite Park Lane', time: 'Evening', lon: 120.6634, lat: 24.1515, thumb: '/photos/shenji.jpg', side: 'left', leg: { mode: 'walk', note: 'Walk · ~15 min' } },
  ],
  3: [
    { name: 'Taichung Station', time: 'Morning', lon: 120.6853, lat: 24.1372, thumb: '/photos/miyahara.jpg', side: 'right' },
    { name: 'Lukang Old Town', time: 'Late morning', lon: 120.4340, lat: 24.0560, thumb: '/photos/tianhou.jpg', side: 'bottom', leg: { mode: 'bus', note: 'Shuttle · ~1 hr' } },
    { name: 'Taichung Station', time: 'Evening', lon: 120.6853, lat: 24.1372, thumb: '/photos/miyahara.jpg', side: 'right', leg: { mode: 'bus', note: 'Shuttle · ~45 min' } },
    { name: 'Taoyuan Airport (TPE)', time: 'Departure', lon: 121.2332, lat: 25.0777, thumb: '/photos/skyline.jpg', side: 'left', leg: { mode: 'coach', note: 'Coach · ~2 hrs' } },
  ],
}
