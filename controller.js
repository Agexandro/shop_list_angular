appList.controller("listController", ($scope) => {
    $scope.items = ['Milk', 'Juice', 'Eggs'];
    $scope.newItem = '';
    $scope.addItem = function () {
        if ($scope.newItem.length > 0) {
            let itemExists = false;
            $scope.items.filter((el) => {
                if (el.toLowerCase() == $scope.newItem.toLowerCase()) {
                    itemExists = true;
                }
            });
            if (!itemExists) {
                $scope.items.push($scope.newItem);
                $scope.newItem = '';
            }
        }
    };
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    };
})