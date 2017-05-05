var AngularMaterial;
(function (AngularMaterial) {
    angular.module("AngularMaterial", ['ngMaterial', 'ngMessages']).config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('green')
            .warnPalette('deep-orange');
    });
})(AngularMaterial || (AngularMaterial = {}));
//# sourceMappingURL=app.js.map