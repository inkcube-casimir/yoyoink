function removeDropdownShow(){
    dropdown.classList.contains("show") ? dropdown.classList.remove("show") : null;
}

const bottomHeader = document.querySelector(".page-header .bottom-header");
const bottomHeaderLinks = bottomHeader.querySelectorAll(".link a");
const otherBtn = bottomHeader.querySelector("nav button");
const dropdown = bottomHeader.querySelector("nav .dropdown")
const searchField = bottomHeader.querySelector("form");
const searchFieldInput = searchField.querySelector("input");
const searchFieldPlaceholderText = searchField.querySelector(".placeholder p");

//bottom header links
for (let i = 0; i < bottomHeaderLinks.length; i++) {
    const link = bottomHeaderLinks[i];
    link.addEventListener("mouseover", ()=>{
        removeDropdownShow();

        link.parentElement.style.borderBottom = "2px solid #e55c61"
    })
    link.addEventListener("mouseleave", ()=>{
        link.parentElement.style.borderBottom = ""
    })
}

//other
otherBtn.addEventListener("mouseover",()=>{
    dropdown.classList.add("show");
})
bottomHeader.addEventListener("mouseleave",()=>{
    removeDropdownShow();
})
searchFieldInput.addEventListener("mouseover", ()=>{
    removeDropdownShow();
})

//search field
searchFieldInput.addEventListener("focus", ()=>{
    searchFieldPlaceholderText.classList.add("hide");
})
searchFieldInput.addEventListener("focusout", ()=>{
    searchFieldPlaceholderText.classList.remove("hide");
})