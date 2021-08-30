<template>
  <div v-if="task" class="row">
    <div class="col-md-10" v-bind:class="{ checkcomplete: task.completed }">
      <!--  <input type="checkbox" :id="task.id" v-model="task.completed" class="checkcomplete"/> -->
      <P v-on:click="markComplete">{{ task.title }}</P>
    </div>
    <div class="col-auto">
      <b-button
        pill
        variant="outline-success"
        type="button"
        v-on:click="markComplete"
      >
        <b-icon icon="check"></b-icon>
      </b-button>
      <b-button
      pill
        variant="outline-danger"
        type="button"
        @click="$emit('deleted', task)"
      >
        <b-icon icon="x"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    markComplete() {
      this.task.completed = !this.task.completed;
      console.log("status", this.task.title, this.task.completed);
      this.$store.dispatch("completeTask", this.task);
    },
  },
};
</script>

<style>
.checkcomplete {
  font-weight: bold;
  text-decoration: line-through;
}
</style>
