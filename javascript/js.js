var darkmodebtn = document.getElementById("modebtn")
var bodyelement = document.getElementById("body")
var popupcontent = document.getElementById("popup-content")
var popup = document.getElementById("popup");
var header = document.getElementById("header");
var menu = document.getElementById("menu");


function darkmode() {
    if (darkmodebtn.innerText == 'Lights Off') {
        darkmodebtn.innerText = "Lights On";
        bodyelement.style.backgroundColor = "#000";
        bodyelement.style.color = "#fff";
        popupcontent.style.backgroundColor = "#000";
        header.style.backgroundColor = "#000";
        menu.style.color = "fff";
    }
    else {
        darkmodebtn.innerText = "Lights Off";
        bodyelement.style.backgroundColor = "#fff";
        bodyelement.style.color = "#000";
        header.style.backgroundColor = "#fff";
        menu.style.color = "000";
    }
}

function showPopup() {
    popup.style.display = "block";
}

function hidePopup() {
    popup.style.display = "none";
}

document.addEventListener("click", function (event) {
    var submenu = document.querySelector(".submenu");
    if (!event.target.closest(".dropdown")) {
        submenu.style.display = "none";
    }
});

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}
