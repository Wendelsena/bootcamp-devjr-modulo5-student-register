var studants = [
    {
        id: 1,
        name: "João Carlos",
        email: "Carlos@gmail.com",
        phoneNumber: "(11) 11111-1111",
        course: "HTML and CSS",
        morning: true,
        afternoon: false,
        night: false
    },
    {
        id: 2,
        name: "Alefe Freitas",
        email: "Alefe@gmail.com",
        phoneNumber: "(22) 22222-2222",
        course: "C++",
        morning: false,
        afternoon: true,
        night: false
    },
    {
        id: 3,
        name: "Wendel Sena",
        email: "Wendel@gmail.com",
        phoneNumber: "(33) 33333-3333",
        course: "Java",
        morning: false,
        afternoon: false,
        night: true,
    },
];

var category = [
    { id: 1, name: "morning" },
    { id: 2, name: "afternoon" },
    { id: 3, name: "night" }
];

//OnLoad
loadStudands();

//Load all studants
function loadStudands() {
    for (let studant of studants) {
        addNewRow(studant);
    }
}

// Save studants
function save() {
    var student = {
        id: studants.length + 1, // Calcula o id com base na entrada 
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        course: document.getElementById("category").options[document.getElementById("category").selectedIndex].text, // para pegar o texto, não o numero da chamada
        morning: document.getElementById("checkBoxMorning").checked,
        afternoon: document.getElementById("checkBoxAfternoon").checked,
        night: document.getElementById("checkBoxNight").checked
    };

    studants.push(student); // add estudante ao array

    addNewRow(student); // add o estudante a linha

    document.getElementById("formRegister").reset();
}


//Add new row
function addNewRow(studant) {
    var table = document.getElementById("studantsTable");
    var newRow = table.insertRow(-1); // Insere a nova linha no final da tabela

    // insere o Id na tabela
    var idNode = document.createTextNode(studant.id);
    newRow.insertCell().appendChild(idNode);

    // insere o Name na tabela
    var nameNode = document.createTextNode(studant.name);
    newRow.insertCell().appendChild(nameNode);

    // insere o Email na tabela
    var emailNode = document.createTextNode(studant.email);
    var cell = newRow.insertCell();
    cell.className='d-none d-md-table-cell';
    cell.appendChild(emailNode);

    // insere o Phone number na tabela
    var phoneNumberNode = document.createTextNode(studant.phoneNumber);
    var cell = newRow.insertCell();
    cell.className='d-none d-md-table-cell';
    cell.appendChild(phoneNumberNode);

    // insere o Course na tabela
    var courseNode = document.createTextNode(studant.course);
    newRow.insertCell().appendChild(courseNode);

    // insere o Period na tabela
    var options = ''; // começando em vazio 
    if (studant.morning) {
        options += '<span class="badge bg-success">Morning</span>';
    }

    if (studant.afternoon) {
        options += '<span class="badge bg-warning">Afternoon</span>';
    }

    if (studant.night) {
        options += '<span class="badge bg-primary">Night</span>';
    }

    newRow.insertCell().innerHTML = options; // Adiciona as opções ao final da linha
}
