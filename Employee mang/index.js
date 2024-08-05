class Employee {
    constructor(name, age, salary) {
        if (this.constructor === Employee) {
            throw new Error("Cannot instantiate abstract class Employee");
        }
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getDetails() {
        throw new Error("Abstract method getDetails must be implemented by subclass");
    }
}

class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Department: ${this.department}`;
    }

    conductMeeting() {
        return `${this.name} is conducting a meeting in the ${this.department} department.`;
    }
}

class Developer extends Employee {
    constructor(name, age, salary, programmingLanguage) {
        super(name, age, salary);
        this.programmingLanguage = programmingLanguage;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Programming Language: ${this.programmingLanguage}`;
    }

    writeCode() {
        return `${this.name} is writing ${this.programmingLanguage} code.`;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const employees = [];

function showMenu() {
    console.log('\n1. Add Employee');
    console.log('2. List Employees');
    console.log('3. Delete Employee');
    console.log('4. Update Employee Salary');
    console.log('5. Exit');
    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                addEmployee();
                break;
            case '2':
                listEmployees();
                break;
            case '3':
                deleteEmployee();
                break;
            case '4':
                updateEmployeeSalary();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Invalid option.');
                showMenu();
                break;
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
                            employees.push(manager);
                            console.log('Manager added.');
                            showMenu();
                        });
                    } else if (type.toLowerCase() === 'developer') {
                        rl.question('Enter programming language: ', (language) => {
                            const developer = new Developer(name, age, salary, language);
                            employees.push(developer);
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

function listEmployees() {
    if (employees.length === 0) {
        console.log('No employees found.');
    } else {
        employees.forEach((employee, index) => {
            console.log(`${index + 1}. ${employee.getDetails()}`);
        });
    }
    showMenu();
}

function deleteEmployee() {
    if (employees.length === 0) {
        console.log('No employees found.');
        showMenu();
    } else {
        listEmployees();
        rl.question('Enter the employee number to delete: ', (number) => {
            const index = parseInt(number) - 1;
            if (index >= 0 && index < employees.length) {
                const removedEmployee = employees.splice(index, 1)[0];
                console.log(`Employee ${removedEmployee.name} removed.`);
            } else {
                console.log('Invalid employee number.');
            }
            showMenu();
        });
    }
}

function updateEmployeeSalary() {
    if (employees.length === 0) {
        console.log('No employees found.');
        showMenu();
    } else {
        listEmployees();
        rl.question('Enter the employee number to update salary: ', (number) => {
            const index = parseInt(number) - 1;
            if (index >= 0 && index < employees.length) {
                rl.question('Enter new salary: ', (newSalary) => {
                    employees[index].salary = newSalary;
                    console.log(`Employee ${employees[index].name}'s salary updated to ${newSalary}.`);
                    showMenu();
                });
            } else {
                console.log('Invalid employee number.');
                showMenu();
            }
        });
    }
}

showMenu();
