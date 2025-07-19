"use strict";

const close = document.querySelector(".close-menu");
const open = document.querySelector(".open-menu");
const menu = document.querySelector(".menu");
const featuresBtn = document.querySelectorAll(".features-btn");
const companyBtn = document.querySelectorAll(".company-btn");
const featuresList = document.querySelectorAll(".f-lists");
const companyList = document.querySelectorAll(".lists");
const overlay = document.querySelector(".overlay");
const arrowUpFeatures = document.querySelectorAll(".arrow-up-features");
const arrowUpCompany = document.querySelectorAll(".arrow-up-company");

const closeMenu = function () {
  menu.style.display = "none";
  overlay.style.display = "none";
};
overlay.addEventListener("click", closeMenu);
close.addEventListener("click", closeMenu);

open.addEventListener("click", function () {
  menu.style.display = "block";
  overlay.style.display = "block";
});

for (let i = 0; i < featuresBtn.length; i++) {
  featuresBtn[i].addEventListener("click", function () {
    console.log("works");

    for (let i = 0; i < featuresList.length; i++) {
      featuresList[i].classList.toggle("features-list");
      featuresList[i].classList.toggle("mobile-features-list");
      if (featuresList[i].classList.contains("features-list")) {
        for (let i = 0; i < arrowUpFeatures.length; i++) {
          arrowUpFeatures[i].src = "images/icon-arrow-up.svg";
        }
      } else {
        arrowUpFeatures[i].src = "images/icon-arrow-down.svg";
      }
    }
  });
}

for (let i = 0; i < companyBtn.length; i++) {
  companyBtn[i].addEventListener("click", function () {
    console.log("works");

    for (let i = 0; i < companyList.length; i++) {
      companyList[i].classList.toggle("company-list");
      companyList[i].classList.toggle("mobile-company-list");
      if (companyList[i].classList.contains("company-list")) {
        for (let i = 0; i < arrowUpCompany.length; i++) {
          arrowUpCompany[i].src = "images/icon-arrow-up.svg";
        }
        arrowUpCompany[i].src = "images/icon-arrow-up.svg";
      } else {
        arrowUpCompany[i].src = "images/icon-arrow-down.svg";
      }
    }
  });
}
