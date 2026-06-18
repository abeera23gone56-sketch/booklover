function toggleDark(){
    document.body.classList.toggle("dark");
}

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}