<template>
  <div class="list-container">
    <ItemCard v-for="dog in dogs" :key="dog.id" :dog="dog" />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import GalleryService from "@/services/GalleryService";
export default {
  components: { ItemCard },
  data() {
    return {
      dogs: [],
    };
  },
  created() {
    GalleryService.getDogsData()
      .then((res) => {
        this.dogs = res.data;
      })
      .catch((error) => console.error(error.message));
  },
};
</script>

<style>
.list-container {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 90px;
}

@media screen and (max-width: 1250px) {
  .list-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 550px) {
  .list-container {
    grid-template-columns: repeat(1, 1fr);
    padding: 40px;
  }
}
</style>
