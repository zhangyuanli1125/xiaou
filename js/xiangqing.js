$(function(){
    $('.header_two').eq(0).css('display','block')
    $('.header_one_left span').click(function(){
        $(this).children('span').addClass('active')
        $(this).siblings('span').children('span').removeClass('active')
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.header_two').css('display','none')
      $('.header_two').eq($(this).index()).css('display','block')
    })
})