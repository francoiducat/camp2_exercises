const request = require("request");

const fetchPosts = (callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "GET"
  },
  function(error, response, result) {
    callback(result);
  });
};

const fetchPostByUser = (userId, callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "GET",
    qs:{userId:userId}
  },
  function(error, response, result) {
    callback(result);
  });
};

const fetchPost = (id, callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/posts/" + id,
    method: "GET",
  },
  function(error, response, result) {
    callback(result);
  });
};

const fetchUsers = (callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/users",
    method: "GET"
  },
  function(error, response, result) {
    callback(result);
  });
};

const fetchUser = (userId, callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/users/" + userId,
    method: "GET"
  },
  function(error, response, result) {
    callback(result);
  });
};

const fetchComments = (callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/comments",
    method: "GET"
  },
  function(error, response, result) {
    callback(result);
  });
};

const fetchCommentsByPost = (postId, callback) => {
  request({
    url: "http://jsonplaceholder.typicode.com/comments/",
    method: "GET",
    qs:{postId:postId}

  },
  function(error, response, result) {
    callback(result);
  });
};

const publishPost = (userId, title, body, callback) => {
  const objet = {userId:userId,title:title,body:body};
  request({
    url: "http://jsonplaceholder.typicode.com/posts/",
    method: "POST",
    form:objet
  },
  function(error, response, result) {
    callback(result);
  });
};

const publishComment = (postId, name, email, body, callback) => {
  const objetComment = {postId:postId,name:name,email:email,body:body};
  request({
    url: "http://jsonplaceholder.typicode.com/comments/",
    method: "POST",
    form:objetComment
  },
  function(error, response, result) {
    callback(result);
  });
};

const updatePostTitle = (postId, title, callback) => {
  const objetPostTitle = {title:title};
  request({
    url: "http://jsonplaceholder.typicode.com/posts/" + postId,
    method: "PUT",
    form:objetPostTitle
  },
  function(error, response, result) {
    callback(result);
  });
};

const updatePostBody = (postId, body, callback) => {
  const updatePostBody = {body:body};
  request({
    url: "http://jsonplaceholder.typicode.com/posts/" + postId,
    method: "PUT",
    form:updatePostBody
  },
  function(error, response, result) {
    callback(result);
  });
};

const updatePost = (postId, title, body, callback) => {
  const updatePost = {body:body,title:title};
  request({
    url: "http://jsonplaceholder.typicode.com/posts/" + postId,
    method: "PUT",
    form:updatePost
  },
  function(error, response, result) {
    callback(result);
  });
};

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser:fetchPostByUser,
  fetchPost:fetchPost,
  fetchUsers:fetchUsers,
  fetchUser:fetchUser,
  fetchComments:fetchComments,
  fetchCommentsByPost:fetchCommentsByPost,
  publishPost:publishPost,
  publishComment:publishComment,
  updatePostTitle:updatePostTitle,
  updatePostBody:updatePostBody,
  updatePost:updatePost
};
