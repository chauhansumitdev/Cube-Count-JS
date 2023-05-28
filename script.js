var outer = document.getElementById('outer');   // selects outer div
var cube = document.querySelector('.cube');     // selects cube
cube.classList.add('hidden');                   // adds style of hidden to cube div

console.log(outer.offsetWidth);                 // debugger -> getting size
 
var screenTypeWidth = 0;                        // placing screen resolution width
var screenTypeHeight =0;                        // placing screen resolution height
if(outer.offsetWidth == 262 ){                  // setting resolution
  screenTypeWidth = 218;
  screenTypeHeight = 168; 
}
else{
  screenTypeWidth =356;
  screenTypeHeight=306
}

console.log(screenTypeWidth);                  // debugger -> width
console.log(screenTypeHeight);                 // debugger -> height

function getRandomPosition() {                              // function to obtain random location on screen
  var x = Math.floor(Math.random() * screenTypeWidth);      
  var y = Math.floor(Math.random() * screenTypeHeight);  
  return [x, y];
}

var cubeSpawnedSelect = document.getElementById('spawnedCubes');       // counter for scores -> spawned cubes
var cubeSpawnedCount = 0;

function spawnCube() {                                                 // function to spawn random cubes
  cubeSpawnedCount++;
  cubeSpawnedSelect.textContent = cubeSpawnedCount;                   
  var position = getRandomPosition();
  cube.style.left = position[0] + 'px';
  cube.style.top = position[1] + 'px';
  cube.classList.remove('hidden');                                     // removes previously spawned cubed
  setTimeout(function() {
    cube.classList.add('hidden');                                      // adds css hidden to cube after 1s
  }, 1000);
}

setInterval(function() {                                                 // happens after 2s 
  spawnCube();
}, 2000);

var counterSelect = document.getElementById('counter');                   // getting span counter element
var counter =0;                                                           // initialised to zero

var originalColor = cube.style.backgroundColor;                           // saved original cube color -> red
cube.addEventListener('click', function() {                               //added event listner for acting on clicks
  cube.style.backgroundColor = 'green';
  counter++;                                                               // increment score
  counterSelect.textContent = counter;                                     // update score
  setTimeout(function() {
    cube.style.backgroundColor = originalColor;                            // revert back color
  }, 1000);
});

function changeBackgroundGradient() {
    const div = document.getElementById('bg'); 
  
    let hue = 0;
    let saturation = 100; 
    let lightness = 40;
  
    setInterval(() => {
      const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      const color2 = `hsl(${(hue + 120) % 360}, ${saturation}%, ${lightness}%)`;
      const color3 = `hsl(${(hue + 240) % 360}, ${saturation}%, ${lightness}%)`;
  
      const gradient = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
      div.style.backgroundImage = gradient;
  
      hue = (hue + 1) % 360; 
  
    }, 20);
  }
  
  changeBackgroundGradient();