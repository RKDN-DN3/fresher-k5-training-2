<template>
  <div>
      <ul>
          <li>
              <router-link to="/">HelloWorld</router-link>
          </li>
          <li>
              <router-link to="/task-list">TaskList</router-link>
          </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>