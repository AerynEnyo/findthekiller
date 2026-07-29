// ===== Witness List =====

const witnesses = [

    {
        name: "Witness #1",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    }

];

// ===============================

const witnessList = document.querySelector(".witnessList");

const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

witnesses.forEach(witness => {

    const button = document.createElement("button");

    button.className = "witnessBtn";

    button.innerHTML = `
        <img src="${witness.thumb}">
        <span>${witness.name}</span>
    `;

    button.addEventListener("click", () => {

        popupImage.src = witness.image;
        popup.style.display = "flex";

    });

    witnessList.appendChild(button);

});

closePopup.onclick = () => {
    popup.style.display = "none";
};

popup.onclick = e => {

    if(e.target === popup)
        popup.style.display = "none";

};
