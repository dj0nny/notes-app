<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <a href="" class="uk-navbar-item uk-logo">Notes app</a>
        <li class="uk-active"><router-link :to="{name: 'AddNote'}">Add note</router-link></li>
        <li class="uk-parent"><a href="">Repository</a></li>
        <li><a href=""></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>
