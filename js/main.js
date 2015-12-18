require.config({
	packages: [
    	{
    		name: 'app',
    		location: 'components/app'
    	},
    	{
    		name: 'common',
    		location: 'components/common'
    	},
    	{
    		name: 'mymodule',
    		location: 'components/mymodule'
    	},
        {
            name: 'metacritic',
            location: 'components/metacritic'
        }
    ],
    paths: {
        angular: './lib/angular',
        ngRoute: './lib/angular-route',
        kendo : [ 'http://cdn.kendostatic.com/2014.1.416/js/kendo.all.min', './lib/kendo.all.min' ],
        jquery: ['http://code.jquery.com/jquery-1.9.1.min', './lib/jquery-1.9.1.min']
    },
	shim: {
			angular : {
				deps: ['jquery'],
				exports: 'angular'
			},
			ngRoute: {
		      deps:     ['angular']
		    },
		    kendo: {
		    	deps: ['angular']
		    }
	}
});


require(['bundles/anglib'], 
	function () { 
		require(['bundles/app'], 
			function () { 

				//loading when bootstrap called
				require(['bundles/lib']);

                // Metacritic bundle init
                require(['bundles/metacritic'],
                    function () {
                        console.log('Metacritic bundle was loaded!');
                    }
                );

				angular.element().ready(function() {
					angular.bootstrap(document, ['app']);
				}); 
			});
});