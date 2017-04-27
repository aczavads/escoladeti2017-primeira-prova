angular.module('livro').factory('LivroService', LivroService);

function LivroService(uuid) {

  function obterTodos() {
    return this.livros;
  }

  function salvar(livro) {
    //Removendo instância da coleção para não duplicar.
    //Quando implementar requests http não precisará desta instrução.
    this.livros = this.livros.filter(auxiliar => auxiliar.id !== livro.id);
    //adicionando à coleção...
    this.livros.push(livro);
  }

  function excluir(id) {
    this.livros = this.livros.filter(auxiliar => auxiliar.id !== id);
  }

  function findById(id) {
    var livroRecuperado = this.livros.filter(auxiliar => auxiliar.id === id)[0];
    return livroRecuperado;
  }

  return {
    excluir : excluir,
    obterTodos : obterTodos,
    salvar : salvar,
    findById : findById,
    livros : [
      {id: uuid.v4(), titulo:'Big Java', paginas: 333},
      {id: uuid.v4(), titulo:'UML', paginas: 127}
    ]
  };

}
