class AdaCat {
  constructor(name, owner) {    //object created by inputing name and owner
    //initialising attributes
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.size = 30
    this.tiredness = 0
  }

  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0       //lowerbound of hunger is 0
    }
    if (newHunger > 10) {
      newHunger = 10      //upperbound of hunger is 10
    }
    this.hunger = newHunger
  }

  setTiredness(newTiredness) {
    if (newTiredness < 0) {
      newTiredness = 0
    }
    if (newTiredness > 15) {
      newTiredness = 15
    }
    this.tiredness = newTiredness
  }

  getDescription() {
    var sleepLine
    if (this.isSleeping) {
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      sleepLine = this.name + ' is awake.'
    }
    var lines = [     //place the required text in an array (to be returned later)
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',
      'their tiredness is ' + this.tiredness + '/15.',
      sleepLine
    ]
    //displays one element per line with join() method
    //the new line character ("\n") is inserted between each array element
    return lines.join('\n')
    //return type is string
  }

  feed() {      // feed function
    var hunger = this.hunger - 1    //reduces hunger by 1
    this.setTiredness(this.tiredness++)

    if (hunger < 3) {               //size increases if hunger less than 3
      this.size = this.size + 1
    }

    this.setHunger(hunger)          //updates hunger information
  }

  nap() {     //nap function
    this.isSleeping = true          //isSleeping set to true if function called
    this.setTiredness(0)
  }

  wakeUp() {  //wakeup function
    this.isSleeping = false         //isSleeping set to false if function called
  }

  play() {    //play function
    var hunger = this.hunger + 3    //hunger increases by 3
    this.setTiredness(this.tiredness + 3)
    if (hunger > 7) {
      this.size = this.size - 1     //size decreases if hunger is greter than 7
    }
    this.setHunger(hunger)          //updates hunger information
  }

  getHealth() {   //health function
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal      //calculates size score

    // health score gets lower as the cat gets
    // more hungry  
    var healthScore = sizeScore - this.hunger         //calculates health

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0     //lowerbound of health is 0
    }

    return healthScore
  }
}

module.exports = AdaCat
