// See Sparta courses for the exercise summary

const orangeTree = {
  height: 0,
  age:0,
  oranges:0,
  alive:false,
  pickAnOrange:function(){
    if(this.oranges!==0){
      this.oranges--;
      return true;
    }

    return false;

  },
  ageOneYear:function(){
    this.age++;
    if(this.age<10){
      this.height=this.height+25;
      if(this.age>=5 && this.age<10){

        this.oranges = 10;
      }
    } else if (this.age<20){
      this.height=this.height+10;
      if(this.age>=10 && this.age<20){
        this.oranges = 20;
      }
    } else if(this.age>50){
      this.alive=false;
    } else if (this.age>40){
      this.oranges = 5;
    }
  },
  seed:function(){
    this.height=0;
    this.age=0;
    this.oranges=0;
    this.alive=true;
    return this;
  }
}

orangeTree.ageOneYear();

const hauteur = orangeTree[height];
console.log(hauteur);

module.exports = orangeTree;
