using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AttributeRouting.Web.Mvc;
using PrediLiga.domain.Entities;
using PrediLiga.Domain.Services;
using PregiLiga.Api.Models;

namespace PregiLiga.Api.Controllers
{
    public class AdminController : ApiController
    {
        readonly IReadOnlyRepository _readOnlyRepository;
        readonly IWriteOnlyRepository _writeOnlyRepository;


        public AdminController(IReadOnlyRepository readOnlyRepository, IWriteOnlyRepository writeOnlyRepository)
        {
            _readOnlyRepository = readOnlyRepository;
            _writeOnlyRepository = writeOnlyRepository;
        }

        [HttpPost]
        [AcceptVerbs("POST", "HEAD")]
        [POST("admin")]

        public AuthModel adminModel([FromBody] adminModel model)
        {
            League lea = new League();
            lea.Name = model.NombreLiga;
            lea.Day = model.FechaInicio;

            var newLeague = lea;
            var createdLeague = _writeOnlyRepository.Create(newLeague);

            var authModel = new AuthModel { };
            return authModel;
        } 
    }
}