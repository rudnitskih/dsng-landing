# Landing page DSNG
## [Demo][1]

[1]: https://ignatsemchuk.github.io/dsng-landing/app

| Layout width greater 1200px               	| Layout width greater 600px          	| layout width less 600px              	|
|-------------------------------------------	|-------------------------------------	|--------------------------------------	|
| <img src="https://raw.githubusercontent.com/IgnatSemchuk/dsng-landing/master/app/images/preview/dsgn-preview.jpg" alt="dsgn mockup > 1200" /> 	| <img src="https://raw.githubusercontent.com/IgnatSemchuk/dsng-landing/master/app/images/preview/dsgn-preview_1200.jpg" alt="dsgn mockup > 600" /> 	| <img src="https://raw.githubusercontent.com/IgnatSemchuk/dsng-landing/master/app/images/preview/dsgn-preview_600_1.png" alt="dsgn mockup < 600" /> <img src="https://raw.githubusercontent.com/IgnatSemchuk/dsng-landing/master/app/images/preview/dsgn-preview_600_2.png" alt="dsgn mockup < 600" /> <img src="https://raw.githubusercontent.com/IgnatSemchuk/dsng-landing/master/app/images/preview/dsgn-preview_600_3.png" alt="dsgn mockup < 600" /> 	|

Project made by grid and flex layout, had used adaptive and responsive design  

## Creating a new instance
Just download and unpack repository from github or use git command
```$ git clone https://github.com/IgnatSemchuk/dsng-landing.git```  
To edit the project, run $ npm install in the terminal to load the modules gulp, stylelint, prettier
To look the project run `/app/index.html`  

## Dependencies
+ was used [hamburger][2] button for main nav menu
+ was used google maps API, google fonts

[2]: https://jonsuh.com/hamburgers/

## Features
+ be sure to configure the google map API
+ all calculations for the project layout is responsive, base dimensions had made with 1500 pixels
+ made by one grid layout
+ all blocks of the grid can be fixed with proportion by the
    ```
  .studio-description {
  position: relative;
  padding-bottom: 47.62%;
  grid-column: span 21;
  grid-row: 7;
  ```
+ content is added into the fixed block by the `absolute` wrapper

