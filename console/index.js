// Array to store contacts
let contacts = [];

// Function to save contacts to localStorage
function saveContactsToStorage(contacts) {
  localStorage.setItem("stored-contacts", JSON.stringify(contacts));
  console.log("\nContacts saved to localStorage.\n");
}

// Function to retrieve contacts from localStorage
function loadContactsFromStorage() {
  const storedContacts =
    JSON.parse(localStorage.getItem("stored-contacts")) || [];
  console.log("\nContacts loaded from localStorage.\n");
  return storedContacts;
}

// Function to generate a new ID
function generateId(contacts) {
  return contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
}

// Function to display the contact list
function renderContacts(contacts) {
  if (contacts.length === 0) {
    console.log("\nNo contacts available.\n");
    return;
  }

  console.log("\n=== Contact List ===");
  contacts.forEach((contact) => {
    console.log(`
      ID: ${contact.id}
      Name: ${contact.fullName} ${contact.isFavorited ? "⭐" : ""}
      Email: ${contact.email}
      Phone: ${contact.phone}
      Birthday: ${new Date(contact.birthday).toLocaleDateString()}
      Address: ${contact.street}, ${contact.city}, ${contact.province}, ${
      contact.postalCode
    }
    `);
  });
}

// Function to add a new contact
function addContact(newContactInput) {
  const newContact = {
    id: generateId(contacts),
    fullName: newContactInput.fullName,
    email: newContactInput.email,
    phone: newContactInput.phone,
    birthday: newContactInput.birthday,
    street: newContactInput.street,
    city: newContactInput.city,
    province: newContactInput.province,
    postalCode: newContactInput.postalCode,
    isFavorited: newContactInput.isFavorited || false,
  };

  contacts.push(newContact);
  saveContactsToStorage(contacts);
  console.log(`\nContact "${newContact.fullName}" added successfully!\n`);
  renderContacts(contacts);
}

// Function to delete a contact
function deleteContact(contactId) {
  contacts = contacts.filter((contact) => contact.id !== contactId);
  saveContactsToStorage(contacts);
  console.log(`\nContact with ID ${contactId} has been deleted.\n`);
  renderContacts(contacts);
}

// Function to update a contact
function updateContact(contactId, updatedContactInput) {
  contacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      return {
        ...contact,
        ...updatedContactInput,
        birthday: updatedContactInput.birthday
          ? new Date(updatedContactInput.birthday)
          : contact.birthday,
      };
    }
    return contact;
  });

  saveContactsToStorage(contacts);
  console.log(`\nContact with ID ${contactId} has been updated.\n`);
  renderContacts(contacts);
}

// Function to search for contacts by name
function searchContacts(searchKeyword) {
  const result = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  if (result.length > 0) {
    console.log(`\n=== Search Results for "${searchKeyword}" ===`);
    renderContacts(result);
  } else {
    console.log(`\nNo contact found with the name "${searchKeyword}".\n`);
  }
}

// Main function
function main() {
  console.log("\n=== Loading Contacts from Local Storage ===");
  contacts = loadContactsFromStorage();

  console.log("\n=== Adding New Contacts ===");
  addContact({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "123456789",
    birthday: "1990-01-01",
    street: "123 Main St",
    city: "Anytown",
    province: "Anywhere",
    postalCode: "12345",
    isFavorited: true,
  });

  addContact({
    fullName: "Jane Smith",
    email: "jane@example.com",
    phone: "987654321",
    birthday: "1985-05-15",
    street: "456 Elm St",
    city: "Othertown",
    province: "Somewhere",
    postalCode: "67890",
  });

  console.log("\n=== Searching for a Contact ===");
  searchContacts("Jane");

  console.log("\n=== Updating a Contact ===");
  updateContact(1, { fullName: "Johnathan Doe", phone: "111222333" });

  console.log("\n=== Deleting a Contact ===");
  deleteContact(2);

  console.log("\n=== Final Contact List ===");
  renderContacts(contacts);
}

// Run the main function
main();
