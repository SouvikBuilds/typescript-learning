class Chai {
  public flavour: string = "Masala";
  private ingredients: string[] = [
    "Ginger",
    "Chai Leaves",
    "Water",
    "Milk",
    "Masala",
  ];

  revealIngredients() {
    return this.ingredients;
  }

  protected chaiBrew: number = 10;
}

const masalaChai = new Chai();

// staff door type protected

class GingerChai extends Chai {
  revealChaiBrew() {
    return `Chai Should be brewed for ${this.chaiBrew} minutes.`;
  }
}
const gingerChai = new GingerChai();
console.log(masalaChai.flavour);
console.log(masalaChai.revealIngredients());
console.log(gingerChai.revealChaiBrew());

class MakeChai {
  private _sugar: number = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(sugar: number) {
    if (sugar > 5) {
      throw new Error("Too Sweet");
    }
    this._sugar = sugar;
  }
}

const c = new MakeChai();
c.sugar = 3;
console.log(c.sugar);
