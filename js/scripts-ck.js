var apiLarge="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633712096580&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_o",apiSmall="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157633712096580&api_key=1e7b492b2667c5dcff54a1ba2e071ef3&format=json&jsoncallback=?&extras=url_n";$(document).ready(function(){$(window).width()<800?$.getJSON(apiSmall,function(e){$.each(e.photoset.photo,function(e,t){$("body").css("background-image","url("+t.url_n+")")})}):$.getJSON(apiLarge,function(e){$.each(e.photoset.photo,function(e,t){$("body").css("background-image","url("+t.url_o+")")})})});