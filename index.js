const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dog, breed){
    let completedRoutine = [];
    routine.forEach( function(func){
        completedRoutine.push(func(dog, breed));
    });
    return completedRoutine;
}

function wakeDog(dog, breed){
    return `Wake ${dog} the ${breed}`;
}

function leashDog(dog, breed){
    return `Leash ${dog} the ${breed}`;
}

function walkToPark(dog, breed){
    return `Walk to the park with ${dog} the ${breed}`;
}