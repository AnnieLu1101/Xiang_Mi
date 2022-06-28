// 點擊排行連結到指定div位置
$("#overall_cat").click(function() {
    $('html,body').animate({
        scrollTop: $("#overall_warp").offset().top},
        'slow');
});

$("#season_cat").click(function() {
    $('html,body').animate({
        scrollTop: $("#season_warp").offset().top},
        'slow');
});

// 香伴四季tab選單，只保留單div_item
function opennumber(name, element){
    var i, inner_block;
    // 找到同樣class的物件，全部隱藏
    inner_block = document.getElementsByClassName("inner_block_area");
    for (i = 0; i < inner_block.length; i++) {
      inner_block[i].style.display = "none";
    }
    // 找到指定物件，顯是那個
    document.getElementById(name).style.display = "block";
  }
  
  document.getElementById("default_Open").click();

// 選單選定後div顏色停留
var items = document.getElementsByClassName("subject");
// console.log(items);
for(let i = 0; i < items.length; i++){
  items[i].addEventListener("click",function(){
    let links = this.closest("ul.menu_bar").querySelectorAll("li.subject");
    links.forEach(function(item, i){
      //console.log(item);
      item.classList.remove("now_subject");
    });
    this.classList.add("now_subject");
  })
};  