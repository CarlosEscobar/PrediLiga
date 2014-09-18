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
    public class ResetPasswordController : ApiController
    {
        readonly IReadOnlyRepository _readOnlyRepository;
        readonly IWriteOnlyRepository _writeOnlyRepository;

        public ResetPasswordController(IReadOnlyRepository readOnlyRepository, IWriteOnlyRepository writeOnlyRepository)
        {
            _readOnlyRepository = readOnlyRepository;
            _writeOnlyRepository = writeOnlyRepository;
        }

        [HttpPost]
        [AcceptVerbs("POST", "HEAD")]
        [POST("resetpassword")]
        
        public AuthModel resetpassword([FromBody] resetModel model)
        {
            var user = _readOnlyRepository.FirstOrDefault<Account>(x => x.Name == model.DisplayName);

            user.Password = model.Password;

            var newuser = user;
            var reset = _writeOnlyRepository.Update(newuser);

            var authModel = new AuthModel
            {
            };

            return authModel;
        }

    }
}

