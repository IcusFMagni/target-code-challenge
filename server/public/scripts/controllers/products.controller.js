app.controller('ProductsController', ['ItemService','$routeParams', function (ItemService, $routeParams) {
    var self = this;
    self.item = ItemService.item;
    self.newPrice = ""


    self.updateItem = ItemService.updateItem;
    self.updateItemPrice = function () {
        console.log('in updateItemPrice')
        self.updateItem($routeParams._id, self.newPrice)
    }
    ItemService.getItem($routeParams._id);

    console.log(self.item.details)



}]);