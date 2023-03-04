# CROP AND RESIZE IMAGE


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
      let returnOfFunction =  await cropResizer.crop("img", 0, 0, 200, 200, true);
      let returnOfFunction = await cropResizer.resize("img", 200, 200, true);
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

The return of our library will be an object with the element in base64.
with this bas4 you can create a link tag to download element, send to banck end and etc...

### return 
```json
{
    "element": "yourbase64herer",
}
```


