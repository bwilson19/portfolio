const logo = document.getElementById('logo');

function logoHover() {
  logo.src = 'images/logohover.png';
  logo.style.boxShadow = '0px 0px 200px 1px white';
}

function returnLogo() {
  logo.src = 'images/logo.png';
  logo.style.boxShadow = '0px 0px 0px 0px';
}

logo.addEventListener('mouseover', logoHover);
logo.addEventListener('mouseout', returnLogo);
