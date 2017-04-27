angular.module('livro').controller('LivroListController', LivroListController);

function LivroListController($scope, $state, LivroService) {
  $scope.livros = LivroService.obterTodos();


  $scope.confirmarExclusao = function(id) {
    if (confirm("Deseja excluir o livro?")) {
      LivroService.excluir(id);
      $state.reload();
    }
  }

  $scope.entrarModoEdicao = function(id) {
    //Passando o parâmetro id recebido para o atributo id que será incluído no $stateParams.
    $state.go('livro-edit', {id: id});
  }
}
