//specify random links below
var randomlinks=new Array()
randomlinks[0]="https://krander.github.io/Recipes/recipes/BlackBeanAndCornSalad.html"
randomlinks[1]="https://krander.github.io/Recipes/recipes/CrispySheetPanGnocchiAndVeggies.html"
randomlinks[2]="https://krander.github.io/Recipes/recipes/MapleBalsamicBrusselsSprouts.html"
randomlinks[3]="https://krander.github.io/Recipes/recipes/OnePanMexicanQuinoa.html" 
randomlinks[4]="https://krander.github.io/Recipes/recipes/PastaPrimavera.html"  
randomlinks[5]="https://krander.github.io/Recipes/recipes/PineappleFriedRice.html"
randomlinks[6]="https://krander.github.io/Recipes/recipes/SpicyCauliflowerPowerBowl.html"
randomlinks[7]="https://krander.github.io/Recipes/recipes/SpinachTortelliniSoup.html"
randomlinks[8]="https://krander.github.io/Recipes/recipes/SweetandSpicyBakedCauliflower.html"
randomlinks[9]="https://krander.github.io/Recipes/recipes/VegetableLoMein.html"
function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}
