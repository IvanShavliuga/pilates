<template>
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
              <img src="../assets/images/vk-gray.svg"/>
              <img src="../assets/images/instagram-gray.svg"/>
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
</template>