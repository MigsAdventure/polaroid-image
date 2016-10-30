## polaroid-image

Convert any image into a polaroid!

## Install

```bash
$ npm install polaroid-image
```

## Usage

```js
let Polaroid = require('polaroid-image');
```

This package has several optional props and one required prop

The required prop is:
imgSrc (must be of type string)
ex:

```js
<Polaroid imgSrc='yourimageurlhere' />
```
The optional ones include:
imageMargin (must be of type string)
imageWidth (must be of type string)
imageHeight (must be of type string)
frameDisplay (must be of type string)
frameMargin (must be of type string)
frameWidth (must be of type string)
frameHeight (must be of type string)
frameColor (must be of type string)
imgClass (must be of type string) - adds a class to image to make it easy to style in css.


**NOTE**
Trying to change a style through css will NOT WORK if it exists as a prop. To style that specific element just change through props
ex.

```js
<Polaroid
  imgSrc='imageUrlHere' //url of an image
  frameColor='black' //sets the frame color to black
  imageMargin='3em' //sets image top-right-bottom-left margins to 3em
  imgClass='targetImage' // adds a class to the image
/>
```
Since the 'border' element is not part of any of the components props, targeting through css will work.

ex.
Inside the css file:
.targetImage {
    border: 5px solid black;
}

This will add a border of 5px around the IMAGE only
