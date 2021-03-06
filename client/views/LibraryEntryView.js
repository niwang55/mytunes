// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  // vote: this.model.getCount(),

  template: _.template('<td class="library-artist">(<%= artist %>)</td><td class="library-song"><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    var playCountDiv = `<div class="play-counter">Play Count: ${this.model.get('playCount')}</div>`;
    return this.$el.html(this.template(this.model.attributes)).append(playCountDiv);
  }

});
