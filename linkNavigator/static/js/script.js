const page = document.querySelector(".page")
const dashNav = document.querySelector(".dash-nav")
const editNav = document.querySelector(".edit-nav")
const previewNav = document.querySelector(".preview-nav")




if(page.innerHTML == "dashboard"){
    dashNav.classList.add("active-nav")
    editNav.classList.remove("active-nav")
    preview.classList.remove("active-nav")

}else if(page.innerHTML == "edit-profile"){
    
    dashNav.classList.remove("active-nav")
    editNav.classList.add("active-nav")
    preview.classList.remove("active-nav")

}
else if(page.innerHTML == "preview-profile"){
    dashNav.classList.remove("active-nav")
    editNav.classList.remove("active-nav")
    preview.classList.add("active-nav")
}



