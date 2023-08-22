
function getvideoaula(nome){
  const aulas = [
    {
      nome: "testes unitarios aula 1",
      url:"www.testeaula.com/01"
    },
    {
      nome: "testes unitarios aula 2",
      url:"www.testeaula.com/02"
    },
    {
      nome: "testes unitarios aula 3",
      url:"www.testeaula.com/03"
    }
  ];
  
  const aula = aulas.find(aula => aula.nome === nome)
  if(!aula){
    const aulaNula = {
      erro: "aula não encontrada com esse nome: " + nome,
      ok:false,
    }
    return aulaNula;
  }
  return aula;
}


module.exports = {getvideoaula}

