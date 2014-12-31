/*global Winecellar, Backbone*/

Winecellar.Routers = Winecellar.Routers || {};

(function () {
    'use strict';

    Winecellar.Routers.Router = Backbone.Router.extend({

      routes: {
        "": "list",
        "wines/new": "newWine",
        "wines/:id":"wineDetails"
      },

      initialize:function () {
        $('#header').html(new HeaderView().render().el);
      },

      list: function () {
        var self = this;
        this.wineList = new Winecellar.Collections.WineCollection();
        this.wineListView = new Winecellar.View.WineListView();
        wineList.fetch({
          success: function() {
            self.wineListView = new WineListView({model:self.WineList});
            $('#sidebar').html(self.wineListView.render().el);
            if ( self.requestedId ) {
              self.wineDetails(self.requestedId);
            }
          }
        });
      },

      wineDetails: function ( id ) {
        if (this.wineList) {
          this.wine = wineList.get(id);
          if (this.wineView) {
            this.wineView.close();
          }
          this.wineView = new Winecellar.View.WineView({model: wine});
          $('#content').html(this.wineView.render().el);
        } else {
          this.requestedId = id;
          this.list();
        }
      },

      newWine: function () {
        if ( app.vineView ) {
          app.vineView.close();
        }
        app.vineView = new Winecellar.View.WineView({model: new Wine()});
        $('#content').html(app.wineView.render().el);
      }

    });

    var app = new Winecellar.Routers.Router();
    Backbone.history.start();

})();
