/*global Winecellar, Backbone, JST*/

Winecellar.Views = Winecellar.Views || {};

(function () {
    'use strict';

    Winecellar.Views.WineView = Backbone.View.extend({

        template: JST['app/scripts/templates/wineView.ejs'],

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        events: {
            'change input': 'change',
            'click .save': 'saveWine',
            'click .delete': 'deleteWine'
        },

        change: function ( event ) {
            var target = event.target;
            console.log('changing ' + target.id + ' from: ' +
                target.defaultValue + ' to: ' + target.value);
        },

        saveWine: function () {
            this.model.set({
                name : $('#name').val(),
                grapes : $('#grapes').val(),
                country : $('#country').val(),
                region , $('#region').val(),
                year : $('#year').val(),
                description : $('#description').val()
            });
            if ( this.model.isNew() ) {
                var self = this;
                wineCollection.create(this.model, {
                    success: function () {
                        app.navigate('wines/'+self.model.id, false);
                    }
                });
            } else {
                this.model.save();
            }
            return false;
        },

        deleteWine: function () {
            this.model.destroy({
                success: function () {
                    alert('Wine deleted successfully');
                    window.history.back();
                }
            });
            return false;
        },

        close: function () {
            $(this.el).unbind();
            $(this.el).empty();
        }

    });

})();
