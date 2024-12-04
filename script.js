let employees = [];
let employeeId = 1;

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();

    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

   
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

   
    if (!name || !profession || !age) {
        errorMessage.style.display = 'block';
        return;
    }

   
    const newEmployee = {
        id: employeeId++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    employees.push(newEmployee);
    renderEmployeeList();

   
    successMessage.style.display = 'block';

   
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    renderEmployeeList();
}

function renderEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee-item');
        employeeDiv.innerHTML = `
            <p>${employee.id}. Name: ${employee.name} | Profession: ${employee.profession} | Age: ${employee.age}</p>
            <button onclick="deleteEmployee(${employee.id})">Delete User</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}
