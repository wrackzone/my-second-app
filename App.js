Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        var viewport = Ext.create('Ext.Viewport');

        Rally.data.ModelFactory.getModel({
             type: 'User Story',
             success: function(userStoryModel) {
                 viewport.add({
                     xtype: 'rallygrid',
                     model: userStoryModel,
                     columnCfgs: [
                         'FormattedID',
                         'Name',
                         'Owner'
                     ]
                 });
             }
         });
    }
});
