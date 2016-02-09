// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    console.log('this is inside Songs collection', this);
  }

});