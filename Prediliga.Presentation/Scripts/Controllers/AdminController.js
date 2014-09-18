'use strict';
angular.module('app.controllers')

    // Path: /admin
    .controller('AdminCtrl', [
        '$scope', '$location', '$window', '$rootScope', 'Login', function($scope, $location, $window, $rootScope, Login) {
            $scope.$root.title = 'AngularJS SPA | Admin';

            // TODO: Admin

            $scope.TodasLigas = [{ id_liga: 347, nombre: 'Española', fecha_inicio: new Date(), num_equipos: 20, num_partidos: 10 }];

            $scope.idLiga = "";
            $scope.NombreLiga = "";
            $scope.FechaInicio = "";
            $scope.NumEquipos = "";
            $scope.NumPartidos = "";

            $scope.league = "";

            $scope.admin = function () {

                Login.admin($scope.league, function (response) {

                }, function (error) {

                });

            };

            /*

            $scope.addNewLeague = function() {
                var league = { id_liga: $scope.idLiga, nombre: $scope.NombreLiga, fecha_inicio: $scope.FechaInicio, num_equipos: $scope.NumEquipos, num_partidos: $scope.NumPartidos };
                $scope.TodasLigas.push(league);
                $scope.idLiga = "";
                $scope.NombreLiga = "";
                $scope.FechaInicio = "";
                $scope.NumEquipos = "";
                $scope.NumPartidos = "";
            };
            */

            $scope.deleteLeague = function(nombre) {
                for (var i = 0; i < $scope.TodasLigas.length; i++) {
                    if ($scope.TodasLigas[i].nombre === nombre) {
                        $scope.TodasLigas.splice(i, 1);
                    }
                }
            };

            $scope.isEditing = false;

            $scope.IdAnterior = "";
            $scope.NombreAnterior = "";
            $scope.FechaAnterior = "";
            $scope.NumEquiposAnterior = "";
            $scope.NumPartidosAnterior = "";

            $scope.NuevoidLiga = "";
            $scope.NuevoNombre = "";
            $scope.NuevaFechaInicio = "";
            $scope.NuevoNumEquipos = "";
            $scope.NuevoNumPartidos = "";


            $scope.editLeague = function(idleague, teamname, fechaini, numequi, numparti) {
                $scope.isEditing = true;
                $scope.IdAnterior = idleague;
                $scope.NuevoidLiga = idleague;
                $scope.NombreAnterior = teamname;
                $scope.NuevoNombre = teamname;
                $scope.FechaAnterior = fechaini;
                $scope.NuevaFechaInicio = fechaini;
                $scope.NumEquiposAnterior = numequi;
                $scope.NuevoNumEquipos = numequi;
                $scope.NumPartidosAnterior = numparti;
                $scope.NuevoNumPartidos = numparti;
            };

            $scope.cancelEdit = function() {
                $scope.isEditing = false;
            };

            $scope.FinishEditing = function() {
                for (var i = 0; i < $scope.TodasLigas.length; i++) {
                    if ($scope.TodasLigas[i].nombre === $scope.NombreAnterior) {
                        $scope.TodasLigas[i].id_liga = $scope.NuevoidLiga;
                        $scope.TodasLigas[i].nombre = $scope.NuevoNombre;
                        $scope.TodasLigas[i].fecha_inicio = $scope.NuevaFechaInicio;
                        $scope.TodasLigas[i].num_equipos = $scope.NuevoNumEquipos;
                        $scope.TodasLigas[i].num_partidos = $scope.NuevoNumPartidos;
                    }
                }
                $scope.isEditing = false;
                $scope.IdAnterior = "";
                $scope.NuevoidLiga = "";
                $scope.NombreAnterior = "";
                $scope.NuevoNombre = "";
                $scope.FechaAnterior = "";
                $scope.NuevaFechaInicio = "";
                $scope.NumEquiposAnterior = "";
                $scope.NuevoNumEquipos = "";
                $scope.NumPartidosAnterior = "";
                $scope.NuevoNumPartidos = "";
            };

            $rootScope.rootligs = $scope.TodasLigas;

        }
    ]);