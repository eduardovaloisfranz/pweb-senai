using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmpresaAPINetCore.Models
{
    public class Funcionario
    {
        public int ID { get; set; }
        public string Nome { get; set; }

        public string Email { get; set; }
        public string Senha { get; set; }
        public int Idade { get; set; }
        public int CargoID { get; set; }
        public virtual Cargo Cargo { get; set; }

    }
}
