Ext.define('MyApp.view.Form', {

	extend: 'Ext.form.Panel',

	requires: [
		'Ext.field.Hidden'
	],

	xtype: 'form',


	config: {

		items: [

			{
                xtype: 'hiddenfield',
                name: 'id'
            },

            {
            	xtype:'textfield',
				name: 'name',
				label: 'Name'
            },

            {
            	xtype: 'textfield',
            	name: 'email',
            	label: 'E-mail'
            },

            {
            	xtype: 'checkboxfield',
                label: 'Alive?'
            }

		]

	}


});