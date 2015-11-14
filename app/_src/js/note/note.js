var app = angular.module('noteSth');
app.controller('websites', ['$scope', 'dataS', '$cookieStore', '$location', '$rootScope',

    function($scope, dataS, $cookieStore, $location, $rootScope) {

        $scope.id = $cookieStore.get('id');
       $scope.website = {
           body: {},
           send: function() {
               dataS.postData('/websites', $scope.website.body, true)
               .success(function(data) {
                   $rootScope.$emit('siteAdd', data);
               })
           }
       }

    }
]);
