class Employee {
    constructor(name ,  age,salary , employee){
        this.name = name ;
        this.age = age; 
        this.salary =salary;
        this.employee = employee;

    }
    get Details(){
        return `Name: ${this.name} Age: ${this.age} Salary: ${this.salary} Empolyee ${this.employee} `;
    }
}

class Manager extends Employee {
    constructor( name , age , salary , department){
        super(name , age, salary , employee)
        this.department = department;
    }
     get ManagerDetails(){
        return ` ${super.Details()}  Department: ${this.department}`;
     }

     counductMeetin(){
        console.log(`${this.name} is Conducting Meetin For the ${this.department} departement`);        
     }
}

class Developer extends Employee {
    constructor(name, age , salary , employee, programmingLanguage){
        super(name,age, salary , employee)
        this.programmingLanguage = programmingLanguage;
    }
    get developerDetails(){
        return `${super.Details()}  Programer: ${this.programmingLanguage}`;
    }
    writeCode(){
        console.log(`${this.name} is developer of the ${this.programmingLanguage} developer`);
        
    }
}

const readline = requrie('redline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Employee  = [];

function   showMenu(){
   console.log('\n1 - Add Employee');
   console.log('2 - list Empolyee');
   console.log('3- Exit');
   rl.question('Choose the option ' , (option)=>{
    switch(option){
        case '1':
            addEmployee();
            break;
        case '2':
            listEmployees();
            break;
        case '3':
            rl.close();
            break;
        default:
            console.log("Chooese Option 1,2,3 like that ");                                    
    }
   });
}

function addEmployee() {
    rl.question('Enter employee type (Manager/Developer): ', (type) => {
        rl.question('Enter name: ', (name) => {
            rl.question('Enter age: ', (age) => {
                rl.question('Enter salary: ', (salary) => {
                    if (type.toLowerCase() === 'manager') {
                        rl.question('Enter department: ', (department) => {
                            const manager = new Manager(name, age, salary, department);
                            Employee.push(manager);
                            console.log('Manager added.');
                            showMenu();
                        });
                    } else if (type.toLowerCase() === 'developer') {
                        rl.question('Enter programming language: ', (language) => {
                            const developer = new Developer(name, age, salary, language);
                            Employee.push(developer);
                            console.log('Developer added.');
                            showMenu();
                        });
                    } else {
                        console.log('Invalid employee type.');
                        showMenu();
                    }
                });
            });
        });
    });
}

function listEmployees(){
    if(Employee === 0){
      console.log('No empolyee is found');
   } else {
    Employee.forEach((employee, index) => {
        console.log(`${index + 1}. ${employee.getDetails()}`);
    });
}
showMenu();

}

showMenu();