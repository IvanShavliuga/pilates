<template>
  <div class="container">
    <header class="header">
      <div class="logo">
        &nbsp;
        <div class="wrapper header__wrapper">
          <div class="header__menu">
            <div class="header__menu-item">
              <svg
                version="1.2"
                baseProfile="tiny-ps"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 63 53"
                width="63"
                height="53"
              >
                <title>Главный экран</title>
                <defs>
                  <image
                    width="274"
                    height="168"
                    id="img1"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAkCAMAAADmUnmLAAAAAXNSR0IB2cksfwAAAYlQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VkzjgAAAAIN0Uk5TAD1XGwG9/4+H49bNC9wCXrZ0KGGD9+2oSSMZmAkrBLEKbN7vrk0spGhKX+F8bR01WOWr0RFlBw2jJOuWqZzE6bjzjYkzGkgF/R99yi37A1IOgCJVOLoIs7Aqf1O8QRU/BjmTEzAWQzQpjGbPv4aEOooURSfLMkcuHkRppqEQkvE8lQ8Y5lJ4AAAB+UlEQVR4nJ2V6V/TQBCGtzU8SGkrCFWRcjRyCt7aeKJYpYq04n1hEcUTDxSLt6J/uZNG+fVI0k3my+68k2d3c8wbpRojEt3iomqG0QK0GmHxrdAWoz0kH4dEUm2jIxzeCdtl6KI7FJ5iR2Xcya4QdA90ObMEu4PjvZB2Zn2QDEr3w4AMgxmTPTAUFB+GEaUyo2PjYwl5/XsD4hOgkuZkZT4i/L5A9H44oDj4L0sfYnOuFYc5cjR1bDPNyv4BHr8Fx2mtEk7ASX38lOx2ukY5A5EAmzNVK8nxz+ri52C6/ks5Dzk9+oJsbtWLF0Wc0aHzcmFfg2pcEvmyBj4FnS5yB/IpxZvSOTDd9FmuzFEoNqHFJRh0K1yF4jwxf/qa0NddK2IAN9RNbvnAt+94d0cR235muOtJ3xOYCa/qfXig1DgLHt77UOAUJS9cHMQuLmI+citLW7Qt8djzbLZr8USpZXjaWDSgkIz62toz4ZeVKrm1z3NZ2iDqQyv1QviXlm3evfm60itW1Gt8aWm8N7LAW0vaovCutjLM6qJGU7yflAViH1ZhYa1aT4sjf2xKS+TL3ThhrlfdQgY+KeNzQ6u6Rbzny9fcN1nhe+TH/4f9E9p/wYYOXwmjPGQfYuX3UiXdiEnSMqeNS2TLs/ZvZN3J0n+yQWAn+q210l8CPTfC5erzAgAAAABJRU5ErkJggg=="
                  ></image>
                </defs>
                <g id="Главный экран">
                  <g id="Логотип">
                    <use
                      id="pilates-logo-for-panel"
                      href="#img1"
                      transform="matrix(0.255,0,0,0.256,-3,-3)"
                    ></use>
                    <text
                      id="PILATES+"
                      style="
                        transform: matrix(0.941, 0, 0, 0.918, -0.008, 51.842);
                      "
                    >
                      <tspan x="0" y="0" class="txt0" dx="0 1 1 1 1 1 1 1">
                        PILATES+
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </div>
            <div class="header__menu-item">
              <input
                class="header__menu-toggle"
                id="burger"
                type="checkbox"
              /><label class="header__menu-burger" for="burger"
                ><svg
                  version="1.2"
                  baseProfile="tiny-ps"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27 20"
                  width="27"
                  height="20"
                >
                  <g id="brgimgopen" stroke="white" stroke-width="3">
                    <rect
                      x="2"
                      y="2"
                      width="21"
                      height="12"
                      fill="rgb(145,170,89)"
                      stroke="rgb(145,170,89)"
                    ></rect>
                    <line x1="2" y1="1" x2="26" y2="1"></line>
                    <line x1="2" y1="8.5" x2="26" y2="8.5"></line>
                    <line x1="2" y1="16" x2="26" y2="16"></line>
                  </g>
                  <g id="brgimgclose" stroke="white" stroke-width="3">
                    <rect
                      x="2"
                      y="2"
                      width="21"
                      height="12"
                      fill="rgb(145,170,89)"
                      stroke="rgb(145,170,89)"
                    ></rect>
                    <line x1="0" y1="0" x2="26" y2="16"></line>
                    <line x1="0" y1="16" x2="26" y2="0"></line>
                  </g>
                </svg>
              </label>
              <div class="header__menu-open">
                <nav class="header__menu-nav">
                  <a class="header__menu-link header__menu-active">о пилатосе</a
                  ><a class="header__menu-link">расписание и стоимость</a
                  ><a class="header__menu-link">как проходят занятия</a
                  ><a class="header__menu-link">отзывы</a
                  ><a class="header__menu-link">контакты</a>
                </nav>
              </div>
            </div>
            <div class="header__menu-item">
              <div class="header__menu-phone">+7 945 555 44 33</div>
            </div>
          </div>
          <div class="logo__info">
            <h1 class="logo__title">Студия пилатоса</h1>
            <p class="logo__desc">Твое здоровое тело через 30 занятий</p>
            <button class="logo__button">Смотреть расписание</button>
          </div>
        </div>
        <div class="header__photo">&nbsp;</div>
        <div class="header__circle1">&nbsp;</div>
        <div class="header__circle2">&nbsp;</div>
      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  /* components: {
    HelloWorld,
  }, */
};
</script>

