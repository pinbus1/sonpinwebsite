//empty for now
//sike

window.addEventListener('scroll', function() {
    const mainSite = document.getElementById('main-site');
    const trigger = window.innerHeight * 0.4;
    
    if (window.scrollY > trigger) {
        mainSite.classList.add('revealed');
    } else {
        mainSite.classList.remove('revealed');
    }
});