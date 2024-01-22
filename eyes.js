const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
   const x = (event.clientX * 100) / window.innerWidth + '%';
   const y = (event.clientY * 100) / window.innerHeight + '%';

   for (i = 0; i < balls.length; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
   }

   // const eye2 = document.createElement('div');
   // eye2.className = 'eyes';
   // document.body.appendChild(eye2);
};



// const balls2 = document.getElementsByClassName('ball2');

// document.onmousemove = (event) => {
//    const x = (event.clientX * 100) / window.innerWidth + '%';
//    const y = (event.clientY * 100) / window.innerHeight + '%';

//    balls2[0].style.left = x;
//    balls2[0].style.top = y;
//    balls2[0].transform = 'translate(-' + x + ',-' + y + ')';
// };

// const balls2 = document.getElementsByClassName('ball2');

// document.onmousemove = (event) => {
//    const x = (event.clientX * 100) / window.innerWidth + '%';
//    const y = (event.clientY * 100) / window.innerHeight + '%';

//    balls2[0].style.left = x;
//    balls2[0].style.top = y;
//    balls2[0].transform = 'translate(-' + x + ',-' + y + ')';
// };