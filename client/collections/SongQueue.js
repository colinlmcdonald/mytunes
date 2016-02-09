// SongQueue.js - Defines a backbone collections class for the song queue.
var SongQueue = Songs.extend({

  //model: SongModel,

  initialize: function(){
    this.on('add', this.checkFirst);
    this.on('ended', this.songEnded);
    this.on('dequeue', this.remove);
    //this.on('enqueue', this.addToQueue);
    //console.log('this inside SongQueue', this)
  },
  
  playFirst: function(){
    this.models[0].play();
  },

  checkFirst: function(){
    if (this.length < 2) {
      this.playFirst();
    }
  },

  addToQueue: function(){
    //this adds the next song to the song Queue
    //the spec seems to say that we're expecting the next song to come from the library
    console.log('hi');
    //this.collection.add(this.model);
  },

  songEnded: function() {
    this.shift();

    if (this.length > 0) {
      this.playFirst();      
    }
  }

});