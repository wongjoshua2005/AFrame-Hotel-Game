// Main Variables and the random variable
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, starRating, cloud, humanTemplate_pink, humanTemplate_blue, human, sign, screen, bookshelf, Task_1, Task_2, humans = [], clouds = []; // Important Variables
let time, countTime = 0; // Timer
let lamp1, lamp2, lamp3, lamp4, lamp5, lamp6; // Light Variables
let lamp1_On, lamp2_On, lamp3_On, lamp4_On, lamp5_On, lamp6_On;

window.onload = function(){
  // Object Variables
  scene = document.querySelector("a-scene");
  starRating = document.querySelector("#starRating");
  time = document.querySelector("#Time");
  humanTemplate_pink = document.querySelector("#humanTemplate_pink");
  humanTemplate_blue = document.querySelector("#humanTemplate_blue");
  
  Task_1 = document.querySelector("#Task_1");
  Task_2 = document.querySelector("#Task_2");
  lamp1 = document.querySelector("#light1");
  lamp2 = document.querySelector("#light2");
  lamp3 = document.querySelector("#light3");
  lamp4 = document.querySelector("#light4");
  lamp5 = document.querySelector("#light5");
  lamp6 = document.querySelector("#light6");

  // Creating The Objects
  for(let px = 0; px < 3; px++){
    human = new Humans_Pink(rnd(0, 3), 0 , rnd(20, 25));
    humans.push(human);
    }

  for(let bx = 0; bx < 3; bx++){
    human = new Humans_Blue(rnd(0, 3), 0, rnd(20, 25));
    humans.push(human);
  }
  
  for(let x = 0; x < 150; x++){
    let cloud = new Cloud(rnd(-100,100), 55 , rnd(-100,100));
    clouds.push(cloud);
    cloud.scale(rnd(1,5));
  }

  // Other JavaScript Objects
  screen = new Screen(0.07239, 2.57552, -21.19548);
  screenEvent = document.getElementById("screen_interaction");
  sign = new Sign(1.39304, 0, 0);

  // Task 1 Event Listeners
  lamp1.addEventListener("click", function(){
    lamp1.setAttribute("color", "#ff9b54");
    lamp1_On = true;
  });

  lamp2.addEventListener("click", function(){
    lamp2.setAttribute("color", "#ff9b54");
    lamp2_On = true;
  });

  lamp2.addEventListener("click", function(){
    lamp2.setAttribute("color", "#ff9b54");
    lamp2_On = true;
  });

  lamp3.addEventListener("click", function(){
    lamp3.setAttribute("color", "#ff9b54");
    lamp3_On = true;
  });

  lamp3.addEventListener("click", function(){
    lamp3.setAttribute("color", "#ff9b54");
    lamp3_On = true;
  });

  lamp4.addEventListener("click", function(){
    lamp4.setAttribute("color", "#ff9b54");
    lamp4_On = true;
  });

  lamp4.addEventListener("click", function(){
    lamp4.setAttribute("color", "#ff9b54");
    lamp4_On = true;
  });

  lamp5.addEventListener("click", function(){
    lamp5.setAttribute("color", "#ff9b54");
    lamp5_On = true;
  });

  lamp5.addEventListener("click", function(){
    lamp5.setAttribute("color", "#ff9b54");
    lamp5_On = true;
  });

  lamp6.addEventListener("click", function(){
    lamp6.setAttribute("color", "#ff9b54");
    lamp6_On = true;
  });
  

  screen.NextImage();
  loop();
  Timer();
  } 

function loop(){
  // Animations

  screen.Update();
  
  for (let human of humans) {
    human.walk();
    human.receiveKey();
    human.AskForBook();
  }

  for(let cloud of clouds){
    cloud.move(rnd(1,5));
  }
  
  sign.rotateSigns(sign.obj.querySelector("a-box"));
  setTimeout(loop, 30);


  // Checks if Task 1 is complete
  if (lamp1_On && lamp2_On && lamp3_On && lamp4_On && lamp5_On && lamp6_On) {
    // Remove the "value" attribute from Task_1 element
    Task_1.removeAttribute("value");

    // Gives Star 
    let currentStar = 1;
    starRating.setAttribute("value", "Hotel Rating: " + `${currentStar} out of 5 stars!`);
  }

  if(human.receiveKey() == true){
    currentStar++;
    starRating.setAttribute("value", "Hotel Rating: " + `${currentStar} out of 5 stars!`);
  }
}

function Timer(){
  countTime += 1;
  time.setAttribute("value", "Time: " + countTime);
  setTimeout(Timer, 1000);
}

