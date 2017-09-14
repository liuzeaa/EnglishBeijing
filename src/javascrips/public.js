
var title = localStorage.getItem('title');
var index = title.indexOf('=');
if(index>-1){
    title = title.slice(index+1);
    $('#title').html(title);
}


var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
$('#cancel').click(function(){
    parent.layer.close(index); //再执行关闭
})

