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