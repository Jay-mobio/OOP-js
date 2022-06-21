class Human {
    constructor(weapon) {
     this.weapon = weapon;
     this.health = 100;
    }
      
    receiveDamage() {
     this.health = this.health - 10;
     console.log(health)
    }
   }
   
   class Wizard extends Human {
    receiveDamage() {
     this.health = this.health - 5;
     console.log(health)
    }
   }
   
   var wizard = new Wizard("staff");
   wizard.receiveDamage();
   console.log(wizard.health);