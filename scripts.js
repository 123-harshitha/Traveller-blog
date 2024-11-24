// script.js

// Adding basic validation before submitting the payment form
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    const paymentInfo = document.getElementById('paymentInfo').value;
    
    if (paymentInfo.trim() === '') {
        event.preventDefault();
        alert('Please enter your payment information.');
    }
});
