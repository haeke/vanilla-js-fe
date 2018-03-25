
// Listen for a submit

document.querySelector('#loan-form').addEventListener('submit', function (e) {
    //hide the results
    document.getElementById('results').style.display = 'none';
    //show the loader on load
    document.getElementById('loading').style.display = 'block';
    //call calculate results after 2 seconds
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

// calculate results implementation
function calculateResults(e) {
    //UI variables
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    //determine monthly payment amount
    if (isFinite(monthly)) {
        //set the monthly payment value
        monthlyPayment.value = monthly.toFixed(2);
        //set the total payment value
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        //set the total interest value
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        //show the results
        document.getElementById('results').style.display = 'block';
        //hide the loading
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers.');
        //hide the loading div
        document.querySelector('#loading').style.display = 'none';
    }
}

// show error implementation
function showError(message) {
    // create div element
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    //get the heading
    const heading = document.querySelector('.heading');

    // add the class to the div
    errorDiv.className = 'alert alert-danger';
    // text to be displayed
    errorDiv.appendChild(document.createTextNode(message));

    //insert error above the heading
    card.insertBefore(errorDiv, heading);

    //clear the error message after 3 seconds
    setTimeout(clearError, 3000);
}

// clear error implementation
function clearError() {
    //remove the alert div
    document.querySelector('.alert').remove();
}