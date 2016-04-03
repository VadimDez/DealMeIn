/**
 * 
 * Created by Vadym Yatsyuk on 02/04/16
 */

angular.module('dealMeIn', [
  'chart.js',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, ChartJsProvider) {

    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });

    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: '/templates/dash.html',
        controller: 'MainCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: '/templates/settings.html',
        controller: 'SettingsCtrl'
      });

    $urlRouterProvider.otherwise('/dash');
  })
  .controller('MainCtrl', function ($scope) {
    var workingHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    // $scope.series = ['Series A', 'Series B'];
    // $scope.data = [
    //   [65, 59, 80, 81, 56, 55, 40],
    //   [28, 48, 40, 19, 86, 27, 90]
    // ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };


    $scope.labelsPie = ["Download Sales", "In-Store Sales"];
    $scope.dataPie = [300, 500];

    $scope.labelsBar = workingHours;
    $scope.seriesBar = ['Deals offered', 'Deals accepted'];

    $scope.dataBar = [
   // [7,   8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      [51,  44, 34, 20, 19, 55, 40, 55, 33, 47, 74, 87, 40, 80],
      [28,  11, 15, 3,  5,  27, 10, 30, 24, 20, 25, 44, 34, 20]
    ];

    $scope.sent = $scope.dataBar[0].reduce(function (value, prev) {
      return prev + value;
    }, 0);
    $scope.accepted = $scope.dataBar[1].reduce(function (value, prev) {
      return prev + value;
    }, 0);

    $scope.series = ['Bread', 'Pastries'];
    $scope.labels = workingHours;

    var bread = [50, 20, 60, 50, 40, 70, 10, 40, 20, 15, 5, 100, 30, 1];
    var pastries = [100, 90, 80, 75, 70, 100, 40, 35, 20, 15, 50, 45, 20, 5];

    $scope.sold = 245;
    $scope.produced = 250;

    $scope.data = [
      bread,
      pastries
    ];


  })
  .controller('SettingsCtrl', function ($scope) {
    $scope.addNotification = addNotification;
    $scope.newNotification = getEmptyNotification();
    $scope.editNotification = editNotification;

    $scope.notifications = [{
      name: 'American muffins',
      description: 'All american muffins are on sale.',
      price: 1.0,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Muffin_NIH.jpg'
    },{
      name: 'Macarons',
      description: 'Purchase 2 large macarons of your choice, and you will receive a 3rd large pistachio for free.',
      price: 6.0,
      imageUrl: ''
    },{
      name: '1/2 baguette',
      description: 'Boulangerie Parisienne is offering a free 1/2 baguette with each purchase of a baguette.',
      price: 1.10,
      imageUrl: ''
    }];

    function getEmptyNotification() {
      return {
        name: '',
        description: '',
        price: 0,
        imageUrl: ''
      }
    }

    function addNotification() {
      $scope.notifications.push($scope.newNotification);
      $scope.newNotification = getEmptyNotification();
    }

    function editNotification() {

    }
  });