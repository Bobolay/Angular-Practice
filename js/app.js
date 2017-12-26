var twitterApp = angular.module('twitterApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
twitterApp.controller('twitlistCtrl', function twitlistCtrl($scope) {

  $scope.twitList = [
    {
      firstname: 'Roman',
      lastname: 'Grebyn',
      username: 'Photomaster',
      twitText: 'So, to create the layout you want, create a container',
      like: {
        votes: 1
      },
      comments: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!', 'Hi. Im second comment']
    }, {
      firstname: 'Nazar',
      lastname: 'Hativ',
      username: 'Serviceauto',
      twitText: 'Hi world!!!',
      like: {
        votes: 0
      }
    }, {
      firstname: 'Orest',
      lastname: 'Markovskiy',
      username: 'Forest_without_F',
      twitText: 'Here is my shit-twit',
      like: {
        votes: 0
      }
    }
  ];
  $scope.date = new Date();
  // Add Your own twit
  $scope.twitAdd = function() {
    $scope.twitList.unshift({twitText:$scope.twitInput});
    $scope.twitInput = "";
  };
  // Like on dislike twit
  $scope.doLike = function(key) {
    var twit_with_key = $scope.twitList[key];
    if (twit_with_key.like.userVotes == 1) {
      delete twit_with_key.like.userVotes;
    twit_with_key.like.votes--;
    } else {
      twit_with_key.like.userVotes = 1;
      twit_with_key.like.votes++;
    }
  };
  // Show or hide comment input
  $scope.commentForm = false;
  $scope.toggleComment = function(key) {
    // var twit_key = $scope.twitList[key];
    // console.log(twit_key);
    // twit_key.commentForm = !twit_key.commentForm;
    $scope.commentForm = !$scope.commentForm;
  };
  // Add Your comment to twit
  $scope.commentAdd = function(key) {
    var twit_with_key = $scope.twitList[key];
    twit_with_key.comments.push($scope.commentInput);
    $scope.twitInput = "";
  };

});

// twitterApp.controller('CommentController', function(){
//   this.comment = {};
//   this.addComment = function(post){
//     this.comment.createdOn = Date.now();
//     post.comments.push(this.comment);
//     this.comment ={};
//   };
// });