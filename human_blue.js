class Humans_Blue{
  constructor(x, y, z){
    this.x  = x;
    this.y  = y;
    this.z = z;
    this.dx = rnd(5, 10) / 100;
    this.dz = rnd(-5, -10) / 100;
    this.rz = rnd(2, 5) / 100
    let Task_2 = document.querySelector("#Task_2");
    let starRating = document.querySelector("#starRating");

    this.obj = humanTemplate_blue.cloneNode(true);

    this.obj.setAttribute("position", {x:x,y:y, z:z});
    this.obj.setAttribute("rotation", {x: 0,y: 180,z: 0});

    scene.append(this.obj);   

    // Initialize the conditions for the event listeners
    this.awaitKey = false;
    this.reachedDesiredPosition1 = false;
    this.reachedDesiredPosition2 = false;
    this.reachedDesiredPosition3 = false;
    this.reachedDesiredPosition4 = false;
    this.reachedDesiredPosition5 = false;
    // Counts the number of clicks
    this.clickCount = 0;

    // Checks To See If At Receptionist Desk
    this.obj.addEventListener("click", () => {
      this.awaitKey = true;
      this.clickCount++;
      console.log(this.clickCount);
    });
  }
  // Task 1
  walk() {
    if(!this.awaitKey){
      let leg1 = this.obj.querySelector("#leg1");
      let leg2 = this.obj.querySelector("#leg2");
      let arm1 = this.obj.querySelector("#arm1");
      let arm2 = this.obj.querySelector("#arm2");
      let Task_2 = document.querySelector("#Task_2");
    
      // The walking rotations
      leg1.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200) + 10, y: 0, z: 0});
      leg2.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + Math.PI) + 10, y: 0, z: 0});
      arm1.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + Math.PI / 2) + 10, y: 0, z: 0});
      arm2.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + 3 * Math.PI / 2) + 10, y: 0, z: 0});
    
      // Movement
      this.z += this.dz;
    
      if (this.z <= -14) {
        leg1.setAttribute("rotation", {x: 0,y: 0,z: 0});
        leg2.setAttribute("rotation", {x: 0,y: 0,z: 0});
        arm1.setAttribute("rotation", {x: 0,y: 0,z: 0});
        arm2.setAttribute("rotation", {x: 0,y: 0,z: 0});
        this.z = -15;
      }
    
      this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    }
  }
  // Task 2
  receiveKey(){
    if(this.awaitKey){
      // Variables
      let leg1 = this.obj.querySelector("#leg1");
      let leg2 = this.obj.querySelector("#leg2");
      let arm1 = this.obj.querySelector("#arm1");
      let arm2 = this.obj.querySelector("#arm2");
  
      // The walking rotations
      leg1.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200) + 10, y: 0, z: 0});
      leg2.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + Math.PI) + 10, y: 0, z: 0});
      arm1.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + Math.PI / 2) + 10, y: 0, z: 0});
      arm2.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + 3 * Math.PI / 2) + 10, y: 0, z: 0});
  
      // Movement
      if (!this.reachedDesiredPosition) {
        this.x += this.dx;
  
        // Stops at certain point
        if(this.x >= 14.9 && this.x <= 15.1){
          console.log("Destination reached!");
          leg1.setAttribute("rotation", {x: 0,y: 180,z: 0});
          leg2.setAttribute("rotation", {x: 0,y: 180,z: 0});
          arm1.setAttribute("rotation", {x: 0,y: 180,z: 0});
          arm2.setAttribute("rotation", {x: 0,y: 180,z: 0});
          this.reachedDesiredPosition = true;
        }
      }

      if(this.clickCount >= 1){
        Task_2.removeAttribute("value");
        starRating.setAttribute("value", "Hotel Rating: " + `2 out of 5 stars!`);
      }
      
      this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    }
  }

  // Task 3
  AskForBook(){
    // Variables
    let leg1 = this.obj.querySelector("#leg1");
    let leg2 = this.obj.querySelector("#leg2");
    let arm1 = this.obj.querySelector("#arm1");
    let arm2 = this.obj.querySelector("#arm2");
  
    // The walking rotations
    leg1.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200) + 10, y: 0, z: 0});
    leg2.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + Math.PI) + 10, y: 0, z: 0});
    arm1.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + Math.PI / 2) + 10, y: 0, z: 0});
    arm2.setAttribute("rotation", {x: 30 * Math.sin(Date.now() / 200 + 3 * Math.PI / 2) + 10, y: 0, z: 0});
  
  // Movement
  if (!this.reachedDesiredPosition2){
    if(this.reachedDesiredPosition){
      this.z -= this.dz;
      
      // Stops at certain point
      if(this.z >= -5.1 && this.z <= -4.9){   
        leg1.setAttribute("rotation", {x: 0,y: 180,z: 0});
        leg2.setAttribute("rotation", {x: 0,y: 180,z: 0});
        arm1.setAttribute("rotation", {x: 0,y: 180,z: 0});
        arm2.setAttribute("rotation", {x: 0,y: 180,z: 0});
        this.reachedDesiredPosition2 = true;
        this.reachedDesiredPosition = false;
      }
    }
  }

    if(this.clickCount >= 1){
        Task_2.removeAttribute("value");
        starRating.setAttribute("value", "Hotel Rating: " + `2 out of 5 stars!`);
      }
      
    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
  }
}
