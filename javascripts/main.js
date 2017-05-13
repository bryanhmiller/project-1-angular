var app = angular.module("Zoe-favorite-food");

app.controller("ImageCtrl", ($scope) => {
	$scope.showButtonView = true;

	$scope.button = () => {
		$scope.showButtonView = false;
	};
	// $scope.image = () => {
	// 	$scope.showButtonView = true;
	// };
});