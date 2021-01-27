const container = document.createElement("div");
const menu = document.createElement("div");

let menuList = [
    food("Cthulu Tentacle Pie", "Cthulu tentacle baked into a savory pie.", "19"),
    food("Dark Young Bark Salad", "Greens and herbs with freshly grated Dark Young bark and a vinagrette dressing.", "14"),
    food("Star Vampire Sashimi", "Thinly sliced Star Vampire seared and crusted with sesame.", "21"),
    food("Carmelized Mi-Go Brain", "Brains served with onion, and our special gravy.", "19"),
    food("Baked Filet of Deep One", "Freshly caught Deep One, from our friends in Innsmouth.", "19"),
    food("Shoggoth Pudding", "Pudding made with freshly collected Shoggoth and organic cane sugar.", "12")
]

function menuDisplay(){
    container.className = "container";
    menu.className = "menu";
    menuList.forEach(function(item){
        menu.appendChild(item)
    })

    container.appendChild(menu)
    document.getElementById("content").appendChild(container)
}

function food(title, desc, price) {

    let foodTitle = document.createElement("h1");
    let foodDesc = document.createElement("p");
    let priceDisplay = document.createElement("p");
    let foodItem = document.createElement("div");
    
    foodItem.className = "food";
    foodTitle.textContent = `${title}`;
    foodDesc.textContent = `${desc}`;
    priceDisplay.textContent = `${price}`;

    foodItem.appendChild(foodTitle);
    foodItem.appendChild(foodDesc);
    foodItem.appendChild(priceDisplay)
    
    return foodItem;
}

export default menuDisplay