const money = "Boule"
const shopName = "GreenBean"
let potions = ["Soin", "Mana", "Ether"]
let nbPotionHealth = 1
let nbPotionMana = 1
let nbPotionEther = 2
let healthPotionPrice = 40
let manahPotionPrice = 20
let etherPotionPrice = 20
let isOpen = true
let myBourse = 0
let aventurierBourse = 100

const myName = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
if (isOpen){
    console.log("Bienvenue dans la boutique " + shopName + " ! 🎉");
}else{
    console.log("La boutique " + shopName + " est fermée, revenez plus tard !")
}

let choice = prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? \n 1. Le nom de la boutique \n 2. Le nom du sorcier \n 3. Le prix d'une potion de soin \n 4. La quantité d'une potin de soin")
switch (parseInt(choice)) {
    case 1:
        console.log(shopName);
        break;
    case 2:
        console.log(myName);
        break;
    case 3:
        console.log(healthPotionPrice + " " + money);
        break;
    case 4:
        console.log(nbPotionHealth);
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !")
}

console.log(potions[0])
console.log(potions[potions.length - 1])
potions.forEach((element) =>
    console.log("Nous avons des potions de " + element)
)
// console.log("Potions disponible : \n" + potions[0] + " : " + nbPotionHealth + "\n" + potions[1] + " : " + nbPotionMana + "\n" + potions[2] + " : " + nbPotionEther + "\n")
TTPotion = prompt("Combien de potions de soin veut-tu ? Tu as " + aventurierBourse + " " + money + " dans ta bourse.\n " + nbPotionHealth + "  potion de soins disponible dans las boutique.")
cout = TTPotion * healthPotionPrice
if (TTPotion > nbPotionHealth || cout > aventurierBourse){
    if (TTPotion > nbPotionHealth){
        console.log("Impossible il y a seulement " + nbPotionHealth + " en stock")
    }
    if (cout > aventurierBourse){
        console.log("Tu n'as pas assez de " + money)
    }   
}else{
    console.log("Prix de " + TTPotion + " potions de soins : " + cout + " " + money + " mon cher aventurier.")
    nbPotionHealth = nbPotionHealth - TTPotion
    aventurierBourse = aventurierBourse - cout
    console.log("il te reste " + aventurierBourse + " " + money)
}

potions.push("Poison")
potions.forEach((element) =>
    console.log("Nous avons des potions de " + element)
)

potions.pop("poison")
potions.forEach((element) =>
    console.log("Nous avons des potions de " + element)
)
