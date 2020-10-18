$(function(){
    let init = ()=>{
        popularity()
        home()
        paihang()
        timet()
   }
//   限时抢购
let timet=async()=>{
    let {result}=await myAjax({
        url:"http://ujiuye.tech:3000/api/flash"
    })
    let html=template('time',result)
    $('.top_right').html(html)
    // 倒计时
    setInterval(fn,1000)
    function fn(){
        let now=new Date()
        let year=now.getFullYear()
        let mou=now.getMonth()+1
        let day=now.getDate()
        let target=result.data[1].time+":00"+":00"
        let nowday=new Date(year+"-"+mou+"-"+day+"-"+target)
        let n=parseInt((nowday-now)/1000)
        let h=d(parseInt(n/3600))
        let m=d(parseInt(n%3600/60))
        let s=d(parseInt(n%60))
        $('.h').text(h)
        $('.m').text(m)
        $('.s').text(s)
    }
    $('.top_right div').eq(0).addClass('bg')
    $('.top_right span').eq(1).text('即将开始')
    // 默认显示
           let da=Object.keys(result.data[0])[0]
           let data1=result.data[0][da]
            let html1=template('timex',{data1})
            $('#tx').html(html1) 
            // 点击切换 
    $('.top_right div').each(function(index,value){
        $(value).click(function(){
           let da=Object.keys(result.data[index])[0]
           let data1=result.data[index][da]
            let html=template('timex',{data1})
            $('#tx').html(html)       
            $(this).addClass('bg').siblings().removeClass('bg')
        })
  }) 
}
//   人气好货
   let popularity=async()=>{
       let {result}=await myAjax({
           url:"http://localhost:3001/api/popularity"
       })
       let html=template('popularityT',result)
       $('.se_content').html(html)
   } 
//    排行榜
  let paihang=async()=>{
      let {result}=await myAjax({
          url:"http://localhost:3001/api//ranking"
      })
     let html=template('paihangbang',result)
     $('#paih').html(html)
    //  默认显示
     let html1=template('paihangbangx',result.data[0])
     $('.left_bottom').html(html1)
     $('#paih span').eq(0).addClass('xq')
    //  点击时显示相应内容
     $('#paih span').each(function(index,value){
         $(value).click(function(){ 
             $(this).addClass('xq').siblings().removeClass('xq')
           let html=template('paihangbangx',result.data[index])
          $('.left_bottom').html(html)
         })
     })
  }
//    其他各大版块
let home=async()=>{
    let {result}=await myAjax({
        url:"http://localhost:3001/api/home"
    })
    let html=template('home',result)
    $('.five').html(html)
}
    // 搜索关键字
    $.ajax({
        type:"get",
        url:"http://www.ujiuye.tech:3000/api/hot",
        success(res){
            let {result:{data}}=res
            let html=template('search_hot',{data})
            $('.wen').html(html)
            $('.wen span').last().css("border",0)
        }
    })
    // 猜你喜欢
    $.ajax({
        type:'get',
        url:"http://localhost:3001/api/like",
        success(res){
            let {result:{data}}=res
            let html=template("search_cai",{data})
            $('.eight').html(html)
        } 
    })

    // 商品分类
    $.ajax({
        type:'get',
        url:'http://www.ujiuye.tech:3000/api/category/first',
        success(res){
            let {result:{data}}=res
            let html=template('yijidaohang',{data})
            $('.hover').html(html) 
        }   
    })
       // 轮播图
    $.ajax({
        type:'get',
        url:"http://localhost:3001/api/banner",
        success(res){
            let {result:{data}}=res
            let html=template('lunbotu',{data})
            $('.lunbo .tu').html(html)
            auto()
        }
    })
 
   function auto(){
      for(var i=0;i<$('.tu li').length;i++){
           $('.lunbo p').append("<span></span>")
      }
        $('.lunbo p span:first').addClass('active')
       timer=setInterval(show,3000)
       var n=0
       var len=$('.tu li').length
    //    自动轮播
       function show(){
           n++
           if(n==len){
               n=0
           }
           $('.lunbo p span').eq(n).addClass('active').siblings().removeClass('active')
           $('.lunbo li').eq(n).fadeIn(1200).siblings().fadeOut(1200)
        }
        // 圆点点击
       $('.lunbo p span').click(function(){
           n=$(this).index()
           $('.lunbo li').eq($(this).index()).fadeIn(1200).siblings().fadeOut(1200)
           $(this).addClass('active').siblings().removeClass('active')
       })
    //    鼠标移入
       $('.lunbo').mouseover(function(){
           clearInterval(timer)
           $('.lunbo button').css('display','block')
       })
    //    鼠标移出
       $('.lunbo').mouseout(function(){
        timer=setInterval(show,3000)
        $('.lunbo button').css('display','none')
       })
    //    左箭头点击
       $('.lunbo button:first').click(function(){
           n--
           if(n<0){
               n=len-1
           }
           $('.lunbo p span').eq(n).addClass('active').siblings().removeClass('active')
           $('.lunbo li').eq(n).fadeIn(1200).siblings().fadeOut(1200)
       })
    //    右箭头点击
       $('.lunbo button:last').click(function(){
           show()
      })
    } 
   
    $(window).scroll(function(){
        $('.zhiding').click(function(){
            $(window).scrollTop(0)
        })
        if($(window).scrollTop()>=1200){
            $('.goback').fadeIn(1000)
        }else{
            $('.goback').fadeOut(1000)
        }
        $('.goback').click(function(){
            $('html').animate({"scrollTop":0},2000,"linear")
        })
    })
    // 数字小于10时前面加0向导
    function d(value){
      return value<10?"0"+value:value
    }
    init()
})
