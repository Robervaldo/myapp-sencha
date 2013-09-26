Ext.define('MyApp.model.User', {

	extend: 'Ext.data.Model',

	config: {

		idProperty: 'id',

		fields: [
			{
				name: 'id',
				type: 'int',
			},
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'email',
				type: 'string'
			},
			{
				name: 'alive',
				type: 'boolean',
				defaultValue: true
			}
		]

	}

});