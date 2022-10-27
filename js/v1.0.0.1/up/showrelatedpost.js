var randomRelatedIndex, showRelatedPost;
(function(n, m, k) {
  var d = {
    widgetTitle: "<h3 class='heading'>Related Posts</h3>",
    widgetStyle: 1,
    homePage: "http://www.jagodesain.com",
    numPosts: 28,
    summaryLength: 320,
    titleLength: "auto",
    thumbnailSize: 200,
    noImage: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    containerId: "related-posts",
    newTabLink: false,
    moreText: "Read more",
    callBack: function() {}
  };
  for (var f in relatedPostConfig) {
    d[f] = (relatedPostConfig[f] == "undefined") ? d[f] : relatedPostConfig[f]
  }
  var j = function(a) {
      var b = m.createElement("script");
      b.async = "async";
      b.rel = "preload";
      b.src = a;
      k.appendChild(b)
    },
    o = function(b, a) {
      return Math.floor(Math.random() * (a - b + 1)) + b
    },
    l = function(a) {
      var p = a.length,
        c, b;
      if (p === 0) {
        return false
      }
      while (--p) {
        c = Math.floor(Math.random() * (p + 1));
        b = a[p];
        a[p] = a[c];
        a[c] = b
      }
      return a
    },
    e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : "",
    h = function(b) {
      var c = b.feed.openSearch$totalResults.$t - d.numPosts,
        a = o(1, (c > 0 ? c : 1));
	  j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Series" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Película" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Anime" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
    },
    g = function(z) {
      var s = document.getElementById(d.containerId),
        x = l(z.feed.entry),
        A = d.widgetStyle,
        c = d.widgetTitle + '<ul class="pl-0 m-0 grid gtc-f141a gg-20 slide3 rel lsn ul style-' + A + '">',
        b = d.newTabLink ? ' target="_blank"' : "",
        y = '<!-- <div class="clear"/> -->',
        v, t, w, r, u;
      if (!s) {
        return
      }
      for (var q = 0; q < d.numPosts; q++) {
        if (q == x.length) {
          break
        }
        t = x[q].title.$t;
        w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
        r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace("s72","w210-h270") : d.noImage;
        u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.summaryLength) + "&hellip;" : "";
        for (var p = 0, a = x[q].link.length; p < a; p++) {
          v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#"
        }
        if (A == 2) {
          c += '<li><div class="grid gtc-1001fr gg-10 cont_img"><div class="item-thumbnail imgItem full-i relative b-img oh imgs_"><a href="' + v + '"><img loading="lazy" class="post-thumb lazy" alt="' + w + '" src="' + r + '"></a></div><div class="item-title clamp toe oh block lh-20 ck m-0 t_center"><a href="' + v + '"><span>' + w + '</span></a></div></div></li>'
        } else {
          c += '<li><div class="item-related"><div class="item-thumbnail"><div><img loading="lazy" class="post-thumb lazy" alt="' + w + '" src="' + r + '"></div></div><div class="item-title"><a href="' + v + '"><span>' + w + '</span></a></div></div></li>'
        }
      }
      s.innerHTML = c += "</ul>";
      d.callBack()
    };
  randomRelatedIndex = h;
  showRelatedPost = g;
  j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Serie" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Película" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Anime" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
})(window, document, document.getElementsByTagName("head")[0]);
