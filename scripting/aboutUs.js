function changeBackground(){

  let aut = document.getElementById("aboutUsTitle");
  aut.style.backgroundColor= "rgba(254, 254, 238, 0.621)";
  aut.style.color="rgba(0, 0, 0, 0.789)";
  aut.style.cursor="pointer";

}

function backToNormal(){

let revert = document.getElementById("aboutUsTitle");
revert.style.backgroundColor="rgba(0, 0, 0, 0.644)";
revert.style.color="rgba(254, 254, 238, 0.904)";
}



let imageAr = [
  'images/aboutUsBuilding.jpg',
  'images/Building2.jpeg',
];

let currentIndex = 0;

function chgImage() {
  currentIndex++;
  if (currentIndex >= imageAr.length) {
    currentIndex = 0;
  }
  document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
}

setInterval(chgImage, 2000);

const copyRight= document.getElementById('copyRight');

 copyRight.addEventListener("mouseover", event => {
  copyRight.style.textDecoration.underline;
});

