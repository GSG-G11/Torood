const selectSection = document.getElementById('selectSection');
fetch('/get-customers')
  .then((res) => res.json())
  .then((data) => getCustomers(data));

const getCustomers = (customers) => {
  customers.forEach((customer) => {
    const option = document.createElement('option');
    option.textContent = customer.name;
    selectSection.appendChild(option);
  });
};
