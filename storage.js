// Initialize contacts in localStorage if not already set
if (!localStorage.getItem("storage-contacts")) {
  localStorage.setItem("storage-contacts", JSON.stringify([]));
}

// Function to add a contact
function addContact(contact) {
  // Retrieve existing contacts from localStorage
  const contacts = JSON.parse(localStorage.getItem("storage-contacts"));

  // Add the new contact to the contacts array
  const newContact = {
    id: Date.now(), // Unique ID based on timestamp
    ...contact, // Spread the contact details
  };
  contacts.push(newContact);

  // Save the updated contacts back to localStorage
  localStorage.setItem("storage-contacts", JSON.stringify(contacts));

  console.log("Contact added:", newContact);
  return newContact;
}

// Example usage of addContact
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
