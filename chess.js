//Create div table for diagrams
function createDivTable() {
    var cellID = 11;
    var divTable = document.getElementById("table");
    for (var x = 0; x < 3; x++) {
        var row = document.createElement('div');
        row.className = "row";
        divTable.appendChild(row);
        for (var y = 0; y < 3; y++) {
            var cell = document.createElement('div');
            cell.id = cellID.toString();
            cell.className = "cell"
            row.appendChild(cell);
            cellID++;
        }
    }
}

//Create images array
var imagesArray = [];
for (var x = 1; x < 10; x++) {
    imagesArray.push("images/img" + x.toString() + ".png");
}
//console.log(imagesArray);

//Generate random indexes
var randomIndexesArray = [];
 while (randomIndexesArray.length < 9){
     randomIndex = Math.floor(Math.random() * (9-0) + 0);
     if (randomIndexesArray.includes(randomIndex)) {

     } else {
         randomIndexesArray.push(randomIndex);
     }
 }
 //console.log(randomIndexesArray);
//Get images
 function getImages() {
     var cellsArray = document.getElementsByClassName("cell");
     var imageID = 1; // id for img elements
     var i = 0; //while loop counter
     while (i < cellsArray.length) {
         var img = document.createElement("img");
         img.id = imageID.toString();
         img.src = imagesArray[randomIndexesArray[i]];
         img.setAttribute("draggable", "true");
         img.addEventListener('dragstart', function(event) {
             event.dataTransfer.setData("imageid", event.target.id);
         }, false);
         img.addEventListener('dragenter', function(event) {
             this.classList.add('over');
         }, false);
         img.addEventListener('dragleave', function(event) {
             this.classList.remove('over');
         }, false);
         img.addEventListener('dragover', function(event) {
             event.preventDefault();
         }, false);
         img.addEventListener('drop', function(event) {
             event.preventDefault(); // Firefox fix
             this.classList.remove('over');
             var draggingImageID = event.dataTransfer.getData("imageid");
             var dropZoneImageID = event.currentTarget.id;
             var draggingImage = document.getElementById(draggingImageID);
             console.log(draggingImageID);
             console.log(draggingImage);
             var dropZoneImage = document.getElementById(dropZoneImageID);
             var draggingImageParentNodeID = draggingImage.parentNode.id;
             var dropZoneImageParentNodeID = dropZoneImage.parentNode.id;
             document.getElementById(draggingImageParentNodeID).appendChild(dropZoneImage);
             document.getElementById(dropZoneImageParentNodeID).appendChild(draggingImage);
 
         }, false);
         cellsArray[i].appendChild(img);
         imageID++;
         i++;
     }

 }

 createDivTable();
 getImages();