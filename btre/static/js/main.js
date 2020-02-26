const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

//document.querySelector(".close").onclick = function(){
//    document.querySelector('#message').style.display = 'none'
//};

setTimeout(function(){
    $('#message').fadeOut('slow');
}, 3000)