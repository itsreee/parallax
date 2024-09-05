const text = document.getElementById('text');
window.addEventListener('scroll',()=>{
    const value = window.scrollY;
    text.style.marginTop=value*2.5+'px';
    const moon = document.querySelector('#moon');
    const batsec = document.querySelector('#batsec');
    batsec.style.left=value*-2.5+'px';
    const branch = document.querySelector('#branch');
    branch.style.left=value*-2.5+'px';
});