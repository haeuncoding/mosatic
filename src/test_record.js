// okay my brain is not functioning so we're going to pretend i'm talking to a cat
// and explain it step by step, then we'll go from there

// very very first, we have to check to see if the user hit record, and if so
// toggle recording to true, then we take the key input and put that shit into an array
// while we do that we also call the getTimestampsMS and put that shit into 
// its own array, then when the user clicks play, we click recording to false
// then we push out array's first element with the delay from durations until they're both
// empty
// how hard can it be? when you're barely awake and alive
// we'll see.`

// WE'LL SEE



// timestamps logic

let durations = []

let getTimestampsMS = function() {
    if (!durations.length) {
        durations.push(Date.now())
    } else {
        let timeNow = (Date.now() - durations.at(-1))
        durations.push(timeNow)
    }
}

while (durations.length) {
    return durations.shift();
}