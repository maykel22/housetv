const mTP={shuffleArray:t=>{var e,i,n=t.length;if(0===n)return!1;for(;--n;)e=Math.floor(Math.random()*(n+1)),i=t[n],t[n]=t[e],t[e]=i;return t},run:(t,e,i=10,n=5)=>{if(0==t("#mTP_Slider").length)return console.log("Tag mTP_Slider tidak ada");mTP.maxCat=n,mTP.max=i,window.matchMedia("(max-width: 600px)").matches&&(mTP.maxCat=3),window.matchMedia("(max-width: 480px)").matches&&(mTP.maxCat=2);const a=0==e?"":`/-/${e}`;t.ajax({url:`/feeds/posts/default${a}?alt=json-in-script&max-results=150`,type:"get",dataType:"jsonp",success:function(e){mTP.compile(t,e)},error:function(t){console.log(t)}})},compile:(t,e)=>{if("entry"in e.feed){const n=mTP.shuffleArray(e.feed.entry);mTP.filter=mTP.shuffleArray(e.feed.category.map(t=>t.term).filter(t=>{if(mTP.Select.includes(t))return t})).slice(0,mTP.maxCat),mTP.obj={},t.each(mTP.filter,function(e,i){n.filter(e=>{const n=e.category.map(t=>t.term);if(n.includes(i)){const a=mTP.obj[i];a?a.length<mTP.max&&a.push({title:e.title.$t,cat:n,link:e.link.find(t=>"alternate"==t.rel).href,image:"media$thumbnail"in e?e.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/)?e.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/,`/${mTP.iSize}-p-k-no-nu`):e.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/,`=${mTP.iSize}-p-k-no-nu`):"content"in e?t(e.content.$t).find("img").attr("src"):mTP.noImage}):mTP.obj[i]=[{title:e.title.$t,cat:n,link:e.link.find(t=>"alternate"==t.rel).href,image:"media$thumbnail"in e?e.media$thumbnail.url.match(/\/s[0-9]{2}-(w[0-9]+-)?c/)?e.media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/,`/${mTP.iSize}-p-k-no-nu`):e.media$thumbnail.url.replace(/\=s[0-9]{2}-(w[0-9]+-)?c/,`=${mTP.iSize}-p-k-no-nu`):"content"in e?t(e.content.$t).find("img").attr("src"):mTP.noImage}]}})});const a=t('<div class="series-gen"><div class="head"><div class="r-title"></div><ul class="nav-tabs tabs tab r2"></ul></div><div class="listupd"></div></div>'),l=Object.keys(mTP.obj).sort().reduce((t,e)=>(t[e]=mTP.obj[e],t),{});for(var i in l){const e=i.replace(/\W/g,"");a.find(".nav-tabs").append(`<li><span data-id="housetv-${e}">${i}</span></li>`),a.find(".listupd").append(`<div id="housetv-${e}" class="customAF scroll"><div class="inner scrolling"></div>${mTP.btnPrev}${mTP.btnNext}</div>`),t.each(mTP.obj[i],function(){a.find(`#housetv-${e} .inner`).append(`<article class="customAgata">\n         <a class="imgs_others" href="${this.link}" title="${this.title}">\n           <div class="images">\n      <div class='loading-x'><span/></div>\n        <figure>\n                <img loading="lazy" src="${this.image}" alt="${this.title}">\n             </figure>\n            </div>\n            <div class="gradient_hover"></div>\n		<h2 class="entry-title">${this.title}</h2>\n          </a>\n        <span class='disney_origin'><img alt='Disney+' loading='lazy' src='https://cdn.rawgit.com/maykel22/housetv/3ee6ff343fb1d58c60b1ef818a34518fcb5dac51/Logos%20Productoras/disney+_logo.svg'/></span>\n			</article>`)})}t("#mTP_Slider").html(a),t(".nav-tabs li").click(function(){const e=t(this).find("span").attr("data-id");t(".customAF.scroll, .nav-tabs li").each(function(){t(this).attr("id")==e||t(this).find("span").attr("data-id")==e?t(this).addClass("active"):t(this).removeClass("active")})}),t(".nav-tabs li").first().click()}},sN:t=>{let e=t.parentElement.querySelector(".inner.scrolling"),i=e.clientWidth;e.scrollLeft+=i},sB:t=>{let e=t.parentElement.querySelector(".inner.scrolling"),i=e.clientWidth;e.scrollLeft-=i},btnNext:'<button onclick="mTP.sN(this)" class="scrollButton right"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 4l8 8l-8 8"/></svg></button>',btnPrev:'<button onclick="mTP.sB(this)" class="scrollButton left"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 4l-8 8l8 8"/></svg></button>',iSize:"w207-h300",noImage:"https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png"};
mTP.Select = ["Disney+"];