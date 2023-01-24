
var tab = [

    {
        category:"hoodie",
        imgSrc:"./images/hoodie1.jpg"
    },{
        category:"hoodie",
        imgSrc:"./images/hoodie2.jpg"
    },{
        category:"hoodie",
        imgSrc:"./images/hoodie3.jpg"
    },{
        category:"salopette",
        imgSrc:"./images/salopette1.jpg"
    },{
        category:"salopette",
        imgSrc:"./images/salopette2.jpg"
    },{
        category:"salopette",
        imgSrc:"./images/salopette3.jpg"
    },{
        category:"salopette",
        imgSrc:"./images/salopette4.jpg"
    },{
        category:"tshirt",
        imgSrc:"./images/tshirt1.jpg"
    },{
        category:"tshirt",
        imgSrc:"./images/tshirt2.jpg"
    },{
        category:"tshirt",
        imgSrc:"./images/tshirt3.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste1.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste2.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste3.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste4.jpg"
    },
    
    ];
    var hoo=[
        {
            category:"hoodie",
            imgSrc:"./images/hoodie1.jpg"
        },{
            category:"hoodie",
            imgSrc:"./images/hoodie2.jpg"
        },{
            category:"hoodie",
            imgSrc:"./images/hoodie3.jpg"
        },
    ]
     var sal=[
        {
            category:"salopette",
            imgSrc:"./images/salopette1.png"
        },{
            category:"salopette",
            imgSrc:"./images/salopette2.jpg"
        },{
            category:"salopette",
            imgSrc:"./images/salopette3.jpg"
        },{
            category:"salopette",
            imgSrc:"./images/salopette4.jpg"
        },
    ]
    var tsh=[
        {
            category:"tshirt",
            imgSrc:"./images/tshirt1.jpg"
        },{
            category:"tshirt",
            imgSrc:"./images/tshirt2.jpg"
        },{
            category:"tshirt",
            imgSrc:"./images/tshirt3.jpg"
        },
    ]
    var ves=[{
        category:"veste",
        imgSrc:"./images/veste1.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste2.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste3.jpg"
    },{
        category:"veste",
        imgSrc:"./images/veste4.jpg"
    },]
    var each = function (coll,func){
        if (Array.isArray(coll)){
            for (var i =0;i<coll.length;i++){
            func(coll[i],i)
        }
        }
        else {
            for (var key in coll){
                func(coll[key],key)
            }
        }
    }
    
    var filter = function(array,predicate){
    var acc = [];
    each(array,function(e,i){
        if (predicate(e,i)){
            acc.push(e)
        }
    })
    return acc;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".searchButton").on('click',function (e) { 
    
        var filtredTab=filter(tab,function(e,i){
            return e.category===$(".searchTerm").val() || $(".searchTerm").val()===""
        })
        $("#container").empty()
        each(filtredTab,function(elem,i){
            $("#container").append('<div" class="grid-item"><img width="250px"  src="'+elem.imgSrc+'"/></div>')
            })
    })

    $("#btn1").on("click",function(){
        $(".grid-container").empty()
        each(sal,function(a){
            console.log(a)
            $(".grid-container").append('<div class="x"><img witdth="5px" src="'+a.imgSrc+'"/></div>' )
        })

    })
    $("#btn2").on("click",function(){
        $(".grid-container").empty()
        each(tsh,function(a){
            console.log(a)
            $(".grid-container").append('<div class="y"><img witdth="5px" src="'+a.imgSrc+'"/></div>' )
        })

    })
    $("#btn3").on("click",function(){
        $(".grid-container").empty()
        each(ves,function(a){
            console.log(a)
            $(".grid-container").append('<div class="z"><img witdth="5px" src="'+a.imgSrc+'"/></div>' )
        })

    })
    $("#btn4").on("click",function(){
        $(".grid-container").empty()
        each(hoo,function(a){
            console.log(a)
            $(".grid-container").append('<div class="w"><img witdth="5px" src="'+a.imgSrc+'"/></div>' )
        })

    })
    $('#btn5').on("click",function(){
        $('.grid-container').empty()
    })

