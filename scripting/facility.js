function changeBackground(){

  let ft = document.getElementById("facilityTitle");
  ft.style.backgroundColor= "rgba(254, 254, 238, 0.621)";
  ft.style.color="rgba(0, 0, 0, 0.789)";
  ft.style.cursor="pointer";

}

function backToNormal(){

let revert = document.getElementById("facilityTitle");
revert.style.backgroundColor="rgba(0, 0, 0, 0.644)";
revert.style.color="rgba(254, 254, 238, 0.904)";
}
