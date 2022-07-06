<template>
  <div class="header__menu">
    <div class="header__menu-item">
      <img src="../assets/images/logo.png" />
    </div>
    <div class="header__menu-item">
      <input class="header__menu-toggle" id="burger" type="checkbox" /><label
        class="header__menu-burger"
        for="burger"
      >
        <svg
          version="1.2"
          baseProfile="tiny-ps"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27 20"
          width="27"
          height="20"
        >
          <g id="brgimgopen" stroke="white" stroke-width="1">
            <line
              x1="0"
              y1="1"
              x2="26"
              y2="1"
              fill="rgb(145,170,89)"
              stroke="rgb(145,170,89)"
            ></line>
            <line
              x1="0"
              y1="6"
              x2="26"
              y2="6"
              fill="rgb(145,170,89)"
              stroke="rgb(145,170,89)"
            ></line>
            <line
              x1="0"
              y1="11"
              x2="26"
              y2="11"
              fill="rgb(145,170,89)"
              stroke="rgb(145,170,89)"
            ></line>
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
</template>
