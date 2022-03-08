const selectSection = document.getElementById('customerSelectSection');
fetch('/get-customers')
  .then((res) => res.json())
  .then((data) => getCustomers(data));

const getCustomers = (customers) => {
  customers.forEach((customer) => {
    const option = document.createElement('option');
    option.textContent = customer.name;
    option.value = customer.id;
    option.name = 'customerId';
    selectSection.appendChild(option);
  });
};


const storeSection = document.getElementById('storeSelectSection');
fetch('/get-stores')
  .then((res) => res.json())
  .then((data) => getStores(data));

const getStores = (stores) => {
  stores.forEach((store) => {
    console.log(store)
    const option = document.createElement('option');
    option.textContent = store.name;
    option.value = store.id;
    option.name = 'storeId';
    storeSection.appendChild(option);
  });
};
