$(".menu__burger").on("click", function(){
    $(".mobile-menu").css('left', '0')
    $(".filter"). css('display', 'block')
    $(".menu__burger"). css('display', 'none')
    $(".menu__close-btn").css('display', "block")
    $(".menu__close-btn").on("click", function(){
        $(".mobile-menu").css('left', '100%')  
        $(".menu__burger"). css('display', 'block')
    $(".menu__close-btn").css('display', "none")
    $(".filter"). css('display', 'none')
    })
    $(".mobile-menu").on("click", function(){
        $(".mobile-menu").css('left', '100%')  
        $(".menu__burger"). css('display', 'block')
    $(".menu__close-btn").css('display', "none")
    $(".filter"). css('display', 'none')
    })
    $(".filter").on("click", function(){
        $(".mobile-menu").css('left', '100%')  
        $(".menu__burger"). css('display', 'block')
    $(".menu__close-btn").css('display', "none")
    $(".filter"). css('display', 'none')
    })

})