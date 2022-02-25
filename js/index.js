const holder = document.querySelector("body");
const play = document.querySelector(".play");
const allTiles = [];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Tile {
  constructor(name, holder, color) {
    this.name = name; //string
    this.holder = holder; // htmlElement
    this.color = color;
    this.htmlRef = this.generateInitialHTML();
    this.setStyling();
    this.setUpEvents();
  }
  generateInitialHTML() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<div class="rectangle"></div>`
    );
    return this.holder.querySelector(".rectangle:last-child");
  }
  setStyling() {
    this.htmlRef.style.background = this.color;
  }
  setBody() {
    this.holder.style.backgroundColor = this.color;
  }
  setUpEvents() {
    this.htmlRef.onclick = (event) => {
      event.stopPropagation();
      //this.setStyling();
      //this.holder.removeChild(this.htmlRef);
      this.setBody();
    };
  }
}

holder.onclick = () => {
  allTiles.push(
    new Tile(Math.random().toString(36).substr(2, 6), holder, getRandomColor())
  );
};

play.onclick = (event) => {
  event.stopPropagation();
  let teller = 0;
  setInterval(function () {
    if (teller === allTiles.length) {
      allTiles.push(
        new Tile(
          Math.random().toString(36).substr(2, 6),
          holder,
          getRandomColor()
        )
      );
      teller = 0;
    } else {
      teller++;
    }
    allTiles[teller].setBody();
  }, 5000);
};
