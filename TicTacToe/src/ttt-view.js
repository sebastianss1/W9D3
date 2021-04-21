class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', 'li', (callback => {
      const $target = $(callback.currentTarget);
      this.makeMove($target);
    }));
  }

  makeMove($square) {
    const player = this.game.currentPlayer;
    const position = $square.data('pos');

    try {
      // debugger
      this.game.playMove(position);
    } catch (err) {
      alert('Move was invalid');
      return;
    }

    $square.addClass(player); // x ,o 

    if (this.game.isOver()) {
      this.$el.off('click');

      this.$el.addClass('game-over');

      let winner = this.game.winner(); //winner's mark => x / o
      const $figcap = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcap.html(`You Win, ${winner}`);
      } else {
        $figcap.html("It's a draw!");
      };
      this.$el.append($figcap);


      // if winner 
      // add winner class (everything turns green etc )
      // you win, winner printed 
      // else (draw)
      // add draw class (everything turns red)
      // prints "it's a draw!"
      // end 
    }


  }

  setupBoard() {
    const $ul = $('<ul>')
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $('<li>');
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
