// SongQueue.js - Defines a backbone collections class for the song queue.
var SongQueue = Songs.extend({

  //model: SongModel,
  initialize: function(){
    console.log(this);
    this.on('add', this.checkFirst);
    this.on('ended', this.songEnded);
  },
  
  playFirst: function(){

  },

  checkFirst: function(){
    if (this.length < 2) {
      this.playFirst();
    }
  },

  songEnded: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();      
    }
  }

});