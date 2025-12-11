// Contact Manager CRUD Operations with MongoDB Backend

const API_URL = 'http://localhost:3000/api/contacts';

// Get DOM elements
const contactForm = document.getElementById('contact-form');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const contactsList = document.getElementById('contacts-list');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const contactIdInput = document.getElementById('contact-id');

let editingContactId = null;

// Load contacts from MongoDB on page load
async function loadContacts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch contacts');
        const contacts = await response.json();
        displayContacts(contacts);
    } catch (error) {
        console.error('Error loading contacts:', error);
        contactsList.innerHTML = '<div class="empty-state" style="color: red;">Error loading contacts. Make sure the server is running!</div>';
    }
}

// Display all contacts
function displayContacts(contacts) {
    if (contacts.length === 0) {
        contactsList.innerHTML = '<div class="empty-state">No contacts yet. Add your first contact above!</div>';
        return;
    }

    contactsList.innerHTML = contacts.map(contact => `
        <div class="contact-card">
            <div class="contact-info">
                <h3>${escapeHtml(contact.name)}</h3>
                <p>📞 ${escapeHtml(contact.phone)}</p>
                <p>✉️ ${escapeHtml(contact.email)}</p>
            </div>
            <div class="contact-actions">
                <button class="btn-edit" onclick="editContact('${contact._id}')">Edit</button>
                <button class="btn-delete" onclick="deleteContact('${contact._id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Create new contact
async function createContact(name, phone, email) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email })
        });
        
        if (!response.ok) throw new Error('Failed to create contact');
        return await response.json();
    } catch (error) {
        console.error('Error creating contact:', error);
        alert('Failed to create contact. Please try again.');
    }
}

// Update existing contact
async function updateContact(id, name, phone, email) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email })
        });
        
        if (!response.ok) throw new Error('Failed to update contact');
        return await response.json();
    } catch (error) {
        console.error('Error updating contact:', error);
        alert('Failed to update contact. Please try again.');
    }
}

// Delete contact
async function deleteContact(id) {
    if (confirm('Are you sure you want to delete this contact?')) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) throw new Error('Failed to delete contact');
            await loadContacts();
        } catch (error) {
            console.error('Error deleting contact:', error);
            alert('Failed to delete contact. Please try again.');
        }
    }
}

// Edit contact
async function editContact(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Failed to fetch contact');
        const contact = await response.json();
        
        editingContactId = id;
        contactIdInput.value = id;
        nameInput.value = contact.name;
        phoneInput.value = contact.phone;
        emailInput.value = contact.email;
        
        formTitle.textContent = 'Edit Contact';
        submitBtn.textContent = 'Update Contact';
        cancelBtn.style.display = 'inline-block';
        
        // Scroll to form
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (error) {
        console.error('Error fetching contact:', error);
        alert('Failed to load contact. Please try again.');
    }
}

// Reset form
function resetForm() {
    editingContactId = null;
    contactIdInput.value = '';
    contactForm.reset();
    formTitle.textContent = 'Add New Contact';
    submitBtn.textContent = 'Add Contact';
    cancelBtn.style.display = 'none';
}

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    
    if (editingContactId) {
        // Update existing contact
        await updateContact(editingContactId, name, phone, email);
    } else {
        // Create new contact
        await createContact(name, phone, email);
    }
    
    resetForm();
    await loadContacts();
});

// Handle cancel button
cancelBtn.addEventListener('click', () => {
    resetForm();
});

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load contacts when page loads
loadContacts();