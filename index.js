// Code your solution in this file!
let num1 = 0
let distanceInBlocks = 0

function distanceFromHqInBlocks(num1){
    if (num1 > 42){
        distanceInBlocks = (num1 - 42)
        
        return distanceInBlocks
    } else {
        distanceInBlocks = (42 - num1)

        return distanceInBlocks
    }
}

let distanceInFeet = 0

function distanceFromHqInFeet(distanceInBlocks){
    distanceInFeet = (distanceFromHqInBlocks(distanceInBlocks) * 264)

    return distanceInFeet
}

let start = 0
let destination = 42
let theDistanceTravelledInFeet = 0


function distanceTravelledInFeet(start, destination){
    if (start > destination) {
        theDistanceTravelledInFeet = (start - destination) * 264
        
        return theDistanceTravelledInFeet
    } else {
        theDistanceTravelledInFeet = (destination - start) * 264
        
        return theDistanceTravelledInFeet
    }
}

let farePrice = 0

function calculatesFarePrice(start, destination){
    let feetDistance = distanceTravelledInFeet(start, destination)

    if (feetDistance <= 400) {
        farePrice = 0
        return farePrice
    } else if (feetDistance > 400 && feetDistance < 2000) {
        farePrice = (feetDistance - 400) * 2
        return farePrice / 100
    } else if (feetDistance > 2000 && feetDistance < 2500) {
        farePrice = 25
        return farePrice
    } else {
        return "cannot travel that far"
    }
}

