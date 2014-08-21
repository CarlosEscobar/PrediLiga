'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user

        $scope.login = function (userName, password) {
            if (userName === "Admin" && password === "123"){
                $location.path('/admin');
            } else if (userName === "User" &&password === "0000") {
                $location.path('/profile');
            }
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.register = function () {
            $location.path('/register');
            return false;
        };
    }])

    // Path: /Register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Register';
        // TODO: Register a New User
        $scope.login = function () {
            $location.path('/login');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Recuperar Password';
        // TODO: Forgot Password
        
        $scope.ShowMessage = false;
        $scope.RecoverPassword = function () {
            $scope.ShowMessage = true;
            return false;
        };

    }])

     // Path: /admin
    .controller('AdminCtrl', ['$scope', '$location', '$window', '$rootScope',  function ($scope, $location, $window, $rootScope) {
        $scope.$root.title = 'AngularJS SPA | Admin';
        
        $scope.TodasLigas = [{ id_liga: 347, nombre: 'Española', fecha_inicio: '28 Sept 2014', num_equipos: 20, num_partidos:10 }];

        $scope.idLiga = "";
        $scope.NombreLiga = "";
        $scope.FechaInicio = "";
        $scope.NumEquipos = "";
        $scope.NumPartidos = "";

        $scope.addNewLeague = function () {
            var league = { id_liga: $scope.idLiga, nombre: $scope.NombreLiga, fecha_inicio: $scope.FechaInicio, num_equipos: $scope.NumEquipos, num_partidos: $scope.NumPartidos };
            $scope.TodasLigas.push(league);
            $scope.idLiga = "";
            $scope.NombreLiga = "";
            $scope.FechaInicio = "";
            $scope.NumEquipos = "";
            $scope.NumPartidos = "";
        };

        $scope.deleteLeague = function (nombre) {
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

        
        $scope.editLeague = function (idleague,teamname,fechaini,numequi,numparti) {
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

        $scope.cancelEdit = function () {
            $scope.isEditing = false;
        };

        $scope.FinishEditing = function () {
            for (var i = 0; i < $scope.TodasLigas.length; i++) {
                if ($scope.TodasLigas[i].nombre === $scope.NombreAnterior){
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

    }])

          // Path: /ConfigureLeague
    .controller('ConfigLeagueCtrl', ['$scope', '$location', '$window','$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'AngularJS SPA | ConfigLeague';

        $scope.Equipos = [{ id_equipo: 438, nombre: 'RealMadrid', num_jugadores: 28, director_tecnico: 'Milla' }, { id_equipo: 823, nombre: 'Barcelona', num_jugadores: 24, director_tecnico: 'Rueda' }];
        $scope.Partidos = [{ id_partido: 12, equipo1: 'RealMadrid', equipo2: 'Barcelona', fecha: '20 Marzo 2015' }];

        $scope.idEquipo = "";
        $scope.NombreEquipo = "";
        $scope.NumeroJugadores = "";
        $scope.DirectorTecnico = "";

        $scope.addNewTeam = function () {
            var nteam = { id_equipo: $scope.idEquipo, nombre: $scope.NombreEquipo, num_jugadores: $scope.NumeroJugadores, director_tecnico: $scope.DirectorTecnico };
            $scope.Equipos.push(nteam);
            $scope.idEquipo = "";
            $scope.NombreEquipo = "";
            $scope.NumeroJugadores = "";
            $scope.DirectorTecnico = "";
        };

        $scope.deleteTeam = function (nombre) {
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


        $scope.editTeam = function (idteam, teamname, numplayers, coach) {
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

        $scope.cancelEdit1 = function () {
            $scope.isEditing1 = false;
        };

        $scope.FinishEditing1 = function () {
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

        $scope.addNewGame = function () {
            var ngame = { id_partido: $scope.idJuego, equipo1: $scope.Equipo1, equipo2: $scope.Equipo2, fecha: $scope.Fecha }
            $scope.Partidos.push(ngame);
            $scope.idJuego = "";
            $scope.Equipo1 = "";
            $scope.Equipo2 = "";
            $scope.Fecha = "";
        };

        $scope.deleteGame = function (id) {
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


        $scope.editGame = function (idgame, team1, team2, day) {
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

        $scope.cancelEdit2 = function () {
            $scope.isEditing2 = false;
        };

        $scope.FinishEditing2 = function () {
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

    }])

          // Path: /profile
    .controller('ProfileCtrl', ['$scope', '$location', '$window','$rootScope', function ($scope, $location, $window,$rootScope) {
        $scope.$root.title = 'SportLiga | Mi perfil';
        // TODO: Forgot password

        console.log($rootScope.rootligs[0].nombre);

        $scope.ligas = [
        {
            nombre: 'Española', pais: 'España', inicio: new Date(),
            fin: new Date(), cant_equipos: 20, id: 1
        },
        {
            nombre: 'Italiana', pais: 'Italia', inicio: new Date(),
            fin: new Date(), cant_equipos: 21, id: 2
        },
        {
            nombre: 'Inglesa', pais: 'Ingaltera', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 3
        },
        {
            nombre: 'Francesa', pais: 'Francia', inicio: new Date(),
            fin: new Date(), cant_equipos: 21, id: 4
        },
        {
            nombre: 'China', pais: 'China', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 5
        }];

        $scope.ordenarPor = function (orden) {
            $scope.OrdenSeleccionado = orden;
        };

        $scope.addNewLeague = function () {
            $scope.ligas.push({ nombre: $scope.NombreEquipo, IdLiga: $scope.IdLiga });
        };

    }])



    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);