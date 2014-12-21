/*global Winecellar, Backbone*/

Winecellar.Routers = Winecellar.Routers || {};

(function () {
    'use strict';

    Winecellar.Routers.Router = Backbone.Router.extend({
      routes: {
        "":"list",
        "wines/:id":"wineDetails"
      },

      list: function () {
        var wineList = new Winecellar.Collections.WineCollection();
        var wineListView = new Winecellar.View.WineListView();
        wineList.fetch();
        $('#sidebar').html(wineListView.render().el);
      },

      wineDetails: function ( id ) {
        var wine = wineList.get(id);
        var wineView = new Winecellar.View.WineView({model: wine});
        $('#content').html(wineView.render().el);
      }

    });

    var app = new Winecellar.Routers.Router();
    Backbone.history.start();

})();
