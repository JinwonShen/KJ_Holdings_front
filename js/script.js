/* main area */
/* $('.slick').slick({
    slide: 'div',
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('#prevArrow'), //이전 화살표만 변경
    nextArrow: $('#nextArrow'), //다음 화살표만 변경
  }); */


const visual = $(".slick");
const initPercent = 100 / $(".slick").find(".cont").length;

visual.slick({
    slide: '.cont',
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    prevArrow: "#prevArrow",
    nextArrow: "#nextArrow",
    appendDots: ".slick_paging",
    customPaging: function (slider, i) {
        return (
        "<span>" +
        (i + 1) +
        "</span><span>&nbsp &#8213; &nbsp</span><span>" +
        slider.slideCount +
        "</span>"
        );
    }
});