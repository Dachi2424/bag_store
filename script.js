
//#region comment open/close functions
function openComment(){
  const icon = document.querySelector(".message-icon");
  const field = document.querySelector(".message-field");
  icon.style.display = "none";
  field.style.display = "flex";
}
function closeComment(){
  const icon = document.querySelector(".message-icon");
  const field = document.querySelector(".message-field");
  icon.style.display = "flex";
  field.style.display = "none";
}
//#endregion
//#region searchbar open/close functions
function openSearchField(){
  const searchField = document.querySelector(".search-field");
  searchField.style.display = 'unset';
}

function closeSearchField(){
  const searchField = document.querySelector(".search-field");
  searchField.style.display = "none";
}
//#endregion
//#region registation form open/close functions
function openRegistrationForm(){
  const accountForm = document.querySelector(".account-form");
  accountForm.style.display = "flex";
}
function closeRegistrationForm(){
  const accountForm = document.querySelector(".account-form");
  accountForm.style.display = "none";
}
//#endregion
//#region cart open/close functions
function openCart(){
  const cart = document.querySelector(".cart");
  const darkBG = document.querySelector(".header__dark-bg");
  cart.style.display = "unset";
  darkBG.style.display = "unset";
}
function closeCart(){
  const cart = document.querySelector(".cart");
  const darkBG = document.querySelector(".header__dark-bg");
  cart.style.display = "none";
  darkBG.style.display = "none";
}
//#endregion
//#region burger menu open/close functions
function openSidebar(){
  const sidebar = document.querySelector(".header__mobile-ul");
  sidebar.style.display = "flex";
}
function closeSidebar(){
  const sidebar = document.querySelector(".header__mobile-ul");
  sidebar.style.display = "none";
}
//#endregion
