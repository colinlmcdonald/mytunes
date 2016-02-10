// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    //this.on('enqueue', this.addToQueue);
  },

  // addToQueue: function() {
  //   //add the next model to the SongQueue
  //   this.model.add
  // }

});