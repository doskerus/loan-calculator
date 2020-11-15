const amountInput = document.getElementById('loan-amount');
const yearsInput = document.getElementById('loan-years');
const rateInput = document.getElementById('loan-rate');
const paymentSpan = document.getElementById('monthly-payment');

// Get the inputs from the DOM
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const intialValues = {
		amount: 1500000,
		years: 30,
		rate: 2.799
	};
	amountInput.value = intialValues.amount;
	yearsInput.value = intialValues.years;
	rateInput.value = intialValues.rate;
	paymentSpan.textContent = calculateMonthlyPayment(intialValues);
}

// Given an object of values (a value has amount, years and rate), calculate the monthly payment
// The output should be a string that always has 2 decimal places
function calculateMonthlyPayment(values) {
	const monthlyRate = values.rate / 1200;
	const payment = (values.amount * monthlyRate) / (1 - (1 + monthlyRate) ** -(values.years * 12));
	return '$' + payment.toFixed(2);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentValues = getCurrentUIValues();
	const currentMonthly = calculateMonthlyPayment(currentValues);
	updateMonthly(currentMonthly);
}

function getCurrentUIValues() {
	return {
		amount: +amountInput.value,
		years: +yearsInput.value,
		rate: +rateInput.value,
	};
}

// Given a string representing the monthly payment value, update the UI to show the value
function updateMonthly(monthly) {
	paymentSpan.textContent = monthly;
}

window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function (event) {
			event.preventDefault();
			update();
		});
	}
});
