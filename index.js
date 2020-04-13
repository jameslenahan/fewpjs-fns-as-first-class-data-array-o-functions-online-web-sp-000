const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dog, breed){
    let completedRoutine = [];
    routine.forEach( function(func){
        completedRoutine.push(func(dog, breed));
    });
    return completedRoutine;
}