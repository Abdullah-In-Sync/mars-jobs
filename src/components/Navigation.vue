<template>
  <div>
      <button @click="goFor" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">Go Forward</button>
      <button @click="goBack" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded">Go Back</button>
      <button @click="redirect" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 mx-4 px-4 rounded">Redirect to home</button>
  </div>
</template>

<script>
export default {
methods:{
    goFor(){
        
        this.$router.go(1);
    },
    goBack(){
        
        this.$router.go(-1);
    },
    redirect(){
        
        this.$router.push({name:"home"})
    },


}
}
</script>

<style>

</style>