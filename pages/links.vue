<template>
<div>
   <div class="container">
      <h1>P0sseid0n</h1>
      <div>
         <nuxt-link to="/"><img src="/links/website.svg" />Website</nuxt-link>
         <a href="https://twitter.com/P0sseid0n" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src="/links/twitter.svg" />Twitter</a>
         <a href="https://github.com/P0sseid0n" target="_blank" rel="noopener noreferrer"><img alt="Github" src="/links/github.svg" />Github</a>
      </div>
   </div>
</div>
</template>

<script>
export default {
   head: {
      title: 'P0sseid0n – Links',
      meta: [
         { hid: 'description', name: 'description', content: 'P0sseid0n links' }
      ]
   },
}
</script>

<style lang="scss" scoped>
$main-color: #E94560;

h1{
   font-size: 96px;
   color: $main-color;

   font-weight: 600;

   margin-top: 96px;
   margin-bottom: 32px;
}

.container{
   margin: 0 auto;
   padding: 0 5%;
   text-align: center;

   div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      a{
         display: flex;
         align-items: center;
         justify-content: center;
      
         background: #323246;
      
         width: 100%;
         max-width: 384px;
         height: 64px;
      
         border-radius: 8px;
      
         margin-bottom: 32px;

         position: relative;

         text-decoration: none;
         color: $main-color;
         font-size: 24px;
         font-weight: 600;

         transition: background .3s, transform .3s;

         &:hover{
            background: rgb(70, 70, 90);
            transform: scale(1.04, 1.04);
         }

         img{
            position: absolute;
            left: 16px;
         }
      }
   }
}



@media screen and (max-width: 900px) {
   h1{
      font-size: 11vw;
   }
}


@media screen and (max-width: 600px) {
   h1{
      font-size: 14vw;
   }
}

@media screen and (max-width: 400px) {
   h1{
      font-size: 16vw;
   }
}
</style>