class Cloud{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = rnd(-1, -10) / 50;
    
    this.obj = document.createElement("a-entity");
  
    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("color","white");
    cloud1.setAttribute("position","0 10 0");
    cloud1.setAttribute("radius","2");
    this.obj.append(cloud1);
  
    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("position","0 10 0");
    cloud2.setAttribute("color","white");
    cloud2.setAttribute("radius","2");
    this.obj.append(cloud2);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);

    this.ox = this.x;
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
  move(z){
    this.x += this.dx;
    if(this.x <= -200){
      this.x = this.ox + 200;
    }
    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
  }
}