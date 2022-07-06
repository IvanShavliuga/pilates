<template>
  <div class="container">
    <appHeader />
    <section class="about">
      <div class="wrapper">
        <h2 class="about__title">О пилатосе</h2>
        <p class="about__desc">
          Пилатес соединяет элементы растяжки с элементами силовой тренеровки
        </p>
        <p class="about__desc">
          Комплекс упражений укрепляет мышцы пресса и спины, улучшает гибкость
          мышц и связок, подвижность суставов и избавляет от дискомфорта в
          позвоночнике
        </p>
        <p class="about__desc">
          <a class="about__link" href="#">Подробнее <span>&gt; </span></a>
        </p>
      </div>
      <div class="about__circle1">&nbsp;</div>
      <div class="about__circle2">&nbsp;</div>
    </section>
    <section class="orders">
      <div class="wrapper">
        <h2>Расписание и стоимость</h2>
        <div class="order">
          <div class="order__item">
            <p class="order__numbers"></p>
            <div class="info">
              <h3 class="info__header">уровень</h3>
              <h4 class="info__subheader">новичок</h4>
              <p class="info__price">150 руб./занятие</p>
              <p class="info__desc">пн. 9:00 - 10:00</p>
              <p class="info__desc">ср. 9:00 - 10:00</p>
              <p class="info__desc">пт. 9:00 - 10:00</p>
              <button class="info__button">Записаться</button>
            </div>
          </div>
          <div class="order__item">
            <p class="order__numbers"></p>
            <div class="info">
              <h3 class="info__header">уровень</h3>
              <h4 class="info__subheader">профи</h4>
              <p class="info__price">200 руб./занятие</p>
              <p class="info__desc">пн. 14:00 - 15:30</p>
              <p class="info__desc">ср. 14:00 - 15:30</p>
              <p class="info__desc">пт. 14:00 - 15:30</p>
              <button class="info__button">Записаться</button>
            </div>
          </div>
          <div class="order__item">
            <p class="order__numbers"></p>
            <div class="info">
              <h3 class="info__header">уровень</h3>
              <h4 class="info__subheader">мастер</h4>
              <p class="info__price">350 руб./занятие</p>
              <p class="info__desc">пн. 20:00 - 21:30</p>
              <p class="info__desc">ср. 20:00 - 21:30</p>
              <p class="info__desc">пт. 20:00 - 21:30</p>
              <button class="info__button">Записаться</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lessons">
      <div class="wrapper">
        <h2>Как проходят занятия</h2>
        <div class="item">
          <div class="item__info">
            <h3 class="item__info__header">Дыхательные техники</h3>
            <p class="item__info__desc">
              Специальные дыхательные упраэнения помогут сконцентрировать
              внимание и сфокусировать сохнание на мышцах тела
            </p>
          </div>
          <div class="item__image"><div class="item__image__photo1"></div></div>
        </div>
        <div class="item">
          <div class="item__info">
            <h3 class="item__info__header">Разминка</h3>
            <p class="item__info__desc">
              Перед началом занятий разогрев тела, прорабатываем мышцы шеи,
              спины, выполняем упражнения на баланс под спокойную музыку
            </p>
          </div>
          <div class="item__image"><div class="item__image__photo2"></div></div>
        </div>
        <div class="item">
          <div class="item__info">
            <h3 class="item__info__header">Основной блок</h3>
            <p class="item__info__desc">
              Упражнения выполняются на коврике без специального оборудования
              или с малым оборудованиемв медленном темпе
            </p>
          </div>
          <div class="item__image"><div class="item__image__photo3"></div></div>
        </div>
        <div class="item">
          <div class="item__info">
            <h3 class="item__info__header">Стрейчинг</h3>
            <p class="item__info__desc">
              В конце выполняем специальные упражнения для развития гибкости,
              снятия усталости, стресса и мышечного напряжения
            </p>
          </div>
          <div class="item__image"><div class="item__image__photo4"></div></div>
        </div>
      </div>
    </section>
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
import appFooter from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    appHeader,
    appFooter,
  },
};
</script>
