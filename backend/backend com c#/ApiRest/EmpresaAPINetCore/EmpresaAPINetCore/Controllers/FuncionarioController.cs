using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmpresaAPINetCore.Context;
using EmpresaAPINetCore.Models;
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

        // GET: api/Funcionario
        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
            var funcionarios = _contexto.Funcionarios.ToList();
            return funcionarios;
        }

        // GET: api/Funcionario/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult Get(int id)
        {
            Funcionario func = _contexto.Funcionarios.Find(id);
            if(func == null)
            {
                return NotFound("Funcionario não encontrado");
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
                oldFunc = func;
                try
                {
                _contexto.Funcionarios.Update(oldFunc);
                }
                catch(Exception ex)
                {
                    return BadRequest("Problema ao alterar: " + ex.Message);
                }
                _contexto.SaveChanges();
                return Ok(oldFunc);
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
