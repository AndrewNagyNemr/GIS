//node
function getPosts(cb) {
  posts = [1, 2, 3, 4, 5];
  cb(posts[0], posts[1]);
}

//developer
getPosts((x, y) => {
    console.log(x);
    console.log(y);
})
