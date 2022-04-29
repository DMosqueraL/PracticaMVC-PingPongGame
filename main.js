(function(){
    self.Board = function(width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    self.Board.prototype = {
        get elements(){
            let elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }

})();

function main (){

}