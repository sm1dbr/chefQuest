// -- Definindo como o ingrediente é apresentado --

export interface Ingredient {
    name: string;
    quantity?: number;
    source?: string;
    rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

// -- Define como a receita é apresentada --

export interface Recipe {
    name: string;
    image?: string;
    rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
    category: 'Appetizers' | 'Main courses' | 'Desserts' | 'Drinks';
    appliance: string;
    foodType: 'Baked' | 'BBQ' | 'Mixology' | 'Molecular' | 'Seafood' | 'Vegi';
    dietType: 'Meat' | 'Vegan' | 'Vegetarian';
    price: number;
    ingredients: Ingredient[];
}