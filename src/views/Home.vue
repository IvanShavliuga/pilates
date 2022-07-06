<template>
  <div class="container">
    <appHeader />
    <appAbout />
    <appOrders/>
    <appLessons/>
    <section class="comments">
      <div class="wrapper">
        <h2>Отзывы</h2>
        <div class="comments__box">
          <button id="prev">
            <img src="../assets/images/arrow-left.svg" />
          </button>
          <div class="comments__box__item">
            <div class="comments__box__photo" id="comimg1"></div>
            <h3 class="comments__box__name">Вероника Кулешова</h3>
            <div class="comments__box__info">
              <p class="comments__box__age">25 лет</p>
              <img src="../assets/images/vk-gray.svg" />
              <img src="../assets/images/instagram-gray.svg" />
            </div>
            <p class="comments__box__text">
              Хожу на&nbsp;пилатес уже пять месяцев. После десяти занятий уже
              увидела результат: тело поднялось, улучшилась осанка, появился
              пресс. И&nbsp;самое главное, пропал сильный изгиб поясничного
              отдела, который меня очень беспокоил.
            </p>
            <div class="comments__box__dotts">&nbsp;</div>
          </div>
          <button id="next">
            <img src="../assets/images/arrow-right.svg" />
          </button>
        </div>
        <div class="comments__bottombox">
          <div class="comments__pagination">
            <div
              class="comments__pagination active"
              id="com1"
              title="comment 1"
            >
              &nbsp;
            </div>
            <div class="comments__pagination" id="com2" title="comment 2">
              &nbsp;
            </div>
            <div class="comments__pagination" id="com3" title="comment 3">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="map">
      <h2>Контакты</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.1816329715443!2d116.165484!3d-31.901661999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32c445d61f42d9%3A0x19f05198e82d3d32!2sLittle+Caesars+Pizzeria!5e0!3m2!1sen!2sin!4v1430720025747"
        frameborder="0"
        style="border: 0; width: 100%; height: 750px; margin: 0; padding: 0"
      ></iframe>
      <div class="map__contacts">
        <h3 class="map__header">Адрес</h3>
        <p class="map__desc">г Москва ул. Молодежная 22а</p>
        <h3 class="map__header">Телефон:</h3>
        <p class="map__desc">+7 495 555 55 55</p>
        <h3 class="map__header">Email</h3>
        <p class="map__header">pilates@test.ru</p>
      </div>
    </section>
    <appFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "@/components/header.vue";
import appAbout from "@/components/about.vue";
import appOrders from "@/components/orders.vue";
import appLessons from "@/components/lessons.vue";
import appFooter from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    appHeader,
    appAbout,
    appOrders,
    appLessons,
    appFooter,
  },
};
</script>
