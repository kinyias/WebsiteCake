 // Sidenav li open close
		
 const navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
 for (let y = 0; y < navUl.length; y++) {
     navUl[y].addEventListener('click', function () { checkLi(this) });
 }

 function checkLi(current) {
     navUl.forEach(el => el.classList.remove('open'));
     current.classList.add('open');
 }

 //Back to top
 $('.scroltop').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

