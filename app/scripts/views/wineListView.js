/*global Winecellar, Backbone, JST*/

Winecellar.Views = Winecellar.Views || {};

(function () {
    'use strict';

    Winecellar.Views.WineListView = Backbone.View.extend({

        template: JST['app/scripts/templates/wineListView.ejs'],

        tagName: 'ul',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function ( eventName ) {
            _.each(this.model.models, function ( wine ) {
                $(this.el).append(new WineListItemView({model:wine}).render().el);
            }, this);
            return this;
        }

    });

})();
