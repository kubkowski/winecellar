/*global Winecellar, Backbone*/

Winecellar.Models = Winecellar.Models || {};

(function () {
    'use strict';

    Winecellar.Models.Wine = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            "id": null,
            "name": "",
            "grapes": "",
            "country": "USA",
            "region": "California",
            "year": "",
            "description": "",
            "picture": ""
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
