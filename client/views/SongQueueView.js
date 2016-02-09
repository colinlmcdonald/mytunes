// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  //collection: SongQueue,
  initialize: function() {
    this.render();
  },

  render: function() {
    //call SongQueueEntryView.render()
    //extend SongQueueEntryView from SongQueueView
    //change the spec
    //console.log(this);
    return new SongQueueEntryView().render();
  }

});
