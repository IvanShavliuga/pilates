<template>
  <div class="container">
    <appHeader />
    <appAbout />
    <appOrders />
    <appLessons />
    <appComments />
    <appFooter />
    <appContacts />
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "@/components/header.vue";
import appAbout from "@/components/about.vue";
import appOrders from "@/components/orders.vue";
import appLessons from "@/components/lessons.vue";
import appFooter from "@/components/footer.vue";
import appComments from "@/components/comments.vue";
import appContacts from "@/components/contacts.vue";

export default {
  name: "Home",
  components: {
    appHeader,
    appAbout,
    appOrders,
    appLessons,
    appComments,
    appContacts,
    appFooter,
  },
};
</script>
