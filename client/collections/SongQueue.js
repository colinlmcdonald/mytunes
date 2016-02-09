// SongQueue.js - Defines a backbone collections class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,
  initialize: function(){
   // console.log(this);
    var that = this;

    var moreThanOneSong = function() {
      if (that.length < 2) {
        that.playFirst();
      } 
    }
    this.on('add', moreThanOneSong);
  },
  
  playFirst: function(){

  }

});