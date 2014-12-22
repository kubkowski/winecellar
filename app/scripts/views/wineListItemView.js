/*global Winecellar, Backbone, JST*/

Winecellar.Views = Winecellar.Views || {};

(function () {
    'use strict';

    Winecellar.Views.WineListItemView = Backbone.View.extend({

        template: JST['app/scripts/templates/wineListItemView.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.close);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        close: function () {
            $(this.el).unbind();
            $(this.el).remove();
        }

    });

})();
