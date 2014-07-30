var app = angular.module('messages', [])

/**
 * A simple example service that returns some data.
 */
app.factory("Messages", function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var messages = [
    { id: 0, title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', author: 'Laura Hillenbrand', icon: 'img/test/book1.jpg', count: 3},
    { id: 1, title: 'Diagnostic and Statistical Manual of Mental Disorders', author: 'American Psychiatric Association', icon: 'img/test/book2.jpg', count: 2},
    { id: 2, title: 'StrengthsFinder 2.0', author: 'Tom Rath', icon: 'img/test/book3.jpg', count: 4},
    { id: 3, title: 'Publication Manual of the American Psychological Association', author: 'American Psychiatric Association', icon: 'img/test/book4.jpg', count: 1}
  ];


  return messages;

  // return {
  //   all: function() {
  //     return messages;
  //   },
  //   get: function(messageId) {
  //     // Simple index lookup
  //     return friends[messageId];
  //   }
  // }
});

// .directive("message", function () {
//   return {
//     restrict: "E",

//   }
// });

// Messages param is reference to factory
app.controller('MessageCtrl', function($scope, Messages){

  // Messages factory returns its internal variable "messages"
  $scope.messages = Messages;
})