  var numposts = 9999;
  var standardstyling = true;

  function chapterlist(json) {
    for (var i = 0; i < numposts; i++) {
      var entry = json.feed.entry[i];
      var posttitle = entry.title.$t;
    var datatitle = entry.title.$t;
    var thumbnail = json.feed.entry[i].media$thumbnail.url'
      var date = json.feed.entry[i].published.$t;
      var posturl;
      if (i == json.feed.entry.length) break;
      for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
      }
      posttitle = posttitle.link(posturl);
      if (standardstyling) document.write('<li data="' + datatitle + '">');
      document.write(posttitle);
      document.write('<time class="timeago" datetime="' + date + '">');
      document.write(date);
      document.write('</time>');
    }
    if (standardstyling) document.write('</li>');
  }
