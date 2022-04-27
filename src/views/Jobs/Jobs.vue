<template>
  <h1>Jobs</h1>
<div v-if="jobs">
  <div v-for="job in jobs" :key="job.id" class="ct-item my-5 bg-blue-100 rounded text-red">
    <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
      <div class="box">
        <h4>Job Title:</h4>
        <span>{{ job.title }}</span>
      </div>
      <div class="box">
        <h4>Job Location:</h4>
        <span>{{ job.loc }}</span>
      </div>
      <div class="box">
        <h4>Job Detail:</h4>
        <span>{{ job.detail }}</span>
      </div>
    </router-link>
  </div>

</div>
<div v-else>
    loading......
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs:[
          {
              title:"Developer",
              loc:"noida",
              detail:"javascript , vue",
              id:"1"
          },
          {
              title:"Content writer",
              loc:"Delhi",
              detail:"html,css",
              id:"2"
          },
          {
              title:"HR",
              loc:"gurugram",
              detail:"manpower management",
              id:"3"
          },
      ]
      // jobs: [],
    };
  },
//   mounted() {
//     fetch("http://localhost:3000/jobs")
//       .then((res) => res.json())
//       .then((data) => (this.jobs = data))
//       .catch((err) => console.log(err));
//   },
};
</script>
<style>
.box > h4 {
  display: inline-block;

}
.ct-item {
  display: flex;
}
</style>