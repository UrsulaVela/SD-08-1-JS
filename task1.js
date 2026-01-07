export class Player {
  name;
    constructor(name) {
      this.name = name;
    }
    
    set setName(name){
      this.name = name;
    }

    get getName(){
      return this.name;
    }
    
  }