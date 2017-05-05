namespace AngularMaterial {

    angular.module("AngularMaterial", ['ngMaterial', 'ngMessages']).config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('green')
            .warnPalette('deep-orange')
    });    
        
        
       

}