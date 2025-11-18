import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'



import User from './userModel.js';
import { createUserCard } from './userCard.js';

const users = [];

const nameInput = document.getElementById('ex4_name');
const ageInput = document.getElementById('ex4_age');
const addButton = document.getElementById('ex4_btn');
const userList = document.getElementById('ex4_list');
const statusAlert = document.getElementById('ex4_status');

function updateUI() {
    const listHTML = users.map(user => createUserCard(user)).join('');
    userList.innerHTML = listHTML;

    const count = users.length;
    if (count === 0) {
        statusAlert.className = 'alert alert-secondary mb-3';
        statusAlert.textContent = 'Nog geen gebruikers toegevoegd.';
    } else {
        statusAlert.className = 'alert alert-success mb-3';
        statusAlert.textContent = `${count} gebruiker(s) toegevoegd.`;
    }
}

function handleAddUser() {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    if (name === '') {
        alert('Naam mag niet leeg zijn.');
        return;
    }
    if (isNaN(age) || age <= 0) {
        alert('Leeftijd moet een positief nummer zijn.');
        return;
    }

    const newUser = new User(name, age);
    users.push(newUser);

    nameInput.value = '';
    ageInput.value = '';
    nameInput.focus();

    updateUI();
}

addButton.addEventListener('click', handleAddUser);

updateUI();