const pageContainer = document.querySelector(".nav__list");

pageContainer.addEventListener("click", pageToggle);

const pageBtns = document.getElementsByClassName("nav__link");
const aboutPage = document.querySelector(".page__about");
const galleryPage = document.querySelector(".page__gallery");
const contactPage = document.querySelector(".page__contact");
const contactRedirect = document.querySelector(".contactRedirect");

contactRedirect.addEventListener("click", pageToggle);

function pageToggle(event) {
  const selected = event.target;

  if (selected.classList.contains("about")) {
    for (let i = 0; i < pageBtns.length; i++) {
      pageBtns[i].classList.remove("active__page");
    }
    socialBlock.style.display = "none";
    aboutPage.style.display = "flex";
    galleryPage.style.display = "none";
    contactPage.style.display = "none";
    selected.classList.add("active__page");
  }
  if (selected.classList.contains("gallery")) {
    for (let i = 0; i < pageBtns.length; i++) {
      pageBtns[i].classList.remove("active__page");
    }
    selected.classList.add("active__page");
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
    galleryPage.style.display = "grid";
  }
  if (selected.classList.contains("contact") || selected.classList.contains("contactRedirect") ) {
    for (let i = 0; i < pageBtns.length; i++) {
      pageBtns[i].classList.remove("active__page");
    }
    
    aboutPage.style.display = "none";
    contactPage.style.display = "grid";
    galleryPage.style.display = "none";
    selected.classList.add("active__page");
    document.querySelector(".contact").classList.add("active__page")
  }
}

const filterContainer = document.querySelector(".gallery__filters");

filterContainer.addEventListener("click", galleryToggle);

const filterBtns = document.getElementsByClassName("gallery__filter");
const sportImgs = document.getElementsByClassName("sport__image");
const streetImgs = document.getElementsByClassName("street__image");
const miscImgs = document.getElementsByClassName("misc__image");
const portraitImgs = document.getElementsByClassName("portrait__image");
const galleryWrapper = document.querySelector(".wrapper__wrapper")

function galleryToggle(event) {
  const selected = event.target;
  if (selected.classList.contains("all")) {
    for (let i = 0; i < filterBtns.length; i++) {
      filterBtns[i].classList.remove("active__filter");
    }
    for (let i = 0; i < sportImgs.length; i++){
      sportImgs[i].style.display = "block";
    }
    for (let i = 0; i < streetImgs.length; i++){
      streetImgs[i].style.display = "block";
    }
    for (let i = 0; i < miscImgs.length; i++){
      miscImgs[i].style.display = "block";
    }
     for (let i = 0; i < miscImgs.length; i++){
      portraitImgs[i].style.display = "block";
    }
    selected.classList.add("active__filter");
    if (window.innerWidth > 749){
    galleryWrapper.style.display = "block";
    galleryContainer.style.flexDirection = "column";
    galleryContainer.style.justifyContent = "start";
    }
  }
  if (selected.classList.contains("street")) {
    for (let i = 0; i < filterBtns.length; i++) {
      filterBtns[i].classList.remove("active__filter");
    }
    for (let i = 0; i < sportImgs.length; i++) {
      sportImgs[i].style.display = "none";
    }
    for (let i = 0; i < streetImgs.length; i++){
      streetImgs[i].style.display = "block";
    }
    for (let i = 0; i < miscImgs.length; i++){
      miscImgs[i].style.display = "none";
    }
    for (let i = 0; i < miscImgs.length; i++){
      portraitImgs[i].style.display = "none";
    }
    selected.classList.add("active__filter");
    if (window.innerWidth > 749){
    galleryWrapper.style.display = "grid";
    galleryContainer.style.flexDirection = "row";
    galleryContainer.style.justifyContent = "center";
    }
  }
  if (selected.classList.contains("sport")) {
    for (let i = 0; i < filterBtns.length; i++) {
      filterBtns[i].classList.remove("active__filter");
    }
    for (let i = 0; i < sportImgs.length; i++) {
      sportImgs[i].style.display = "block";
    }
    for (let i = 0; i < streetImgs.length; i++){
      streetImgs[i].style.display = "none";
    }
    for (let i = 0; i < miscImgs.length; i++){
      miscImgs[i].style.display = "none";
    }
    for (let i = 0; i < miscImgs.length; i++){
      portraitImgs[i].style.display = "none";
    }
    selected.classList.add("active__filter");
    if (window.innerWidth > 749){
    galleryWrapper.style.display = "grid";
    galleryContainer.style.flexDirection = "row";
    galleryContainer.style.justifyContent = "center";
    }
  }if (selected.classList.contains("misc")) {
    for (let i = 0; i < filterBtns.length; i++) {
      filterBtns[i].classList.remove("active__filter");
    }
    for (let i = 0; i < sportImgs.length; i++) {
      sportImgs[i].style.display = "none";
    }
    for (let i = 0; i < streetImgs.length; i++){
      streetImgs[i].style.display = "none";
    }
    for (let i = 0; i < miscImgs.length; i++){
      portraitImgs[i].style.display = "none";
    }
    for (let i = 0; i < miscImgs.length; i++){
      miscImgs[i].style.display = "block";
    }
    selected.classList.add("active__filter");
    if (window.innerWidth > 749){
    galleryWrapper.style.display = "grid";
    galleryContainer.style.flexDirection = "row";
    galleryContainer.style.justifyContent = "center";
    }
  }
  if (selected.classList.contains("portraitFilter")) {
    for (let i = 0; i < filterBtns.length; i++) {
      filterBtns[i].classList.remove("active__filter");
    }
    for (let i = 0; i < sportImgs.length; i++) {
      sportImgs[i].style.display = "none";
    }
    for (let i = 0; i < streetImgs.length; i++){
      streetImgs[i].style.display = "none";
    }
    for (let i = 0; i < miscImgs.length; i++){
      portraitImgs[i].style.display = "block";
    }
    for (let i = 0; i < miscImgs.length; i++){
      miscImgs[i].style.display = "none";
    }
    selected.classList.add("active__filter");
    if (window.innerWidth > 749){
    galleryWrapper.style.display = "grid";
    galleryContainer.style.flexDirection = "row";
    galleryContainer.style.justifyContent = "center";
    }
  }
}

//Modal

const galleryContainer = document.querySelector(".gallery__wrapper")
const modal = document.querySelector(".modal__image")
const modalDisplay = document.querySelector(".modal__display")

galleryContainer.addEventListener("click", showModal);

modalDisplay.addEventListener("click", closeModal);

function showModal(event){
  if (window.matchMedia('(max-width: 760px)').matches) {
    return
  }
  const selected = event.target;
  if(!selected.classList.contains("imgModal")){
    return
  }
  if(selected.classList.contains("portrait")){
    modal.style.maxHeight = "90%"
  }
  if(selected.classList.contains("landscape")){
    modal.style.maxWidth = "70%"
  }
  
  modalDisplay.style.display = "grid";
  const selectedImage = selected.getAttribute("src");
  modal.setAttribute("src", selectedImage);
  
}

function closeModal(){
   modalDisplay.style.display = "none";
}

//clear form
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

//social close
const xbutton = document.querySelector(".social__close");
const socialBlock = document.querySelector(".social__block");

xbutton.addEventListener("click", closeSocial);

function closeSocial(){
  socialBlock.style.display = "none";
}
