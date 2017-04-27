angular.module('livro').config(config);

function config($stateProvider) {
    var livroCreate = {
        name: 'livro-create',
        url: '/livro/create',
        controller: 'LivroCreateController',
        templateUrl: 'app/livro/livro-create.html'
    };
    var livroList = {
        name: 'livro-list',
        url: '/livro/list',
        controller: 'LivroListController',
        templateUrl: 'app/livro/livro-list.html'
    };
    var livroEdit = {
        name: 'livro-edit',
        url: '/livro/:id/edit',
        controller: 'LivroEditController',
        templateUrl: 'app/livro/livro-create.html'
    };
    $stateProvider.state(livroCreate);
    $stateProvider.state(livroList);
    $stateProvider.state(livroEdit);
}
