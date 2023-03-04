'use strict'

class CropResizer {

    constructor() {
        this.element = null;
    }

    crop(imageTag = null, newX, newY, newWidth, newHeight,displayCanvas = false) {
        return new Promise((resolve, reject) => {
            if (!imageTag && !this.element) {
                reject({ error: 'ELEMENT_MUST_BE_PROVIDED' })
            }
            let uploatedImage = document.getElementById(imageTag)
            let originalPath = uploatedImage.files[0]
            const fileReader = new FileReader();
            fileReader.readAsDataURL(originalPath);
            fileReader.onload = async (event) => {
                const originalImage = new Image();
                originalImage.src = event.target.result;
                const canvas = document.getElementById('canvas');
                !displayCanvas ? canvas.style = "display: none" : null;
                const ctx = canvas.getContext('2d');
                originalImage.onload = async () => {
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);

                    this.element = document.getElementById('canvas').toDataURL("image/jpeg", 0.9);
                    resolve(this)
                };
            }
        })
    }


    resize(imageTag = null) {

        return this;
    }

}

module.exports = CropResizer;