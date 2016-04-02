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
      .state('main', {
        url: '/',
        templateUrl: '/templates/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
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


    $scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.dataPie = [300, 500, 100];

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

    $scope.data = [
      bread,
      pastries
    ]
  });