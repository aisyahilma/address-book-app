// Array untuk menyimpan kontak
const contacts = [];

// Menangani penambahan kontak
document
  .getElementById("add-contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengambil data dari form
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthday = document.getElementById("birthday").value;
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
      email: email,
      phone: phone,
      birthday: birthday,
      street: street,
      city: city,
      province: province,
      postalCode: postalCode,
    };
    contacts.push(newContact);

    // Menampilkan data baru di konsol
    console.log("\nNew Contact Added:");
    console.log(newContact);

    // Menampilkan daftar kontak terkini
    displayContacts();

    // Menampilkan alert sukses
    alert(
      `Contact added successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBirthday: ${birthday}\nStreet: ${street}\nCity: ${city}\nProvince: ${province}\nPostal Code: ${postalCode}`
    );

    // Reset form setelah submit
    this.reset();
  });

// Fungsi untuk menampilkan daftar kontak
function displayContacts() {
  const contactsList = document.getElementById("contacts");
  contactsList.innerHTML = "";

  contacts.forEach((contact) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${contact.fullName}</strong> <br>
      Email: ${contact.email} <br>
      Phone: ${contact.phone} <br>
      Birthday: ${new Date(contact.birthday).toLocaleDateString()} <br>
      Address: ${contact.street}, ${contact.city}, ${contact.province}, ${
      contact.postalCode
    }
    `;
    contactsList.appendChild(listItem);
  });
}

// Menangani pencarian kontak
document
  .getElementById("search-contacts-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const searchKeyword = document
      .getElementById("search-keyword")
      .value.trim();
    if (!searchKeyword) {
      alert("Please enter a name to search.");
      return;
    }

    const result = contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    if (result.length > 0) {
      console.log("\nSearch Results:");
      result.forEach((contact) => {
        console.log(contact);
      });
    } else {
      console.log(`\nNo contact found with the name "${searchKeyword}".`);
    }
  });
