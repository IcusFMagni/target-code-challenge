app.service('ItemService', ['$http', function ($http) {
    var self = this;
    self.itemNumber = {string: ""}; //added string property to searchTerm object
    self.item = {}
    self.updatedItem = {id: '', price: ''};


//Updates and Item's price
    self.updateItem = function (id, price) {
        $http({
            method: 'PUT',
            url: '/products/'+id + '/' + price,
        }).then(function (response) {
            console.log('response', response);
            self.getItem(id);
        });
    }

//Gets an Item
    self.getItem = function (id) {

        $http({
            method: 'GET',
            url: '/products/'+id,
        }).then (function (response){
            console.log('response', response)
            self.item.details = response.data
        })
    }
}]);