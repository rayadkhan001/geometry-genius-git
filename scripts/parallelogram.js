// **the value of input field is always on text by default not number
// function calculateParallelogramArea(){
//     const base = getParallelogramBase();
//     console.log(base);
    // get base of the parallelogram
    // const parallelogramInput = document.getElementById('parallelogram-base');
    // const parallelogramText = parallelogramInput.value;
    // const base = parseFloat(parallelogramText); // corrected the variable name
    // console.log(base);

    // get height of the parallelogram
    // const parallelogramHeightInput = document.getElementById('parallelogram-height');
    // const parallelogramHeightText = parallelogramHeightInput.value;
    // const height = parseFloat(parallelogramHeightText);
    // console.log(height);


    // calculate base and height of the parallelogram
    // const area = base * height;

    // display parallelogram area 
    // const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    // parallelogramAreaSpan.innerText = area;
// }

// function getParallelogramBase(){
//     const parallelogramInput = document.getElementById('parallelogram-base');
//     const parallelogramText = parallelogramInput.value;
//     const base = parseFloat(parallelogramText);
//     return base;
// }

// kom code a kaj kora hoise. upore atto gula code lekha lagthese na.
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log('Base Value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('Height Value', height);
    
    const area = base * height;
    console.log('area of the parallelogram is:', area);
    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const getInputValueText = inputField.value;
    const inputValue = parseFloat(getInputValueText);
    // console.log(inputValue);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}