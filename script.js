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
        image: "images/Case1Opened.png"
    },
    {
        name: "Witness #2",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
	{
        name: "Witness #3",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
    {
        name: "Witness #4",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
	{
        name: "Witness #5",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
    {
        name: "Witness #6",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
	{
        name: "Witness #7",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
    {
        name: "Witness #8",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
	{
        name: "Witness #9",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
    },
    {
        name: "Witness #10",
        thumb: "images/Case1.png",
        image: "images/Case1Opened.png"
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

    btn.onclick=()=>{

        popupImage.src=item.image;
        popup.style.display="flex";

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
