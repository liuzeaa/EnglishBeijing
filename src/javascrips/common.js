
$(function(){
    if($('#header')){
        $('#header').load('../common/header.html')
    }
    leftMenu();

    reSize();
    $(window).resize(function () {
        reSize();
    })
    loading();

})

function leftMenu(){
    $('.left ul li span').click(function(){
        $('.left ul li span').removeClass('selected');
        $(this).addClass('selected');
        $('.left ul li div').slideUp();
        var $next =  $(this).next('div');
        $next.stop().slideDown();
    })
}
function reSize() {
    $('.left').height($(window).height() - 105 + 'px');
    $('.right,#iframbox').height($(window).height() - 110 + 'px');
}
function loading() {

    var silderBox = document.getElementById("sliderbox");//dom对象
    var adoms = silderBox.getElementsByTagName("a");//这是一个集合对象HTMLCollection对象
    var len = adoms.length;
    while (len--) {
        adoms[len].onclick = function () {
            localStorage.removeItem('title')
            var src = this.getAttribute("data-href");
            localStorage.setItem('title',src);
            $(this).addClass('selected').siblings().removeClass('selected');
            if (src != null) {
                document.getElementById("iframbox").src = src;
            }
        }
    };
};


