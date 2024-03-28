// the value of input field is always on text by default not number
function calculateRhombusArea(){
    // get diagonal-1 of the rhombus
    const diagonal1Input  = document.getElementById('rhombus-d1');
    const diagonal1Text  = diagonal1Input.value;
    const diagonal1 = parseFloat(diagonal1Text);
    console.log(diagonal1);

    // get diagonal-2 of the rhombus
    const diagonal2Input = document.getElementById('rhombus-d2');
    const diagonal2Text = diagonal2Input.value;
    const diagonal2 = parseFloat(diagonal2Text);
    console.log(diagonal2);

    // calculate the area od the rhombus
    const area = 0.5 * diagonal1 * diagonal2;
    console.log('area of the diagonals:', area);

    // display the area of the rhombus
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}