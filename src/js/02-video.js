import Player from '@vimeo/player';
import '../css/common.css';
import '../css/03-feedback.css';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const getCurrentTime = localStorage.getItem("feedback-form-state");

if (getCurrentTime) {

    // .setCurrentTime - фиксирует плеер на том-же месте
    player.setCurrentTime(getCurrentTime);
}

function onPlay({seconds}) {
localStorage.setItem("feedback-form-state", seconds)

}
player.on('timeupdate', throttle(onPlay, 1000));