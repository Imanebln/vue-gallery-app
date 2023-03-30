<template>
  <div class="overlay">
    <div class="details">
      <div class="detailsTop">
        <div class="detailsTopImage">
          <img :src="dog.image" alt="dog image" />
        </div>
      </div>
      <div class="detailsBottom">
        <div class="dogType">{{ dog.type }}</div>
        <div class="bottomDetails">
          <div class="dogPrice">{{ dog.price }}$</div>
        </div>
        <div class="desc">{{ dog.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryService from "@/services/GalleryService";
export default {
  props: ["id"],
  data() {
    return {
      dog: {},
    };
  },
  created() {
    GalleryService.getDogData(this.id)
      .then((response) => (this.dog = response.data))
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>

<style>
.overlay {
  /* position: fixed;
  top: 0;
  left: 0;
  
   */
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0); */
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  width: 550px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}
.closeBtn {
  background: none;
  background-color: none;
  border: none;
  display: flex;
  justify-content: end;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 3px;
}
.closeBtn:hover {
  color: red;
  cursor: pointer;
}
.detailsTop {
  position: relative;
  height: 80%;
  overflow: hidden;
}

.detailsTopImage img {
  position: relative;
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
}

.detailsBottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
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
.bottomDetails {
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
.desc {
  font-size: 1rem;
  margin-top: 10px;
  font-family: "Inconsolata", monospace;
}
</style>
