
let header = document.createElement("header");
let navBar = document.createElement("ul");
let containerTop = document.createElement("div");


function navListItem(id, text) {

    let navItem = document.createElement("li");
    navItem.id = `${id}`;
    navItem.textContent = `${text}`;
    return navItem
}

let navItemsList = [
    navListItem("home", "Home"),
    navListItem("menu", "Menu"),
    navListItem("contact", "Contact")
]

function createHeader() {

    containerTop.className = "container-top"

    header.className = "banner-top";
    header.textContent = "Eldritch Cuisine";

    containerTop.appendChild(header)
    containerTop.appendChild(navBar);

    navItemsList.forEach(function(item){
        navBar.appendChild(item)
    })

    document.getElementById("content").appendChild(containerTop)

}

export default createHeader;