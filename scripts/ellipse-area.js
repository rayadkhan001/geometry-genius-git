function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-major-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area); 
}