<style lang="less" scoped>
@import "../assets/styles/vars.less";
@import "../assets/styles/mixins.less";
@import "../assets/styles/global.less";
.header {
  margin: 0;
  height: 800px;
  &__wrapper {
    position: relative;
    width: 90vw !important;
    padding: 15px !important;
    margin: 15px 5% !important;
  }
  .logo {
    margin-top: -10px;
    .background(cover,none,"../images/desktop/header.png",none);
    color: @header__logo__color;
    width: 676px;
    height: 689px;
    @media (max-width: 1080px) {
      width: 606px;
      height: 609px;
    }
    &__info {
      text-align: left;
      margin: 120px 0 120px 20px;
      width: 350px;
      height: 200px;
    }
    &__title {
      font-size: 55px;
      text-transform: uppercase;
      font-weight: 100;
      margin-bottom: 0;
    }
    &__desc {
      font-size: 20px;
      margin-top: 0;
    }
    &__button {
      .button(27px, 10px 30px, @header__logo__button);
      margin-top: 20px;
    }
  }
  &__photo {
    .position(absolute,right,0,40px,660px,739px,10);
    .background(cover,none,"../images/desktop/header2.png",none);
    @media (max-width: 1207px) {
      .position(absolute,right,0,160px,560px,639px,10);
    }
  }
  &__phone {
    font-weight: bold;
    .position(absolute,right,180px,30px,160px,40px,10);
    color: @header__phone__color;
  }
  &__menu {
    width: 85vw;
    margin: -5px auto;
    display: flex;
    justify-content: space-between;
    &-item {
      position: relative;
    }
    &-phone {
      color: black;
      font-weight: bold;
      color: @header__phone__color;
    }
    #burger {
      display: none;
    }
    #burger + label {
      svg g#brgimgopen {
        display: block;
      }
      svg g#brgimgclose {
        display: none;
      }
    }
    #burger:checked {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 100;
      & ~ div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    #burger:checked + label {
      svg g#brgimgopen {
        display: none;
      }
      svg g#brgimgclose {
        display: block;
      }
      svg {
        position: absolute;
        right: 65px;
        top: 15px;
      }
    }
    &-burger {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 100;
    }
    &-open {
      position: relative;
      z-index: 30;
      margin-top: -40px;
      margin-left: -120px;
      display: none;
      background-color: @header__logo__background;
      width: 100vw;
      height: 100vh;
    }
    &-nav {
      width: 500px;
      height: auto;
    }
    &-link {
      position: relative;
      display: block;
      font-size: 38px;
      line-height: 50px;
      font-weight: 700;
      font-family: "Roboto";
      margin-bottom: 20px;
    }
    &-active {
      &:after {
        content: " ";
        display: block;
        position: absolute;
        top: 25px;
        left: -35px;
        height: 10px;
        width: 10px;
        border-radius: 10px;
        background-color: #fff;
      }
    }
  }
  &__circle1 {
    .position(absolute,right,30px,135px,80px,80px,10);
    .background(none,@header__circle1,none,50%);
  }
  &__circle2 {
    .position(absolute,right,160px,5px,40px,40px,10);
    .background(none,@header__circle2,none,50%);
  }
}

tspan {
  white-space: pre;
}
.txt0 {
  font-size: 13px;
  line-height: 24px;
  fill: #fefefe;
  font-weight: 300;
  font-family: "S FU IText";
}
</style>
