using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmpresaAPINetCore.Models;

namespace EmpresaAPINetCore.Context
{
    public class ContextoDB : DbContext
    {
        public ContextoDB(DbContextOptions<ContextoDB> options) : base(options)
        {
            
        }


        public DbSet<Cargo> Cargos { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }


    }
}
