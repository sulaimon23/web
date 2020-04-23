function change (obj) {
   let head = document.getElementsByClassName('layout')[0];

   if(window.pageYOffset < 400){
n      head.setAttribute('class', 'row layout dark');
   }else{
    head.setAttribute('class', 'row layout light');
   }
console.log(head.className)

}
 