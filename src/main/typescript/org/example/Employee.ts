//Constructor Method
function Employee({ Employee_fn, Employee_ln, Employee_age }: { Employee_fn; Employee_ln; Employee_age; }): void {
    this.fn = Employee_fn;
    this.ln = Employee_ln;
    this.age = Employee_age;
}
