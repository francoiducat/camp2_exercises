// Insert code here
const kind = {
  carnivorous: "carnivorous",
  vegan: "vegan"
};

const { carnivorous, vegan } = kind;

class Fish {
  constructor(name, sex, kind) {
    this.name = name;
    this.sex = sex;
    this.kind = kind;
  }
}

class Algae {
  constructor(color) {
    this.color = color;
  }
}

const nemo = new Fish("nemo", "M", vegan);
const dorry = new Fish("dorry", "F", carnivorous);
const bernard = new Fish("bernard", "M", vegan);

const blue = new Algae("blue");
const green = new Algae("green");

class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }
  addAlgae(algae) {
    this.algaes.push(algae);
  }

  endTurn() {

    this.fishes.forEach( fish => {
      if (fish.kind === "vegan" && this.algaes.length >= 1 ){
        console.log("vegan fish AND algaes to EAT!");
        this.algaes.pop();
        console.log(this.algaes.length + " algaes in aquarium");
        console.log(this.fishes);
        console.log(this.algaes);

      }
      else if (fish.kind === "vegan" && this.algaes.length === 0 ){
        console.log("no more algues to EAT !!!");
        console.log(this.algaes.length + " algaes in aquarium");
        console.log(this.fishes);
        console.log(this.algaes);
      }
      else if(fish.kind === "carnivorous" && this.fishes.length >= 2 ){
        if(this.fishes.includes("vegan")){
          this.algaes.pop();
          this.fishes.pop();
        } else {
          this.fishes.pop();
        }
      }});
  }

  // Each turn, fishes try to eat something (algue or other fishes if they are vegan or carnivorous)

}

const myAquarium = new Aquarium([nemo],[blue]);

myAquarium.addFish(dorry);

myAquarium.addAlgae(green);


myAquarium.addFish(bernard);
myAquarium.endTurn();





// console.log(myAquarium.fishes);



module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
