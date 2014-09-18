'use strict';
angular.module('app.controllers')

    // Path: /ConfigureLeague
    .controller('ConfigLeagueCtrl', [
        '$scope', '$location', '$window', '$stateParams', function($scope, $location, $window, $stateParams) {
            $scope.$root.title = 'AngularJS SPA | ConfigLeague';

            // TODO: Configure a League

            $scope.Equipos = [{ id_equipo: 438, nombre: 'RealMadrid', num_jugadores: 28, director_tecnico: 'Milla' }, { id_equipo: 823, nombre: 'Barcelona', num_jugadores: 24, director_tecnico: 'Rueda' }];
            $scope.Partidos = [{ id_partido: 12, equipo1: 'RealMadrid', equipo2: 'Barcelona', fecha: new Date() }];

            $scope.idEquipo = "";
            $scope.NombreEquipo = "";
            $scope.NumeroJugadores = "";
            $scope.DirectorTecnico = "";

            $scope.addNewTeam = function() {
                var nteam = { id_equipo: $scope.idEquipo, nombre: $scope.NombreEquipo, num_jugadores: $scope.NumeroJugadores, director_tecnico: $scope.DirectorTecnico };
                $scope.Equipos.push(nteam);
                $scope.idEquipo = "";
                $scope.NombreEquipo = "";
                $scope.NumeroJugadores = "";
                $scope.DirectorTecnico = "";
            };

            $scope.deleteTeam = function(nombre) {
                for (var i = 0; i < $scope.Equipos.length; i++) {
                    if ($scope.Equipos[i].nombre === nombre) {
                        $scope.Equipos.splice(i, 1);
                    }
                }
            };

            $scope.isEditing1 = false;

            $scope.IdAnterior = "";
            $scope.NombreAnterior = "";
            $scope.NumJugadoresAnterior = "";
            $scope.DirectorTecnicoAnterior = "";

            $scope.NuevoidEquipo = "";
            $scope.NuevoNombreEquipo = "";
            $scope.NuevoNumeroJugadores = "";
            $scope.NuevoDirectorTecnico = "";


            $scope.editTeam = function(idteam, teamname, numplayers, coach) {
                $scope.isEditing1 = true;
                $scope.IdAnterior = idteam;
                $scope.NuevoidEquipo = idteam;
                $scope.NombreAnterior = teamname;
                $scope.NuevoNombreEquipo = teamname;
                $scope.NumJugadoresAnterior = numplayers;
                $scope.NuevoNumeroJugadores = numplayers;
                $scope.DirectorTecnicoAnterior = coach;
                $scope.NuevoDirectorTecnico = coach;
            };

            $scope.cancelEdit1 = function() {
                $scope.isEditing1 = false;
            };

            $scope.FinishEditing1 = function() {
                for (var i = 0; i < $scope.Equipos.length; i++) {
                    if ($scope.Equipos[i].nombre === $scope.NombreAnterior) {
                        $scope.Equipos[i].id_equipo = $scope.NuevoidEquipo;
                        $scope.Equipos[i].nombre = $scope.NuevoNombreEquipo;
                        $scope.Equipos[i].num_jugadores = $scope.NuevoNumeroJugadores;
                        $scope.Equipos[i].director_tecnico = $scope.NuevoDirectorTecnico;
                    }
                }
                $scope.isEditing1 = false;
                $scope.IdAnterior = "";
                $scope.NuevoidEquipo = "";
                $scope.NombreAnterior = "";
                $scope.NuevoNombreEquipo = "";
                $scope.NumJugadoresAnterior = "";
                $scope.NuevoNumJugadores = "";
                $scope.DirectorTecnicoAnterior = "";
                $scope.NuevoDirectorTecnico = "";
            };

            //

            $scope.idJuego = "";
            $scope.Equipo1 = "";
            $scope.Equipo2 = "";
            $scope.Fecha = "";

            $scope.addNewGame = function() {
                var ngame = { id_partido: $scope.idJuego, equipo1: $scope.Equipo1, equipo2: $scope.Equipo2, fecha: $scope.Fecha }
                $scope.Partidos.push(ngame);
                $scope.idJuego = "";
                $scope.Equipo1 = "";
                $scope.Equipo2 = "";
                $scope.Fecha = "";
            };

            $scope.deleteGame = function(id) {
                for (var i = 0; i < $scope.Partidos.length; i++) {
                    if ($scope.Partidos[i].id_partido === id) {
                        $scope.Partidos.splice(i, 1);
                    }
                }
            };

            $scope.isEditing2 = false;

            $scope.IdJAnterior = "";
            $scope.Equipo1Anterior = "";
            $scope.Equipo2Anterior = "";
            $scope.FechaAnterior = "";

            $scope.NuevoidJuego = "";
            $scope.NuevoEquipo1 = "";
            $scope.NuevoEquipo2 = "";
            $scope.NuevaFecha = "";


            $scope.editGame = function(idgame, team1, team2, day) {
                $scope.isEditing2 = true;
                $scope.IdJAnterior = idgame;
                $scope.NuevoidJuego = idgame;
                $scope.Equipo1Anterior = team1;
                $scope.NuevoEquipo1 = team1;
                $scope.Equipo2Anterior = team2;
                $scope.NuevoEquipo2 = team2;
                $scope.FechaAnterior = day;
                $scope.NuevaFecha = day;
            };

            $scope.cancelEdit2 = function() {
                $scope.isEditing2 = false;
            };

            $scope.FinishEditing2 = function() {
                for (var i = 0; i < $scope.Partidos.length; i++) {
                    if ($scope.Partidos[i].id_partido === $scope.IdJAnterior) {
                        $scope.Partidos[i].id_partido = $scope.NuevoidJuego;
                        $scope.Partidos[i].equipo1 = $scope.NuevoEquipo1;
                        $scope.Partidos[i].equipo2 = $scope.NuevoEquipo2;
                        $scope.Partidos[i].fecha = $scope.NuevaFecha;
                    }
                }
                $scope.isEditing2 = false;
                $scope.IdJAnterior = "";
                $scope.NuevoidJuego = "";
                $scope.Equipo1Anterior = "";
                $scope.NuevoEquipo1 = "";
                $scope.Equipo2Anterior = "";
                $scope.NuevoEquipo2 = "";
                $scope.FechaAnterior = "";
                $scope.NuevaFecha = "";
            };

        }
    ]);