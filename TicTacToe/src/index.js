const View = require('./ttt-view.js')
const Game = require('./game.js')

  $(() => {
    const $ele = $('.ttt')
    const game = new Game();
    const newView = new View(game, $ele);
  });
