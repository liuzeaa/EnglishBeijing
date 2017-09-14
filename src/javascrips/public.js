
var title = localStorage.getItem('title');
var index = title.indexOf('=');
if(index>-1){
    title = title.slice(index+1);
    $('#title').html(title);
}
