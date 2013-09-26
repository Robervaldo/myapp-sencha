Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'MyApp.view.List',
        'MyApp.view.Form'
    ],

    
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'container',
                layout: 'card',
                itemId: 'container',

                items: [

                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'My Frist App',
                        items: [
                            {
                                ui: 'back',
                                text: 'back',
                                align: 'left',
                                itemId: 'actionBack',
                                action: 'actionBack'
                            },
                            {
                                iconCls: 'add',
                                iconMask: true,
                                align: 'right',
                                itemId: 'add',
                                action: 'actionAdd'
                            }
                        ]
                    },

                    {
                        xtype: 'list'  
                    },
                    
                ],
                iconCls: 'home',
                title: 'Usuários',
            }
        ]
    }

});
