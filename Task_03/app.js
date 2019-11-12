const users = [{
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": {
            total: 300
        }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": {
            total: 400
        }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 2823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": {
            total: 200
        }
    }
];
//Elements UI
const body = document.body;

//Events
renderTable(createNewTable('MyFirstTable'));

//Functions
function renderTable(table) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(table);
    body.appendChild(fragment);
}

function createNewTable(caption) {
    let table = document.createElement('table');
    let tableCaption = document.createElement('caption');

    tableCaption.textContent = caption;
    table.appendChild(tableCaption);
    table.appendChild(createHeader());
    table.appendChild(createBody(users));
    table.appendChild(createFooter(getTotalBalance(users)));
    return table;
}

function createHeader() {
    let tableHeader = document.createElement('thead');

    const tableHeaderValue = {
        number: '#',
        name: 'Name',
        email: 'Email',
        balance: 'Balance',
    };

    for (const prop in tableHeaderValue) {
        let th = document.createElement('th');
        th.textContent = tableHeaderValue[prop];
        tableHeader.appendChild(th);
    }
    return tableHeader;
}

function createBody(arrObj) {
    let tableBody = document.createElement('tbody');

    arrObj.forEach((item, index) => {
        let tr = document.createElement('tr');
        let tdNumb = document.createElement('td');
        let tdName = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdBalance = document.createElement('td');
        tdBalance.classList.add('balance');

        for (let key in item) {
            if (key === 'name') {
                tdName.textContent = item[key];
            }
            if (key === 'email') {
                tdEmail.textContent = item[key];
            }
            if (key === 'balance') {
                tdBalance.textContent = item[key];
            }
        }
        tdNumb.textContent = index + 1;
        tr.appendChild(tdNumb);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBalance);
        tableBody.appendChild(tr);
    });
    return tableBody;
}

function createFooter(balance) {
    let tableFooter = document.createElement('tfoot');
    let totalBalance = balance;
    tableFooter.textContent = `Total balance: ${totalBalance}`;
    return tableFooter;
}

function getTotalBalance(arrObj) {
    let totalBalance = 0;
    arrObj.forEach((item) => {
        for (let key in item) {
            if (key === 'balance') {
                totalBalance += +item[key];
            }
        }
    });
    return totalBalance;
}