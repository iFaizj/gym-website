// Variables
const FitnessLvl = document.getElementById('FitnessLvl').value;
const WorkoutGoal = document.getElementById('WorkoutGoal').value;

const plan = {
    beginner: {
            "build-muscle": [
                {name: "Treadmill Walk", image: "img/exercise_img/TreadmillWalk.jpg", description: "10 min - 1 Set"},
                {name: "Dumbbell Row Unilateral", image: "img/exercise_img/DumbbellRowUnilateral.png", description: "8-12 - 3 Sets"}, 
                {name: "Seated Dumbbell Presses", image: "img/exercise_img/SeatedDumbbellPresses.jpg", description: "8-12 - 2 Sets"}, 
                {name: "Machine Pec Fly", image: "img/exercise_img/MachinePecFly.jpg", description: "8-12 - 2 Sets"}, 
                {name: "Face Pull Cable", image: "img/exercise_img/FacePullCable.jpg", description: "8-12 - 4 Sets"}
            ],

            "lose-weight": [
                {name: "Treadmill Walk", image: "img/exercise_img/TreadmillWalk.jpg", description: "10 min - 1 Set"},
                {name: "Leg Lift", image: "img/exercise_img/LegLifts.jpg", description: "15 - 3 Sets"}, 
                {name: "Squats", image: "img/exercise_img/squats.webp", description: "15 - 3 Sets"}, 
                {name: "Climbers", image: "img/exercise_img/climbers.webp", description: "15 - 3 Sets"}, 
                {name: "Crunche", image: "img/exercise_img/crunche.webp", description: "15 - 3 Sets"}
            ],

            "flexibility": [
                {name: "Standing Side Stretch", image: "img/exercise_img/StandingSideStretch.jpg", description: "30 Sec - 3 Set"},
                {name: "Calf Stretch", image: "img/exercise_img/CalfStretch.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Back Stretch", image: "img/exercise_img/BackStretch.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Standing Quad Stretch", image: "img/exercise_img/Standing-quad-stretch.webp", description: "30 Sec - 3 Set"}, 
                {name: "Seated Hamstring Stretch", image: "img/exercise_img/seated-hamstring-stretch.jpg", description: "30 Sec - 3 Set"}
            ]
        },

        intermediate: {
            "build-muscle": [
                {name: "Dead Lift", image: "img/exercise_img/deadlift.jpeg", description: "8-12 - 3 Sets"},
                {name: "Flat Barbell Bench Press", image: "img/exercise_img/flat-barbell-bench-press.jpg", description: "8-12 - 3 Sets"}, 
                {name: "Lat Pull Down", image: "img/exercise_img/LatPullDown.webp", description: "8-12 - 3 Sets"}, 
                {name: "Incline Bunch Press", image: "img/exercise_img/InclineBunchPress.webp", description: "8-12 - 3 Sets"}, 
                {name: "Shoulder Press", image: "img/exercise_img/ShoulderPress.webp", description: "8-12 - 3 Sets"}
            ],

            "lose-weight": [
                {name: "Alternating Jump Lunges", image: "img/exercise_img/alternating_jump_lunges.jpg", description: "30 Sec - 3 Set"},
                {name: "Flutter Kicks", image: "img/exercise_img/flutter-kicks.jpg", description: "30 Sec - 3 Set"}, 
                {name: "High Kness", image: "img/exercise_img/High-Kness.jpg", description: "30 Sec - 3 Set"}, 
                
            ],

            "flexibility": [
                {name: "Downward", image: "img/exercise_img/downward.jpg", description: "30 Sec - 3 Set"},
                {name: "Head to Knee Forward Bend", image: "img/exercise_img/head-to-knee-forward-bend.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Revolved Chair", image: "img/exercise_img/RevolvedChair.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Standing Forward Fold", image: "img/exercise_img/Standing-Forward-Fold.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Upward Facing Dog", image: "img/exercise_img/UpwardFacingDog.jpg", description: "30 Sec - 3 Set"}
            ]
        },

        advanced: {
            "build-muscle": [
                {name: "Treadmill Walk", image: "img/exercise_img/TreadmillWalk.jpg", description: "10 min - 1 Set"},
                {name: "Dumbbell Row Unilateral", image: "img/exercise_img/DumbbellRowUnilateral.png", description: "8-12 - 3 Sets"}, 
                {name: "Seated Dumbbell Presses", image: "img/exercise_img/SeatedDumbbellPresses.jpg", description: "8-12 - 2 Sets"}, 
                {name: "Machine Pec Fly", image: "img/exercise_img/MachinePecFly.jpg", description: "8-12 - 2 Sets"}, 
                {name: "Face Pull Cable", image: "img/exercise_img/FacePullCable.jpg", description: "8-12 - 4 Sets"}
            ],

            "lose-weight": [
                {name: "Treadmill Walk", image: "img/exercise_img/TreadmillWalk.jpg", description: "10 min - 1 Set"},
                {name: "Leg Lift", image: "img/exercise_img/LegLifts.jpg", description: "15 - 3 Sets"}, 
                {name: "Squats", image: "img/exercise_img/squats.webp", description: "15 - 3 Sets"}, 
                {name: "Climbers", image: "img/exercise_img/climbers.webp", description: "15 - 3 Sets"}, 
                {name: "Crunche", image: "img/exercise_img/crunche.webp", description: "15 - 3 Sets"}
            ],

            "flexibility": [
                {name: "Downward", image: "img/exercise_img/downward.jpg", description: "30 Sec - 3 Set"},
                {name: "Head to Knee Forward Bend", image: "img/exercise_img/head-to-knee-forward-bend.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Revolved Chair", image: "img/exercise_img/RevolvedChair.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Standing Forward Fold", image: "img/exercise_img/Standing-Forward-Fold.jpg", description: "30 Sec - 3 Set"}, 
                {name: "Upward Facing Dog", image: "img/exercise_img/UpwardFacingDog.jpg", description: "30 Sec - 3 Set"}
            ]
        }
    }

    document.getElementById("genPlan").addEventListener("click", e => {
        const exercises = plan[FitnessLvl][WorkoutGoal];

        if (!exercises || exercises.length === 0) {
            alert("No exercises found for the selected options.");
            return;
        }
    
        const exerciseList = exercises.map(exercise => 
        `<div class="ExerciseItem">
            <img src="${exercise.image}" alt="${exercise.name}" class="ExerciseImg">
            <p class="ExerciseName"><strong>${exercise.name}</strong></p>
            <p class="c">${exercise.description}</p>
        </div>`).join("");
    
        const resultContainer = document.getElementById('generatedPlan');
        resultContainer.innerHTML = 
        `<h3>Your Personalized Workout Plan</h3>
            <div class="ExerciseList">
                ${exerciseList}
            </div>`;
    });