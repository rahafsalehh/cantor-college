
document.addEventListener("DOMContentLoaded", function() {
  const moreLink = document.getElementById("moreLink");
  const dropDownMenu = document.getElementById("dropDownMenu");
  

  //the css was not working so I fixed the issue here 
  dropDownMenu.style.display = "none";
  

 moreLink.addEventListener("click", function(event) {
    
  if (dropDownMenu.style.display === "none" || dropDownMenu.style.display === "") {
    dropDownMenu.style.display = "block"; 
    dropDownMenu.style.display= "flex"; 
   
  } else {
    dropDownMenu.style.display = "none"; 
  }
});

  
dropDownMenu.addEventListener("mouseenter", function() {
  dropDownMenu.style.display = "block";
  dropDownMenu.style.display = "flex"; 
});

dropDownMenu.addEventListener("mouseleave", function() {
  dropDownMenu.style.display = "none"; 
  });
});




