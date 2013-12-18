(function($) {
    "use strict";

    //var getUrl = window.location.href;
    var getUrl = "http://blog.evernote.com/blog/2013/11/26/how-to-capture-your-social-media-memories-with-evernote/";
    var pageTitle = "Test";
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
        url: "/social-sharing/inc/googleplus.php",
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
            var pins = data.count;
            $(".pinterest .numbers").html(pins);
        }
    });

    $(".facebook").on("click", function (){
        window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(getUrl)+"&t="+encodeURIComponent(pageTitle),"sharer","toolbar=0,status=0,width=626,height=436");
        return false;
    });

    $(".twitter").on("click", function (){
        window.open("https://twitter.com/share?url="+ getUrl,"sharer","toolbar=0,status=0,width=626,height=436");
        return false;
    });

    $(".google-plus").on("click", function (){
        window.open("https://plus.google.com/share?url="+getUrl,"sharer","toolbar=0,status=0,width=626,height=436");
        return false;
    });

    $(".linked-in").on("click", function (){
        window.open("http://www.linkedin.com/shareArticle?mini=true&url="+ getUrl +"&title="+pageTitle,"sharer","toolbar=0,status=0,width=626,height=436");
        return false;
    });

    $(".pinterest").on("click", function (){
        window.open("http://pinterest.com/pin/create/button/?url="+ pageUrl,"sharer","toolbar=0,status=0,width=626,height=436");
        return false;
    });
	
}(jQuery));

		