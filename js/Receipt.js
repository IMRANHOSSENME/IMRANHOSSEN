// Example dynamic data
const receiptData = {
    date: new Date().toLocaleDateString(),
    receiptNo: "123456",
    customerName: "John Doe",
    paymentMethod: "Credit Card",
    products: [
        { name: "Product A", quantity: 2, price: 50 },
        { name: "Product B", quantity: 1, price: 100 },
        { name: "Product C", quantity: 3, price: 30 }
    ]
};

// Populate receipt with data
document.getElementById('date').textContent = receiptData.date;
document.getElementById('receiptNo').textContent = receiptData.receiptNo;
document.getElementById('customerName').textContent = receiptData.customerName;
document.getElementById('paymentMethod').textContent = receiptData.paymentMethod;

const productList = document.getElementById('productList');
let totalAmount = 0;

receiptData.products.forEach(product => {
    const productTotal = product.quantity * product.price;
    totalAmount += productTotal;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>$${productTotal.toFixed(2)}</td>
    `;
    productList.appendChild(row);
});

document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
