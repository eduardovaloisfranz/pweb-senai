using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmpresaAPINetCore.Context;
using EmpresaAPINetCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmpresaAPINetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        public readonly ContextoDB _contextoDB;
        public CargoController(ContextoDB ctx)
        {
            _contextoDB = ctx;
        }
        // GET: api/Cargo
        [HttpGet]
        [Authorize]
        public ActionResult Get()
        {
            return Ok(_contextoDB.Cargos.ToList());            
        }

        // GET: api/Cargo/5
        [HttpGet("{id}", Name = "GetCargo")]
        [Authorize]
        public ActionResult Get(int id)
        {
            Cargo cargo = _contextoDB.Cargos.Find(id);
            if(cargo == null)
            {
                return NotFound("Nenhum cargo encontrado");
            }
            return Ok(cargo);
        }

        // POST: api/Cargo
        [HttpPost]
        [Authorize(Roles ="1")]
        public ActionResult Post([FromBody] Cargo cargo)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _contextoDB.Cargos.Add(cargo);
                    _contextoDB.SaveChanges();
                    return Accepted(cargo);
                }catch(Exception ex)
                {
                    return BadRequest("Problema ao cadastrar o cargo" + ex);
                }
            }else
            {
                return BadRequest("Cargo não foi informado corretamente");
            }
        }

        // PUT: api/Cargo/5
        [HttpPut("{id}")]
        [Authorize(Roles = "1")]
        public ActionResult Put(int id, [FromBody] Cargo cargo)
        {
            Cargo oldCargo = _contextoDB.Cargos.Find(id);
            if (oldCargo == null)
            {
                return NotFound("Cargo informado não existente");
            }
            cargo.ID = id;
            oldCargo.Nome = cargo.Nome;            
            _contextoDB.SaveChanges();
            return Ok(cargo);
         
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public ActionResult Delete(int id)
        {
            Cargo cargSelec = _contextoDB.Cargos.Find(id);
            if (cargSelec == null)
            {
                return NotFound("Cargo solicitado não encontrado");
            }
            _contextoDB.Cargos.Remove(cargSelec);
            _contextoDB.SaveChanges();
            return NoContent();
        }
    }
}
