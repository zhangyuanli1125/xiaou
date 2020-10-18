$(function(){
    var s= $('table:eq(0) tr:eq(0)~tr td>:checkbox')
    var s1=$('table:eq(1) tr td :checkbox')
    // 第一个全选按钮
    $('table:eq(0) tr td>:checkbox').eq(0).click(function(){
        $('table:eq(0) tr td>:checkbox').prop('checked',$('table:eq(0) tr td>:checkbox').eq(0).prop('checked'))
        s1.prop('checked',$('table:eq(0) tr td>:checkbox').eq(0).prop('checked'))
    })
    // 第二个全选按钮
   s1.click(function(){
        $('table:eq(0) tr td>:checkbox').prop('checked',s1.prop('checked'))
    })
//  商品复选框的状态
    var s= $('table:eq(0) tr:eq(0)~tr td>:checkbox')
    var s1=$('table:eq(1) tr td :checkbox')
   s.each(function(index,value){
       s.click(function(){
          var tag=true  
          for(var i=0;i<s.length;i++){
             if(!s[i].checked){
            tag=false
         }  
          }
          $('table:eq(0) tr td>:checkbox').eq(0).prop('checked',tag)
          s1.eq(0).prop('checked',tag)
       })
   })
//    删除
  var del=$('table:first tr td span a')
 del.on('click',function(){
     $(this).parents('tr').remove()
 })
//  加商品件数
 var jia=$('table:first tr td span.num')
 var n=0
      jia.next('span').on('click',function(){  
     n=$(this).prev('span').text()
     n++
     $(this).prev('span').text(n)
 })

//  减商品件数


    jia.prev('span').on('click',function(){
    n--
    if(n<=0){
        n=0
    }
   $(this).next('span').text(n)
})

 
// 添加hover效果
$('table:eq(0) tr:eq(0)~tr').on('mouseover',function(){
    $(this).addClass('active')
})
$('table:eq(0) tr:eq(0)~tr').on('mouseout',function(){
    $(this).removeClass('active')
})
// 删除选中
$('table:last tr td a').on('click',function(){
    for(var i=0;i<s.length;i++){
        if(s[i].checked){
          $(s[i]).parents('tr').remove()
        }
    }
})
})