angular.
  module('homepage').
  component('homepage', {
    templateUrl: 'homepage.template.html'
})

homepage.controller('twitlistCtrl', function twitlistCtrl($scope, $http) {
  
  // Get all posts
  $http({method: 'GET', url: 'db2.json'}).
    then(function success(response) {
      $scope.twitList = response.data;
      $scope.showDiv = true;
  });

  var current_date = new Date();
  // Add Your own twit
  $scope.twitAdd = function() {
    $scope.twitList.unshift({
      firstname: "Firstname",
      lastname: "Lastname",
      username: "username"
      // twits: [

      // ]
      // twitText:$scope.twitInput,
      // like: {votes: 0},
      // date: current_date
    });
    $scope.twitInput = "";
  };

  // Show users online
  $scope.showOnline = function(){
    angular.forEach($scope.twitList, function(){
      $scope.showDiv = !$scope.showDiv;
    });
  }

  // Like on dislike twit
  $scope.doLike = function(key,hey) {
    var twit = $scope.twitList[key].twits[hey];
    if (twit.like.userVotes == 1) {
      delete twit.like.userVotes;
    twit.like.votes--;
    } else {
      twit.like.userVotes = 1;
      twit.like.votes++;
    }
  };
});

homepage.controller('twitCtrl', function twitCtrl($scope) {
  // Show comment input inside particular twit
  $scope.toggleComment = function() {
    $scope.commentForm = !$scope.commentForm;
  };
  // Add comment to particular twit
  $scope.commentAdd = function(post) {
    if (!Array.isArray($scope.post.comments)) {
      $scope.post.comments = [];
    }
    $scope.post.comments.push($scope.commentInput);
    $scope.commentInput = "";
  };

});

angular.
  module('userpage').
  component('userpage', {
    templateUrl: 'userpage.template.html'
})