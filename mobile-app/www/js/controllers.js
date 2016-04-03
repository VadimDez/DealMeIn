angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform, $ionicModal, $state, $timeout) {

  $scope.offer = {
    name: 'American muffins',
    imageUrl: '/img/Muffin_NIH.jpg',
    price: 1.00,
    totalPrice: 1.00,
    quantity: '1',
    description: 'All american muffins are on sale.'
  };

  $ionicModal.fromTemplateUrl('templates/offer-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    //$scope.modal.show();
  });
  $scope.buy = function() {
    $scope.modal.hide();
    $state.go('tab.map');
  };
  $scope.openModal = function() {
    $timeout.cancel(timeout);
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  var timeout = $timeout(function() {
    $scope.modal.show();
  }, 5000);


  $scope.items = [{
    name: 'American muffins',
    description: 'All american muffins are on sale.',
    price: 1.0,
    imageUrl: '/img/Muffin_NIH.jpg'
  },{
    name: 'Macarons',
    description: 'Purchase 2 large macarons of your choice, and you will receive a 3rd large pistachio for free.',
    price: 6.0,
    imageUrl: '/img/macaron-5.png'
  },{
    name: '1/2 baguette',
    description: 'Boulangerie Parisienne is offering a free 1/2 baguette with each purchase of a baguette.',
    price: 1.10,
    imageUrl: '/img/baguette.jpg'
  }];
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.filter = {
    blue : true,
    gris : true
  };
})
.controller('OfferCtrl', function ($scope, $stateParams) {

  var items = [{
    name: 'American muffins',
    description: 'All american muffins are on sale.',
    price: 1.0,
    imageUrl: '/img/Muffin_NIH.jpg'
  },{
    name: 'Macarons',
    description: 'Purchase 2 large macarons of your choice, and you will receive a 3rd large pistachio for free.',
    price: 6.0,
    imageUrl: '/img/macaron-5.png'
  },{
    name: '1/2 baguette',
    description: 'Boulangerie Parisienne is offering a free 1/2 baguette with each purchase of a baguette.',
    price: 1.10,
    imageUrl: '/img/baguette.jpg'
  }];
})
  .controller('DealCtrl', function ($scope) {
    
  })
.controller('DetailCtrl', function($scope, $stateParams) {
  $scope.offer = {
    qr : 'img/qr_code-blog-third.png'
  };
})
.controller('MapCtrl', function ($scope) {
  //$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  //48.8678115,2.3473883
  var latLng = new google.maps.LatLng(48.8678115, 2.3473883);
 
  var mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  $scope.marker = new google.maps.Marker({
    position: latLng,
    map: $scope.map,
    title: 'Numa'
  });

  google.maps.event.trigger(map, 'resize');
})
.controller('SettingsCtrl', function ($scope) {

});
