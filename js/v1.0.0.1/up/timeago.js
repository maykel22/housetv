//Start function
function timeAgo(o){var t=(new Date).getTime()-o.getTime(),e=Math.floor(t/1e3),r=Math.floor(e/60),a=Math.floor(r/60),g=Math.floor(a/24),h=Math.floor(g/30),n=Math.floor(h/12);return 0===t?"Just now":e<60?e+" seconds Ago":r<60?r+" min Ago":a<24?a+" hours Ago":g<30?g+" days Ago":h<12?h+" months":n+" years Ago"}
//End function
