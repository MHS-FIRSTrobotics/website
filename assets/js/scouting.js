
(function() {
	var reviewData=[
		{
			teamNumber: 3465,
			teamName:"Omega Factor",
			autoRating: 10,
			teleopRating: 7,
			otherPro: "Strong Yellow Bin",
			otherCon: "foo"
		},
		{
			teamNumber: 3466,
			teamName: "FooBars",
			autoRating: 10,
			teleopRating: 7,
			otherPro: "Strong Yellow Bin",
			otherCon: "foo"
		}
	];

    var app=angular.module('scoutingApp',[]);
	
    app.controller('ReviewFormController', ['$http',function($http){
		//this.test="5";
		reviewData=GetData(); //reviewData; //[];
		this.reviews=reviewData;
		/*reviews.done(function(data){
			this.reviews=data;
			console.log(this.reviews);
		});*/
		console.log(this.reviews);
		//var ReviewCtrl=this;
		///*$http.get("reviews.json").then(function(data) {
		//	ReviewCtrl.reviews=data;
		//		console.log("Success!")
		//},function(err) {
		//		alert("Failed!"+err);
		//	});//})*/
		//this.reviews=GetData();
/*if (this.reviews===undefined) {
	this.reviews=reviewData;
}*/
		console.log("Called GetData")
	}]);
	
    app.controller('ReviewPreviewController', ['$http',function($http){
		this.review={};
		var previewHttpRefer;
		this.AddReview=function() {

			reviewData.push(this.review);
			var reviewTemp=reviewData;
			SaveReviews(reviewData);
			this.review={};
			reviewData=reviewTemp;
			/*$http.post("../php/scoutPost.php",reviewData | JSON).then(function() {

			},function() {
				alert("Error Saving!")
			});
*/
		};
	}]);
	

})();

function GetData(callback) {
	$.ajaxSetup({async:false});
	var returnData=[];
	$.getJSON('http://mhsrobotics.peoplepluscomputers.com/assets/json/scouting.json',function(json) {returnData=json;},function(data) {
		//returnData=data;
	} ).
		success(function (data) {
		//	returnData=data;
			console.log("Success! I got data.")
		}).
		fail(function (err) {
			returnData=[
				{
					teamNumber: 3465,
					teamName:"Omega Factor",
					autoRating: 10,
					teleopRating: 7,
					otherPro: "Strong Yellow Bin",
					otherCon: "foo2"
				},
				{
					teamNumber: 3466,
					teamName: "FooBars",
					autoRating: 10,
					teleopRating: 7,
					otherPro: "Strong Yellow Bin",
					otherCon: "foo"
				}
			];
			alert("Failed!");
			console.log("Failure occurred fetching"+err)
		})/*.
		done(function(data) {
			alert(data);
			return data;
		});*/

	return returnData;
}

function SaveReviews2(reviews) {

	$.ajax({
		type:"POST",
		url: "http://mhsrobotics.peoplepluscomputers.com/assets/php/scoutPost.php",
		data: reviews,
		//success:success,
		dataType: "json"
		//error:fail
	}).fail(function(e){
		console.log("SaveReview: POSTing failed: "+e);

	}).
		success(function(){
			console.log("Success saving");

		}).done(function(){
			console.log("Saving Status:");
		})


}

function SaveReviews(reviews) {
	var reviewJSON=angular.toJson(reviews)
	//$.post("http://mhsrobotics.peoplepluscomputers.com/assets/php/scoutPost.php",JSON.stringify(reviews),"json");
	$.ajax({
		type: "POST",
		url:"http://mhsrobotics.peoplepluscomputers.com/assets/php/scoutPost.php",
		data: {"json" : reviewJSON},
		success: function(text) {
			console.log("Success POSTing Data!"+" Response: "+text);
		},

		error: function(request, stautus, error) {
			console.log("An error occurred POSTing "+"Response: "+request.responseText+" Error: "+error+" Status: "+stautus);
		}
	})

}