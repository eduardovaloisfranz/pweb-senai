using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IntroducaoORM.model;

namespace IntroducaoORM
{
    class Program
    {
        public static empresaEntities bd = new empresaEntities();
        static void Main(string[] args)
        {
            //Program.inicioAula();
            //Program.ConsultasLinq();
            Program.ConsultasLinqRelacionadas(40);
            //Program.popularBanco();
        }

        private static void ConsultasLinqRelacionadas(int idade)
        {
 var joinCargos = from cargo in bd.cargos
                             join func in bd.funcionarios on cargo.id equals func.fk_cargo
                             where func.idade > idade
                             select new { nomeCargo = cargo.nome, nomeFuncionario = func.nome, idadeFuncionario = func.idade };
                                // retorna novo Objeto para cada linha

            joinCargos.ToList().ForEach(c => {
                Console.WriteLine("Nome: " + c.nomeCargo + " Nome Funcionario: " + c.nomeFuncionario + " Idade funcionario: " + c.idadeFuncionario);  
            });
           
            

    }

        public static void popularBanco()
        {
                for(int i = 0; i < 10; i++)
                {
                    Random r = new Random();
                    //cargos cargo = bd.cargos.Find(1);
                    funcionarios func = new funcionarios()
                    {
                        nome = "nome random" + r.Next(0, i),
                        idade = r.Next(0, 130),
                        fk_cargo = 1
                    };
                    Program.Cadastrar(func);
                }
            
        }

        public static void ConsultasLinq()
        {
            var funcionarios = from func in bd.funcionarios
                               where func.idade > 40
                               select new { func.nome, func.idade } ;
            funcionarios.ToList().ForEach(f =>
            {
                //Console.WriteLine("Nome: {0} possui Idade: {1} e tem o cargo atual de: {2}", f.nome, f.idade, f.cargos.nome);
                Console.WriteLine("Nome: {0} possui Idade: {1}", f.nome, f.idade);                
            }
            );
            
        }

        public static void Cadastrar(funcionarios func)
        {
            bd.funcionarios.Add(func);
            bd.SaveChanges();
        }

        public static void inicioAula()
        {
            //cargos diretor = new cargos()
            //{
            //    nome = "diretor"
            //};

            //bd.cargos.Add(diretor);

            //cargos diretor = bd.cargos.Find(1);
            //Console.WriteLine(diretor.nome);

            //diretor.nome = "Presidente";

            //funcionarios funf01 = new funcionarios()
            //{
            //    nome = "Eduardo",
            //    idade = 20,
            //    cargos = diretor
            //};

            //bd.funcionarios.Add(funf01);

            //funcionarios funf = bd.funcionarios.Find(1);
            //funf.idade = 30;
            //funf.nome = "eduardo vf 2 ";
            //Console.WriteLine(funf.fk_cargo);
            //funf.cargos.nome = "estagiario kkk tira 2.36 nem isso consegue kk";

            cargos analista = bd.cargos.Find(2);
            //{
            //    nome = "Analista"
            //};
            //bd.cargos.Add(analista);

            //bd.funcionarios.Remove(bd.funcionarios.Find(2));

            bd.SaveChanges();
        }
    }
}
