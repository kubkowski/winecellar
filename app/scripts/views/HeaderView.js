/*global Winecellar, Backbone, JST*/

Winecellar.Views = Winecellar.Views || {};

(function () {
    'use strict';

    Winecellar.Views.HeaderView = Backbone.View.extend({

        template: JST['app/scripts/templates/HeaderView.ejs'],

        tagName: '',

        id: '',

        className: '',

        events: {
            "click .new":"newWine"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function ( eventName ) {
            $(this.el).html(this.template());
            return this;
        }

        newWine: function ( event ) {
            if ( app.wineView ) {
                app.wineView.close()
            }
            app.wineView = new WineView({model:new Wine()});
            $('#content').html(app.wineView.render().el);
            return false;
        }

    });

})();
