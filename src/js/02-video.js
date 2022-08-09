import Player from '@vimeo/player';
import '../css/common.css';
import '../css/03-feedback.css';



const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});