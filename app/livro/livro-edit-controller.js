angular.module('livro').controller('LivroEditController',LivroEditController);

//LivroEditController.$scope = ['$scope', '$state', , '$stateParams', 'LivroService'];

function LivroEditController($scope, $state, $stateParams, LivroService) {

  $scope.livro = LivroService.findById($stateParams.id);

  $scope.salvar = function(livroEditado) {
    LivroService.salvar(livroEditado);
    $state.go('livro-list');
  }

}
