<template>
  <router-link
    class="details-link"
    :to="{ name: 'details', params: { id: dog.id } }"
  >
    <div class="card">
      <div class="cardTop">
        <div class="cardTopImage">
          <img :src="dog.image" alt="dog image" />
        </div>
      </div>
      <div class="cardBottom">
        <div class="dogType">{{ dog.type }}</div>
        <div class="bottom">
          <div class="dogPrice">{{ dog.price }}$</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.details-link {
  text-decoration: none;
  color: black;
  height: 400px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.cardTop {
  position: relative;
  height: 70%;
  overflow: hidden;
}

.cardTopImage img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
}

.cardBottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  padding: 10px;
}

.dogType {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  align-self: start;
  cursor: pointer;
  font-family: "Inconsolata", monospace;
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-self: start;
}
.dogPrice {
  font-size: 1.2rem;
  font-weight: 500;
  color: #6d6d6d;
  text-align: center;
}
.cartIcon {
  justify-self: end;
  align-self: end;
  color: blue;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
