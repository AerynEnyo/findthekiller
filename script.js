const folders = [
    {
        name: "Crime Scene Photos",
        icon: "images/folder.png",
        type: "folder",
        open: "crimeScene"
    },
    {
        name: "Witnesses",
        icon: "images/folder.png",
        type: "folder",
        open: "witnesses"
    }
];

const witnesses = [
    {
        name: "Witness #1",
        thumb: "images/Case1.png",
        images: [
        "images/Case1Opened.png",
        "images/Case1Notes.png"
    ]
    }
];

const crimeScene = [
    {
        name: "Photo #1",
        thumb: "images/Case1.png",
        image: "images/crime1_large.png"
    },
    {
        name: "Photo #2",
        thumb: "images/Case1.png",
        image: "images/crime2_large.png"
    }
];

const list = document.querySelector(".witnessList");
const title = document.getElementById("folderTitle");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
let scale = 1;
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
let currentImages = [];
let currentImage = 0;


function showFolders(){

    title.textContent = "Case Files";

    list.innerHTML = "";

    folders.forEach(folder=>{

        const btn=document.createElement("button");

        btn.className="witnessBtn";

        btn.innerHTML=`
            <img src="${folder.icon}">
            <span>${folder.name}</span>
        `;

        btn.onclick=()=>{

            if(folder.open==="witnesses")
                showWitnesses();

            if(folder.open==="crimeScene")
                showCrimeScene();

        };

        list.appendChild(btn);

    });

}

function showWitnesses(){

    title.textContent="Witnesses";

    list.innerHTML="";
	
	addBackButton();

    witnesses.forEach(addImageButton);

}

function showCrimeScene(){

    title.textContent="Crime Scene Photos";

    list.innerHTML="";
	
	addBackButton();

    crimeScene.forEach(addImageButton);

}

function addImageButton(item){

    const btn=document.createElement("button");

    btn.className="witnessBtn";

    btn.innerHTML=`
        <img src="${item.thumb}">
        <span>${item.name}</span>
    `;

	btn.onclick = () => {

		currentImages = item.images;
		currentImage = 0;

		popupImage.src = currentImages[currentImage];

		scale = 1;
		translateX = 0;
		translateY = 0;

		popupImage.style.transform =
			`translate(0px, 0px) scale(1)`;

		popup.style.display = "flex";
	};

    list.appendChild(btn);

}
function addBackButton(){

    const btn = document.createElement("button");

    btn.className = "witnessBtn";

    btn.innerHTML = `
        <img src="images/folder.png">
        <span>..</span>
    `;

    btn.onclick = showFolders;

    list.appendChild(btn);

}

showFolders();

const closePopup = document.getElementById("closePopup");

closePopup.onclick = () => {
    popup.style.display = "none";
};

popup.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
};
popupImage.addEventListener("wheel", (e) => {

    e.preventDefault();

    if (e.deltaY < 0)
        scale *= 1.15;
    else
        scale /= 1.15;

    scale = Math.max(1, Math.min(scale, 6));

    popupImage.style.transform =
        `translate(${translateX}px, ${translateY}px) scale(${scale})`;

});

popupImage.addEventListener("mousedown", (e) => {

    if (scale === 1) return;

    isDragging = true;

    startX = e.clientX - translateX;
    startY = e.clientY - translateY;

    popupImage.style.cursor = "grabbing";

});

window.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    translateX = e.clientX - startX;
    translateY = e.clientY - startY;

    popupImage.style.transform =
        `translate(${translateX}px, ${translateY}px) scale(${scale})`;

});

window.addEventListener("mouseup", () => {

    isDragging = false;

    popupImage.style.cursor = "grab";

});

const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

prevImage.onclick = () => {

    if (currentImages.length === 0) return;

    currentImage--;

    if (currentImage < 0)
        currentImage = currentImages.length - 1;

    popupImage.src = currentImages[currentImage];

};

nextImage.onclick = () => {

    if (currentImages.length === 0) return;

    currentImage++;

    if (currentImage >= currentImages.length)
        currentImage = 0;

    popupImage.src = currentImages[currentImage];

};