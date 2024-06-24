class Sign {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.5;
    this.ry = 1;

    this.obj = document.createElement("a-entity");
    scene.append(this.obj);

    let stand = document.createElement("a-cylinder");
    stand.setAttribute("position", "-26.2069 7.251 27.24389");
    stand.setAttribute("radius", "0.1");
    stand.setAttribute("height", "1.5");
    stand.setAttribute("color", "#FFC65D");
    stand.setAttribute("scale", "1 10 1");
    this.obj.append(stand);

    let stand_outline = document.createElement("a-cylinder");
    stand_outline.setAttribute("position", "-26.2069 3.30101 27.24389");
    stand_outline.setAttribute("radius", "0.1");
    stand_outline.setAttribute("height", "1.5");
    stand_outline.setAttribute("color", "#FFC65D");
    stand_outline.setAttribute("material", "color: #6c0909");
    stand_outline.setAttribute("geometry", "radius: 0.15");
    stand_outline.setAttribute("scale", "1 4.5 1");
    this.obj.append(stand_outline);

    let sign = document.createElement("a-box");
    sign.setAttribute("position", "-26.054 12.718 27.147");
    sign.setAttribute("id", "rotating_frame");
    sign.setAttribute("rotation", "90 150 90");
    sign.setAttribute("color", "#FFC65D");
    sign.setAttribute("material", "color: #ffffff; src: #Days_Inn_Logo");
    sign.setAttribute("scale", "6 0.1 9");
    this.obj.append(sign);

    this.rotateSigns(sign);
  }
  rotateSigns(sign) {
    sign.object3D.rotation.y += this.ry * Math.PI / 180;
  }
}
