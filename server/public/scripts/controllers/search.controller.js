app.controller('SearchController', ['ItemService', function (ItemService) {
    var self = this;
    self.searchTerm = ItemService.searchTerm;
    self.item = ItemService.item;
    self.searchItem = ItemService.searchItem;
    }
]);