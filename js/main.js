function logoHover(){
    document.getElementById("logo").src ="images/logohover.png";
}

function returnLogo(){
    document.getElementById("logo").src ="images/logo.png";
}

document.getElementById("logo").addEventListener('mouseover', logoHover);
document.getElementById("logo").addEventListener('mouseout', returnLogo);