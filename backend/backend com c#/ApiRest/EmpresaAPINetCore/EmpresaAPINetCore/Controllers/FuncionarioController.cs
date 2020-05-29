using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmpresaAPINetCore.Context;
using EmpresaAPINetCore.Models;
using Microsoft.EntityFrameworkCore.Proxies;
using Microsoft.AspNetCore.Authorization;
using EmpresaAPINetCore.Services;

namespace EmpresaAPINetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        public readonly ContextoDB _contexto;
        public FuncionarioController(ContextoDB ctx)
        {
            _contexto = ctx;
        }

        [HttpPost("login")]
        public ActionResult login([FromBody] Funcionario func)
        {
            Funcionario funcionario = _contexto.Funcionarios.Where(f => f.Email.Equals(func.Email) && f.Senha.Equals(func.Senha)).FirstOrDefault();
            if(func == null)
            {
                return BadRequest("Login invalido");
            }
            else
            {
               return Ok(TokenService.generateToken(funcionario));
            }
        }

        // GET: api/Funcionario
        [HttpGet]
        [Authorize(Roles = "1")]        
        public ActionResult Get()
        {
            var funcionarios = _contexto.Funcionarios.ToList();
            return Ok(funcionarios);                   
        }

        // GET: api/Funcionario/5
        [HttpGet("{id}")]
        [Authorize(Roles = "1, 2")]        
        public ActionResult Get(int id)
        {
            Funcionario func = _contexto.Funcionarios.Find(id);              
            if(func == null)
            {
                return NotFound("Funcionário não encontrado");
            }
            else
            {
                return Ok(func);
            }       
        }
        // POST: api/Funcionario
        [HttpPost]
        public ActionResult Post([FromBody] Funcionario func)
        {
            if (ModelState.IsValid)
            {                 
                _contexto.Funcionarios.Add(func);
                _contexto.SaveChanges();                
                return Ok(func);
            }
            else
            {
                return BadRequest("Informações incorretas, cheque os dados novamente");
            }

        }

        // PUT: api/Funcionario/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Funcionario func)
        {
            if (ModelState.IsValid)
            {
                Funcionario oldFunc = _contexto.Funcionarios.Find(id);
                if(oldFunc == null)
                {
                    return NotFound("Funcionario não encontrado");
                }
                try
                {
                    oldFunc.Nome = func.Nome;
                    oldFunc.CargoID = func.CargoID;
                    oldFunc.Idade = func.Idade;                    
                    _contexto.SaveChanges();
                return Ok(oldFunc);
                }
                catch(Exception ex)
                {
                    return BadRequest("Problema ao alterar: " + ex.Message);
                }
            }
            else
            {
                return BadRequest("Informações incorretas ao tentar adicionar um novo funcionario");
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            Funcionario func = _contexto.Funcionarios.Find(id);
            if(func == null)
            {
                return NotFound("Funcionario não existente");
            }else
            {
                _contexto.Funcionarios.Remove(func);
                _contexto.SaveChanges();
                return NoContent();

            }            
        }
    }
}
