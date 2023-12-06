const willGetYouADog = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.random();
        console.log(rand);
        if (rand < 0.5) {
            resolve();
        }
        else {
            reject();
        }
    }, 5000)
});
willGetYouADog.then(() => {
    console.log('We got a dog!');
});
willGetYouADog.catch(() => {
    console.log('No Dog');
});