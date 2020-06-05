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
            Funcionario funcionario = _contexto.Funcionarios.Where(f => f.Email.Equals(func.Email) && f.Senha.Equals(func.Senha))         
                .FirstOrDefault();
            if(func == null)
            {
                return BadRequest("Login invalido");
            }
            else
            {
                var userData = new object[2];
                userData[0] = TokenService.generateToken(funcionario);
                userData[1] = funcionario;
                funcionario.Email = null;
                funcionario.Senha = null;
               return Ok(userData);
            }
        }

        // GET: api/Funcionario
        [HttpGet]
        [Authorize]
        public ActionResult Get()
        {
            var funcionarios = _contexto.Funcionarios.Select(x => new
            {
                x.ID,
                x.Nome,
                x.Idade,
                x.Cargo,
                x.CargoID
            });
            return Ok(funcionarios);                   
        }

        // GET: api/Funcionario/5
        [HttpGet("{id}")]
        [Authorize]
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
        [Authorize(Roles = "1")]
        public ActionResult Post([FromBody] Funcionario func)
        {
            if (ModelState.IsValid)
            {                 
                _contexto.Funcionarios.Add(func);
                _contexto.SaveChanges();
                func.Email = null;
                func.Senha = null;
                func.Cargo = _contexto.Cargos.Find(func.CargoID);
                return Ok(func);
            }
            else
            {
                return BadRequest("Informações incorretas, cheque os dados novamente");
            }

        }

        // PUT: api/Funcionario/5
        [HttpPut("{id}")]
        [Authorize(Roles = "1")]
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
                    oldFunc.Email = null;
                    oldFunc.Senha = null;

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
        [Authorize(Roles = "1")]
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
