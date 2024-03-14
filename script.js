const form = document.querySelector('.kalkulator');
const bmiOutput = document.getElementById('BMI');
const descOutput = document.getElementById('desc');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const bmi = weight / (height ** 2);
    bmiOutput.textContent = bmi.toFixed(2);

    const isUnderAge = age < 18;
    let description = '';

    if (gender === 'male') {
        description = getKeteranganBMI(bmi, isUnderAge, 'male');
    } else {
        description = getKeteranganBMI(bmi, isUnderAge, 'female');
    }

    descOutput.textContent = description;
});

function getKeteranganBMI(bmi, isUnderAge, gender) {
    if (isUnderAge) {
        if (gender === 'male') {
            if (bmi < 16) {
                return 'Kurus';
            } else if (bmi >= 16 && bmi < 19) {
                return 'Normal';
            } else if (bmi >= 19 && bmi < 24) {
                return 'Kegemukan';
            } else {
                return 'Obesitas';
            }
        } else {
            if (bmi < 16) {
                return 'Kurus';
            } else if (bmi >= 16 && bmi < 19) {
                return 'Normal';
            } else if (bmi >= 19 && bmi < 24) {
                return 'Kegemukan';
            } else {
                return 'Obesitas';
            }
        }
    } else {
        if (gender === 'male') {
            if (bmi < 18.5) {
                return 'Kurus';
            } else if (bmi >= 18.5 && bmi < 25) {
                return 'Normal';
            } else if (bmi >= 25 && bmi < 30) {
                return 'Kegemukan';
            } else {
                return 'Obesitas';
            }
        } else {
            if (bmi < 18.5) {
                return 'Kurus';
            } else if (bmi >= 18.5 && bmi < 23) {
                return 'Normal';
            } else if (bmi >= 23 && bmi < 30) {
                return 'Kegemukan';
            } else {
                return 'Obesitas';
            }
        }
    }
}
