let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet:"Ponyt"
    },

    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet:"Nyúl"
    },

    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: true,
        pet:"Kutya"
    },

    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: false,
        pet:"Majom"
    }
]



const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const th_firstname1 = document.createElement("th");
const th_lastname = document.createElement("th");
const th_married = document.createElement("th");
const th_pet = document.createElement("th");

document.body.appendChild(table);
table.appendChild(thead);
tbody.appendChild(tr);



tr.appendChild(th_lastname);
tr.appendChild(th_firstname1);
tr.appendChild(th_pet);
tr.appendChild(th_married);
table.appendChild(tbody);



th_firstname1.innerHTML = "Keresztnév";
th_lastname.innerHTML = "Vezetéknév";
th_married.innerHTML = "Házas-e?" ;
th_pet.innerHTML = " Állat";
th_firstname1.colSpan = 2;

for(const pers of array)
{
    const tr_body = document.createElement('tr')

    tr_body.addEventListener('click',function(e){
        const selectedsor = tbody.querySelector(".selected");
        if(selectedsor != undefined)
        {
            selectedsor.classList.remove('selected');
        }
        else{
            console.log('click');
            e.currentTarget.classList.add('selected');
        }
    });

    tbody.appendChild(tr_body)

    const td_firstname1 = document.createElement('td')
    td_firstname1.innerHTML = pers.firstname1
    
    const td_lastname = document.createElement('td')
    td_lastname.innerHTML = pers.lastname
    tr_body.appendChild(td_lastname)
    tr_body.appendChild(td_firstname1) 

    if(pers.firstname2 === undefined)
    {
        td_firstname1.colSpan = 2
    }
    else{
        const td_firstname2 = document.createElement('td')
        td_firstname2.innerHTML = pers.firstname2;
        tr_body.appendChild(td_firstname2)
    
    }
    const td_married = document.createElement('td')
    td_married.innerHTML = pers.married ? 'igen ' : 'Nem';
    
    
    const td_pet = document.createElement('td')
    td_pet.innerHTML = pers.pet
    tr_body.appendChild(td_pet)
    tr_body.appendChild(td_married)
}


const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    const firstname1 = document.getElementById('firstname1')
    const firstname2 = document.getElementById('firstname2')
    const lastname = document.getElementById('lastname')
    const married = document.getElementById('married')
    const pet = document.getElementById('pet')

    const lastnameValue = lastname.value;
    e.preventDefault();
    const firtsname1Value = firstname1.value;
    const firstname2Value = firstname2.value;
    const marriedValue = married.checked;
    const petValue = pet.value;

    
})