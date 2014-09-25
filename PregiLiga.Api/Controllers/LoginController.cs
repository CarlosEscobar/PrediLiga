using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using AcklenAvenue.Data.NHibernate;
using AttributeRouting.Web.Mvc;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using PrediLiga.Data;
using PrediLiga.Domain.Entities;
using PrediLiga.domain.Entities;
using PrediLiga.Domain.Services;
using PregiLiga.Api.Models;
using RestSharp;

namespace PregiLiga.Api.Controllers
{
    public class LoginController:ApiController
    {
        readonly IReadOnlyRepository _readOnlyRepository;


        public LoginController(IReadOnlyRepository readOnlyRepository )
        { 
            _readOnlyRepository = readOnlyRepository;
        }

        [HttpGet]
        [AcceptVerbs("GET", "HEAD")]
        [GET("loadUsers")]
        public Account[] loadUsers()
        {
            Account[] users;
            users = _readOnlyRepository.GetAll<Account>().ToList().ToArray();
            return users;
        }

    }
}