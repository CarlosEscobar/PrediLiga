using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PregiLiga.Api.Models
{
    public class adminModel
    {
        public long IdLiga { get; set; }
        public string NombreLiga { get; set; }
        public DateTime FechaInicio { get; set; }
        public string NumeroEquipos { get; set; }
        public string NumeroPartidos { get; set; }
    }
}