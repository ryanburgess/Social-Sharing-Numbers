(function($) {
 
    //var getUrl = window.location.href; // use this to get the numbers for page url
    var getUrl = "http://blog.evernote.com/blog/2013/11/26/how-to-capture-your-social-media-memories-with-evernote/"; // Test url
    var facebookUrl = "http://graph.facebook.com/?ids="+getUrl;
    var twitterUrl = "http://urls.api.twitter.com/1/urls/count.json?url="+getUrl;
    var linkedInUrl = "http://www.linkedin.com/countserv/count/share?url="+ getUrl;
    var pinterestUrl = "http://api.pinterest.com/v1/urls/count.json?&url="+getUrl;
	
    //facebook likes/share
    $.ajax({
        url: facebookUrl,
        dataType: "jsonp",
        success: function(data) {
            var likes = data[getUrl].shares;
            $(".facebook .numbers").html(likes);
        }
    });

    //twitter tweets
    $.ajax({
        url: twitterUrl,
        dataType: "jsonp",
        success: function(data){
            var tweets = data.count;
            $(".twitter .numbers").html(tweets);
        }
    });
	
	//Google Plus share
	$.ajax({
        type: "POST",
        url: "/inc/googleplus.php",
        data: {"url": getUrl},
        cache: false,
        success: function(result){	
            $(".google-plus .numbers").html(result);
        }
    });

    //LinkedIn shares
    $.ajax({
        url: linkedInUrl,
        dataType: "jsonp",
        success: function(data){
            var shares = data.count;
            $(".linked-in .numbers").html(shares);
        }
    });

    //Pinterest Pins
    $.ajax({
        url: pinterestUrl,
        dataType: "jsonp",
        success: function(data){
            console.log(data);
            var pins = data.count;
            $(".pinterest .numbers").html(pins);
        }
    });
	
}(jQuery));

		