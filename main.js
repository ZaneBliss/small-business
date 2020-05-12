fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
    .then(response => response.json())
    .then(parsedData => {
        let counter = 1;
        parsedData.forEach(data => {
            document.querySelector(".wrapper").innerHTML += employee(counter)
            document.querySelector(`.employee__name--${counter}`).innerHTML += employeeName(data)
            document.querySelector(`.employee__department--${counter}`).innerHTML += employeeDepartment(data)
            document.querySelector(`.employee__computer--${counter}`).innerHTML += employeeComputer(data)
            counter++
        });
    })

const employee = (counter) => { 
    return `
    <article class="employee--${counter}">
    <header class="employee__name--${counter}">
    </header>
    <section class="employee__department--${counter}">
    </section>
    <section class="employee__computer--${counter}">
    </section>
    </article>`
}

const employeeName = data => {
    return `
    <h1>${data.name}</h1>`
}

const employeeDepartment = data => {
    return `
    <h3>${capitalize(data.department.name)}</h3>`
}

const employeeComputer = data => {
    return `
    <p>${data.computer.name}`
}

const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}