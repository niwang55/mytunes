// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/songs',

  parse: function(response) {
    return response.results;
  },

  initialize: function(query) {
    this.fetch({data: { limit: 10 } });
  },

  model: SongModel
});