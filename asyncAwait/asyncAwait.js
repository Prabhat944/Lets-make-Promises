// //Deliverable

//1.Watch uptill the 18th min and write down the code as per the youtuber does both the pronises and asyn await

// console.log('person 1 : shows ticket');
// console.log('person 2 : shows ticket');

// const promiseWifeBringTicket = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000);
// });

// const getpopcorn=promiseWifeBringTicket.then((e) =>{
//     console.log('wife : i have the ticket');
//     console.log('husband : we should get in');
//     console.log('wife : no i am hungry!!');
//     return new Promise((resolve,reject) => { resolve(e)})
//    });

// const getbutter=getpopcorn.then((t)=>{
//     console.log('husband : i got the popcorn');
//     console.log('husband : we should get in');
//     console.log('wife : i need butter in my popcorn');
//     return new Promise((resolve,reject)=>{resolve(t)})
// });

// getbutter.then((m)=>{
//     console.log('husband : i got the butter');
//     console.log('husband : lets go then');
//     console.log(`Person 3 : shows ${m}`)
//   });

// console.log('person 4 : shows ticket');
// console.log('person 5 : shows ticket');




// console.log('person 1 : shows ticket');
// console.log('person 2 : shows ticket');

// const preMovie = async () => {
//     const promiseWifeBringTicket = new Promise((resolve,reject) => {
//         setTimeout(()=>{resolve ('ticket');},3000);});
    
//     const getpopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
//     const addbutter = new Promise((resolve,reject)=> resolve(`butter`));

//     let ticket =await promiseWifeBringTicket;
//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife : no i am hungry');

//     let popcorn = await getpopcorn;
//     console.log(`husbnd : i got some ${popcorn}`);
//     console.log('husband : we should go in');
//     console.log('wife : I need butter on my popcorn');

//     let butter = await addbutter;
//     console.log(`husband : i got some ${butter} on popcorn`);
//     console.log('husband : anything else darling');
//     console.log('wife : i want cold drink too')

// //2.Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
//     const getColdDrinks = new Promise((resolve,reject)=> resolve(`cold drink`));
     
//     let coldDrink = await getColdDrinks;
//     console.log(`husband : here your ${coldDrink}`);
//     console.log('wife : lets got we are getting late');
//     console.log('husband : thank you for the reminder *grinds*');

//     return ticket;
// };

// preMovie().then((m) => console.log(`Person 3 : shows ${m}`));

// console.log('person 4 : shows ticket');
// console.log('person 5 : shows ticket');

//3.Continue watching from the 18th min to 23rd min and understand how to handle Promise.all with async await

console.log('person 1 : shows ticket');
console.log('person 2 : shows ticket');

const preMovie = async () => {
    const promiseWifeBringTicket = new Promise((resolve,reject) => {
        setTimeout(()=>{resolve ('ticket');},3000);});
    
    const getpopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    const addbutter = new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject)=> resolve(`cold drink`));
     
    let ticket=await promiseWifeBringTicket
    let [popcorn,butter,coldDrink] = await Promise.all([getpopcorn,addbutter,getColdDrinks])

    console.log(`now we have ${popcorn} , ${butter} , ${coldDrink}`)

    return ticket;
};

preMovie().then((m) => console.log(`Person 3 : shows ${m}`));

console.log('person 4 : shows ticket');
console.log('person 5 : shows ticket');


//4.Convert the createPost , deletePost you wrote previously into async await completely

const posts = [
    {title : 'post one',body :'This is body one'},
    {title : 'post two',body : 'This is body two'}
]

function getpost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000);
}

const createPost = async (data)=>{
   await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(posts.push(data));
    },1000);
});

}

createPost({title : 'post three',body : 'This is post three'});
getpost();


const deletePost = async ()=>{
    await new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(posts.pop());
      },1000);
    });

}

deletePost();
getpost();


