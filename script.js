window.addEventListener('scroll',function(){
    let header = this.document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

let menuToggle = document.querySelector('.toggle');
menuToggle.onclick = () =>{
    menuToggle.classList.toggle('active');
}

