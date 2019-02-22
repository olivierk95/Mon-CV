const eduButton = document.querySelector("#button1");
let eduContent = document.querySelector("#content1");

const weButton = document.querySelector("#button2");
let weContent = document.querySelector("#content2");

const peButton = document.querySelector("#button3");
let peContent = document.querySelector("#content3");

eduButton.addEventListener("click", () => {
    weContent.style.display = "none";
    peContent.style.display = "none";
    if (eduContent.style.display == "flex") {
        eduContent.style.display = "none";
    } else {
        eduContent.style.display = "flex";
    };
});

weButton.addEventListener("click", () => {
    eduContent.style.display = "none";
    peContent.style.display = "none";
    if (weContent.style.display == "flex") {
        weContent.style.display = "none";
    } else {
        weContent.style.display = "flex";
    };
});

peButton.addEventListener("click", () => {
    eduContent.style.display = "none";
    weContent.style.display = "none";
    if (peContent.style.display == "flex") {
        peContent.style.display = "none";
    } else {
        peContent.style.display = "flex";
    };
});
