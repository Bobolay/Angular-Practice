var twitterApp = angular.module('twitterApp', [
  'ngRoute',
  'homepage',
  'userpage'
]);

// var twitterApp = angular.module('twitterApp', []);
// twitterApp.controller('twitlistCtrl', function twitlistCtrl($scope) {
  
//   $scope.twitList = [
//     {
//       firstname: 'Roman',
//       lastname: 'Grebyn',
//       username: 'Photomaster',
//       twitText: 'So, to create the layout you want, create a container',
//       like: {
//         votes: 1
//       },
//       comments: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!', 'Hi. Im second comment']
//     }, {
//       firstname: 'Nazar',
//       lastname: 'Hativ',
//       username: 'Serviceauto',
//       twitText: 'Hi world!!!',
//       like: {
//         votes: 0
//       }
//     }, {
//       firstname: 'Orest',
//       lastname: 'Markovskiy',
//       username: 'Forest_without_F',
//       twitText: 'Here is my shit-twit',
//       like: {
//         votes: 2
//       }
//     }
//   ];
//   $scope.date = new Date();
//   // Add Your own twit
//   $scope.twitAdd = function() {
//     $scope.twitList.unshift({twitText:$scope.twitInput, like: {votes: 0}});
//     $scope.twitInput = "";

//     $scope.twitcount = ProfileService.twitcount;
//     $scope.twitcount++;
//     console.log($scope.twitcount);

//   };
//   // Like on dislike twit
//   $scope.doLike = function(key) {
//     var twit_with_key = $scope.twitList[key];
//     if (twit_with_key.like.userVotes == 1) {
//       delete twit_with_key.like.userVotes;
//     twit_with_key.like.votes--;
//     } else {
//       twit_with_key.like.userVotes = 1;
//       twit_with_key.like.votes++;
//     }
//   };
// });

// twitterApp.controller('twitCtrl', function twitCtrl($scope) {
//   // Show comment input inside particular twit
//   $scope.toggleComment = function() {
//     $scope.commentForm = !$scope.commentForm;
//   };
//   // Add comment to particular twit
//   $scope.commentAdd = function(post) {
//     if (!Array.isArray($scope.twit.comments)) {
//       $scope.twit.comments = [];
//     }
//     $scope.twit.comments.push($scope.commentInput);
//     $scope.commentInput = "";
//   };

// });