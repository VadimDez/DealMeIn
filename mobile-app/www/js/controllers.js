angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaBeacon, $ionicModal) {
  $scope.offer = {
    name: 'testName',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Muffin_NIH.jpg',
    price: 0.50,
    description: 'asd asd qwe sdsd'
  };

  $ionicModal.fromTemplateUrl('templates/offer-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });
  $scope.openModal = function() {
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
  $scope.settings = {
    enableFriends: true
  };
})
.controller('OfferCtrl', function ($scope) {

})
.controller('DetailCtrl', function($scope, $stateParams) {
  $scope.offer = {
    qr : 'img/qr_code-blog-third.png'
  };
})
.controller('MapCtrl', function ($scope) {
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});
