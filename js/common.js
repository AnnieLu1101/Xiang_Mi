
// 下拉滾動導覽列背景出現
window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var navBg = document.getElementsByClassName("main_nav_web")[0];
  if(scrollTop >= 270){
      navBg.style.background = "rgba(242, 189, 189,0.9)";
      navBg.style.boxShadow = "none";
  }else if(scrollTop < 270){
      navBg.style.background = "none";
      navBg.style.boxShadow = "none";
  }
}


// 回頂部按鈕
myButton = document.getElementById("back_to_top_btn");
function topFunction() {
    window.scrollTo({
        // 滾到最頂端
        top: 0,
        // 慢慢滾
        behavior: 'smooth',
    });
};
// 回頂部按鈕隱藏 頂部>300才顯示
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 300){
        document.getElementById("back_to_top").classList.remove("back_to_top_none");
    }else{
        document.getElementById("back_to_top").classList.add("back_to_top_none");
    }
});


    




   


