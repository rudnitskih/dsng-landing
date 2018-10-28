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



.navigation {
  --hover-color: rgb(248, 194, 85);
  --button-width: 125px;
  --animation: all .3s ease-in-out;

    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.navigation-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.navigation-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.navigation-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display:block;
}









<div class="navigation">
                    <button class="hamburger hamburger--spin" type="button" aria-label="Menu" aria-controls="navigation-content">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                    <nav class="navigation-content">
                        <!--navigation goes here-->
                        <a href="javascript:void(0);">Home</a>
                        <a href="javascript:void(0);">Projects</a>
                        <a href="javascript:void(0);">Studio</a>
                        <a href="javascript:void(0);">News</a>
                        <a href="javascript:void(0);">Contact</a>
                    </nav>
                </div>