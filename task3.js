const url = "https://jsonplaceholder.typicode.com/users"

async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("Gagal mengambil data:", err);
    }
}

async function processUsers() {
  const users = await fetchData();
a
// fetchData().then(users => {  bisa pakai .then langsung

  const nameDomicile = users.map(user => ({
    name: user.name,
    domicile: user.address.city
  }));

  nameDomicile.sort((a, b) => {
    if (a.domicile < b.domicile) return -1;
    if (a.domicile > b.domicile) return 1;
  });
  console.log(nameDomicile);
};

// );

processUsers()
