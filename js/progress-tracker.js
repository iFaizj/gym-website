function calculateBMI(){
    const height = parseFloat(document.getElementById("height").value) / 100; //convert it to meters
    const weight = parseFloat(document.getElementById("weight").value);
    const Gender = document.querySelector('input[name="gender"]:checked')?.value;
    const Age = parseInt(document.getElementById("age").value);

    if (isNaN(height) || isNaN(weight) || isNaN(Age) || !Gender) {
        alert("Please fill in all the fields correctly!");
        return;
    }

    const bmi = weight / (height * height); //bmi Calculation
    const bmiFixed = bmi.toFixed(2);

    let bfp; //body fat calculation
    if(Gender.value == "male"){
        bfp = 1.2 * bmi + 0.23 * Age - 16.2;
    }else{
        bfp = 1.2 * bmi + 0.23 * Age - 5.4;
    }
    const bfpFixed = bfp.toFixed(2);

    document.getElementById("BMI-Result").innerText = bmiFixed;
    document.getElementById("BodyFat-Result").innerText = `${bfpFixed}%`;
    document.getElementById("BMI-BodyFat-result").style.display = "table";
    
    highlightBMICategory(bmi);

}

function highlightBMICategory(bmi) {

    const Row = document.querySelectorAll("#bmi-range-table tbody tr");

    Row.forEach(Row => {
        Row.style.backgroundColor = "rgb(109, 150, 158)";
        Row.style.color = "black";
    });

    let categoryId;
    if(bmi < 18.5){
        categoryId = "underweight";
    }else if(bmi >= 18.5 && bmi < 25){
        categoryId = "normal-weight";
    }else if(bmi >= 25 && bmi < 30){
        categoryId = "overweight";
    }else if(bmi >= 30 && bmi < 35){
        categoryId = "Obesity";
    }else{
        categoryId = "Above-Obesity";
    }

    let BG_Color;
    if(categoryId == "underweight"){
        BG_Color = "rgb(0, 255, 0)";
    }else if(categoryId == "normal-weight"){
        BG_Color = "rgb(128, 255, 0)";
    }else if(categoryId == "overweight"){
        BG_Color = "rgb(255, 255, 0)";
    }else if(categoryId == "Obesity"){
        BG_Color = "rgb(255, 128, 0)";
    }else{
        BG_Color = "rgb(255, 0, 0)";
    }

    const highlightedRow = document.getElementById(categoryId);
    highlightedRow.style.backgroundColor = BG_Color;
}