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
![Images](http://i.imgur.com/WB6HDhx.png)



####This package has several optional props
If imgSrc   prop (must be of type string)  is not specified, then a default image will appear.

ex:
```js
<Polaroid imgSrc='yourimageurlhere' />
```
####Optional props:


>**text**  (must be of type string) - adds text to polaroid
>
>ex.
>
>text='your_text_here'
>
>**rotate**  (must be of type string) - rotate polaroid
>
>ex.
>
>rotate='-15' - rotates polaroid left by 15 degrees
>
>rotate='30' - rotates polaroid right by 30 degrees
>
>**zoom**  (typeof string or boolean)
>
>ex.
>   
>zoom='scale(1.5)'  
>
>zoom='false'  - won't scale on hover
>
>**imageShadow**  (typeof string or boolean)
>
>ex.
>
> imageShadow='0 0 10px blue'
>
>imageShadow='false'  - removes image shadow
>
>**frameShadow**  (typeof string or boolean)
>
>ex.
>  
>frameShadow='5px 2px 5px red'
>
>frameShadow='false' - removes frame shadow
>
>**hoverFrameShadow**  (typeof string or boolean)
>
>ex.
>
>hoverFrameShadow='0 0 30px black'
>
>hoverFrameShadow='false' - removes frame shadow on hover
>
> **frameMargin**  (must be of type string)
>
> ex.
>
> frameMargin='1em 2em' -  1em margin for top/bottom and 2em right/left
>
> **frameWidth**  (must be of type string)
>
> ex.
>
>  frameWidth='50px' - changes frame width to 50px
>  
> **imageMargin**  (must be of type string)
>
> ex.
>
> imageMargin='10px' - margin of image is 10px for top/right/bottom/left
>
> **imageWidth**  (must be of type string)
>
> ex.
>
> imageWidth='25px' -image width is now 25px
>
> **imageHeight**  (must be of type string)
>
> ex.
>
> imageHeight='100px' - imageHeight is now 100px
>
> **frameHeight**  (must be of type string)
>
> ex.
>
> frameHeight='200px' - frame height is now 200px
>
>**imgClass**  (must be of type string) - adds a class to image to make it easy to style in css.
>
>ex.
>
>imgClass='yourClassName'
>
>in css file:
```css
.yourClassName {
	padding: 2em
}
/*Image top/right/bottom/left will now have a padding of 2em*/
```
**NOTE**
>
Trying to change a style through css will NOT WORK if it exists as a prop. To style that specific element just change through props
>
ex.
>
```js
<Polaroid
  imgSrc='imageUrlHere' //url of an image
  frameColor='black' //sets the frame color to black
  imageMargin='3em' //sets image top-right-bottom-left margins to 3em
  imgClass='targetImage' // adds a class to the image
/>
```
Since the 'border' element is not part of any of the components props, targeting through css WILL work.

ex.
>Inside the css file:
```css
.targetImage {
    border: 5px solid black;
}
/*this will add a border of 5px around the IMAGE only*/
```
