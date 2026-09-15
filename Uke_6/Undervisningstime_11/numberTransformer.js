
function setTransformedNumber(numberToTransform) {
    if(numberToTransform % 2==0){ numberToTransform * 2}
    transformedNumber = numberToTransform
    return transformedNumber
}

function getTransformedNumber(numberToTransform){
    transformedNumber = setTransformedNumber(numberToTransform)
    return transformedNumber
}
