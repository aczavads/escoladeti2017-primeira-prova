angular.module('livro').controller('LivroListController', LivroListController);

LivroListController.$scope = ['$scope','LivroService'];

function LivroListController($scope, LivroService) {
  $scope.livros = LivroService.obterTodos();


  $scope.confirmarExclusao = function(livro) {
    console.log(livro.titulo);
  }
}
