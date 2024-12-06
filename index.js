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
  
  // Menampilkan data kontak
  console.log("Initial Contacts:");
  contacts.forEach((contact, index) => {
    console.log(`Contact ${index + 1}:`);
    console.log(`  Full Name: ${contact.fullName}`);
    console.log(`  Street Address: ${contact.street}`);
    console.log(`  City: ${contact.city}`);
    console.log(`  Province: ${contact.province}`);
    console.log(`  Postal Code: ${contact.postalCode}`);
  });
  
  document.getElementById("address-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman setelah submit
  
    // Mengambil nilai
    const name = document.getElementById("name").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const postalCode = document.getElementById("postal-code").value;
  
    // Menyimpan data baru
    const newContact = {
      fullName: name,
      street: street,
      city: city,
      province: province,
      postalCode: postalCode,
    };
    contacts.push(newContact);
  
    // Menampilkan data baru di konsol
    console.log("\nNew Contact Added:");
    console.log(`  Full Name: ${newContact.fullName}`);
    console.log(`  Street Address: ${newContact.street}`);
    console.log(`  City: ${newContact.city}`);
    console.log(`  Province: ${newContact.province}`);
    console.log(`  Postal Code: ${newContact.postalCode}`);
  
    // Menampilkan alert sukses
    alert(`Data submitted successfully!\n\nName: ${name}\nStreet: ${street}\nCity: ${city}\nProvince: ${province}\nPostal Code: ${postalCode}`);
  });
  