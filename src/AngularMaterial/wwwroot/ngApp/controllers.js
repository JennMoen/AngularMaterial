var AngularMaterial;
(function (AngularMaterial) {
    var AnimalController = (function () {
        function AnimalController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        AnimalController.prototype.openDialog = function (animalName) {
            this.$mdDialog.show({
                controller: AnimalDialogController,
                controllerAs: "modal",
                templateUrl: '/ngApp/animalDialog.html',
                clickOutsideToClose: true,
                locals: { animalName: animalName }
            });
        };
        return AnimalController;
    }());
    AngularMaterial.AnimalController = AnimalController;
    var AnimalDialogController = (function () {
        function AnimalDialogController(animalName) {
            this.animalName = animalName;
        }
        return AnimalDialogController;
    }());
    AngularMaterial.AnimalDialogController = AnimalDialogController;
    var HomeController = (function () {
        function HomeController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        HomeController.prototype.openDialog = function () {
            var _this = this;
            this.$mdDialog.show({
                controller: DialogController,
                controllerAs: 'dialog',
                templateUrl: '/ngApp/dialog.html',
                clickOutsideToClose: true
            })
                .then(function (favoriteColor) {
                _this.favoriteColor = favoriteColor;
            }, function () {
                _this.favoriteColor = 'You cancelled the dialog.';
            });
        };
        return HomeController;
    }());
    AngularMaterial.HomeController = HomeController;
    var DialogController = (function () {
        function DialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        DialogController.prototype.pickColor = function (favoriteColor) {
            this.$mdDialog.hide(favoriteColor);
        };
        return DialogController;
    }());
    AngularMaterial.DialogController = DialogController;
    var TaskController = (function () {
        function TaskController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.tasks = ["feed cats", "pick up dry cleaning", "take over world"];
        }
        TaskController.prototype.openDialog = function () {
            var _this = this;
            this.$mdDialog.show({
                controller: TaskDialogController,
                controllerAs: 'dialog',
                templateUrl: '/ngApp/taskDialog.html',
                clickOutsideToClose: true
            }).then(function (task) {
                _this.tasks.push(task);
            }, function () {
                _this.task = "You lazy butt, you didn't add a task.";
            });
        };
        return TaskController;
    }());
    AngularMaterial.TaskController = TaskController;
    var TaskDialogController = (function () {
        function TaskDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        TaskDialogController.prototype.addTask = function (task) {
            this.$mdDialog.hide(task);
        };
        return TaskDialogController;
    }());
    AngularMaterial.TaskDialogController = TaskDialogController;
    angular.module("AngularMaterial").controller("HomeController", HomeController);
    angular.module("AngularMaterial").controller("AnimalController", AnimalController);
    angular.module("AngularMaterial").controller("TaskController", TaskController);
})(AngularMaterial || (AngularMaterial = {}));
//# sourceMappingURL=controllers.js.map