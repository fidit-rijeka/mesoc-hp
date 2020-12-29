const openMobileNav = () => {
  const cont = document.querySelector('.mobileNavContainer');
  const lines = document.querySelector('.burgerLines');
  lines.classList.toggle('hamOpen');
  cont.classList.toggle('navContMActive');
};