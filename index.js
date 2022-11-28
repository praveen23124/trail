

function openNav(){
  document.querySelector("#SidePanelMenu").style.width = "70%";
  document.querySelector(".closebtn").style.display = "block";
}

function closeNav(){
  document.querySelector("#SidePanelMenu").style.width = "0%";
  document.querySelector(".closebtn").style.display = "none";
}

function showCompanyFeatures(){
  // const x = document.querySelector(".companyFeatures");
  if(document.querySelector(".companyFeatures").style.display === "none"){
    document.querySelector(".companyFeatures").style.display = "block";
  }
  else{
    document.querySelector(".companyFeatures").style.display = "none";
  }

}
function showCompanyInfo(){
  // const x = document.querySelector(".companyFeatures");
  if(document.querySelector(".companyInfo").style.display === "none"){
    document.querySelector(".companyInfo").style.display = "block";
  }
  else{
    document.querySelector(".companyInfo").style.display = "none";
  }

}
