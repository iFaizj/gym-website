// Variables
var difficultySelected = document.getElementById("WorkoutDifficulty"); // Getting the element for the selection of the difficulty
var generateBtn = document.getElementById("search-lib"); // Adding the generate button
var generateExercises = document.getElementById("gen-exercises"); // Adding the wrapper that contains the exercise cards

// Checking if the search button was clicked
generateBtn.addEventListener("click", e => {

    // Getting the value  of the selected difficulty
    var selectedDifficulty = difficultySelected.options[difficultySelected.selectedIndex].innerText;

    switch(selectedDifficulty) {
        case "Beginner": // If the difficulty is beginner
            generateExercises.innerHTML = `
            <h3>Search Result</h3>
            <h5>Searched for: <span class="searched-field">Beginner Exercises</span></h5>

                <!-- Exercise Cards -->
                <div class="generatedPlan">

                    <div class="ExerciseItem">
                        <img src="https://static.vecteezy.com/system/resources/previews/008/573/063/non_2x/bodyweight-squat-young-man-doing-sport-exercise-hand-on-the-back-of-head-flat-illustration-isolated-on-different-layers-vector.jpg" alt="Bodyweight Squat Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Bodyweight Squats</strong><br /><span style="color: green;margin-bottom:-20px;">Beginner Difficulty</span><br />Targets: Legs (quads, hamstrings, glutes)</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/162/135/small/Free_Push_Up_Vector-01.jpg" alt="Push Ups Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Push-Ups</strong><br /><span style="color: green;margin-bottom:-20px;">Beginner Difficulty</span><br />Targets: Chest, shoulders, triceps, core</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://t3.ftcdn.net/jpg/02/77/23/32/360_F_277233250_NIwVrOKQvXNOmHjHOZWoMHKjSLLzFttS.jpg" alt="Plank Hold Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Plank Hold</strong><br /><span style="color: green;margin-bottom:-20px;">Beginner Difficulty</span><br />Targets: Core (abs, lower back)</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://www.shutterstock.com/image-vector/man-doing-hip-raises-butt-260nw-2095221859.jpg" alt="Glute Bridges Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Glute Bridges</strong><br /><span style="color: green;margin-bottom:-20px;">Beginner Difficulty</span><br />Targets: Glutes, lower back, hamstrings</p>
                    </div>

                </div>
`
            break;
        case "Intermediate": // If the difficulty is intermediate
            generateExercises.innerHTML = `
            <h3>Search Result</h3>
            <h5>Searched for: <span class="searched-field">Intermediate Exercises</span></h5>

                <!-- Exercise Cards -->
                <div class="generatedPlan">

                    <div class="ExerciseItem">
                        <img src="https://www.shutterstock.com/image-vector/man-doing-dumbbell-walking-lunges-600nw-2048783186.jpg" alt="Lunges Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Lunges (Bodyweight or Weighted)</strong><br /><span style="color: yellow;margin-bottom:-20px;">Intermediate Difficulty</span><br />Targets: Legs (quads, glutes, hamstrings)</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-NJiQ-VC13S4HuCM4cK3qsziHH0mWHwVqg&s" alt="Bench Press Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Incline Push-Ups or Bench Press</strong><br /><span style="color: yellow;margin-bottom:-20px;">Intermediate Difficulty</span><br />Targets: Chest, shoulders, triceps</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT713U9z5HHVWJSvzoIIr3WH8bEQ16FoG6ing&s" alt="Side Press Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Side Plank (with or without dips)</strong><br /><span style="color: yellow;margin-bottom:-20px;">Intermediate Difficulty</span><br />Targets: Core (obliques, abs)</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://cdn.vectorstock.com/i/1000v/03/39/man-doing-dumbbell-deadlift-exercise-vector-38320339.jpg" alt="Dumbbell Deadlift Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Dumbbell Deadlifts</strong><br /><span style="color: yellow;margin-bottom:-20px;">Intermediate Difficulty</span><br />Targets: Hamstrings, glutes, lower back</p>
                    </div>

                </div>
`
            break;
        default: // If the difficulty is expert
            generateExercises.innerHTML = `
            <h3>Search Result</h3>
            <h5>Searched for: <span class="searched-field">Expert Exercises</span></h5>

                <!-- Exercise Cards -->
                <div class="generatedPlan">

                    <div class="ExerciseItem">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/417/675/non_2x/man-doing-bulgarian-split-squats-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg" alt="Bulgarian Split Squats Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Bulgarian Split Squats</strong><br /><span style="color: red;margin-bottom:-20px;">Expert Difficulty</span><br />Targets: Legs (quads, glutes, hamstrings)</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7i8kk1DFxDOFSTC4sDUakXqkaYP8lrM2HA&s" alt="Weighted Pull Ups Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Weighted Pull-Ups</strong><br /><span style="color: red;margin-bottom:-20px;">Expert Difficulty</span><br />Targets: Back, biceps, shoulders</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://s3.amazonaws.com/prod.skimble/assets/1001414/image_iphone.jpg" alt="Dragon Flags Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Dragon Flags</strong><br /><span style="color: red;margin-bottom:-20px;">Expert Difficulty</span><br />Targets: Core (abs, hip flexors)</p>
                    </div>

                    <div class="ExerciseItem">
                        <img src="https://www.shutterstock.com/image-vector/man-doing-hex-trap-bar-600nw-2010600176.jpg" alt="Brarbell Deadlift Image" class="ExerciseImg">
                        <p class="ExerciseName"><strong>Barbell Deadlifts</strong><br /><span style="color: red;margin-bottom:-20px;">Expert Difficulty</span><br />Targets: Hamstrings, glutes, lower back, core</p>
                    </div>

                </div>
`
    }

});
