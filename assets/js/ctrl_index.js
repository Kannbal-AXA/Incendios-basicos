var avsExpert = 0, avSlide8 = 0, avSlide9 = 0, avSlide1 = 0;
var numSlides = 1, numSlide9_1 = 1, numSlide9_2 = 1, numSlide1_2 = 1;
var flagPiso3Finish = false;
var finishSlide12_1 = false;


$("#precache_index").waitForImages({
  finished: function () {
    $("#loading_screen").fadeOut("slow");
    $("#precache_index").hide();
    ctrl_slides();
    ctrl_avanceExp();
    ctrl_avance_slide9(avSlide9);
    $('#btn_start_sini1').delay(3000).fadeIn();
    $('#btn_openSide').show();
  },
  waitForAll: true
});

//Botón Navbar Abrir
$('#btn_openSide').click(() => $("#mySidebar").css({ width: "25%" }));
//Botón Navbar Cerrar
$('#close_sideBar').click(() => $("#mySidebar").css({ width: "0%" }));


$(".elem_click").click(function(){ $("#efct_clic")[0].play(); });
$(".da-clic").click(function(){ $("#efct_clic")[0].play(); });
$(".elem_close").click(function(){ $("#efct_close")[0].play(); });

function ctrl_slides() {
  $(".slide_sini").hide();
  $("#slide_sini_" + numSlides).show();
  console.log(numSlides);
  if (numSlides === 1 || numSlides === 12 || numSlides === 18) {
    $("#sini_Prev,#sini_Next").hide();
  }else if ( numSlides === 9 ){
    $("#sini_Prev").show();
    $("#sini_Next").hide();
  } else {
    $("#sini_Prev,#sini_Next").show();
    $("#slide10_text_1,#slide10_text_2,#slide10_text_3").hide();
    $("#slide10_text_4,#slide10_text_5").hide();
    if (numSlides === 15) {
      $("#slide10_text_0").show().doAnim("zoomIn");
      $("#slide10_text_1").delay(800).fadeIn(0).doAnim({ 'animation': 'slideInRight', 'duration': 2 });
      $("#slide10_text_2").delay(1600).fadeIn(0).doAnim({ 'animation': 'slideInRight', 'duration': 2 });
      $('#slide10_text_next').show();
      $('#slide10_text_prev,#slide10_text_3,#slide10_text_4,#slide10_text_5').hide();
    }else if (numSlides === 16) {
      $('.infografia_horizontal').show();
      $("#sini_Prev").hide();
      $("#sini_Next").hide();
      $('html,body').css({ 'overflow-y': 'auto' });
    }else if ( numSlides === 19 ) {
      $("#sini_Prev,#sini_Next").show();
    }else if (numSlides === 21) {
      $("#sini_Prev").show();
      $("#sini_Next").hide();
    }
  }

  unlock_menu();
}

function unlock_menu(){
  if ( avSlide9 >= 2 ) {
    $(".btn_navegacion").css({ "pointer-events": "auto" }).removeClass('w3-opacity');
  }else{
    if (numSlides === 10){
      $('#btn_nav_1,#txt_pregunta_1').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
      g_avance=1;
    }else if  (numSlides === 16 && juego === false ){
      $('#btn_nav_2,#txt_pregunta_2').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
      g_avance=2;
    }else if (numSlides === 16 && juego === true ){
      $('#btn_nav_3,#txt_pregunta_3').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
      g_avance=3;
    }else if  (numSlides === 17 ){
      $('#btn_nav_4,#txt_pregunta_4').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
      g_avance=4;
    }else if (numSlides === 20){
      $('#btn_nav_5,#txt_pregunta_5').css({ "pointer-events": "auto" }).removeClass('w3-opacity');
      g_avance=4;
    }
    save_Status();
  }
}

$(".cls_info_intro").click(function () {
  $("#mod_info_intro").hide();
  $("#mod_info_intro").scrollTop(0);
});

$("#sini_Prev").click(function () {
  1 < numSlides && numSlides--;
  ctrl_slides();
  $("#efct_next")[0].play();
});
$("#sini_Next").click(function () {
  25 > numSlides && numSlides++;
  $("#efct_next")[0].play();
  ctrl_slides();
});

//Botones slide intro AXA Incendios
$('.video_slide_7').click(function () {
  $('#mod_cultOrg').show();
  $('#vid_cultOrg').get(0).play();
  $('#cls_cultOrg').click(function () {
    $('#mod_cultOrg').hide();
    $('#vid_cultOrg').get(0).pause();
    $('#sini_Prev,#sini_Next').show();
  });
});

$('#btn_start_sini1').click(function () {
  numSlides = 2;
  ctrl_slides();
});


