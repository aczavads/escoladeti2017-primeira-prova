angular.module('livro').controller('LivroListController', LivroListController);

LivroListController.$scope = ['$scope', '$state', 'LivroService'];

function LivroListController($scope, $state, LivroService) {
  $scope.livros = LivroService.obterTodos();


  $scope.confirmarExclusao = function(id) {
    if (confirm("Deseja excluir o livro?")) {
      LivroService.excluir(id);
      $state.reload();
    }
  }

  $scope.entrarModoEdicao = function(id) {
    $state.go('livro-edit', {id: id});
  }
}
