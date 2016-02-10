// SongQueue.js - Defines a backbone collections class for the song queue.
var SongQueue = Songs.extend({

  //model: SongModel,

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },
  
  playFirst: function(){
    console.log(this.at(0));
    this.at(0).play();
  },

  enqueue: function(song){
    if (this.length === 1) {
      this.playFirst();
    } else {
      
    }
  },

  dequeue: function(song){
    if (this.at(0) === song){
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();

    if (this.length >= 1) {
      console.log(this);
      this.playFirst();    
    } else {
      this.trigger('stop');
    }
  }

});