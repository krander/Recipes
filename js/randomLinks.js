//specify random links below
var randomlinks=new Array()
randomlinks[0]="https://krander.github.io/Recipes/recipes/appetizers/salad/BlackBeanAndCornSalad.html"
randomlinks[1]="https://krander.github.io/Recipes/recipes/vegetarian/CrispySheetPanGnocchiAndVeggies.html"
randomlinks[2]="https://krander.github.io/Recipes/recipes/sidedishes/MapleBalsamicBrusselsSprouts.html"
randomlinks[3]="https://krander.github.io/Recipes/recipes/vegetarian/OnePanMexicanQuinoa.html" 
randomlinks[4]="https://krander.github.io/Recipes/recipes/vegetarian/PastaPrimavera.html"  
randomlinks[5]="https://krander.github.io/Recipes/recipes/vegetarian/PineappleFriedRice.html"
randomlinks[6]="https://krander.github.io/Recipes/recipes/vegetarian/SpicyCauliflowerPowerBowl.html"
randomlinks[7]="https://krander.github.io/Recipes/recipes/vegetarian/SpinachTortelliniSoup.html"
randomlinks[8]="https://krander.github.io/Recipes/recipes/sidedishes/SweetandSpicyBakedCauliflower.html"
randomlinks[9]="https://krander.github.io/Recipes/recipes/vegetarian/VegetableFritters.html"
randomlinks[10]="https://krander.github.io/Recipes/recipes/vegetarian/VegetableLoMein.html"
function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}
