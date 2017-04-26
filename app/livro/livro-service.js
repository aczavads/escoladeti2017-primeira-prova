angular.module('livro').factory('LivroService', LivroService);

function LivroService() {

  function obterTodos() {
    return this.livros;
  }

  function salvar(novoLivro) {
    this.livros.push(novoLivro);
  }

  return {
    obterTodos : obterTodos,
    salvar : salvar,
    livros : [
      {titulo:'Big Java', paginas: 333},
      {titulo:'UML', paginas: 127}
    ]
  };

}
