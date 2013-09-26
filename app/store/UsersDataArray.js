Ext.define('MyApp.store.UsersDataArray', {
	extend: 'Ext.data.Store',

	requires:[
		'Ext.data.proxy.JsonP',
		'MyApp.model.User'
	],

	config: {
		storeId: 'UsersDataArray',
		autoLoad: true,
		pageSize: '2',
		model: 'MyApp.model.User',
		data: [
            {name: 'Alpha', email: 'teste', alive: true},
            {name: 'Alpha', email: 'teste', alive: true}
        ]
	}
});