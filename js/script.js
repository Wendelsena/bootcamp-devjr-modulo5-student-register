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
    {id: 1, name: "morning"},
    {id: 2, name: "afternoon"},
    {id: 3, name: "night"}
];

//OnLoad
loadStudands();

//Load all studants
function loadStudands() {
    for(let studant of studants) {
        addNewRow(studant);
    }
}

//Add new row
function addNewRow(studant) {
    var table = document.getElementById("studantsTable");
    var newRow = table.insertRow(); // insere uma linha na tabela

    // insere o Id na tabela
    var idNode = document.createTextNode(studant.id);
    newRow.insertCell().appendChild(idNode);

    // insere o Name na tabela
    var nameNode = document.createTextNode(studant.name);
    newRow.insertCell().appendChild(nameNode);

    // insere o Email na tabele
    var emailNode = document.createTextNode(studant.email);
    newRow.insertCell().appendChild(emailNode);

    // insere o Phone number na tabela
    var phoneNumberNode = document.createTextNode(studant.phoneNumber);
    newRow.insertCell().appendChild(phoneNumberNode);

    // insere o Course na tabela
    var courseNode = document.createTextNode(studant.course);
    newRow.insertCell().appendChild(courseNode);

    // insere o Period na tabela
    var options = ''; // começando em vazio 
    if(studant.morning) {
        options = '<span class="badge bg-success">Morning</span>';
    }

    if(studant.afternoon) {
        options = '<span class="badge bg-warning">Afternoon</span>';
    }

    if(studant.night) {
        options = '<span class="badge bg-primary">Night</span>';
    }

    newRow.insertCell().innerHTML = options;

}