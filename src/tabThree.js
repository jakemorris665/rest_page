const container = document.createElement("div");
const contactPage = document.createElement("div");
const hoursOpen = document.createElement("ul");
const phrase = document.createElement("p")
const phone = document.createElement("p")

let hoursList = [
    hoursMaker("Monday CLOSED"),
    hoursMaker("Tuesday 14:00-21:00"),
    hoursMaker("Wednesday 14:00-21:00"),
    hoursMaker("Thursday 14:00-21:00"),
    hoursMaker("Friday 17:00-23:00"),
    hoursMaker("Saturday 17:00-23:00"),
    hoursMaker("Sunday CLOSED")
]

function hoursMaker(time) {
    let hour = document.createElement("li");
    hour.textContent = `${time}`
    return hour;
}

function contactDisplay(){

    container.className = "container"

    contactPage.className = "contact"

    hoursList.forEach(function(item){
        hoursOpen.appendChild(item);
    })

    contactPage.appendChild(hoursOpen)

    phrase.textContent = "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn";
    phone.textContent = "TEL 1-622-592-06421";

    contactPage.appendChild(phrase);
    contactPage.appendChild(phone);

    container.appendChild(contactPage);

    document.getElementById("content").appendChild(container)

}

export default contactDisplay