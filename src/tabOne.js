const container = document.createElement("div");
const mainPage = document.createElement("div");

function tabOne() {
    container.className = "container";
    mainPage.className = "main-page";
    mainPage.textContent = "Welcome to Eldritch Cuisine, the finest purveyors of gourmet horror."
    container.appendChild(mainPage);
    document.getElementById("content").appendChild(container);
}


export default tabOne;