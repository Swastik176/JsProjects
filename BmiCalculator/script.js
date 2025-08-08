function bmiCalculator(event){
    event.preventDefault();

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    
    console.log(`height: ${height} weight: ${weight}`);
    if(isNaN(height) || isNaN(weight)){

        let error = document.getElementById('bmi');
        error.innerHTML = "Invalid height or weight, try again!!";
        error.style.color = 'red';

        document.getElementById('category').innerHTML = '';
        return;
    }

    height /= 100; // converting cm to m
    let bmi = weight/(Math.pow(height, 2));
    bmi = bmi.toFixed(2);

    let category = "";
    
    if(bmi < 18.5)
        category = "Under Weight";
    else if(18.5 <= bmi && bmi <= 24.9)
        category = "Normal Weight";
    else if(25.0 <= bmi && bmi <= 29.9)
        category = "OverWeight";
    else if(30.0 <= bmi && bmi <= 34.9)
        category = "Obesity(Class I)";
    else if(35 <= bmi && bmi <= 39.9)
        category = "Obesity(Class II)";
    else 
        category = "Obesity(Class III/Morbid Obesity)";

    document.getElementById("bmi").innerHTML = `BMI: ${bmi}` 
    document.getElementById('category').innerHTML = `Category: ${category}`;

}