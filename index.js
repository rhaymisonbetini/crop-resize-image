'use strict'

class CropResizer {

    constructor() {
        this.element = null;
    }

    /**
     * this function crop a image by left top (newx, newY) coords and create a new imagine with a ginve width and height
     * @param {string} imageTag 
     * @param {number} newX 
     * @param {number} newY 
     * @param {number} newWidth 
     * @param {number} newHeight 
     * @param {number} displayCanvas 
     * @returns {Promise<string>}
     */
    crop(imageTag, newX, newY, newWidth, newHeight, displayCanvas = false) {
        return new Promise((resolve, reject) => {
            if (!imageTag && !newX && !newY && !newWidth && !newHeight && !this.element) {
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

    /**
     * this function resiize imagem with a give new width and height
     * @param {string} imageTag 
     * @param {number} newWidth 
     * @param {number} newHeight 
     * @param {number} displayCanvas 
     * @returns {Promise<string>}
     */
    resize(imageTag, newWidth, newHeight, displayCanvas = false) {

        return new Promise((resolve, reject) => {

            let uploatedImage = document.getElementById(imageTag)
            let originalPath = uploatedImage.files[0]
            const fileReader = new FileReader();
            fileReader.readAsDataURL(originalPath);
            fileReader.onload = async (event) => {
                const originalImage = new Image();
                originalImage.src = event.target.result;
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                !displayCanvas ? canvas.style = "display: none" : null;

                originalImage.onload = async () => {
                    const originalWidth = originalImage.naturalWidth;
                    const originalHeight = originalImage.naturalHeight;
                    const aspectRatio = originalWidth / originalHeight

                    if (newHeight === undefined) {
                        newHeight = newWidth / aspectRatio;
                        newHeight = Math.floor(newHeight);
                        hInput.placeholder = `Height (${newHeight})`;
                        hInput.value = newHeight;
                    }
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(originalImage, 0, 0, newWidth, newHeight);
                    this.element = document.getElementById('canvas').toDataURL("image/jpeg", 0.9);
                    resolve(this)
                };
            }
        })
    }
}

module.exports = CropResizer;