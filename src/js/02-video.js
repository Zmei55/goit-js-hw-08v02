import throttle from 'lodash.throttle';
import refs from './refs';
import { savedTime, getStorage } from './02-player-functions';

const player = new Vimeo.Player(refs.iframe);

player.on('timeupdate', throttle(savedTime, 2000));

player
  .setCurrentTime(getStorage())
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
