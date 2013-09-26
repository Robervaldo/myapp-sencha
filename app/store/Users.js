Ext.define('MyApp.store.Users', {
	extend: 'Ext.data.Store',

	requires:[
		'Ext.data.proxy.JsonP',
		'MyApp.model.User'
	],

	config: {
		storeId: 'Users',
		autoLoad: true,
		pageSize: '2',
		proxy: {
			model: 'MyApp.model.User',
			type: 'jsonp',
			url: 'http://localhost:3000/users.json',
			callbackKey: 'callback1',
			reader: {
				type: 'json',
				rootProperty:''
			}
		}
	}
});