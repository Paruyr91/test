<template>
  <Layout :show-logo="false">
     <form name= "add-subscriber" id="myForm" method="post" @submit.prevent="handleFormSubmit" >
       <button type="submit" name="button">Subscribe</button>
    </form>

    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>


  </Layout>
</template>

<page-query>
{
  posts: allGhostPost(
      sortBy: "published_at",
      order: DESC,
  ) {
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D. MMMM YYYY")
        path
        slug
        id
        coverImage: feature_image
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
        return {
            formData: {},
            }
        },

        mounted () {
          console.log('asdasd', document.cookie)
        },

    methods: {
      encode(data) {
        return data
      },

      handleFormSubmit(e) {
      
// const key = '5fca3aac9e81420001d7da45:347752c55cb51992226cf9815ccade4aa276a1b590b449e5185c09240d38e035';

// const [id, secret] = key.split(':');
// const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
//     keyid: id,
//     algorithm: 'HS256',
//     expiresIn: '5m',
//     audience: `/v3/admin/`
// });
// const url = 'http://localhost:2368/ghost/api/v3/admin/posts';
// const headers = { Authorization: `Ghost ${token}` };
// const payload = { posts: [{ title: 'Hello World hiii' }] }

      const options = {
          headers: {
           'Content-Type': 'application/json',
                  }
          };

fetch('https://hotcocoa.design/ghost/api/v3/admin/posts', {credentials: 'include'},options)
    .then(response => console.log(response))
    .catch(error => console.error(error));
      }
    }
 
}


</script>
