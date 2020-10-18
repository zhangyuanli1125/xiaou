$(function(){
    let init=()=>{
     // pingp()
       first()
       initEvent()
    }
    // 商品分类
    $.ajax({
        type:'get',
        url:'http://localhost:3001/category/first',
        success(res){
            let {result:{data}}=res
            let html=template('yijidaohang',{data})
            $('.hover').html(html) 
        }   
    })
    // 热门搜索
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
    //一级
    // let pingp=async()=>{
    //     let {result:{data}}=await myAjax({
    //         url:'http://localhost:3001/category/first'
    //     })
    //     let html=template('ping',{data})
    //     let yiji_id=data
    //     $('.pingpai').html(html)
        
    //     // 一级循环
    //     $('.pingpai span').each(function(index,value){
    //         // 一级点击
    //         $(value).on('click',function(){
    //             // 二级
    //             let erjifen=async()=>{
    //                 let {result:{data}}=await myAjax({
    //                     url:"http://localhost:3001/category/second",
    //                     data:{
    //                         first_id:yiji_id[index].first_id
    //                     }
    //                 })
    //             let html=template('erjifenlei',{data})
    //             $('.erji').html(html)
    //             $('.sanjifen').html('')
    //             $(this).addClass('hover').siblings().removeClass('hover')
    //             let erji_id=data
    //             // 二级循环
    //             $('.erji span').each(function(index,value){
    //                 // 二级点击
    //               $(value).on('click',function(){
    //                 //   三级
    //                 let sanji=async()=>{
    //                     let {result:{data}}=await myAjax({
    //                         url:"http://localhost:3001/category/thired",
    //                         data:{
    //                             second_id:erji_id[index].second_id
    //                         }
    //                     })
    //                     let html=template('sanjifenlei',{data})
    //                     $('.sanjifen').html(html)
    //                     $(this).addClass('hover').siblings().removeClass('hover')
    //                     let sanji_id=data
    //                     // 点击三级出现详情
    //                       $('.sanjifen span').each(function(index,value){
    //                         $(value).click(function(){
    //                             let xiangqing=async()=>{
    //                                 let {result}=await myAjax({
    //                                     url:"http://localhost:3001/category/goodslist",
    //                                     data:{
    //                                         thired_id:sanji_id[index].thired_id
    //                                     }
    //                                 })
    //                                 let html=template('xiangqingfen',result)
    //                                 $('.box_wrap').html(html)
    //                             }
    //                             $(this).addClass('hover').siblings().removeClass('hover')
    //                             xiangqing()
    //                         })
    //                     })
                    
    //                 }
    //                 sanji()
    //             })
    //         })
    //             }
    //             erjifen()
              
    //     })
         
    // }) 
    
    // }
    let initEvent=function(){
        $('.pingpai').on('click','span',firstClick)
        $('.erji').on('click','span',secondClick)
        $('.sanjifen').on('click','span',thiredClick)
    }
    // 默认一级
    let first=async()=>{
        let {result:{data}}=await myAjax({
            url:'http://localhost:3001/category/first'
        })
        let html=template('ping',{data})
        $('.pingpai').html(html)
        let first_id = data[0].first_id
        erjifen(first_id)
    }
    // 默认二级
    let erjifen=async(first_id)=>{
        let {result:{data}}=await myAjax({
            url:"http://localhost:3001/category/second",
            data:{
                first_id
            }
        })
    let html=template('erjifenlei',{data})
    $('.erji').html(html)
    let second_id = data[0].second_id
    sanji(second_id)
    }
    // 默认三级
    let sanji=async(second_id)=>{
        let {result:{data}}=await myAjax({
            url:"http://localhost:3001/category/thired",
            data:{
                second_id
            }
        })
        let html=template('sanjifenlei',{data})
        $('.sanjifen').html(html)
       let thired_id = data[0].thired_id
        xiangqing(thired_id)
    }
    // 默认详情
    let xiangqing=async(thired_id)=>{
        let {result}=await myAjax({
            url:"http://localhost:3001/category/goodslist",
            data:{
                thired_id
            }
        })
        let html=template('xiangqingfen',result)
        $('.box_wrap').html(html) 
    }
// 一级点击
    let firstClick=function(){
        $(this).addClass('hover').siblings().removeClass('hover')
        let first_id=$(this).data('id')
        erjifen(first_id)
    }
    // 二级点击
    let secondClick=function(){
        $(this).addClass('hover').siblings().removeClass('hover')
        let second_id=$(this).data('id')
        sanji(second_id)
    }
    // 三级点击
    let thiredClick=function(){
       $(this).addClass('hover').siblings().removeClass('hover')
        let thired_id=$(this).data('id')
        xiangqing(thired_id)
        
    }
    init()
})