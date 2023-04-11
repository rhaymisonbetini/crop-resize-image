# CROP AND RESIZE IMAGE

<p align="center">
   <img src="https://img.shields.io/bower/l/MI?style=flat-square">
   <img src="https://img.shields.io/badge/version-1.0.2-blue">
   <img alt="npm" src="https://img.shields.io/npm/dm/crop-resize-image">
   <img alt="npm" src="https://img.shields.io/npm/dw/crop-resize-image">
   <img src="https://img.shields.io/badge/coverage-100%25-yellowgree" alt="coverage">
   <img src="https://img.shields.io/github/issues/rhaymisonbetini/crop-resize-image.svg">
   <img src="https://img.shields.io/github/issues-closed/rhaymisonbetini/crop-resize-image.svg">
   <img src="https://img.shields.io/github/issues-pr/rhaymisonbetini/crop-resize-image.svg">
   <img src="https://img.shields.io/github/issues-pr-closed/rhaymisonbetini/crop-resize-image.svg">
</p>

<p align="center">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/heleno-betini-2b3016175/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  <a href="https://github.com/rhaymisonbetini" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>



This is a javascript library to crop and resize images in a fast and dynamic way.<br/> 
 Returning a base64 so the developer can decide how to handle the result <br/> 

*Only for JPG, JPEG and PNG files

### INSTALL

Run the command below in your npm.

```
npm install crop-resize-image

```

After this process you must import your library in the javascript file that you will use it. <br/>

```javascript
import CropResizer from "crop-resize-image";
```

or

```javascript
const CropResizer = require("crop-resize-image");
```

Once this procedure is done, in your html you will have to include a canvas tag as well as an img <br/>
tag as an ID that will be used by the library.

```html
<div class="hello">
    <input type="file" id="img" />
    <input type="button"  value="Load imagem"  @click="DoSomethingWithMyImage" />
    <canvas id="canvas"></canvas>
</div>
```
In this example the event will be called when the button "DoSomethingWithMyImage" is activated after <br/> 
the image is loaded in the input.

### Triggering the Color Recognizer
Using the model above, we will activate our library with the "DoSomethingWithMyImage" method <br/>

* First we create a new instance of our detector class.

```javascript
  async DoSomethingWithMyImage() {
      let cropResizer = new CropResizer();
    },
```

#### THE CROP METHOD
This method will be responsible for taking your image.
It takes the following parameters.

* imageTag = Id of your file input<br/>
* newX =  Position on left-top x-axis <br/>
* newY = Position on left-top y-axis <br/>
* newWidth = New width size <br/>
* newHeight = New height size<br/>
* displayCanvas = Whether or not you want the new image to be shown on screen by the canvas<br/>

```javascript
    crop(imageTag, newX, newY, newWidth, newHeight, displayCanvas = false) 
```

```javascript
  async DoSomethingWithMyImage() {
      let cropResizer = new CropResizer();
      let returnOfFunction =  await cropResizer.crop("img", 0, 0, 200, 200, true);
  }
```

Original
![alt text](https://github.com/rhaymisonbetini/crop-resize-image/blob/main/src/assets/C-6YxPlXsAQ7z1M.jpg)

<br/>

Croped
![alt text](https://github.com/rhaymisonbetini/crop-resize-image/blob/main/src/assets/croped.jpg)


#### THE RESIZE METHOD

This method resizes the image, keeping the original data without cuts. <br/>
It takes the following parameters.

* imageTag = Id of your file input<br/>
* newWidth = New width size <br/>
* newHeight = New height size<br/>
* displayCanvas = Whether or not you want the new image to be shown on screen by the canvas<br/>

```javascript
 resize(imageTag, newWidth, newHeight, displayCanvas = false)
```

```javascript
  async DoSomethingWithMyImage() {
      let cropResizer = new CropResizer();
      let returnOfFunction = await cropResizer.resize("img", 200, 200, true);
  }
```

Original
![alt text](https://github.com/rhaymisonbetini/crop-resize-image/blob/main/src/assets/C-6YxPlXsAQ7z1M.jpg)
<br/>
resized
![alt text](https://github.com/rhaymisonbetini/crop-resize-image/blob/main/src/assets/resized.jpg)

The return of our library will be an object with the element in base64.
with this bas4 you can create a link tag to download element, send to banck end and etc...

### return 
```json
{
    "element": "yourbase64herer",
}
```


