using EmpresaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EmpresaAPI.Controllers
{
    [EnableCors(origins: "http://localhost:8080", headers: "*", methods: "*")]
    public class FuncionarioController : ApiController
    {
        empresaEntities db = new empresaEntities();
        // GET: api/Funcionario
        public IEnumerable<dynamic> Get()
        {
            var funcionarios = from func in db.funcionarios
                               join cargo in db.cargos on func.fk_cargo equals cargo.id
                               select new { id = func.id, nome = func.nome, fk_cargo = func.fk_cargo, cargo = func.cargos };

            return funcionarios;

            //join prod in products on category.ID equals prod.CategoryID
        }

        // GET: api/Funcionario/5
        public dynamic Get(int id) {
            funcionarios func = db.funcionarios.Find(id);
            funcionarios func2 = new funcionarios()
            {
                id = func.id,
                nome = func.nome,
                idade = func.idade,
                fk_cargo = func.fk_cargo,
                //cargos = db.cargos.Find(func.fk_cargo)
                cargos = new cargos()
                {
                    id = db.cargos.Find(func.fk_cargo).id,
                    nome = db.cargos.Find(func.fk_cargo).nome
                }
               };
            
            return func2;
        }

        // POST: api/Funcionario
        public dynamic Post([FromBody]funcionarios funcionario)
        {

            try
            {
                cargos cargoFunc = db.cargos.Find(funcionario.fk_cargo);
                funcionario.cargos = cargoFunc;      
                db.funcionarios.Add(funcionario);                
               
            }catch(Exception ex)
            {
                return "Ocorreu um erro: " + ex.Message;
            }
            db.SaveChanges();            
            return new funcionarios()
            {
                nome = funcionario.nome,
                idade = funcionario.idade,
                fk_cargo = funcionario.fk_cargo,
                cargos = new cargos()
                {
                    id = funcionario.cargos.id,
                    nome = funcionario.cargos.nome
                }
            };
        }

        // PUT: api/Funcionario/5
        public string Put(int id, [FromBody]funcionarios funcionario)
        {
            try
            {
                funcionarios func = db.funcionarios.Find(id);
                func.nome = funcionario.nome;
                func.idade = funcionario.idade;
                func.fk_cargo = funcionario.fk_cargo;
            }
            catch (Exception ex)
            {
                return "Ocorreu o erro: " + ex.ToString();
            }           
            db.SaveChanges();
            return "Salvo com sucesso";
           
        }

        // DELETE: api/Funcionario/5
        public dynamic Delete(int id)
        {
            funcionarios func = null;
            try
            {
                func = db.funcionarios.Find(id);
                db.funcionarios.Remove(func);
            }
            catch(Exception ex)
            {
                return "Ocorreu um erro: " + ex.Message;
            }
            db.SaveChanges();
            return func;
           
        }     
    }
}
