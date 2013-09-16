(function($) {
    "use strict";

    var getUrl = window.location.href;
    var facebookUrl = 'http://graph.facebook.com/?ids='+getUrl;
    var twitterUrl = 'http://urls.api.twitter.com/1/urls/count.json?url='+getUrl;
	
    //facebook likes/share
    $.ajax({
        url: facebookUrl,
        dataType: 'jsonp',
        success: function(data) {
            var likes = data[getUrl].shares;
            $(".facebook .numbers").html(likes);
        }
    });

    //twitter tweets
    $.ajax({
        url: twitterUrl,
        dataType: 'jsonp',
        success: function(data){
            var tweets = data.count;
            $(".twitter .numbers").html(tweets);
        }
    });
	
	//Google Plus share
	$.ajax({
        type: "POST",
        url: "/inc/googleplus.php",
        data: {'url': getUrl},
        cache: false,
        success: function(result)
        {	
            $(".google-plus .numbers").html(result);
        }
    });
	
}(jQuery));

		