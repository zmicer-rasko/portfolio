<template>
    <div class="divider-wrapper">
      <div class="left-part"></div>
      <div class="content">
        <div>{{ title }}</div>
      </div>
      <div class="right-part"></div>
    </div>
</template>

<script>
  export default {
    name: 'Divider',
    props: {
      title: {
        type: String,
      },
    }
  }
</script>

<style lang="scss">
$border-width: 1px;
$border-style: dotted;
$border-opacity: 0.75;

.divider-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: -5px 35px 30px 45px;
  width: 100%;

  .content {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    margin: 0 15px;
    font-family: 'Courier New', serif;
    font-size: 18px;
  }

  .left-part, .right-part {
    content: "";
    position: relative;
    border-bottom: $border-width black $border-style;
    flex-grow: 1;
    opacity: $border-opacity;
  }

  .left-part:before, .right-part:after {
    height: 20px;
    top: -20px;
    position: absolute;
    content: "";
  }

  .left-part {
    &:before {
      border-left: $border-width $border-style #303133;
      left: 0;
      opacity: $border-opacity;
    }
  }

  .right-part {
    &:after {
      border-right: $border-width $border-style #303133;
      right: 0;
      opacity: $border-opacity;
    }
  }
}
</style>
