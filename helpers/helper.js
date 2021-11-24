const axios = require('axios').default;

const posts = [];

const initialFetch = async () => {
  const data = await axios.get(
    'https://api.hatchways.io/assessment/blog/posts?tag=tech'
  );
  data.data.posts.forEach(element => {
    posts.push(element);
  });
  return posts;
};

module.exports = {
  initialFetch,
};
