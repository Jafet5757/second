(function () {
	self.Board = function (width, height) { // La propiedad self vale algo dependiendo del contexto. self === window
		this.width = width;
		this.height = height;
		this.playing = false;
		this.game_over = false;
		this.bars = [];
		this.ball = null;
	}
	self.Board.prototype = {
		get elementos () {
			var elements = this.bars;
			elements.push(this.ball);
			return elements;
		}
	}
})();
(function() {
	self.Bar = function (x, y, width, height, board) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.board = board;
		this.board.bars.push(this);
		this.kind = "rectangle";
	}
	self.Bar.prototype = {
		down: function () {
		},
		up: function () {
		}
	}
})();
(function(){
	self.BoardView = function (canvas, board) {
		this.canvas = canvas;
		this.board = board;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.contexto = canvas.getContext("2d"); // Con la propiedad context podemos dibujar en javascript
	}
	self.BoardView.prototype = {
		draw: function () {
			for (var i = this.board.elementos.length - 1; i >= 0; i--) {
				var el = this.board.elementos[i];
				draw(this.ctx, el);
			};
		}
	}
	function draw (ctx, element) {
		if (element !== null && element.hasOwnProperty("kind")) { // La propiedad hasOwnProperty nos indica si el objeto tiene la propiedad que le pasamos como parámetro
			switch(element.kind){
				case "rectangle":
					ctx.fillRect(element.x, element.y, element.width, element.height); // La propiedad fillRect nos permite dibujar un cuadrado
				break;
			}
		}
	}
})();
addEventListener("load", main); //Funciona asi
function main () {
	var board = new Board(800, 400); // Funciona asi
	var canvas = document.getElementById("canvas");
	var boardView = new BoardView(canvas, board);
	var bar = new Bar(20, 100, 40, 100, board);
	boardView.draw();
}