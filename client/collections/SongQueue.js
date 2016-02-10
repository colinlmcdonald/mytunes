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

  enqueue: function(){
    //if it's the first song, play it
    //otherwise, put it in the queue
    //console.log('this in enqueue in SongQueue', this);
    if (this.length < 2) {
      this.playFirst();
    }
  },

  songEnded: function() {

    this.shift();
    console.log("inside songEnded: ", this);
    // this.models[0].remove();
    // this.model.get('currentSong') = this.models[0];
    if (this.length > 0) {
      this.playFirst();      
    }
  }

});