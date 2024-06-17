let global_var: number = 10; // global variable

class Geeks {
    geeks_var: number = 11; // class variable
    assignNum(): void {
        let local_var: number = 12; // local variable
    }
}

console.log("Global Variable: " + global_var);

let obj = new Geeks();
console.log("Class Variable: " + obj.geeks_var);
