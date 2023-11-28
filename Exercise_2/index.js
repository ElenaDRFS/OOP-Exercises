class Warrior {
    constructor(life, power){
       this.life = life
       this.power = power;

    }
    
    attack(){
      // console.log(this.power); 
      return this.power;
    }

    defend(damage){
       let points =  Math.abs(damage - this.life); // con el abs devolvemos el valor sin signo negativo
       console.log(`Esta es la vida que queda: ${points}`) 

    }
}

// let warrior1 = new Warrior(10,3);
// warrior1.attack();
// warrior1.defend(4);


class Maya extends Warrior {
   constructor(life, power, attack, defend){
      super(life, power, attack, defend)

   }

   drinkColaCao(){
      let morePower = this.power + 10;
      return morePower;

   }
}


let maya1 = new Maya(20,5);
// maya1.drinkColaCao();
// maya1.defend(10);


class Aztec extends Warrior {
   constructor(life, power, attack, defend){
      super(life, power, attack, defend)
   }

   drinkNesquik(){
      let moreLife = this.life + 10;
      return moreLife
   }
}

let aztec1 = new Aztec (50,10);
// aztec1.drinkNesquik()


// batalla final, jugadors declarados arriba con los mismos puntos

aztec1.drinkNesquik();
maya1.drinkColaCao();
aztec1.defend(maya1.attack());
maya1.defend(aztec1.attack())




