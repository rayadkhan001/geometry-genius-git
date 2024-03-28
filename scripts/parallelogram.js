// the value of input field is always on text by default not number
function calculateParallelogramArea(){
    // get base of the parallelogram
    const parallelogramInput = document.getElementById('parallelogram-base');
    const parallelogramText = parallelogramInput.value;
    const base = parseFloat(parallelogramText); // corrected the variable name

    // get height of the parallelogram
    const parallelogramHeightInput = document.getElementById('parallelogram-width');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);

    // calculate base and height of the parallelogram
    const area = base * height;

    // display parallelogram area 
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}
