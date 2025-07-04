const nav = document.getElementById("nav-resp");
const navListResp = document.querySelector('.content-nav-resp');

nav.addEventListener('click',()=>{
    if(navListResp.style.display === 'block')
    {
        nav.classList.remove('open');
        nav.classList.add('close');
        navListResp.style.display = 'none';
    }
    else{
        nav.classList.add('open');
        nav.classList.remove('close');
        navListResp.style.display = 'block';
    }
}   
);