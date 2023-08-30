interface Employee {
  getName(): string;
  getRole(): string;
}

// Individual
class IndividualEmployee implements Employee {
  constructor (private name: string, private role: string) {}

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return this.role;
  }
}

// Group
class Departments implements Employee {
  private employees: Employee[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name
  }

  getRole(): string {
    return 'Darpartments';
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployeeList(): string[] {
    return this.employees.map((employee) => employee.getName());
  }
}

// Using Composite

const king = new IndividualEmployee('King', 'CEO');
const queen = new IndividualEmployee('Queen', 'CTO');
const jack = new IndividualEmployee('Jack', 'CFO');

const engineerDepartment = new Departments('Engineering');
const saleDepartment = new Departments('Sale');

// Employees
console.log(`${king.getName()} is ${king.getRole()}`);

// Department - Engineering
console.log(`${engineerDepartment.getName()} is ${engineerDepartment.getRole()}`);
engineerDepartment.addEmployee(queen);
console.log(`${engineerDepartment.getEmployeeList()}`);

// Departments - Sale
console.log(`${saleDepartment.getName()} is ${saleDepartment.getRole()}`);
saleDepartment.addEmployee(jack);
saleDepartment.addEmployee(new IndividualEmployee('Matthew', 'Senior Sales'));
console.log(`${saleDepartment.getEmployeeList()}`);

// Department - Company
const company = new Departments('company');
company.addEmployee(king);
company.addEmployee(engineerDepartment);
company.addEmployee(saleDepartment);
console.log('================================================================');
console.log(`${company.getName()} is ${company.getRole()}`);
console.log(`${company.getEmployeeList()}`);