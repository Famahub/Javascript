// function border() {
//   document.getElementById("myDiv").style.border = "thick solid red";
// }

var img = document.querySelector('img')
img.addEventListener('mouseover' ,function() {
  this.style.border = '3px solid red' ;
});

var img = document.querySelector('img')
img.addEventListener('mouseout' ,function() {
  this.style.border = 'none' ;
});

//exemple 2
// function border(){
//   document.getElementById('img').style.border = 'solid red';
// }
// function borderNone(){
//   document.getElementById('img').style.border = 'none';
// }