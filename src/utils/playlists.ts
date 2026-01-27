import type { Playlist } from '../utils/types';

export const STATIC_PLAYLISTS: Playlist[] = [
  {
    id: 'workout1',
    title: 'Power Hits',
    activity: 'workout',
    color: '#FF4444',
    songs: [
      { id: '1', title: 'Pump It Up', artist: 'DJ Energy', duration: '3:20' },
      { id: '2', title: 'Run Faster', artist: 'Beat Master', duration: '3:45' }
    ]
  },
  {
    id: 'study1',
    title: 'Focus Flow',
    activity: 'study',
    color: '#4A90E2',
    songs: [
      { id: '3', title: 'Deep Work', artist: 'LoFi Beats', duration: '4:15' },
      { id: '4', title: 'Study Mode', artist: 'Chill Study', duration: '3:50' }
    ]
  },
  {
    id: 'party1',
    title: 'Dance Mix',
    activity: 'party',
    color: '#FF6B6B',
    songs: [
      { id: '5', title: 'Party Starter', artist: 'Club Hits', duration: '3:30' },
      { id: '6', title: 'Dance Floor', artist: 'Night Vibes', duration: '4:00' }
    ]
  },
  {
    id: 'relax1',
    title: 'Chill Vibes',
    activity: 'relax',
    color: '#9B59B6',
    songs: [
      { id: '7', title: 'Ocean Waves', artist: 'Relax Zone', duration: '5:20' },
      { id: '8', title: 'Evening Calm', artist: 'Soft Piano', duration: '4:45' }
    ]
  }
];
