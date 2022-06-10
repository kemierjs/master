async function test() {
    return new Promise((resolve, reject) => {
        console.log(32423)
        resolve();
    });
}

test().then(value => {
    console.log(value)
},(value) => {
    console.log(value)
});
