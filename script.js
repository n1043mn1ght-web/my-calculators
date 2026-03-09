function showCalc(type) {
    document.querySelectorAll('.calc-card').forEach(c => c.classList.add('hidden'));
    document.getElementById(type + '-calc').classList.remove('hidden');
}

function calcLoan() {
    const P = parseFloat(document.getElementById('amount').value);
    const r = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const n = parseFloat(document.getElementById('term').value) * 12;
    
    if (P && r && n) {
        const x = Math.pow(1 + r, n);
        const monthly = (P * x * r) / (x - 1);
        document.getElementById('loan-result').innerText = '$' + monthly.toFixed(2);
    }
}

function calcPercent() {
    const p = parseFloat(document.getElementById('p-val').value);
    const total = parseFloat(document.getElementById('p-total').value);
    if (p && total) {
        document.getElementById('percent-result').innerText = (total * p / 100).toFixed(2);
    }
}

function calcAge() {
    const birthDateInput = document.getElementById('birthdate').value;
    if (!birthDateInput) return;

    const birthDate = new Date(birthDateInput);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    document.getElementById('age-result').innerText = `${years} Years Old`;
    document.getElementById('age-details').innerText = `${months} months and ${days} days`;
}

// Инициализация при загрузке
window.onload = calcLoan;
