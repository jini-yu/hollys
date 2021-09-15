$(function () {
    //banner
    var swiper = new Swiper(".main-slide", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });
    
    //gnb
    //주메뉴에 마우스가 올라가면 sub-wrap에 css에서 미리 만들어놓은 on 클래스가 추가되면서  height와 opacity가 변함
    $('.gnb>ul>li').on('mouseenter', function() {
        $('.sub-wrap').addClass('on');
    });
    //sub-wrap 영역에서 마우스가 벗어나면 추가되었던 on클래스가 제거돠면서 원래의 height: 0, opacity: 0값으로 화면에서 사라짐
    $('.sub-wrap').on('mouseleave', function() {
        $('.sub-wrap').removeClass('on');
    });
    
    /*mouseenter/mouseleave --> 자식요소에서는 동작하지않음
    mouseover/mouseout --> 자식요소에서도 동작함.    */
    
});





