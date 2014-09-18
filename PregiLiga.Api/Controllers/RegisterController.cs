using System;
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
    public class RegisterController : ApiController
    {
        readonly IReadOnlyRepository _readOnlyRepository;
        readonly IWriteOnlyRepository _writeOnlyRepository;


        public RegisterController(IReadOnlyRepository readOnlyRepository, IWriteOnlyRepository writeOnlyRepository)
        {
            _readOnlyRepository = readOnlyRepository;
            _writeOnlyRepository = writeOnlyRepository;
        }

        [HttpPost]
        [AcceptVerbs("POST", "HEAD")]
        [POST("register")]
        public AuthModel RegisterModel([FromBody] RegisterModel model)
        {
            Account ac = new Account();
            ac.Name = model.DisplayName;
            ac.Email = model.Email;
            ac.Password = model.Password;

            var newUser = ac;
            var createdUser = _writeOnlyRepository.Create(newUser);

            var resp = SendSimpleMessage(model.Email, model.FirstName, model.LastName, model.DisplayName);
            var user = _readOnlyRepository.FirstOrDefault<Account>(x => x.Email == model.Email);
            var authModel = new AuthModel { Token = "SuperHash" };
            return authModel;
        }

        public static IRestResponse SendSimpleMessage(string destination, string firstname, string lastname, string displayname)
        {
            var client = new RestClient
            {
                BaseUrl = "https://api.mailgun.net/v2",
                Authenticator = new HttpBasicAuthenticator("api",
                    "key-9y9ypyn3hneqzpz6eojvfj3zzag92332")
            };
            var request = new RestRequest();
            request.AddParameter("domain",
                                "appcf01bdaa3c9642d09d34fcceafc37ac6.mailgun.org", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "PrediLiga | Carlos <postmaster@appcf01bdaa3c9642d09d34fcceafc37ac6.mailgun.org>");
            String email = "<" + destination + ">";
            request.AddParameter("to", email);
            request.AddParameter("subject", "Register Process");
            String text = "Hello " + firstname + " " + lastname + ", congratulations on completing the Register process for Prediliga. \nYour registered username is " + displayname + ". \nTo finish the process, click the following link: http://localhost:8080/login .";
            request.AddParameter("text", text);
            request.Method = Method.POST;
            return client.Execute(request);
        }

    }
}
