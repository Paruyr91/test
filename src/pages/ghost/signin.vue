<template>
  <Layout :show-logo="false">
     <form name= "add-subscriber" id="myForm" method="post" @submit.prevent="handleFormSubmit" >
       <input type="email" v-model="formData.Email" name="email" required="" id="id_email"><br>
       <input type="password" v-model="formData.Password" name="password" required="" id="id_password">
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
import axios from "axios";

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

    methods: {
        encode(data) {
          
            return {username:data.Email, password:data.Password}
        },

        handleFormSubmit(e) {
         let body=JSON.stringify(this.encode({
                    ...this.formData,
                }))
      console.log(body)
      const options = {
          headers: {
           'Content-Type': 'application/json',
                  }
          };

            axios.post('https://hotcocoa.design/ghost/api/v3/admin/session',body,options)
            .then((res) => {
             console.log(res)
             console.log(document.cookie, res.headers.Cookie, 'kkkkkkkkk')
            })
            .catch(error => alert(error))
        }
    }
 
}


</script>
