// The API url and the city we want to check...
var url = "tw/twittersearch.php?callback=?";
var q = "Toronto";


var $tweet = $('<li class="tweet">'+
                    '<div class="img"></div>' +
                    ' <div class="twinfo">'+
                     	'<div class="name"><a href=""></a></div>' +
                    	'<div class="handle"></div>' +
                    	'<h2 class="twtext"></h2> '+
                    '</div>'+
                    '<h2 class="date"></h2>'+
                    '</li>');

// image, name, handle, tweet, date, retweet count

var dosearch = function() {

	q = $('.search').val();

	// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
	$.getJSON(url, {'q':q, 'count':5}, function(data)
	{

		console.log(data);

		$.each(data.statuses, function(i, tweet) {
			// 1 of 10 tweets

	  		var $onetw = $tweet.clone().appendTo('.tweets');

	  		$onetw.find('.img').append('<img src=" ' + tweet.user.profile_image_url + '"/>');
	  		$onetw.find('.name').text(tweet.user.name);
	  		$onetw.find('.handle').text('@' + tweet.user.screen_name).wrap('<a href="http://twitter.com/'+tweet.user.screen_name+'"></a>');
	  		$onetw.find('.twtext').text(tweet.text);
	  		



	  		//tweet.retweet_count
	  		//tweet.user.profile_image_url


		});

		$('form').fadeOut();
		$('.tweets').fadeIn();
	});


};



$('button').click(dosearch);


$('.logo').click(function() {

		$('form').fadeIn();
		$('.tweets').fadeOut();
})
$('.twittersphere').click(function() {

		$('form').fadeIn();
		$('.tweets').fadeOut();
})
