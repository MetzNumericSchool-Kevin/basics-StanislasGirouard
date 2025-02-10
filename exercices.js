const money = "Boule"
const shopName = "GreenBean"
let nbPotion = 3
let healthPotionPrice = 5
let isOpen = true
let bourse = 100

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
        console.log(nbPotion);
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !")
}

TTPotion = prompt("Combien de potions de soin veut-tu ? Tu as " + bourse + " " + money + " dans ta bourse.\n " + nbPotion + "  potion de soins disponible dans las boutique.")
cout = TTPotion * healthPotionPrice
if (TTPotion > nbPotion || cout > bourse){
    if (TTPotion > nbPotion){
        console.log("Impossible il y a seulement " + nbPotion + " en stock")
    }
    if (cout > bourse){
        console.log("Tu n'as pas assez de " + money)
    }   
}else{
    console.log("Prix de " + TTPotion + " potions de soins : " + cout + " " + money + " mon cher aventurier.")
    nbPotion = nbPotion - TTPotion
    bourse = bourse - cout
    console.log("il te reste " + bourse + " " + money)

}


