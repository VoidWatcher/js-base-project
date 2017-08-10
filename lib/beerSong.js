function beerSong(num){
  let result = ``;

  if (num < 0) {
    return null;
  }
  
  class Beers {
    
    constructor(beerNumber) {
      this.beerNumber = beerNumber;
    }

    print() {
      if (this.beerNumber >= 3) {
        return `${this.beerNumber} bottles of beer on the wall, ${this.beerNumber} bottles of beer.\nTake one down and pass it around, ${this.beerNumber - 1} bottles of beer on the wall.\n`;
      } 
      else if (this.beerNumber == 2) {
        return `${this.beerNumber} bottles of beer on the wall, ${this.beerNumber} bottles of beer.\nTake one down and pass it around, ${this.beerNumber - 1} bottle of beer on the wall.\n`;
      }
      else if (this.beerNumber == 1) {
        return `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`;
      }
      else if (this.beerNumber == 0) {
        return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;
      }
    }

  }
  
  for (let i = num; i >= 0; i--) {
    result += new Beers(i).print();
  }
  
  return result;  
}

console.log(beerSong(1));
module.exports = beerSong;
