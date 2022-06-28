// 貓頭鷹幻燈片
$(document).ready(function() {

    var one = $("#slideshow_web");
    var two = $("#slideshow_ph");
    var three = $("#hot_product");
    var four = $("#products_owl");
   
    // 幻燈片
    one.owlCarousel({
        animateOut:'fadeOut',
        dots:true,// 顯示點點
        items:1,
        loop:true,// 循環播放
        margin:10,// 外距 10px
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });  

    two.owlCarousel({
      animateOut:'fadeOut',
      dots:true,// 顯示點點
      items:1,
      loop:true,// 循環播放
      margin:10,// 外距 10px
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
  });  
  
    // 頭牌榜
    three.owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:true,
        items:1,
    }); 

    // 花露藏香閣
    four.owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                nav:true,
                items:1,
                
            },
            600:{
                items:3,
                
            },
            1000:{
                items:4,
                loop:true,
                margin:10,
               
            }
        }
  }); 
    
});
    

// 花神榜抽牌內容
function findFuture() {
    var answer = Math.floor((Math.random() * 12) + 1);
     
     if (answer === 1) {   
       document.getElementById("name").innerHTML = "江采蘋"
       document.getElementById("future").innerHTML = "梅花<br>天上月映照人間雪,<br>冷冽天地間梅花綻放幽香四溢,<br>甜甜的花香裹了白雪的寒,<br>又沾染了月光的潔,<br>生出一股別樣的優雅清冽。<br><button class='secondary_btn'style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_1.png";
     }
     else if (answer === 2) {
       document.getElementById("name").innerHTML = "楊玉環"
       document.getElementById("future").innerHTML = "杏花<br>春色滿園關不住,<br>一枝紅杏出牆來,<br>杏花薄粉輕紅,<br>象徵著春意盎然。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_2.png";
     }
       else if (answer === 3) {
       document.getElementById("name").innerHTML = "戈小娥"
       document.getElementById("future").innerHTML = "桃花<br>遙見伊人桃花面。<br>沁甜的白桃與馥郁的玫瑰相融,<br>幸福感油然而生。<br>琥珀溫潤如霧,輕籠於花果的芬芳,<br>恰似柔軟的愛撫。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_3.png";
     }
       else if (answer === 4) {
       document.getElementById("name").innerHTML = "麗娟"
       document.getElementById("future").innerHTML = "牡丹<br>是五月緋紅的雨,<br>落入了夢中的牡丹園。<br>誘人的果香盛情開場,<br>牡丹的甘甜溫潤雅緻。<br>天香旖旎,餘味悠長。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_4.png";
     }
       else if (answer === 5) {
       document.getElementById("name").innerHTML = "公孫氏"
       document.getElementById("future").innerHTML = "石榴<br>好似一顆誤入花圃的石榴,多汁而圓潤。<br>沁柔的小蒼蘭與紅石榴相遇,<br>天真爛漫,撩人芬芳令人不禁泛起美好的遐想。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_5.png";
     }
       else if (answer === 6) {
       document.getElementById("name").innerHTML = "西施"
       document.getElementById("future").innerHTML = "蓮花<br>清水出芙蓉,天然去雕飾,<br>是一池碧水中的亭亭荷蓮,嫩蕊凝珠。<br>清新的荷香於霧氣氤氳中,<br>被微涼的雪松收攏了熱烈,<br>鼻尖濕潤的甘甜,化不開也散不去。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_6.png";
     }
     else if (answer === 7) {
       document.getElementById("name").innerHTML = "李夫人"
       document.getElementById("future").innerHTML = "玉簪花<br>晶潤瑩潔,娉婷裊娜,<br>清麗脱俗,環繞這分高雅芬芳,<br>雪魄冰姿俗不侵。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_7.png";
     }
     else if (answer === 8) {
       document.getElementById("name").innerHTML = "綠珠"
       document.getElementById("future").innerHTML = "桂花<br>像要醉在秋風裡,<br>撲面而來的清甜桂花香。<br>沒有一種花香能如桂花,<br>甜膩與清冷糾纏,<br>餘味卻是回不去的記憶時光。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_8.png";
     }
     else if (answer === 9) {
       document.getElementById("name").innerHTML = "梁紅玉"
       document.getElementById("future").innerHTML = "菊花<br>風從遠方來,吹拂過菊花叢沾染了絲絲甜潤,<br>又輕撫大地帶來了青草的清新,<br>最後穿過茂密的森林,留下綿長的樹木香。<br>是如水般瀲的秋天,清爽而明媚。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_9.png";
     }
     else if (answer === 10) {
       document.getElementById("name").innerHTML = "貂蟬"
       document.getElementById("future").innerHTML = "芙蓉<br>是夢裡的東方美人,<br>雍容華貴卻又神秘溫柔。<br>慢慢走近,是淡淡得甜香,<br>隱約間似有清新的木香環繞。<br>想要再觸碰,卻又變成了溫和的奶香。<br>香氣層次豐富,<br>叫人心之嚮往,迷戀回味。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
       document.getElementById("card").src = "image/draw_lot/draw-lot_10.png";
     }
     else if (answer === 11) {
        document.getElementById("name").innerHTML = "王昭君"
        document.getElementById("future").innerHTML = "山茶花<br>隱在山林逸自芳,<br>恰似神秘隱形衣裳,<br>耐心優雅而柔情,純真無邪,<br>香氣和諧誘人。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
        document.getElementById("card").src = "image/draw_lot/draw-lot_11.png";
      }
      else if (answer === 12) {
        document.getElementById("name").innerHTML = "甄宓"
        document.getElementById("future").innerHTML = "水仙<br>凌波仙子生塵襪,水上輕盈步微月。<br>水仙花開,希望常在,<br>鮮黃的花朵,人們說像是太陽溫暖的味道,<br>這麼的清甜、脫俗。<br><button class='secondary_btn' style='margin-top: 1.5em'>了解更多</button>";
        document.getElementById("card").src = "image/draw_lot/draw-lot_12.png";
      }
   }


   


