angular.module('livro').controller('LivroCreateController',LivroCreateController);



function LivroCreateController($scope, $state, LivroService, uuid) {

  $scope.livro = {};

  $scope.salvar = function(novoLivro) {
    novoLivro.id = uuid.v4();
    LivroService.salvar(novoLivro);
    $state.go('livro-list');
  }



}
