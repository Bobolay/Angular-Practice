angular.
  module('homepage').
  component('homepage', {
    templateUrl: 'homepage.template.html'
})

homepage.controller('twitlistCtrl', function twitlistCtrl($scope, $http) {
  
  // Get all posts
  $http({method: 'GET', url: 'db.json'}).
    then(function success(response) {
        $scope.twitList=response.data.twits;
  });

  var current_date = new Date();
  // Add Your own twit
  $scope.twitAdd = function() {
    $scope.twitList.unshift({twitText:$scope.twitInput, like: {votes: 0}, date: current_date});
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
});

homepage.controller('twitCtrl', function twitCtrl($scope) {
  // Show comment input inside particular twit
  $scope.toggleComment = function() {
    $scope.commentForm = !$scope.commentForm;
  };
  // Add comment to particular twit
  $scope.commentAdd = function(post) {
    if (!Array.isArray($scope.twit.comments)) {
      $scope.twit.comments = [];
    }
    $scope.twit.comments.push($scope.commentInput);
    $scope.commentInput = "";
  };

});

angular.
  module('userpage').
  component('userpage', {
    templateUrl: 'userpage.template.html'
})