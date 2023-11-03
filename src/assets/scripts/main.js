function navBarOnClick() {
  document.querySelector('div.navbar__dropdrown').style.display = 'block';
  document.querySelector('div.navbar__bars_close').style.display = 'block';
  document.querySelector('div.navbar__bars_open').style.display = 'none';
  document.querySelector('header').style.height = '260px';
}

function navBarCloseOnClick() {
  document.querySelector('div.navbar__dropdrown').style.display = 'none';
  document.querySelector('div.navbar__bars_close').style.display = 'none';
  document.querySelector('div.navbar__bars_open').style.display = 'block';
  document.querySelector('header').style.height = 'unset';
}