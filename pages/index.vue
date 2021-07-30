<template>
<div id="home">
   <nav>
      <button  v-scroll-to="'#inicio'" :class="{'active': userPosition == 0}">
         <span>Inicio</span>
      </button>
      <button v-scroll-to="'#projetos'" :class="{'active': userPosition == 1}">
         <span>Projetos</span>
      </button>
      <button v-scroll-to="'#conhecimentos'" :class="{'active': userPosition == 2}">
         <span>Conhecimentos</span>
      </button>
      <button v-scroll-to="'#sobre'" :class="{'active': userPosition == 3}">
         <span>Sobre</span>
      </button>
   </nav>
   <section id="inicio">
      <div class="container">
         <div>
            <p>Olá, eu sou o</p>
            <h1 @mouseover="changeName" >{{ nameVariable }}<span>&#95;</span></h1>
         </div>
         <img src="/index/scroll-down.svg" alt="Role para baixo">
      </div>
   </section>
   <section id="projetos">
      <div class="container">
         <header>
            <h1>Projetos</h1>
         </header>
         <main>
            <button @click="slider.prev">
               <img src="/index/prev.svg" alt="" class="prev">
            </button>
               <div ref="slider" class="keen-slider">
                  <div class="keen-slider__slide" :style="{'background-image': `url(/index/Projetos/${projeto.image}.png)`}" v-for="(projeto, index) in projetos" :key="projeto.title + index">
                     <div class="darken">
                        <div>
                           <h1>{{ projeto.title }}</h1>
                           <p>{{ projeto.description }}</p>
                           <span v-for="(tech, index) in projeto.techs" :key="tech + index">{{tech}} </span>
                           <div>
                              <a v-if="projeto.website" :href="projeto.website" target="_blank" rel="noopener noreferrer">Demo</a>
                              <a v-if="projeto.github" :href="projeto.github" target="_blank" rel="noopener noreferrer">Github</a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="dots">
                     <span :class="{ active: currentSlider == index }" @click="slider.moveToSlideRelative(index)" v-for="(projeto, index) in projetos" :key="projeto.image + index"></span>
                  </div>
               </div>
            <button @click="slider.next">
               <img src="/index/next.svg" alt="" class="prev">
            </button>
         </main>
      </div>
   </section>
   <section id="conhecimentos">
      <div class="container">
         <header>
            <h1>Conhecimentos</h1>
         </header>
         <main>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/html-5.svg" alt="HTML5">
               </div>
               <div class="text">
                  <h1>Html5</h1>
                  <p>{{ getXpTime(7, 2020) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/css3.svg" alt="CSS3">
               </div>
               <div class="text">
                  <h1>Css3</h1>
                  <p>{{ getXpTime(7, 2020) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/javascript.svg"
                   alt="Javascript">
               </div>
               <div class="text">
                  <h1>Javascript</h1>
                  <p>{{ getXpTime(8, 2020) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/node-js.png"
                   alt="Node.js">
               </div>
               <div class="text">
                  <h1>Node.js</h1>
                  <p>{{ getXpTime(10, 2020) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/mysql.svg"
                   alt="MySQL">
               </div>
               <div class="text">
                  <h1>MySQL</h1>
                  <p>{{ getXpTime(7, 2021) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/bootstrap.svg"
                   alt="Bootsrap">
               </div>
               <div class="text">
                  <h1>Bootstrap</h1>
                  <p>{{ getXpTime(12, 2020) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/vuejs.svg"
                   alt="Vuejs">
               </div>
               <div class="text">
                  <h1>Vue.js</h1>
                  <p>{{ getXpTime(11, 2020) }} de experiência</p>
               </div>
            </div>
            <div>
               <div class="image">
                  <img src="/index/conhecimentos/mongodb.svg"
                   alt="MongoDB">
               </div>
               <div class="text">
                  <h1>MongoDB</h1>
                  <p>{{ getXpTime(2, 2021) }} de experiência</p>
               </div>
            </div>
         </main>
      </div>
   </section>
   <section id="sobre">
      <div class="container">
         <header>
            <h1>Sobre</h1>
         </header>
         <main>
            <div class="container">
               <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui inventore quos totam maiores tempore ipsum, deserunt cumque accusantium, consequatur eos fuga pariatur ratione quis omnis facilis possimus voluptates architecto consequuntur!</p> -->
               <p>Olá, me chamo Matheus, tenho {{ getXpTime(10, 2004, true) }}, sou do Rio de janeiro, Brasil. Estudo programação há {{ getXpTime(7, 2020) }}, comecei no front-end mas agora estudo back-end támbem e  em poucos meses aprender desenvolvimento mobile tambem. Atualmente estou estudando apenas javascript, focado em me aprimorar ao maximo na linguaguem para depois estudar outra.</p>
               <div>
                  <a href="https://twitter.com/P0sseid0n" target="_blank" rel="noopener noreferrer">
                     <img src="/index/twitter.svg" alt="Twitter">
                  </a>
                  <a href="https://github.com/P0sseid0n" target="_blank" rel="noopener noreferrer">
                     <img src="/index/github.svg" alt="Github">
                  </a>
                  <a href="https://discord.com/users/237313382657687552" target="_blank" rel="noopener noreferrer">
                     <img src="/index/discord.svg" alt="Github">
                  </a>
               </div>
               <nuxt-link to="/links">Pagina de links <span>→</span></nuxt-link>
            </div>
         </main>
      </div>
   </section>
</div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

import { DateTime } from "luxon"

import projetosFile from '../static/index/projetos.json'

export default {
   scrollToTop: true,
   head: {
      title: 'P0sseid0n'
   },
   data: () => ({
      nameVariable: 'P0sseid0n',
      nameFix: 'P0sseid0n',
      userPosition: 0,
      slider: '',
      projetos: {},
      currentSlider: 0,
      sliderInterval: null,
      sliderPaused: false
   }),
   computed: {
      },
   methods: {
      getXpTime(month, year, onlyYear){
         const date = DateTime.now().setLocale('pt-br').diff(DateTime.local(year, month), ['years', 'month'])

         let years = date.years
         const yearsTxt = years == 1 ? 'ano' : 'anos'
         let months = date.months.toFixed(0)
         const monthsTxt = months == 1 ? 'mês' : 'meses'

         let completeTxt

         if(months == 12) {
            years ++
            months -= 12
         }

         if(years != 0){
            completeTxt = `${years} ${yearsTxt}`
         }

         if(months != 0 && !onlyYear){
            if(completeTxt){
               completeTxt += ` e ${months} ${monthsTxt}`
            } else {
               completeTxt = `${months} ${monthsTxt}`
            }
         }

         return completeTxt 
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

      setSliderPause(pause){
         this.sliderPaused = pause
         this.setSliderInterval()
      },

      setSliderInterval(){
         clearInterval(this.sliderInterval)
         this.sliderInterval = setInterval(() => {
            if (!this.pause) {
               this.slider.next()
            }
         }, 5000)
      },

      getCurrentY(){
         if(window.scrollY > document.querySelector('#sobre').offsetTop - 300) {
            this.userPosition = 3
         } else if(window.scrollY > document.querySelector('#conhecimentos').offsetTop - 300) {
            this.userPosition = 2
         } else if (window.scrollY > document.querySelector('#projetos').offsetTop - 300) {
            this.userPosition = 1
         }  else {
            this.userPosition = 0
         }
      }
   },
   created(){
      this.projetos = projetosFile
   },
   mounted(){
      console.log(`
         ──────▄▀▄─────▄▀▄
         ─────▄█░░▀▀▀▀▀░░█▄
         ─▄▄──█░░░░░░░░░░░█──▄▄
         █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
      `)

      this.slider = new KeenSlider(this.$refs.slider, {
         loop: true,
         slideChanged: (s) => {
            this.currentSlider = s.details().relativeSlide
         },
         dragStart: () => {
            this.setPause(true)
         },
         dragEnd: () => {
            this.setPause(false)
         },
      });
      this.setSliderInterval()

      window.addEventListener('scroll', this.getCurrentY)
      this.getCurrentY()
   },
   beforeDestroy() {
      if (this.slider) this.slider.destroy()
   },
}
</script>



<style lang="scss" scoped>
$main-color: #E94560;

.container{
   margin: 0 auto;
   padding: 0 4%;

   width: 100%;
   max-width: 1280px;
}

#home > nav{
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
         padding: 4px 4px;
         border-radius: 2px;

         pointer-events: none;

         opacity: 0;

         background: rgba(26,26,46,0.8);

         position: absolute;
         left: -8px;
         transform: translate(-100%, -50%);

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

#home > section{
   text-align: center;
   .container > header{
      font-size: 32px;
      // line-height: 34px;
      line-height: 105%;

      border-bottom: 6px solid $main-color;
      display: inline-block;
      margin-bottom: 64px;
   }

   &:not(#inicio){
      margin-bottom: 128px;
   }
}

#inicio{
   height: 110vh;

   > .container{
      text-align: center;

      height: 100%;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div{
         width: 100%;
         max-width: 544px;
      }
   }

   p{
      width: 100%;

      font-size: 36px;
      font-weight: 600;
      text-align: left;
      line-height: 0px;
   }

   h1{
      display: block;
      text-align: center;

      // font-size: 64px;

      width: 100%;
      color: $main-color;
      font-size: 96px;
      font-weight: bold;
      user-select: none;


      span{
         color: inherit;
         margin-left: -12px;
         animation-name: type;
         animation-duration: 0.5s;
         animation-iteration-count: infinite
      }
   }

   img{
      position: relative;
      top: 128px;

      animation-name: moving;
      animation-duration: 1.75s;
      animation-iteration-count: infinite
   }
}

#projetos{

   .container{
      padding: 0 2%;
   }

   main{
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      button{
         width: 128px;
         text-align: center;

         background: none;
         outline: none;
         border: none;
         margin: 0 8px;

         transition: opacity 0.2s;

         &:disabled{
            opacity: 0.4;
         }

         &:not(:disabled){
            cursor: pointer;
            opacity: 0.65;

            &:hover{
               opacity: 1;
            }
         }
      }

      > .keen-slider{
         width: 100%;
         background: #323246;
         border-radius: 16px;
         cursor: grab;

         &:active{
            cursor: grabbing;
         }

         > div:not(.dots){
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 500;

            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;

            padding-bottom: 56.25%;
            
            > .darken{
               position: absolute;
               bottom: 0;

               width: 100%;
               height: 100%;
               background: rgba(0,0,20,0.5);

               transition: background 0.3s;

               &:hover{
                  background: rgba(0,0,20,0.3);
               }

               > div{
                  position: absolute;
                  width: 100%;
                  bottom: 0;

                  border-radius: 16px 16px 0 0;

                  padding-top: 8px;
                  padding-bottom: 48px;
   
                  cursor: initial;
                  user-select: initial;
                  background: rgba(0,0,10,0.65);
                  backdrop-filter: blur( 2px );

                  a{
                     display: inline-block;
                     padding: 4px 8px;
                     
                     text-decoration: none;
                     font-weight: bold;
                     
                     border: 2px solid $main-color;
                     border-radius: 4px;
                     outline: none;
                     margin-top: 12px;

                     background: $main-color;
                     color: white;
                  }

                  span{
                     color: $main-color;
                     font-weight: bold;
                     margin: 12px 6px;
                     margin-bottom: 0;
                     padding: 4px 8px;
                     display: inline-block;
                  }
               }
            }
         }

         .dots{
            position: absolute;
            left: 50%;
            bottom: 8px;
            transform: translateX(-50%);

            display: flex;
            align-items: center;
            justify-content: center;

            height: 32px;

            > span{
               border: none;
               width: 12px;
               height: 12px;
               background: #B4B4C8;
               opacity: 70%;
               border-radius: 50%;
               margin: 0 5px;
               padding: 5px;
               cursor: pointer;

               transition: all 0.5s;

               &.active{
                  background: #DCDCF0;
                  opacity: 90%;

                  width: 20px;
                  height: 20px;
               }
            }
         }
      }
   }
}

#conhecimentos{
   main{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: -48px;
      > div{
         position: relative;
         width: 128px;
         height: 128px;
         background: #323246;
         border-radius: 16px;
         margin: 0 16px;
         margin-bottom: 48px;
         > div {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: opacity 0.5s;
         }

         .text{
            opacity: 0;
         }

         h1{
            font-size: 22px;
         }

         p{
            font-size: 18px;
         }

         &:hover{
            .text{
               opacity: 1;
            }

            .image{
               opacity: 0;
            }
         }
      }
   }
}

#sobre{
   main .container{
      max-width: 768px;

      p{
         text-align: center;
         font-weight: 600;
         font-size: 16px;
         margin-bottom: 64px;
         line-height: 32px;
      }

      div{
         a{
            display: inline-block;
            margin: 0 16px;
         }
      }

      > a{
         display: inline-block;
         margin-top: 32px;
         font-size: 16px;
      }
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

@keyframes moving {
   0%{
      transform: translateY(-10%);
   }
   50%{
      transform: translateY(10%);
   }
   100%{
      transform: translateY(-10%);
   }
}

@media screen and (max-width: 740px){
   #projetos{
      main {
         > button{
               display: none;
         }

         .darken > div {
            span{
               display: none !important;
            }
         }
      }
   }
}

@media screen and (max-width: 620px) {
   #home > section{
      .container > header{
         font-size: 28px;
         // line-height: 30px;
      }
   }

   #inicio{
      p{
         font-size: 8vw;
      }
      h1{
         font-size: 14vw;
         span{
            font-size: calc(15vw);
         }
      }
   }

   #projetos{
      main {
         .darken > div {
            p{
               display: none !important;
            }
         }
      }
   }

   #conhecimentos{
      main{
         user-select: none;
      }
   }
}
</style>
