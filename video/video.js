  var video, player, init = false;
var flvfile = "http://staging-app.hubbleconnected.com:8080/test/video_encoding/nikhil.flv";
  var parameters = {
      src: flvfile,
      autoPlay: false,
      controlBarMode: "none",
      javascriptCallbackFunction: "window.onJavaScriptBridgeCreated"
  };

  window.onJavaScriptBridgeCreated = function (id) {
      if (!init) {
          init = true;

          video = MetaPlayer.strobemediaplayback(id, "onJavaScriptBridgeCreated");
          player = MetaPlayer(video)
              .controlbar()
              .searchbar("#searchbar")
              .ramp("http://api.ramp.com/v1/mp2/playlist/?e=52871241&apikey=f455a86b28160bc0682fec3662e39d3b")
              .transcript("#transcript")
              .load();
         // video.src = "http://publishing.ramp.com/FileResource/widgets/metaplayer3/media/elephants_dream/elephant.mp4";
          video.src = flvfile;
      }
  }

  // Embed the player SWF:
  swfobject.embedSWF(
    "http://publishing.ramp.com/FileResource/widgets/metaplayer3/external/strobe/StrobeMediaPlayback.swf",
     "strobeMediaPlayback",
      640,
       480,
        "10.1.0",
         "https://hubble-resources.s3.amazonaws.com/devices/010066000AE2111363JJHGSSXA/clips/000AE2111363_04_20160120024045000_00001_22_last.flv?AWSAccessKeyId=AKIAJNYQ3ONBL7OLSZDA&Expires=1453365339&Signature=NMyROb4OTsImjKtZsMefQtvnhkA%3D",
          parameters, {
      allowFullScreen: "true",
      wmode: "opaque"
  }, {
      name: "strobeMediaPlayback"
  });
  