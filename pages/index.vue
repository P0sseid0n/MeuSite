<template>
  <!-- <Tutorial/> -->
<div>
   <!-- <header>
      <div class="container">
         <button>{{ nameFix }}</button>
         <div>
            <button>Projetos</button>
            <button>Conhecimento</button>
            <button>Sobre</button>
         </div>
         <img src="/index/arrow-red.svg" alt="Arrow" @click="openHeader" v-if="headerOpen">
         <img src="/index/arrow.svg" alt="Arrow" @click="openHeader" v-else>
      </div>
   </header> -->
   <nav>
      <button :class="{'active': sectionPosition == 0}" @click="sectionPosition = 0"><span>Inicio</span></button>
      <button :class="{'active': sectionPosition == 1}" @click="sectionPosition = 1"><span>Projetos</span></button>
      <button :class="{'active': sectionPosition == 2}" @click="sectionPosition = 2"></button>
      <button :class="{'active': sectionPosition == 3}" @click="sectionPosition = 3"></button>
   </nav>
   <main>
      <div class="container">
         <h1>Olá,<br>eu sou o<br><span @mouseover="changeName" >{{ nameVariable }}<span>&#95;</span></span></h1>
         <br>
         <img src="/index/arrow-down.svg" alt="Arrow">
      </div>
   </main>
   <section id="projetos">

   </section>
</div>
</template>

<script>
export default {
   head: {
      title: 'P0sseid0n'
   },
   data: () => ({
      headerOpen: false,
      nameVariable: 'P0sseid0n',
      nameFix: 'P0sseid0n',
      sectionPosition: 0
   }),
   methods: {
      openHeader(){
         this.headerOpen = !this.headerOpen
         document.querySelector('.container div').classList.toggle('open')
      },

      changeName(){
         if(this.nameVariable != this.nameFix) return
         let deleting = true
         if(this.nameFix == 'P0sseid0n') this.nameFix = 'Matheus'
         else this.nameFix = 'P0sseid0n'
         const typing = setInterval(() => {
            if(this.nameVariable.length <= 0) deleting = false

            if(deleting) this.nameVariable = this.nameVariable.slice(0, this.nameVariable.length - 1 )
            else this.nameVariable = this.nameFix.slice(0, this.nameVariable.length + 1 )
            
            if(this.nameVariable == this.nameFix) clearInterval(typing)
         }, 150)
        },
   }
}
</script>

<style lang="scss">
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;

   font-family: 'Source Code Pro', monospace;
   color: white;
}

$main-color: #E94560;

html, body{
   background-color: #1A1A2E;

   text-align: center;
}

.container{
   margin: 0 auto;
   padding: 0 4%;

   width: 100%;
   max-width: 1280px;
}

header{
   background: #202034;

   padding: 16px 0;

   position: fixed;

   width: 100%;

   border-radius:  0 0 16px 16px;

   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

   .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
   
      > button{
         color: $main-color;
         font-size: 36px;
         font-weight: bold;

         cursor: pointer;

         background: transparent;
         border: none;
         outline: none;
      }
   
      div{
         
         button{
            background: none;
   
            outline: none;
            border: none;
   
            cursor: pointer;
   
            font-size: 18px;
            font-weight: 500;

            margin: 0 8px;
   
            &:hover{
               color: $main-color;
               text-decoration: underline;
            }
         }
      }

      img{
         display: none;
         
         cursor: pointer;
      }
   }
}

nav{
   position: fixed;
   right: 32px;
   top: 50%;

   transform: translateY(-50%);

   z-index: 100;


   button{
      width: 20px;
      height: 20px;

      background: white;
      
      border-radius: 100%;
      border: none;
      outline: none;

      display: block;

      margin-bottom: 16px;

      cursor: pointer;

      position: relative;

      span{
         display: inline-block;
         width: 100px;

         opacity: 0;

         position: absolute;
         left: -112px;
         top: 45%;
         transform: translateY(-50%);

         font-weight: bold;
         font-size: 16px;
         text-align: right;

         transition: opacity 0.5s;
      }


      &:hover{
         span{
            opacity: 1;
         }
      }


      &.active:after{
         content: '';
         position: absolute;
         top: -6px;
         left: -6px;
         right: -6px;
         bottom: -6px;
         border: white 2px solid;
         border-radius: 100%;
      }
   }
}

main{
   height: 100vh;

   .container{
      text-align: center;
      position: relative;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
   }
   h1{
      display: inline-block;
      text-align: center;

      font-size: 64px;

      width: 530px;

      span{
         color: $main-color;
         font-size: 96px;

         span{
            margin-left: -12px;
            animation-name: type;
            animation-duration: 0.5s;
            animation-iteration-count: infinite
         }
      }
   }

   img{
      margin-top: 32px;
   }
}

@keyframes type {
   from{
      opacity: 0;
   }
   to{
      opacity: 1;
   }
}

@media screen and (max-width: 600px) {
   header{
      padding: 8px 0;
      .container{
         flex-direction: column;

         > button {
            font-size: 40px;
         }

         div{
            display: none;

            button{
               display: block;

               margin: 10px auto;

               font-size: 22px;
            }


            &.open{
               display: initial;
            }
         }

         img{
            display: initial;
         }
      }
   }

   main{
      h1{
         font-size: 10vw;
         width: 100%;
         span{
            font-size: calc(15vw);
         }
      }
   }
}
</style>
