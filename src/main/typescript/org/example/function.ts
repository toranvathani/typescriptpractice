// Following function returns good morning
// message based on value of name passed
function goodMorning(name?: string): string {
   
    // if name exits use it as suffix else ignore name
    const suffix = (name ? `, ${name}.` : '.');
    return 'Good Morning' + suffix;
}

// logs 'Good Morning.'
console.log(goodMorning());

// logs 'Good Morning, Sam.'
console.log(goodMorning('Sam')); 


//Fun Overloading

class Data 
{ 
	public displayData(data: string): number; 
	public displayData(data: number): string; 
	public displayData(data : any): any 
	{ 
		if (typeof(data) === 'number') 
			return data.toString(); 
		if (typeof(data) === 'string') 
			return data.length; 
	} 
} 

let object = new Data(); 
console.log("Result is : " + object.displayData(123456)); 
let stringData = "GeeksforGeeks"; 
console.log("Length of String " + stringData 
	+ " is : " + object.displayData(stringData)); 
