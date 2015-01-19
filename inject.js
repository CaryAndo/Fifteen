//alert(document.URL);

if (document.URL.indexOf("watch") != -1) {
    var berx = jQuery("#watch7-content").prepend('<div id="fifteen-box" style="width:100%; height:0px; background-color: black; margin-top: 10px; overflow: hidden;"></div>');
    $("#fifteen-box").append('<a id="closeLink" style="float: right; padding: 5px 5px; overflow: hidden;">X</a>');
    $("#fifteen-box").append('<img style="height:200px; width:200px" src="http://fc02.deviantart.net/fs70/f/2011/300/5/1/nike_ad_by_gojirars-d4e25y4.png" />');

    $("#fifteen-box").append('<iframe id="myytplayer" width="300" height="200" src="https://www.youtube.com/embed/8zI5EoiYi1c?enablejsapi=1&origin=http://example.com" frameborder="0" allowfullscreen></iframe>');
    $("#fifteen-box").append('<b id="pointre" style="font-size: 1em; display: inline; position: absolute; left: 10; top: 10; padding-bottom: 20px;">Points earned: 0</b>');
    
    var openFunc = function() {
        $("#fifteen-box").animate({height: "200px"}, {queue: true});
        $("#closeLink").text("X");
        $("#closeLink").unbind();
        $("#closeLink").click(closeFunc);
    };

    var closeFunc = function() {
        $("#fifteen-box").animate({height: "15px"}, {queue: true});
        $("#closeLink").text("+");
        $("#closeLink").unbind();
        $("#closeLink").click(openFunc);
    };

    $(document).ready(function() {

        /*var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player('myytplayer', {
                height: '390',
                width: '640',
                videoId: 'u1zgFlCw8Aw',
                events: {
                    'onStateChange': function() {alert("changes");}
                }
            });
        }*/

        var playback = 0;
        var on = true;

        $("#fifteen-box").css("background-color", "yellow");
        $("#fifteen-box").animate({height: "200px"}, {queue: true});
        $("#closeLink").click(closeFunc);

        $("#myytplayer").click(function() {
            alert("clickems");
            if (on)
                on = false;
            else if (!on)
                on = true;
        });

        setInterval(function () {
            if (on) {
                playback = playback + 5;
                //alert(playback);
                $("#pointre").text("Points earned: " + playback);
            }
        }, 5000);

        //$("#fifteen-box").animate({height: "100px"}, {queue: true});
    });
}