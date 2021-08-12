$(function(){
$('.slider_inner, .news_slider-inner').slick({
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',    
});
$('select').styler()

//  Прописываем чтобы при клике на гамбургер меню header при мелком размере 
//  открывальс меню
$('.header_btn-menu').on('click',function(){
$('.menu ul').slideToggle();
});
});