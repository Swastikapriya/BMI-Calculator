const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/ 10000)).toFixed(2)

        // Determine weight guide based on BMI value
        let weightGuide = '';

        if (bmi < 18.5) {
            weightGuide = 'You are underweight.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            weightGuide = 'You have a normal weight.';
        } else if (bmi >= 25 && bmi < 29.9) {
            weightGuide = 'You are overweight.';
        }

        // Display the BMI result and weight guide
        //results.innerHTML = `<span>${bmi}</span>`
        results.innerHTML = `
            <p>${bmi}</p>
            <p class="weight-guide">${weightGuide}</p>
        `;
    }
})