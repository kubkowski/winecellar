/*global Winecellar, Backbone*/

Winecellar.Collections = Winecellar.Collections || {};

(function () {
    'use strict';

    Winecellar.Collections.WineCollection = Backbone.Collection.extend({

        model: Winecellar.Models.Wine,
        url:"../api/wines"

    });

})();
