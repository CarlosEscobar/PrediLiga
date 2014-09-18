'use strict';
angular.module('app.controllers')

    // Path: /profile
    .controller('ProfileCtrl', [
        '$scope', '$location', '$window', '$rootScope', function($scope, $location, $window, $rootScope) {
            $scope.$root.title = 'Angular JSP | Mi perfil';
            // TODO: User Profile

            //  console.log($rootScope.rootligs[0].nombre);

            $scope.Ligas = [
                { id_liga: 347, nombre: 'Española', fecha_inicio: new Date(), num_equipos: 20, num_partidos: 10 },
                { id_liga: 284, nombre: 'Italiana', fecha_inicio: new Date(), num_equipos: 32, num_partidos: 21 },
                { id_liga: 67, nombre: 'Francesa', fecha_inicio: new Date(), num_equipos: 23, num_partidos: 16 },
                { id_liga: 42, nombre: 'Inglesa', fecha_inicio: new Date(), num_equipos: 25, num_partidos: 15 },
                { id_liga: 333, nombre: 'Alemana', fecha_inicio: new Date(), num_equipos: 20, num_partidos: 9 },
                { id_liga: 88, nombre: 'Hondureña', fecha_inicio: new Date(), num_equipos: 22, num_partidos: 11 },
                { id_liga: 156, nombre: 'Mexicana', fecha_inicio: new Date(), num_equipos: 35, num_partidos: 20 },
                { id_liga: 622, nombre: 'Estaounidense', fecha_inicio: new Date(), num_equipos: 27, num_partidos: 18 },
                { id_liga: 728, nombre: 'Koreana', fecha_inicio: new Date(), num_equipos: 22, num_partidos: 14 },
                { id_liga: 101, nombre: 'Africana', fecha_inicio: new Date(), num_equipos: 17, num_partidos: 12 }
            ];

            $scope.myLigas = [];

            $scope.SearchLeague = function() {
                for (var i = 0; i < $scope.Ligas.length; i++) {
                    if ($scope.Ligas[i].nombre === $scope.Buscar) {
                        $location.path = ('/login');
                    }
                }
            };


            $scope.getLiga = function() {
                for (var i = 0; i < $scope.Ligas.length; i++) {
                    if ($scope.Ligas[i].nombre === $scope.Buscar) {
                        return $scope.Ligas[i];
                    }
                }
                return null;
            };

            $scope.Register = function(idlig) {
                for (var i = 0; i < $scope.Ligas.length; i++) {
                    if ($scope.Ligas[i].id_liga === idlig) {
                        var l = $scope.Ligas[i];
                        $scope.myLigas.push(l);
                        $scope.Ligas.splice(i, 1);
                    }
                }
            };


        }
    ]);