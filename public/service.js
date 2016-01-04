

(function () {
  "use strict";
  angular
    .module('betrApp')
    .factory('CommunityService', function ($http) {
      var url = '/community';
      var getUrl = '/communities';
      var addCommunity = function (newCommunity) {
          console.log(newCommunity);
          return $http.post(url, newCommunity);
          };

          var getCommunity = function () {
            console.log('in community service');
            return $http.get(getUrl);
          };
          var editCommunity = function (commI) {
            return $http.put(url + '/' + commI.id, commI);
          };
          var deleteCommunity = function (commI) {
            console.log("DELETE SERVICE", commI);
             return $http.delete(url + "/" + commI.id).then(function(data) {
               console.log('service delete', data);
             });
          };

          return {
            newCommunity: addCommunity,
            getCommunity: getCommunity,
            editCommunity: editCommunity,
            deleteCommunity: deleteCommunity,
          };
        })

        .factory('PostService', function ($http) {
          var url = '/posts';
          var addPost = function (newPost) {
              return  $http.post(url, newPost)
              };

              var getPost = function () {
                console.log("posty");
                return $http.get(url);
              };
              var editPost = function () {
                return $http.put(url + id, data);
              };
              var deletePost = function (item) {
              //    $http.delete(url + "/" + item._id);
              // };
              console.log("DELETE SERVICE", item);
               return $http.delete(url + "/" + item.id).then(function(data) {
                 console.log('service delete', data);
               });
            };


              return {
                newPost: addPost,
                getPost: getPost,
                editPost: editPost,
                deletePost: deletePost,
                getPost: getPost
              };
            })
            .factory('PressService', function ($http) {
              var url = '/press';
              var urlEdit = '/editpress'
              var addPress = function (newPress) {
                  return $http.post(url, newPress);
                  };

                  var getPress = function () {
                    return $http.get(url);
                  };

                  var getSinglePress = function(id) {
                    return $http.get(url + "/" + id);
                  };

                  var editPress = function (item) {
                    return $http.put(urlEdit + id, data);
                  };
                  var deletePress = function (item) {
                    console.log("DELETE SERVICE", item);
                     return $http.delete(url + "/" + item.id).then(function(data) {
                       console.log('service delete', data);
                     });
                  };
                  //    $http.delete(url + "/" + item._id);
                  // };

                  return {
                    newPress: addPress,
                    getPress: getPress,
                    editPress: editPress,
                    deletePress: deletePress,
                    getSinglePress: getSinglePress
                  };
                })

            .factory('UserService', function ($http, $location) {
              var url = '/user';
              var isUser = function(){
                return $http.get(url);
              };
              var addUser = function (addUser) {
                var url = '/register';
                  
                    return $http.post(url, addUser)
                      // if(res.data.isAdmin === true){
                      //   console.log("this is a administrator")
                      //   $location.path('/admin');
                      // }
                      // if(res.data.isAdmin === false){
                      //   console.log("this is a user")
                      //   $location.path('/home');
                      // }
                };

              return {
                addUser: addUser,
                isUser: isUser

            };
          })
              .factory('LoginService', function ($http) {
                var url = '/login';
                var logOutUrl = '/logout';
                var logUser = function (logUser) {
                      $http.post(url, logUser).then(function (res) {
                        console.log(logUser);
                        console.log('im logging in');
                      });
                    };
                var logOut = function(){
                  return $http.post(logOutUrl);
                };
                return {
                  logUser: logUser,
                  logOut: logOut

              };
            })
            .factory('PaymentService', function ($http) {
              var url = '/transaction';
              var postPayment = function (addPayment) {
                angular.element(document).find('input').val("");
<<<<<<< HEAD
                  return $http.post(url, addPayment).then(function (res) {
                      console.log(addPayment);
                      console.log(res);
                      console.log('posted to checkout route with payment service');
                        // if (res.data === true){
                        //   $location.path('/home');
                        // }
                    });

                  };
=======
                return $http.post(url, addPayment);
              };
>>>>>>> a52bd80d131621bcfb8bc33f8717d05d69c2607f

              return {
                addPayment: postPayment,

            };
        });

  })();
