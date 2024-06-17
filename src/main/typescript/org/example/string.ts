type FruitsName = "Apple" | "Mango" | "Banana"; 
function showFruitName(fruitsName: FruitsName): void { 
	console.log(fruitsName); 
} 
showFruitName('Mango');  

showFruitName('Banana'); 

type Pet = 'mouse' | 'dog' | 'Rabbit'; 
let pet: Pet; 
if(pet = 'mouse'){ 
	console.log("Correct"); 
}; 
if(pet = 'dog') 
{ 
	console.log("Correct");
}; 

