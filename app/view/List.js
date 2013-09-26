Ext.define('MyApp.view.List', {

	extend: 'Ext.dataview.List',

	requires: [
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],

	xtype: 'list',

	config: {
        store: 'UsersDataArray',
        itemTpl: '{email}',

        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullRefreshText: 'Pull down for more new Tweets!'
            }
        ]

	}

});