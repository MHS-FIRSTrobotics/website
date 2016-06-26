var app = angular.module("SignupForm", []);

app.controller("Form", ["$scope", function($scope) {
    $scope.name = "";
    $scope.parentName = "";
    $scope.studentEmail = "";
    $scope.parentEmail = "";

    $scope.confirm = false;
    $scope.verifyPage = false;

    $scope.isVerify = function isVerify() {
        return $scope.verifyPage;
    };

    $scope.verifyDetails = function() {
        $scope.verifyPage = true;
    };

    $scope.goBack = function() {
        $scope.verifyPage = false;
    };

    $scope.submitDetails = function() {
        var parent = {
            name: $scope.parentName,
            email: $scope.parentEmail
        };

        var student = {
            name: $scope.name,
            email: $scope.studentEmail,
            studentsParent:  parent
        };

        console.log(JSON.stringify(student));
        save(student);
        $scope.verifyPage = false;
        $scope.confirm = true;
    }
}]);

function save(submit) {
    var json=angular.toJson(submit);
    //$.post("http://mhsrobotics.peoplepluscomputers.com/assets/php/scoutPost.php",JSON.stringify(reviews),"json");
    $.ajax({
        type: "POST",
        url:"http://mhsrobotics.peoplepluscomputers.com/assets/php/signup.php",
        data: {"student" : json},
        success: function(text) {
            console.log("Success POSTing Data!"+" Response: "+ text);
        },

        error: function(request, stautus, error) {
            console.error("An error occurred POSTing "+"Response: "+ request.responseText+" Error: "+ error +" Status: "+stautus);
        }
    })
}