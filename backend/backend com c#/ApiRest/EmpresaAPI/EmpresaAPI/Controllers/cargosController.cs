using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using EmpresaAPI.Models;

namespace EmpresaAPI.Controllers
{
    [EnableCors(origins: "http://localhost:8080", headers: "*", methods: "*")]
    public class cargosController : ApiController
    {
        private empresaEntities db = new empresaEntities();

        // GET: api/cargos
        public IEnumerable<dynamic> Getcargos()
        {
            var cargos = from cargo in db.cargos
                        select new { id = cargo.id, nome = cargo.nome};           
            
            return cargos;
        }

        // GET: api/cargos/5
        [ResponseType(typeof(cargos))]
        public async Task<IHttpActionResult> Getcargos(int id)
        {
            cargos cargos = await db.cargos.FindAsync(id);
            if (cargos == null)
            {
                return NotFound();
            }

            return Ok(cargos);
        }

        // PUT: api/cargos/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putcargos(int id, cargos cargos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cargos.id)
            {
                return BadRequest();
            }

            db.Entry(cargos).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!cargosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/cargos
        [ResponseType(typeof(cargos))]
        public async Task<IHttpActionResult> Postcargos(cargos cargos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.cargos.Add(cargos);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = cargos.id }, cargos);
        }

        // DELETE: api/cargos/5
        [ResponseType(typeof(cargos))]
        public async Task<IHttpActionResult> Deletecargos(int id)
        {
            cargos cargos = await db.cargos.FindAsync(id);
            if (cargos == null)
            {
                return NotFound();
            }

            db.cargos.Remove(cargos);
            await db.SaveChangesAsync();

            return Ok(cargos);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool cargosExists(int id)
        {
            return db.cargos.Count(e => e.id == id) > 0;
        }
    }
}