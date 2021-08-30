<template>
  <form class="row" @submit.prevent="addTask">
    <input
      class="col-8"
      id="newTask"
      :placeholder="$t('placeholder')"
      type="text"
      :value="newTitle"
      @change="getTask($event)"
      name="newTask"
    />
    <div class="col-4">
      <button class=" btn btn-success " type="submit">
        <b-icon icon="plus-circle"></b-icon>
        {{ $t("button.btnAdd") }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newTilet: "",
    };
  },
  computed: {
    ...mapGetters(["newTitle"]),
  },
  methods: {
    getTask(e) {
      this.newTilet = e.target.value;

      this.$store.dispatch("getTask", this.newTilet);
    },
    addTask(e) {
      e.preventDefault();
      this.$store.dispatch("addTask", this.newTilet);
      this.newTilet = "";
      e.target.reset()
    },
  },
};
</script>

<style></style>
