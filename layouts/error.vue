<template>
<div>
   <div class="container">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ getErrorText(error.statusCode) }}</p>
      <NuxtLink to="/">Ir para o inicio</NuxtLink>
   </div>
</div>
</template>

<script>
export default {
   props: ['error'],
   methods: {
      getErrorText(error){
         switch(error){
            case 404:
               return 'Pagina não encontrada'

            default:
               return 'Ocorreu um erro'
         }
      }
   }
}
</script>

<style>
html, body{
   background-color: #1A1A2E;
}
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   font-family: 'Source Code Pro', monospace;
   color: white;
}
</style>

<style lang="scss" scoped>
$main-color: #E94560;

.container{
   height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;

   flex-direction: column;
}

h1{
   font-size: 144px;
   font-weight: bold;
   color: $main-color;

   line-height: 160px;
}

p{
   font-size: 28px;
   font-weight: bold;
}

a{
   display: flex;
   align-items: center;
   justify-content: center;

   background: #323246;

   width: 100%;
   max-width: 256px;
   height: 64px;

   border-radius: 8px;

   margin: 64px auto;

   text-decoration: none;
   color: $main-color;
   font-size: 20px;
   font-weight: bold;

   transition: background .3s, transform .3s;

   &:hover{
      background: rgb(70, 70, 90);
      transform: scale(1.04, 1.04);
   }
}
</style>