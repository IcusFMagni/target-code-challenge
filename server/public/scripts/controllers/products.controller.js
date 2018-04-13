app.controller('ProductsController', ['ItemService','$routeParams', function (ItemService, $routeParams) {
    var self = this;
    self.item = ItemService.item;

    ItemService.getItem($routeParams._id);

    console.log(self.item.details)



}]);