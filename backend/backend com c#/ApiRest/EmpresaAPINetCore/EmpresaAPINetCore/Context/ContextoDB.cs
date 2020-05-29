using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmpresaAPINetCore.Models;
using Microsoft.EntityFrameworkCore.Proxies;

namespace EmpresaAPINetCore.Context
{
    public class ContextoDB : DbContext
    {
        public ContextoDB(DbContextOptions<ContextoDB> options) : base(options)
        {
            //this.ChangeTracker.LazyLoadingEnabled = true;                        
        }


        public DbSet<Cargo> Cargos { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }


    }
}
