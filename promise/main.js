/////////////Deliverable

// // 1) Watch uptill first 15:30 ,  create a promise as per the youtuber does
// const posts=[
//     {title:'post one',body:'This is body one'},
//     {title:'post two',body:'This is body two'}
// ]

// function getpost(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post)=>{
//            output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML=output;
//     },1000);
// }


// function createpost(data){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         posts.push(data);

//         const error=false;
//         if (!error){
//             resolve();
//         }
//         else{
//             reject('error:Something is wrong');
//         }
//     },1000);
// });

// }

// createpost({title:'post third',body:'This is body three'})
// .then(getpost)
// .catch(err => console.log(err));



// // 2)Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array

// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             if(posts.length === 0){
//                 reject('error:Array is empty now');
                
//             }
//             else{
//                 posts.pop();
//                 resolve(); 
//             }
//         },1000);
//     });
    
// }
// deletepost()
// .then()
// .catch(err => console.log(err));

// // 3)Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now

// deletepost();

// deletepost();

// // 4)Try creating a post and deleting at the same time, how would you do it(Think!!!)
// setTimeout(()=>{
//     createpost({title:'post five',body:'This is body five'});
//     deletepost();
//     console.log('its working somehow')
// },3000);

// // 5)Try creating a post and deleting at the same time, how would you do it.Do this in such a way that is not dependent on setTimeout timer value.(Think!!!)

//  function setAndDelete(){
//      return new Promise((resolve,reject)=>{
//         createpost({title:'post six',body:'This is body six'});      
//             resolve(console.log("set and delete working"));      
//      });
//  }
//  setAndDelete()
//  .then(deletepost);



////////////////////Promise.all 


// // 1.Watch the video from here https://www.youtube.com/watch?v=PoRJizFvM7s&t=925s uptill 18:30 min and implement the code which the youtuber does based on promise.all
// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'GoodBye');
// });
// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));


// // 2.I want you to create one more promise called updateLastUserActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user. [If stuck for long watch the first hint]

// const posts=[
//     {title:'post one',body:'This is body one',lastActivity:new Date().getTime()},
//     {title:'post two',body:'This is body two',lastActivity:new Date().getTime()}
// ]

// function getpost(){
//     setTimeout(()=>{
//         let output="";
//         posts.forEach((post)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//         return output;
//     },1000);
// }

// function createPost(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({...data,lastActivity:new Date().getTime()})
//             let allpost='';
//             posts.forEach((post)=>{
//                 allpost += `${post.title} - `
//             });
//             resolve(allpost);
//         },1000);
//     });
    
// }

// const updateLastUserActivityTime = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let output='';
       
//             output = `updated on ${new Date().getDate()}-${new Date().getDay()}-${new Date().getFullYear()} at ( ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ) `
        
//      resolve(output);

//     },1000);
// });
// Promise.all([createPost({title:'post three',body:'this is body three'}),updateLastUserActivityTime])
// .then((results) => {
//     getpost
//     console.log(results)
// },getpost())
// .catch(err=>console.log(err));


// // 3.Once the above promises are resolved , I want you to delete the post by calling the deletion promise. Once successfully deleted, I want you to log the new set of Posts of the user.
// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             if(posts.length === 0){
//                 reject('error:Array is empty now');
                
//             }
//             else{
//                 posts.pop();
//                 resolve(); 
//             }
//         },1000);
//     });
    
// }
// Promise.all([deletepost(),deletepost(),deletepost()])
// .then(getpost)

// Promise.all([createPost({title:'post one',body:'this is body one'}),createPost({title:'post two',body:'this is body two'}),createPost({title:'post three',body:'this is body three'}),updateLastUserActivityTime])
// .then((results) => {
//     getpost
//     console.log(results)
// },getpost())
// .catch(err=>console.log(err));




