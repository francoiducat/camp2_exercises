// See Sparta courses for the exercise summary

const car = {
  speed:90,
  minutes:60,
  distance:90,
  start : function(){
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed : function(param){
    this.speed = param;
    return this;
  },
  drive: function(parameter){
    this.minutes = parameter;
    const result = this.speed/60*this.minutes;
    this.distance += result;
    return this;
  },
  showDistance: function(){
    console.log(`${this.distance} Km`);
    return this;
  }

}

car.start().changeSpeed(130).drive(42).showDistance().changeSpeed(130).drive(42).showDistance().start().changeSpeed(130).drive(42).showDistance();


// 91 km

module.exports = car;
