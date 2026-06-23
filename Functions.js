let myImages = [
    "0872285883cee475f9533508e645f19ef0939ae8.png",
    "3c416b08502bf2ed10a304bdce5c1c782b99c40d.jpg",
    "4ac67c63bfc2b6a80cca4919df91a1e498ec4c07.jpg",
    "714707b1ea80f159dacba47280dc1091bbebb9c7.jpg",
    "872f2a95ab48c88b865e4f11d2e061a802987c88.jpg",
    "8bc8dae8f655d7cac8d770f66d76f62367f5b5df.jpg",
    "bbd3479cb0c36ecd872f4526275e11a893e50107.jpg",
    "cc1d7f8870c4b98e849a8e36c6c397e0f71486f9.jpg",
    "dc4b11f7f36deb9409236c10ebcd6c849b00f447.jpg",
    "f1ba9135a20ea8343ad3d5732c6f8a541ec455b5.jpg",
    "f2b056a08d5edba809ca216fa6aa66a4bb612ea8.jpg",
]







function galleryFunction() {
    let galleryList = document.getElementById('gallery');
    galleryList.innerHTML = ""


    for (let galleryindex = 0; galleryindex < myImages.length; galleryindex++) {
        galleryList.innerHTML += galleryHTML(galleryindex);
    }

}
function galleryHTML(galleryindex) {
    return `<div><img class="galleryImg" src=./gallery/${myImages[galleryindex]} onclick="openDialog(), myDialogFunction()"></img>

</div>`;
}

function openDialog() {
let dialogRef = document.getElementById('myDialog');
    dialogRef.showModal();
    dialogRef.classList.add("opened");
 
}
function closeDialog() {
    let dialogRef = document.getElementById('myDialog');
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function myDialogFunction(){
    let DialogList = document.getElementById('myDialog');
    DialogList.innerHTML = ""


    let dialogindex = 0
    DialogList.innerHTML = myDialogHTML(dialogindex);
    


}

function myDialogHTML(dialogindex){
    return ` 
            <div class="dialogContent">
                <header class="dialogheader">
                    <p class="dialogFileName">${myImages[dialogindex]}</p>
                    <img class="dialogButtonclose" src=./IMG/close.png aria-label="Dialog Schließen" onclick="closeDialog()"></img>
                </header>
                <section>
                   <img class="dialogImg" src=./gallery/${myImages[dialogindex]}><img>
                </section>
                <footer class=dialogfooter>
                    <img class="DialogImageBack" src=./IMG/Arrow-Right.png aria-label="Vorheriges Foto"></img>
                    <p>${dialogindex+1}/${myImages.length}</p>
                    <img class="DialogNext" src=./IMG/Arrow-Right.png aria-label="Nächstes Foto"></img>
                </footer>
                `
            

}





