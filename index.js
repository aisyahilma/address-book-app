let contacts = []; // To store contacts

// Elements
const contactList = document.getElementById("contactList");
const searchInput = document.getElementById("searchInput");
const addContactBtn = document.getElementById("addContactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");
const contactForm = document.getElementById("contactForm");
const modalTitle = document.getElementById("modalTitle");

// Form Inputs
const contactId = document.getElementById("contactId");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birthday = document.getElementById("birthday");
const street = document.getElementById("street");
const city = document.getElementById("city");
const province = document.getElementById("province");
const postalCode = document.getElementById("postalCode");
const isFavorited = document.getElementById("isFavorited");

// Helper Functions
function saveContactsToStorage() {
  localStorage.setItem("stored-contacts", JSON.stringify(contacts));
}

function loadContactsFromStorage() {
  const storedContacts =
    JSON.parse(localStorage.getItem("stored-contacts")) || [];
  contacts = storedContacts;
  renderContacts();
}

function renderContacts(filter = "") {
  contactList.innerHTML = "";

  const filteredContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    contactList.innerHTML = "<p>No contacts found.</p>";
    return;
  }

  filteredContacts.forEach((contact) => {
    const contactCard = document.createElement("div");
    contactCard.className = `contact-card ${
      contact.isFavorited ? "favorite" : ""
    }`;
    contactCard.innerHTML = `
      <div>
        <strong>${contact.fullName}</strong>
        <p>${contact.email} | ${contact.phone}</p>
        <p>${contact.street}, ${contact.city}, ${contact.province}, ${contact.postalCode}</p>
      </div>
      <div class="contact-actions">
        <button onclick="editContact(${contact.id})">Edit</button>
        <button onclick="deleteContact(${contact.id})">Delete</button>
      </div>
    `;
    contactList.appendChild(contactCard);
  });
}

function clearForm() {
  contactId.value = "";
  fullName.value = "";
  email.value = "";
  phone.value = "";
  birthday.value = "";
  street.value = "";
  city.value = "";
  province.value = "";
  postalCode.value = "";
  isFavorited.checked = false;
}

// Event Listeners
addContactBtn.addEventListener("click", () => {
  clearForm();
  modalTitle.textContent = "Add Contact";
  contactModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  contactModal.classList.add("hidden");
});

searchInput.addEventListener("input", (e) => {
  renderContacts(e.target.value);
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newContact = {
    id: contactId.value ? Number(contactId.value) : Date.now(),
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    birthday: birthday.value,
    street: street.value,
    city: city.value,
    province: province.value,
    postalCode: postalCode.value,
    isFavorited: isFavorited.checked,
  };

  if (contactId.value) {
    // Update existing contact
    contacts = contacts.map((contact) =>
      contact.id === Number(contactId.value) ? newContact : contact
    );
  } else {
    // Add new contact
    contacts.push(newContact);
  }

  saveContactsToStorage();
  renderContacts();
  contactModal.classList.add("hidden");
});

// CRUD Functions
function editContact(id) {
  const contact = contacts.find((c) => c.id === id);
  if (!contact) return;

  contactId.value = contact.id;
  fullName.value = contact.fullName;
  email.value = contact.email;
  phone.value = contact.phone;
  birthday.value = contact.birthday;
  street.value = contact.street;
  city.value = contact.city;
  province.value = contact.province;
  postalCode.value = contact.postalCode;
  isFavorited.checked = contact.isFavorited;

  modalTitle.textContent = "Edit Contact";
  contactModal.classList.remove("hidden");
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
  saveContactsToStorage();
  renderContacts();
}

// Initialize
loadContactsFromStorage();
