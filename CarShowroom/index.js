class Employee {
    constructor(name, postion, salary){
      this.name = name;
      this.postion = postion;
      this.salary = salary;
    }

    getDetails(){
        return `Name: ${this.name} , Postion: ${this.postion} , Salary: ${this.salary}`;
    }
}

class Cars{
    constructor(model, year, price, brand){
       this.model = model;
       this.year = year;
       this.price = price;
       this.brand = brand;
    }

    getCarDetails(){
        return `Model: ${this.model} , Year: ${this.year}, Price: ${this.price}, Brand: ${this.brand}`;
    }
}

const rl = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cars = [];
const employees = [];

function showMenu(){
    console.log('\n Meanu');
    console.log('1. Add Employee');
    console.log('2. List Of Employees');
    console.log('3. Upadte the Employee');
    console.log('4  Delete Employee');
    console.log('5  Add Cars');
    console.log('6 List of cars');
    console.log('7 Upadte Cars');
    console.log('8 delete Cars');
   console.log('9 Exit');
   rl.question( 'Enter Your Choice', (option)=>{
      switch(option){
        case  '1':
          addEmployees();
          break;
        case '2':
            listEmployees();
            break; 
        case '3':
            updateEmployees();
            break;
        case '4':
            deleteEmployees();
            break; 
        case '5':
            addCars();
            break;
        case '6':
            listCars();
            break;
        case '7':
            updateCars();
            break;
        case '8':
            deleteCars();
            break;
        case '9':
            rl.close();
            break;
        default :
        console.log('Invailed Inputs');
                                   showMenu();
                                   break;
      }
   });
}

function addEmployees(){
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter employee position: ', (position) => {
            rl.question('Enter employee salary: ', (salary) => {
                const employee = new Employee(name, position, salary);
                employees.push(employee);
                console.log('Employee added.');
                showMenu();
            });
        });
 });
}

function listEmployees(){
    if (employees.length === 0) {
        console.log('No employees found.');
    } else {
        employees.forEach((employee, index) => {
            console.log(`${index + 1}. ${employee.getDetails()}`);
        });
    }
    showMenu();
}
function updateEmployees() {
    if (employees.length === 0) {
        console.log('No employees found.');
        showMenu();
    } else {
        listEmployees();
        rl.question('Enter the employee number to update: ', (number) => {
            const index = parseInt(number) - 1;
            if (index >= 0 && index < employees.length) {
                rl.question('Enter new name: ', (name) => {
                    rl.question('Enter new position: ', (position) => {
                        rl.question('Enter new salary: ', (salary) => {
                            employees[index].name = name;
                            employees[index].position = position;
                            employees[index].salary = salary;
                            console.log('Employee updated.');
                            showMenu();
                        });
                    });
                });
            } else {
                console.log('Invalid employee number.');
                showMenu();
            }
        });
    }
}
function deleteEmployees() {
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
function addCars() {
    rl.question('Enter car model: ', (model) => {
        rl.question('Enter car brand: ', (brand) => {
            rl.question('Enter car year: ', (year) => {
                rl.question('Enter car price: ', (price) => {
                    const car = new Car(model, brand, year, price);
                    cars.push(car);
                    console.log('Car added.');
                    showMenu();
                });
            });
        });
    });
}

function listCars() {
    if (cars.length === 0) {
        console.log('No cars found.');
    } else {
        cars.forEach((car, index) => {
            console.log(`${index + 1}. ${car.getDetails()}`);
        });
    }
    showMenu();
}

function updateCars() {
    if (cars.length === 0) {
        console.log('No cars found.');
        showMenu();
    } else {
        listCars();
        rl.question('Enter the car number to update: ', (number) => {
            const index = parseInt(number) - 1;
            if (index >= 0 && index < cars.length) {
                rl.question('Enter new model: ', (model) => {
                    rl.question('Enter new brand: ', (brand) => {
                        rl.question('Enter new year: ', (year) => {
                            rl.question('Enter new price: ', (price) => {
                                cars[index].model = model;
                                cars[index].brand = brand;
                                cars[index].year = year;
                                cars[index].price = price;
                                console.log('Car updated.');
                                showMenu();
                            });
                        });
                    });
                });
            } else {
                console.log('Invalid car number.');
                showMenu();
            }
        });
    }
}

function deleteCars() {
    if (cars.length === 0) {
        console.log('No cars found.');
        showMenu();
    } else {
        listCars();
        rl.question('Enter the car number to delete: ', (number) => {
            const index = parseInt(number) - 1;
            if (index >= 0 && index < cars.length) {
                const removedCar = cars.splice(index, 1)[0];
                console.log(`Car ${removedCar.model} removed.`);
            } else {
                console.log('Invalid car number.');
            }
            showMenu();
        });
    }
}
showMenu();