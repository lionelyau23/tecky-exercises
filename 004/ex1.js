document.querySelector('#box-1').addEventListener('click',function(event){
    // 1. Get the element itself by event.target or event.currentTarget
    const box = event.target

    // 2. Check if the box is occupied
    if (box.innerHTML !== null) {
        return
    }

    // 3, Put the X in if the box is not occupied.
    box.innerHTML = "X"

});