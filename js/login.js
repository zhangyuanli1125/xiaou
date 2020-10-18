$(function(){
    var reg=/^\w{1,8}@([0-9]||[a-z]||[A-Z]){1,6}(.com||.com.cn)$/
    var reg1=/^\.$/
    var tex=$(":text:eq(0)")
    $('input').click(function(){
        if($(this).parent().find('span.ac')){
            $(this).parent().find('span.ac').remove()
            $(this).parent().css('margin-bottom','15px')
        }
    })
    // 用户名
    tex.blur(function(){
        $(this).parent().append("<span class='ac'></span>")
        $(this).parent().css('margin-bottom','0px')
        if(tex.val().match(reg)!=null){
            $(this).siblings('.ac').html('√') 
         }else  if(tex.val()==''){
             $(this).siblings('.ac').html('请输入邮箱') 
          }else{
              $(this).siblings('.ac').html('邮箱格式错误')   
          } 
    })
    // 密码框
   var passw=$(":password")
    passw.blur(function(){
        $(this).parent().append("<span class='ac'></span>")
        $(this).parent().css('margin-bottom','0px')
         if(passw.val()==''){
            $(this).siblings('.ac').html('请输入密码') 
         }else  if((passw.val().length>6) && (passw.val().length<12)){
            $(this).siblings('.ac').text('√')
          }else{
            $(this).siblings('.ac').text('密码格式为6-12位字母数字组合')
        }
     })
//     //  随机数
//      var num =Math.floor(Math.random()*10)+String(Math.floor(Math.random()*10))+String(Math.floor(Math.random()*10))+String(Math.floor(Math.random()*10))
//      $('.sp').text(num)
//      $('.sp').click(function(){
//        num =Math.floor(Math.random()*10)+String(Math.floor(Math.random()*10))+String(Math.floor(Math.random()*10))+String(Math.floor(Math.random()*10))
//       $('.sp').text(num)
//      }) 
     
//      var yan=$(":text:eq(1)")
//      yan.blur(function(){
//         $(this).parent().append("<span class='ac'></span>")
//         $(this).parent().css('margin-bottom','0px')
//       if(yan.val()==num){
//         $(this).siblings('.ac').text('√')
//        }else  if(yan.val()==''){
//         $(this).siblings('.ac').text('请输入验证码') 
//         $(this).parent().css('margin-bottom','0px')
//         }else{
//         $(this).siblings('.ac').text('验证码错误')
//         $(this).val('')
//         } 
//   })
   $('input').click(function(){
    $(this).addClass('active')
    $(this).siblings('span').addClass('active')
   })
   $('input').blur(function(){
    $(this).removeClass('active')
    $(this).siblings('span').removeClass('active')
   })
     
})