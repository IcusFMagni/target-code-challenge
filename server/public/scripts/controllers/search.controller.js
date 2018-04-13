app.controller('SearchController', ['ItemService', function (ItemService) {
    console.log ("in the controller")
    var self = this;
    self.searchTerm = ItemService.searchTerm;
    self.item = ItemService.item;
    self.searchItem = ItemService.searchItem;
    }
]);