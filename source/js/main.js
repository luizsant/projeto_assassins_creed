window.addEventListener('scroll', function() {
    let menu1 = document.getElementById('menu1');
    let menu2 = document.getElementById('menu2');
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > menu1.offsetHeight) {
        menu1.style.top = "-60px"; // Correspondente à altura do #menu1
        menu2.style.top = "0";
    } else {
        menu1.style.top = "0";
        menu2.style.top = "60px"; // Correspondente à altura do #menu1
    }   
});
