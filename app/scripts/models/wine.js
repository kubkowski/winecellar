/*global Winecellar, Backbone*/

Winecellar.Models = Winecellar.Models || {};

(function () {
    'use strict';

    Winecellar.Models.Wine = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
