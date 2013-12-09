
(function () {
    var module = angular.module("angular-google-maps-example", ["google-maps"]);
}());

function ExampleController ($scope, $interval, $log) {

    // Enable the new Google Maps visuals until it gets enabled by default.
    // See http://googlegeodevelopers.blogspot.ca/2013/05/a-fresh-new-look-for-maps-api-for-all.html
    google.maps.visualRefresh = true;

    angular.extend($scope, {
        map: {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 3,
            dragging: false,
            bounds: {
              northeast: {
                latitude: 43.794889,
                longitude: -90.175781
              },
              southwest: {
                latitude: 35.949106,
                longitude: -106.655273
              }
            }
        
        }
    });

    $scope.searchLocation = {
        latitude: 30.1451,
        longitude: -99.6680
    };

    $interval(function() {
      $scope.map.bounds.northeast.latitude = $scope.map.bounds.northeast.latitude   - 1;
      $scope.map.bounds.northeast.longitude = $scope.map.bounds.northeast.longitude - 1;
      $scope.map.bounds.southwest.latitude = $scope.map.bounds.southwest.latitude   - 1;
      $scope.map.bounds.southwest.longitude = $scope.map.bounds.southwest.longitude - 1;
    }, 1000);
}
