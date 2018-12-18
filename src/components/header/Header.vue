<template>
<div>
		<header class="header-img" ref="myheader" :style="{height:fullHeight}">
			<div class="header-overlay"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-left">
							<h1>Hi, I'm Stark</h1>
							<h2 class="cd-headline clip is-full-width">
								<span class="cd-words-wrapper">
									<b class="is-visible"> I'm a programmer.</b>
									<b>Fun loving &amp; coffee freak!</b>
									<b>Photography is my passion</b>
								</span>
							</h2>
							<router-link to="blog" class="page-scroll btn custom-btn-3">BLOG</router-link>
							<a href="https://github.com/wsdo" class="page-scroll btn custom-btn-3">github</a>
						</div>
					</div>
				</div>
		</header>
    </div>
</template>
<script>
// import TopHeader from 'components/header/TopHeader.vue'
import TopMenus from 'components/NavMenu/NavMenu.vue'
// import $ from 'jquery'
// import 'assets/css/custom.css'

// if (process.browser) {
//   // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
//   // Vue.use(VueAwesomeSwiper)
//   const window = window;
// }
// if (process.browser) {
export default {
  components: {
    // TopHeader,
    TopMenus
  },
  beforeCreate(){
    if (process.browser) {
      // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
      // Vue.use(VueAwesomeSwiper)
      this.fullHeight = window.document.documentElement.clientHeight
    }
  },
  beforeMount(){
    if (process.browser) {
      // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
      // Vue.use(VueAwesomeSwiper)
      this.fullHeight = window.document.documentElement.clientHeight
    }
  },
  data() {
    return {
      fullHeight: '',
      animationDelay: 2500,
      //loading bar effect
      barAnimationDelay: 3800,
      barWaiting: this.barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
      //letters effect
      lettersDelay: 1050,
      //type effect
      typeLettersDelay: 1050,
      selectionDuration: 1500,
      typeAnimationDelay: this.selectionDuration + 800,
      //clip effect
      revealDuration: 1600,
      revealAnimationDelay: 3500
    }
  },
  ready: function () {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
    }
  },

  beforeDestroy: function () {
     if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
     }
  },
  methods: {
    // whenever the document is resized, re-set the 'fullHeight' variable
    handleResize (event) {
       if (process.browser) {
        this.fullHeight = document.documentElement.clientHeight
       }
    },
     singleLetters($words) {
        $words.each(function() {
          var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');
          for (i in letters) {
            if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
          }
          var newLetters = letters.join('');
          word.html(newLetters).css('opacity', 1);
        });
      },
      animateHeadline($headlines) {
        // console.log(this);
        let self = this;
        var duration = this.animationDelay;
        $headlines.each(function() {
          var headline = $(this);

          if (headline.hasClass('loading-bar')) {
            duration = this.barAnimationDelay;
            setTimeout(function() {
              headline.find('.cd-words-wrapper').addClass('is-loading')
            }, barWaiting);
          } else if (headline.hasClass('clip')) {
            var spanWrapper = headline.find('.cd-words-wrapper'),
              newWidth = spanWrapper.width() + 10
            spanWrapper.css('width', newWidth);
          } else if (!headline.hasClass('type')) {
            //assign to .cd-words-wrapper the width of its longest word
            var words = headline.find('.cd-words-wrapper b'),
              width = 0;
            words.each(function() {
              var wordWidth = $(this).width();
              if (wordWidth > width) width = wordWidth;
            });
            headline.find('.cd-words-wrapper').css('width', width);
          };
          //trigger animation
          setTimeout(()=>{
            if (process.browser) {
            self.$options.methods.hideWord(headline.find('.is-visible').eq(0))
            }
          }, duration);
        });
      },
      hideWord($word) {
        var nextWord = this.takeNext($word);

        let self = this;
        if ($word.parents('.cd-headline').hasClass('type')) {
          var parentSpan = $word.parent('.cd-words-wrapper');
          parentSpan.addClass('selected').removeClass('waiting');
          setTimeout(function() {
            parentSpan.removeClass('selected');
            $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
          }, selectionDuration);
          setTimeout(function() {
            self.showWord(nextWord, typeLettersDelay,self)
          }, self.typeAnimationDelay);

        } else if ($word.parents('.cd-headline').hasClass('letters')) {
          var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
          self.hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
          showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
          $word.parents('.cd-words-wrapper').animate({
            width: '2px'
          }, self.revealDuration, function() {
            self.switchWord($word, nextWord);
            self.showWord(nextWord,3000,self);
          });

        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
          $word.parents('.cd-words-wrapper').removeClass('is-loading');
          this.switchWord($word, nextWord);
          setTimeout(function() {
            this.hideWord(nextWord)
          }, self.barAnimationDelay);
          setTimeout(function() {
            $word.parents('.cd-words-wrapper').addClass('is-loading')
          }, self.barWaiting);

        } else {
          this.switchWord($word, nextWord);
          setTimeout(function() {
            this.hideWord(nextWord)
          }, self.animationDelay);
        }
      },
      showWord($word, $duration) {
         let self = this
        // { let self = this}
        // console.log(self);

        if ($word.parents('.cd-headline').hasClass('type')) {
          showLetter($word.find('i').eq(0), $word, false, $duration);
          $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
          $word.parents('.cd-words-wrapper').animate({
            'width': $word.width() + 10
          }, this.revealDuration, function() {
            setTimeout(()=>{
              self.hideWord($word)
            }, 3000);
          });
        }
      }

      ,
      hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(':last-child')) {
          setTimeout(function() {
            this.hideLetter($letter.next(), $word, $bool, $duration);
          }, $duration);
        } else if ($bool) {
          setTimeout(function() {
            this.hideWord(takeNext($word))
          }, animationDelay);
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
          var nextWord = takeNext($word);
          this.switchWord($word, nextWord);
        }
      }

      ,
      showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if (!$letter.is(':last-child')) {
          setTimeout(function() {
            showLetter($letter.next(), $word, $bool, $duration);
          }, $duration);
        } else {
          if ($word.parents('.cd-headline').hasClass('type')) {
            setTimeout(function() {
              $word.parents('.cd-words-wrapper').addClass('waiting');
            }, 200);
          }
          if (!$bool) {
            setTimeout(function() {
              this.hideWord($word)
            }, this.animationDelay)
          }
        }
      }
      ,
      takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
      }

      ,
      takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
      }

      ,
      switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
      }
      ,trueData(){

        // console.log(this);
       { let self = this}
        return self;
      }

  },
  // ,
  created(){
    // console.log(window.document.documentElement.clientHeight);
      // if (process.browser) {
        //         // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    //   // Vue.use(VueAwesomeSwiper)
    //   this.fullHeight = window.document.documentElement.clientHeight
    // }
      // console.log(this.$refs.myheader);

      // this.$refs.header.height = this.fullHeight
    // $(".header-img").height($(window).height());

        if (process.browser) {
          // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
      // Vue.use(VueAwesomeSwiper)
      this.fullHeight = window.document.documentElement.clientHeight
    }
        // console.log(this);
        // this.test()
  },
  mounted(){
    // console.log(window.document.documentElement.clientHeight);
      // if (process.browser) {
    //         // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    //   // Vue.use(VueAwesomeSwiper)
      console.log(this.fullHeight);
    //   this.fullHeight = window.document.documentElement.clientHeight
    // }
      // console.log(this.$refs.myheader);

      // this.$refs.header.height = this.fullHeight


    {
      this.fullHeight = window.document.documentElement.clientHeight

      // console.log(window);

    }




    $(".header-img").height($(window).height());
    	$(window).resize(function(){
			$(".header-img").height($(window).height());
    });



		  this.singleLetters($('.cd-headline.letters').find('b'));
      //initialise headline animation
      this.animateHeadline($('.cd-headline'));



  }

  }


</script>
<style>
.header {
    padding: 12px 20px 0;
}
</style>
