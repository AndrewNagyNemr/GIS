// console.log("first");
// console.log("second");
// console.log("third");

// console.log("first");
// setTimeout(()=>{
// console.log("second");
// }, 1)
// console.log("third");

// const getPosts = () => {
//   let posts;

//   console.log("connecting to database ...");
//   setTimeout(() => {
//     posts = [
//       { id: 1, body: "first" },
//       { id: 2, body: "second" },
//     ];
//     // return posts;
//   }, 4000);

//   //   return posts;
// };

// const result = getPosts();

// console.log(result);

// const getPosts = (cb) => {
//     let posts;

//     console.log("connecting to database ...");
//     setTimeout(() => {
//       posts = [
//         { id: 1, body: "first" },
//         { id: 2, body: "second" },
//       ];
//       //   cb(posts)
//     }, 2000);
//   };

//   getPosts((posts)=>{
//     console.log("posts");
// })

const getPosts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const posts = [
        { id: 1, body: "first" },
        { id: 2, body: "second" },
      ];
      res(posts);
      // rej({error:"failed to connect to database"})
    }, 2000);
  });
};

const getComments = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const comments = [
        { id: 1, comment: "first" },
        { id: 2, comment: "second" },
      ];
      res(comments);
      // rej({error:"failed to connect to database"})
    }, 2000);
  });
};

// getPosts()
//   .then((posts) => getComments())
//   .then((comments)=> console.log(comments))
//   .catch((err) => console.log(err));

console.log("first");
(async()=>{
    console.log("second");
    const posts = await getPosts();
    const comments = await getComments();
    console.log(comments);
})()
console.log("third");
