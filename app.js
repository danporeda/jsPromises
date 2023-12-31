// const makeDogPromise = () => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         console.log(rand);
//         if (rand < 0.5) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     }, 5000)
// });
// };
// makeDogPromise()
//     .then(() => {
//         console.log('We got a dog!');
//     })
//     .catch(() => {
//         console.log('No Dog');
// });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users'        : [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmerelda' }
                ],
                '/users/1'      : {
                    id        : 1,
                    username  : 'Bilbo',
                    upvotes   : 360,
                    city      : 'Lisbon',
                    topPostId : 454321
                },
                '/users/5'      : {
                    id       : 5,
                    username : 'Esmerelda',
                    upvotes  : 571,
                    city     : 'Honolulu'
                },
                '/posts/454321' : {
                    id    : 454321,
                    title :
                        'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about'        : 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data});
            }
            else {
                reject({ status: 404 });
            }
        }, 1000);
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`)
    })
    .then((res) => {
        console.log(res);
        const post = res.data.topPostId;
        return fakeRequest(`/posts/${post}`)
    })
    .then((res) => {
        console.log(res);
        console.log(res.data.title);
    })
    .catch((err) => {
        console.log('OH NO', err);
    });

// fakeRequest('/users')
//     .then((res) => {
//         console.log('Status Code', res.status);
//         console.log('Data:', res.data);
//         console.log('Request Worked');
//         })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('Request Failed');
//     });

//     fakeRequest('/dogs')
//     .then((res) => {
//         console.log('Status Code', res.status);
//         console.log('Data:', res.data);
//         console.log('Request Worked');
//         })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('Request Failed');
//     });