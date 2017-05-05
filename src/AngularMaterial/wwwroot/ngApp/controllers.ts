namespace AngularMaterial {

    export class AnimalController {

        public openDialog(animalName: string) {
            this.$mdDialog.show({
                controller: AnimalDialogController,
                controllerAs: "modal",
                templateUrl: '/ngApp/animalDialog.html',
                clickOutsideToClose: true,
                locals: { animalName: animalName }
            })
        }

        constructor(private $mdDialog: angular.material.IDialogService) { }
    }

    export class AnimalDialogController {
        constructor(public animalName: string) { }
    }


    export class HomeController {
        public favoriteColor: string;

        public openDialog() {
            this.$mdDialog.show({
                controller: DialogController,
                controllerAs: 'dialog',
                templateUrl: '/ngApp/dialog.html',
                clickOutsideToClose: true
            })
                .then((favoriteColor: string) => {
                    this.favoriteColor = favoriteColor;
                }, () => {
                    this.favoriteColor = 'You cancelled the dialog.';
                });
        }
        constructor(private $mdDialog: angular.material.IDialogService) { }
    }

    export class DialogController {
        public pickColor(favoriteColor: string) {
            this.$mdDialog.hide(favoriteColor);
        }
        constructor(private $mdDialog: angular.material.IDialogService) { }
    }

    export class TaskController {
        public task;
        public tasks;

        constructor(private $mdDialog: angular.material.IDialogService) {
            this.tasks = ["feed cats", "pick up dry cleaning", "take over world"];
        }

        public openDialog() {
            this.$mdDialog.show({
                controller: TaskDialogController,
                controllerAs: 'dialog',
                templateUrl: '/ngApp/taskDialog.html',
                clickOutsideToClose: true
            }).then((task) => {
                this.tasks.push(task);
            }, () => {
                this.task = "You lazy butt, you didn't add a task.";
            });
        }
    }
    export class TaskDialogController {
        public addTask(task) {
            this.$mdDialog.hide(task);
        }
        constructor(private $mdDialog: angular.material.IDialogService) { }

    }

    angular.module("AngularMaterial").controller("HomeController", HomeController);
    angular.module("AngularMaterial").controller("AnimalController", AnimalController);
    angular.module("AngularMaterial").controller("TaskController", TaskController);
}