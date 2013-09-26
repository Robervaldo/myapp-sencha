Ext.define('MyApp.controller.User', {

	extend: 'Ext.app.Controller', 


	config: {

		models: ['User'],
		stores: [
			'Users',
			'UsersDataArray'
		],
		views: [
			'MyApp.view.Main',
			'MyApp.view.List'
		],

		refs: {
			buttonAdd: {
				selector: 'button[action=actionAdd]'
			}
		},

		control: {
			buttonAdd: {
				tap: 'actionAdd'
			}
		}

	},

	actionAdd: function(){
		
	}

});