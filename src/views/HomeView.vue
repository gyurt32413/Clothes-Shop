<template>
  <div class="main-container">
    <section class="banner-wrapper">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active carousel-button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            class="carousel-button"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            class="carousel-button"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            class="carousel-button"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            class="carousel-button"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/pictures/banner_picture_1.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/pictures/banner_picture_2.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/pictures/banner_picture_3.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/pictures/banner_picture_4.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/pictures/banner_picture_5.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="card-wrapper">
      <a href="#" class="card-item card_1">
        <img
          src="../assets/pictures/card_picture_1.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_2">
        <img
          src="../assets/pictures/card_picture_2.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_3">
        <img
          src="../assets/pictures/card_picture_3.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_4">
        <img
          src="../assets/pictures/card_picture_4.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_5">
        <img
          src="../assets/pictures/card_picture_5.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_6">
        <img
          src="../assets/pictures/card_picture_6.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_7">
        <img
          src="../assets/pictures/card_picture_7.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
      <a href="#" class="card-item card_8">
        <img
          src="../assets/pictures/card_picture_8.png"
          alt="card-picture"
          class="card-picture"
        />
      </a>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/SCSS/HomeView.scss";
</style>
