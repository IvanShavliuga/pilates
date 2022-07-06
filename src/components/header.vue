<template>
  <header class="header">
    <div class="logo">
      &nbsp;
      <div class="wrapper header__wrapper">
        <navmenu />
        <div class="logo__info">
          <h1 class="logo__title">Студия пилатоса</h1>
          <p class="logo__desc">Твое здоровое тело через 30 занятий</p>
          <button class="logo__button">Смотреть расписание</button>
        </div>
      </div>
      <div class="header__photo">&nbsp;</div>
      <div class="header__circle1">&nbsp;</div>
      <!-- <div class="header__circle2">&nbsp;</div> -->
    </div>
  </header>
</template>
<script>
import navmenu from "./navMenu.vue";

export default {
  components: {
    navmenu,
  },
};
</script>
