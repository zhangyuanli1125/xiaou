$(function(){
    var reg=/^\w{1,8}@([0-9]||[a-z]||[A-Z]){1,6}(.com||.com.cn)$/
    var reg1=/([0-9]||[a-z]||[A-Z]){6,20}/
    var tex=$(":text:eq(0)")
    tex.blur(function(){
        if(tex.val().match(reg)!=null){
            $(".box1 p:first").text('√')
         }else  if(tex.val()==''){
             $(".box1 p:first").text('请输入邮箱')
          }else{
        $(".box1 p:first").text('邮箱格式错误')
          } 
    })
   var passw=$(":password")
    passw.blur(function(){
         if(passw.val()==''){
            $(".box1 p:eq(1)").text('请输入密码')
        }else  if((passw.val().length>6) && (passw.val().length<20)){
            $(".box1 p:eq(1)").text('√')
          }else{
         $(".box1 p:eq(1)").text('密码格式为6-20位字母数字组合')
         $(this).val('')
        }
     })
  
   $('input').click(function(){
    $(this).addClass('active')
    $(this).siblings('span').addClass('active')
   })
   $('input').blur(function(){
    $(this).removeClass('active')
    $(this).siblings('span').removeClass('active')
   })
     
})