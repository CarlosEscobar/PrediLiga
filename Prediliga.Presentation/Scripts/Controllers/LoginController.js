'use strict';
angular.module('app.controllers')

    // Path: /login
    .controller('LoginCtrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA | Sign In';
            // TODO: Authorize a user

            $scope.ShMessage1 = false;
            $scope.ShMessage2 = false;
            $scope.ShMessage3 = false;

            $scope.login = function(userName, password) {

                if (userName === "Admin" && password !== "123") {
                    $scope.ShMessage1 = true;
                    $scope.ShMessage2 = false;
                    $scope.ShMessage3 = false;
                } else if ((userName !== "Admin" && password === "123") || (userName !== "User" && password == "0000")) {
                    $scope.ShMessage1 = false;
                    $scope.ShMessage2 = true;
                    $scope.ShMessage3 = false;
                } else if ((userName === "User" && password !== "0000")) {
                    $scope.ShMessage1 = false;
                    $scope.ShMessage2 = false;
                    $scope.ShMessage3 = true;
                } else {
                    if (userName === "Admin" && password === "123") {
                        $location.path('/admin');
                    } else if (userName === "User" && password === "0000") {
                        $location.path('/profile');
                    }
                }

                return false;
            };

            /*
        $scope.user = {

        };

        $scope.login = function () {
            Login.login($scope.user, function (response) {

            }, function (error) {

            });
        };
        */
            $scope.$on('$viewContentLoaded', function() {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
            $scope.register = function() {
                $location.path('/register');
                return false;
            };
        }
    ]);