<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="logo">Clean UI</li>
      <li class="navbar-item">Home</li>
      <li class="navbar-item">About</li>
      <li class="navbar-item">Components</li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  border-bottom: 2px solid #eaeaec;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
  z-index: 99;
}

.navbar-list {
  display: inline-flex;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

.navbar-item {
  padding: 18px 22px;
  transition: background 0.15s;
}

.navbar-item:hover {
  background: #eaeaec;
  cursor: pointer;
  transition: background 0s;
}

.logo {
  display: flex;
  font-size: 24px;
  align-items: center;
  font-family: "IBM Plex Sans", sans-serif;
  padding: 0 18px;
}
</style>
