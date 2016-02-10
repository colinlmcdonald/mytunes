// SongQueue.js - Defines a backbone collections class for the song queue.
var SongQueue = Songs.extend({

  //model: SongModel,

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('ended', this.songEnded);
    this.on('dequeue', this.remove);
  },
  
  playFirst: function(){
    //we need to reference the song in the Songs collection ('library')
    this.models[0].play();

  },

  checkFirst: function(){

  },

  enqueue: function(song){
    //if it's the first song, play it
    //otherwise, put it in the queue
    //console.log('this in enqueue in SongQueue', this);
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