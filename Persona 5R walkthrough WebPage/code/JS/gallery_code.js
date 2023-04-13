//function to expand the gallery images
function galleryExpand(imgs) { //we always call the function with the image we want to expand, the imgs variable
    var expandImg = document.getElementById("expandedImg"); //expandImg is the variable for the reserved place at the gallery html to expand a image
    expandImg.src = imgs.src; //the source of the expandImage will be the same as the source of the image we want to expand
    expandImg.parentElement.style.display = "block";//change the style of the div of the expand image to display it
}

//function to change one image for the next
function imageChangeNext() {
    var imageList = document.getElementsByClassName("galleryImg"); //we create an array with the gallery images and give it the name of imageList
    var expandImg = document.getElementById("expandedImg"); //expandImg will be the expanded image element
    var changeImage = expandImg.src //we create a variable (changeImage) with the source of the actual expanded image
    var imgs = ""; //we create an empty variable to store the source of the next image (imgs)
    for (var i = 0; i < imageList.length; i++) { //we loop the array in order to find the actual expanded image

        if ((imageList[i].src == changeImage) && (i != (imageList.length - 1))) { //if we find it and is not the last image of the array
            imgs = imageList[i + 1].src; //the source of the next image is the source of the actual image position at the array + 1
        }
        if ((imageList[i].src == changeImage) && (i == (imageList.length - 1))) {//if we find it and is the last image of the array
            imgs = imageList[0].src;//the source of the first image will be the first image at the array source
        }
    }
    expandImg.src = imgs; //we declare that the expanded image source is the same as the image source of our variable imgs
    expandImg.parentElement.style.display = "block"; //we display the image
}

function imageChangePrevious() { //this function will be the same as the imageChangeNext funcion
    var imageList = document.getElementsByClassName("galleryImg");
    var expandImg = document.getElementById("expandedImg");
    var changeImage = expandImg.src
    var imgs = "";
    for (var i = 0; i < imageList.length; i++) {
        if ((imageList[i].src == changeImage) && (i != 0)) { //the difference is that when whe find the image source and is not the first one of the array
            imgs = imageList[i - 1].src; //we store the source of the previous image, (the actual image position at the array - 1)
        }
        if ((imageList[i].src == changeImage) && (i == 0)) {//when we find it and is the first image of the array
            imgs = imageList[imageList.length - 1].src; //the previous image will be the last (the array length -1)
        }
    }
    expandImg.src = imgs;
    expandImg.parentElement.style.display = "block";
}