$('#btn_infografia_fin').click(function () {
  $('html,body').css({ 'overflow-y': 'hidden' });
  $('#audBack')[0].pause();
  $('#audBack2')[0].pause();
  $('#audBack3')[0].pause();
  $('#infografia_horizontal').hide();
  numSlides = 17;
  ctrl_slides();
  window.scrollTo(0, 0);
});

$("#btn_start_slide15").click(function () {
  $("#mod_expertos_1").show();
  $("#btn_start_slide15").removeClass("myglow_img_blue");
});
$("#cls_expertos_1").click(function () {
  $("#mod_expertos_1").hide();
  $("#sini_Prev,#sini_Next").show();
});

function ctrl_avanceExp() {
  $(".carru_slide1_2").hide();
  $("#carru_slide1_2_" + numSlide1_2).show();
  $('.circ_slide1_2').removeClass('w3-light-blue').addClass('w3-white');
  $('#circ_slide1_2_' + numSlide1_2).removeClass('w3-white').addClass('w3-light-blue');
  if (numSlide1_2 === 1) {
    $("#slide1_2_Prev").hide();
    $("#slide1_2_Next").show();
  } else if (numSlide1_2 === 7) {
    $("#slide1_2_Prev,#cls_expertos_1").show();
    $("#slide1_2_Next").hide();
  }else{
    $("#slide1_2_Prev,#slide1_2_Next").show();
  }
}
function ctrl_avance_slide9(ptrId) {
  if ((avSlide9 < 2) && (avSlide9 <= ptrId)) {
    avSlide9 = ptrId + 1;
    
  } else if (avSlide9 >= 2) {
    $('.btn_slide9').show().css('pointer-events', 'auto');
  }
}

$('#btn_slide9').click(function () {
  $('#mod_slide9_1').show();
  ctrl_slide9_1();
});

$('.cls_slide9').click(function () {
  strId = $(this).attr("id").split("_")[2];
  numSlide9_1 = 1, numSlide9_2 = 1;
  $('#mod_slide9_' + strId).hide();
  $('.btn_conoce_recorrido,.boton_slide_3').show();
  ctrl_avance_slide9(parseInt(strId));
  $('.btn_slide9').show();
});

function ctrl_slide9_1() {
  $(".carru_slide9_1").hide();
  $("#carru_slide9_1_" + numSlide9_1).show();
  if (numSlide9_1 === 1) {
    $("#slide9_1_Prev").hide();
    $("#slide9_1_Next").show();
  } else if (numSlide9_1 === 4) {
    $("#slide9_1_Prev").show();
    $("#slide9_1_Next").hide();
  } else {
    $("#slide9_1_Prev").show();
    $("#slide9_1_Next").show();
  }
}

$("#slide9_1_Prev").click(function () {
  1 < numSlide9_1 && numSlide9_1--;
  ctrl_slide9_1();
});
$("#slide9_1_Next").click(function () {
  4 > numSlide9_1 && numSlide9_1++;
  ctrl_slide9_1();
});


$("#slide1_2_Prev").click(function () {
  1 < numSlide1_2 && numSlide1_2--;
  ctrl_avanceExp();
});
$("#slide1_2_Next").click(function () {
  7 > numSlide1_2 && numSlide1_2++;
  ctrl_avanceExp();
});

$('#btn_casoExperto').click(() => $('#mod_casoExperto').show());
$('#cls_casoExperto').click(() => $('#mod_casoExperto').hide());

$('#btn_sabiasExp').click(() => $('#sabias_expertos_1').show());
$('#cls_sabiasExperto').click(() => $('#sabias_expertos_1').hide());


//Cambiar para despues implementar carga de módulos
$('.btn_contInc').click(function(){
  strId = $(this).attr("id").split("_")[2];
  if (strId === '1'){
    numSlides = 10;
    ctrl_slides();
  }
});

$(".btn_navegacion").click(function () {
  $("#efct_clic")[0].play();
  // resetLocution();
  strID = $(this).attr("id").split("_")[2];
  "1" === strID && (numSlides = 10, $('#mod1_juego').hide().loadHTML('void.html'), $('html,body').css({'overflow-y':'hidden'}) );
  "2" === strID && (numSlides = 16, $('#mod1_juego').hide().loadHTML('void.html'));
  "3" === strID && (numSlides = 16, $('#mod1_juego').show().loadHTML('juego_1.html'));
  "4" === strID && (numSlides = 17, $('#mod1_juego').hide().loadHTML('void.html'), $('html,body').css({'overflow-y':'hidden'}) );
  "5" === strID && (numSlides = 20, $('#mod1_juego').hide().loadHTML('void.html'), $('html,body').css({'overflow-y':'hidden'}) );
  ctrl_slides();
});