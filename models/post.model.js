const helper = require('../helpers/helper.js');
let posts = helper.initialFetch();

function getPosts() {
  return new Promise((resolve, reject) => {
    if (posts.length === 0) {
      reject({
        message: 'no posts available',
        status: 202,
      });
    }
    resolve(posts);
  });
}

module.exports = {
  getPosts,
};
