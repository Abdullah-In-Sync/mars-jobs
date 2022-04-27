<template>
  <div v-if="job" class="details">
    <h1>Jobs Details</h1>
    <p>the id of the page is {{ job.id }}</p>
    <h3>{{ job.loc }}</h3>
    <h3>{{ job.title }}</h3>
    <h1>{{logo}}</h1>
  </div>
  <div v-else>
    loading......
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  inject:['logo'],

  // mounted() {
  //   fetch("http://localhost:3000/jobs/" + this.id)
  //     .then((res) => res.json())
  //     .then((data) => (this.job = data))
  //     .catch((err) => console.log(err));
  // },
};
</script>

<style>
</style>