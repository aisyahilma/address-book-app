// Data kontak awal
const contacts = [
  {
    id: 1,
    fullName: "Aisyah Ilma",
    street: "Jl. Merdeka No. 123",
    city: "Jakarta",
    province: "DKI Jakarta",
    postalCode: "10110",
  },
  {
    id: 2,
    fullName: "Ahmad Yusuf",
    street: "Jl. Sudirman No. 45",
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40286",
  },
  {
    id: 3,
    fullName: "Fatimah Zahra",
    street: "Jl. Gajah Mada No. 67",
    city: "Surabaya",
    province: "Jawa Timur",
    postalCode: "60175",
  },
];

function updateContactList() {
  const contactListElement = document.getElementById("contact-list");
  contactListElement.innerHTML = ""; // Hapus daftar kontak sebelumnya

  contacts.forEach((contact) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${contact.fullName} - ${contact.street}, ${contact.city}, ${contact.province}, ${contact.postalCode}`;
    contactListElement.appendChild(listItem);
  });
}

// Fungsi untuk menampilkan daftar kontak
function displayContacts() {
  console.log("\nContact List:");
  contacts.forEach((contact, index) => {
    console.log(`Contact ${index + 1}:`);
    console.log(`  ID: ${contact.id}`);
    console.log(`  Full Name: ${contact.fullName}`);
    console.log(`  Street Address: ${contact.street}`);
    console.log(`  City: ${contact.city}`);
    console.log(`  Province: ${contact.province}`);
    console.log(`  Postal Code: ${contact.postalCode}`);
  });
}

// Menampilkan data awal
displayContacts();

// Event listener untuk form submit
document
  .getElementById("address-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman setelah submit

    // Mengambil nilai
    const name = document.getElementById("name").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const postalCode = document.getElementById("postal-code").value;

    // Membuat ID baru secara otomatis
    const newId =
      contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

    // Menyimpan data baru
    const newContact = {
      id: newId,
      fullName: name,
      street: street,
      city: city,
      province: province,
      postalCode: postalCode,
    };
    contacts.push(newContact);

    // Menampilkan data baru di konsol
    console.log("\nNew Contact Added:");
    console.log(`  ID: ${newContact.id}`);
    console.log(`  Full Name: ${newContact.fullName}`);
    console.log(`  Street Address: ${newContact.street}`);
    console.log(`  City: ${newContact.city}`);
    console.log(`  Province: ${newContact.province}`);
    console.log(`  Postal Code: ${newContact.postalCode}`);

    // Menampilkan daftar kontak terkini
    displayContacts();

    // Menampilkan alert sukses
    alert(
      `Data submitted successfully!\n\nName: ${name}\nStreet: ${street}\nCity: ${city}\nProvince: ${province}\nPostal Code: ${postalCode}`
    );
  });

// Fungsi untuk mencari kontak berdasarkan nama
function searchContactByName(name) {
  const result = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(name.toLowerCase())
  );
  if (result.length > 0) {
    console.log("\nSearch Results:");
    result.forEach((contact) => {
      console.log(`  ID: ${contact.id}`);
      console.log(`  Full Name: ${contact.fullName}`);
      console.log(`  Street Address: ${contact.street}`);
      console.log(`  City: ${contact.city}`);
      console.log(`  Province: ${contact.province}`);
      console.log(`  Postal Code: ${contact.postalCode}`);
    });
  } else {
    console.log(`\nNo contact found with the name "${name}".`);
  }
}

// Fungsi untuk menghapus kontak berdasarkan ID
function deleteContactById(id) {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    console.log(`\nContact with ID ${id} has been deleted.`);
    contacts.splice(index, 1);
    displayContacts();
  } else {
    console.log(`\nNo contact found with ID ${id}.`);
  }
}
