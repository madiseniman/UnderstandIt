function blackWhite(image) {

    const img = document.getElementById("edit-image");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");


        img.crossOrigin = "anonymous";
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for ( let i = 0; i < imgData.data.length; i += 4) {
            let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
            let colour = 0;
            if (count > 510) colour = 255;
            else if (count > 255) colour = 127.5;

            imgData.data[i] = colour;
            imgData.data[i + 1] = colour;
            imgData.data[i + 2] = colour;
            imgData.data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);






}

