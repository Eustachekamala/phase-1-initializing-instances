class Breakfast {
    constructor(food, drink){
        this.drink = drink;
        this.food = food
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink
    }
}

class Dinner{
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert
    }
}

let breakfast = new Breakfastreakfast("Kasava","Apple_Juice");
breakfast.food
breakfast.food


let lunch = new Lunch("greens", "porc", "stoney")
lunch.salad;
lunch.soup
lunch.drink

let dinner = new Dinnerinner("greens", "chiken", "orange", "ananas");
dinner.soup;
dinner.salad;
dinner.entree;