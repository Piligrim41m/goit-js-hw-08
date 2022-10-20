import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
console.log(localStorage.getItem('videoplayer-current-time'))
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(currentTime());



function currentTime() {
  let time = 0
 if (localStorage.getItem('videoplayer-current-time')) {
     time = localStorage.getItem('videoplayer-current-time')
  } 
  console.log(time)
  return time
  
 }

