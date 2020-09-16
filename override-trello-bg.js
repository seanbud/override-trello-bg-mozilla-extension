/*
Just change the background image to grey.
*/

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
sleep(3500).then(() => {
    document.querySelector("#trello-root").style.background = "";
});