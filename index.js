let canvasShowing;
let imageShowing;
function show (image){
    if (canvasShowing){
        document.getElementById("canvas").style.display = "none";
        canvasShowing = false;
    }
    document.getElementById("edit-image").style.display = "block";
    document.getElementById("edit-image").src=image;
    imageShowing = true;
}
function blackWhite(image, edit) {
    const img = image;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    img.crossOrigin = "anonymous";
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
        let colour = 0;
        if (count > 510) colour = 255;
        else if (count > 255) colour = 127.5;
        if (edit === "bw") {
            imgData.data[i] = colour;
            imgData.data[i + 1] = colour;
            imgData.data[i + 2] = colour;
            imgData.data[i + 3] = 255;
        } else if (edit === "inv"){
                imgData.data[i]     = 255 - imgData.data[i];     // red
                imgData.data[i + 1] = 255 - imgData.data[i + 1]; // green
                imgData.data[i + 2] = 255 - imgData.data[i + 2]; // blue
    }
    }
    if (imageShowing){
        document.getElementById("edit-image").style.display = "none";
        imageShowing = false;
    }
    document.getElementById("canvas").style.display = "block";
    ctx.putImageData(imgData, 0, 0);
    canvasShowing = true;


}
