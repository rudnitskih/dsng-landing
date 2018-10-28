# Mockup DSNG

To look the page, click to the [link][1]

[1]: https://ignatsemchuk.github.io/dsng/

##Features

All aspect ratio calculate from the mockup with 1500px width
Look for the method to maintain the aspect ratio of a div with css:
```
div {
 width: 100%;
 padding-bottom: 75%;
}

div.stretchy-wrapper {
  position: relative;
}

div.stretchy-wrapper > div {
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
}
```
    It will result in a <div> with height equal to 75% of the width of its container (a 4:3 aspect ratio).
    Placing content in the div :  
    In order to keep the aspect ratio of the div and prevent its content from stretching it, you need to add an absolutely positioned child and stretch it to the edges of the wrapper with



