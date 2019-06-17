# camRoll Slider
http://dim1100010.info/projects/camroll_slider/index.html
## Usage
```
<head>
  <link href="camroll_slider.css" rel="stylesheet">
  <script src="jquery.js"></script>
  <script src="camroll_slider.js"></script>
</head>
<body>
  <div id="my-slider" class="crs-wrap"> 
    <div class="crs-screen"> 
      <div class="crs-screen-roll"> 
        <div class="crs-screen-item" style="background-image: url('images/1.jpg')">
          <div class="crs-screen-item-content"><h1>Lorem...</h1></div>
        </div> 
      </div> 
    </div> 
    <div class="crs-bar"> 
      <div class="crs-bar-roll-current"></div> 
      <div class="crs-bar-roll-wrap"> 
        <div class="crs-bar-roll"> 
          <div class="crs-bar-roll-item" style="background-image: url('images/1.jpg')"></div>
        </div> 
      </div> 
    </div> 
  </div>
</body>
```
```
#my-slider { 
  width: 100%; 
  height: 404px; 
} 
```
```
$("#my-slider").camRollSlider();
```
### Responsible
```
@media (max-width: 640px) { 

  #my-slider .crs-bar-roll-current { 
    width: 38px; 
    height: 38px; 
  } 

  #my-slider .crs-bar-roll-item { 
    width: 30px; 
    height: 30px; 
  } 
}
```
## Requirements
Browser must support jQuery 3+ and CSS Transition.
