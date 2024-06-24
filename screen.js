class Screen {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    // Array of Images
    this.list_of_images = ["#Days_Inn_Logo", "#commercial1", "#commercial2", "#commercial3", "#commercial4", "#commercial5"];
    // Current Value
    this.currentImageIndex = 0;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color", "#ffffff");
    this.obj.setAttribute("material", "color: #ffffff");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.obj.setAttribute("rotation", "90 0 0");
    // Already set the rotating frames of the object.
    this.obj.setAttribute("src", this.list_of_images[this.currentImageIndex]);
    this.obj.setAttribute("scale", "5 0.05 3");
    this.obj.setAttribute("interact", "");
    scene.append(this.obj);

    // Sets this.removeImage to the opposite value each click.
    this.obj.addEventListener("click", () => {
      this.removeImage = !this.removeImage;
    });
  }

  // Checks To See if this.removeImage is true or false.
  Update() {
    if (this.removeImage) {
      this.obj.removeAttribute("src");
      this.obj.setAttribute("color", "black");
    } else {
      this.obj.setAttribute("src", this.list_of_images[this.currentImageIndex]);
      this.obj.setAttribute("color", "#ffffff");
    }
  }

  // Animates each frame by five seconds
  NextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.list_of_images.length) {
      this.currentImageIndex = 0;
    }
    setTimeout(() => this.NextImage(), 5000);
  }
}
