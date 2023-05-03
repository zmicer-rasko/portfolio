<template>
  <div class="title-container">
      <span class="f2">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ScreenTitleComponent',
    props: {
      title: {
        type: String,
        required: true,
      },
      bg: {
        type: String,
        required: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 150px;
  overflow: hidden;
  background-color: black;
  //clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  clip-path: polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%);
  font-family: 'Press Start 2P', monospace;

  //&:before {
  //  //float: left;
  //  width: 0;
  //  font-size: 12px;
  //  color: white;
  //  margin-top: 11px;
  //  //content: "....................................................................................................................";
  //  //content: "---------------------------------------------------------------------------------------";
  //  content: "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=";
  //}
  //
  //&:after {
  //  background-color: black;
  //  content: "";
  //  height: 20px;
  //  width: 45px;
  //  top: 4px;
  //  position: absolute;
  //  right: 45px;
  //}

  span {
    font-family: 'Press Start 2P', monospace;
    text-transform: uppercase;
    font-weight: 900;
    //overflow: hidden;
    color: white;
    padding: 0.5rem 0 0.5rem 3rem;
    background-color: black;
  }
}

//.title-container:after {
//  float: left;
//  width: 0;
//  font-size: 12px;
//  margin-top: 10px;
//  color: white;
//  content: "....................................................................................................................";
//  //content: "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=";
//}


@media only screen and (max-width: 767px) {
  .title-container {
    margin-bottom: 25px;
    margin-top: 50px;
  }

  .title-container:after {
    font-size: 8px;
    margin-top: 4px;
  }
}

@media only screen and (max-width: 425px) {
  .title-container span {
    padding: 0.5rem 0 0.5rem 2rem;
  }
}


@media only screen and (min-width: 768px) {
  .title-container {
    margin-top: 100px;
  }
}
</style>
