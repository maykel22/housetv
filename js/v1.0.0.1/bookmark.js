var limitBookmark = 100;
var bookmark = (function(){
list = [];

//Structure Push to Object New Item
function Item(id,name,status,type,link,img){
  this.id = id;
  this.name = name;
    this.status = status;
  this.type = type;
    this.link = link;
  this.img = img;
}

//Event Saving to Local Storage
function setBookmark(){
  localStorage.setItem('bookmark', JSON.stringify(list));
}

function loadBookmark() {
    list = JSON.parse(localStorage.getItem('bookmark'));
}

if (localStorage.getItem("bookmark") != null) {
    loadBookmark();
}

obj = {};
//Add New Item Object to Array
obj.addItemTobookmark = function(id,name,status,type,link,img) {
    var item = new Item(id,name,status,type,link,img),
    itemList = list;
    if(itemList != null){
    same = itemList.find(item =>{return item.id == id;});
    if(list.length<limitBookmark){
     if(!same){
      list.push(item);
      setBookmark();
      }
     }
    }else{
      list.push(item);
      setBookmark();
    }
}

//Remove Bookmark    
obj.removeThisItem = function(id) {
    for(var item in list) {
      if(list[item].id === id) {
        list.splice(item, 1);
        break;
      }
    }
    setBookmark();
  }
  
  return obj;
})();

$('.bookmark').each(function(event) {
const getData = JSON.parse(localStorage.getItem('bookmark'));
for(var i in getData){
  if(getData[i].id == $(this).data('id')){
     $(this).html('<i class="fa-solid fa-check"/><span>Agregado a favoritos</span>')
     $(this).addClass('addActive')
    }
}
  $(this).click(function(){
const list = JSON.parse(localStorage.getItem('bookmark'));
  //Retrieve Data From Post
    const id = $(this).data('id'),
    name = $('div.article_post header h1.font_ttitle_post').text().replace('\n',''),
    link = location.protocol + '//' + location.hostname +  location.pathname,
    img = $('div.container_posts div.cont-poster-article figure img').attr('src'),
    status = $('aside.info_aside div.info_aside-cont:nth-child(1) span.dt a').text().replace('\n',''),
    type = $('aside.info_aside div.info_aside-cont:nth-child(2) span.dt a').text().replace('\n','');
    
  //Set To Function Bookmark
if(list == null){
  if(!$(this).hasClass('addActive')){
      bookmark.addItemTobookmark(id,name,status,type,link,img);
      $(this).addClass('addActive')
      $(this).html('<i class="fa-solid fa-check"/><span>Agregado a favoritos</span>')
  }else{
    bookmark.removeThisItem(id);
    $(this).html('<i class="fa-solid fa-plus"/><span>Agregar a favoritos</span>')
    $(this).removeClass('addActive')
  }
}else{
  if(!$(this).hasClass('addActive')){
if(list.length<limitBookmark){
      bookmark.addItemTobookmark(id,name,status,type,link,img);
      $(this).addClass('addActive')
      $(this).html('<i class="fa-solid fa-check"/><span>Agregado a favoritos</span>')
}
  }else{
    bookmark.removeThisItem(id);
    $(this).html('<i class="fa-solid fa-plus"/><span>Agregar a favoritos</span>')
    $(this).removeClass('addActive')
  }
}
  })
});
