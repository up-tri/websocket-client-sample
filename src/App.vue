<template>
  <div class="block my-0 py-4 text-center">
    <router-link class="inline-block font-bold text-gray-800 underline" to="/"
      >Home</router-link
    >
    |
    <router-link
      class="inline-block font-bold text-gray-800 underline"
      to="/about"
      >About</router-link
    >
  </div>
  <router-view />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
}
</style>
