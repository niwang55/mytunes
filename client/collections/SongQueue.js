// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.remove(this.at(0));
      if (!!this.at(0)) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove();
    });

    this.on('play', function() {
      // if (this.length === 1) {
      //   this.playFirst();
      // } else {
      //   this.play();
      // }
    });

    this.on('enqueue', function() {
      console.log('reached');
      this.add();
    });

  },

  playFirst: function() {
    this.at(0).play();
  },

  // ended: function() {
  //   this.remove(this.at(0)); 
  // },

  // dequeue: function() {
  //   this.remove(this.at(0));
  // },

});