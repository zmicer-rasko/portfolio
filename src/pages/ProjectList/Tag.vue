<template>
    <a v-if="close" href="javascript: void(0)" class="rainbow-button" @click="removeTag(title)" :class="size">
      <span class="tag">{{ title.toLowerCase() }}<span class="close"></span></span>
    </a>
    <span v-else class="rainbow-button without-close" @click="pushTag(title)" :class="size">
      <span class="tag">{{ title.toLowerCase() }}</span>
    </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    title: {
      type: String,
    },
    close: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'lg',
    }
  },
  methods: {
    pushTag(tag) {
      this.$store.commit('projects/pushTag', tag);
      this.$store.commit('projects/reset');
      this.emitter.emit("scroll-to-projects");
    },
    removeTag(tag) {
      this.$store.commit('projects/removeTag', tag);
      this.$store.commit('projects/reset');
      this.emitter.emit("scroll-to-projects");
    }
  },
}
</script>

<style lang="scss">
  .without-close, a {
    color: #FFF;
    background-color: black;
  }
  .without-close {

    &:hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
  }
  .rainbow-button {
    padding: 1px;
    margin-left: 10px;
    height: 30px;
    width: auto;
    //background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;

    &:hover {
      animation: slidebg 4s linear infinite;
    }

    @keyframes slidebg {
      to {
        background-position:20vw;
      }
    }

    span {
      padding: 1px;
      margin: 0 2px;
      border-radius: 4px;
      background-color:#191919;
      display:flex;
      align-items:center;
      justify-content:center;
    }
  }

  .sm {
    font-size: 10px;
    height: 24px;
    margin-left: 5px;
    padding: 0;
  }

  .close {
    position: relative;
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-left: 5px;
    overflow: hidden;

    &::before, &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: white;
    }

    @keyframes animLeftClose {
      0% {
        transform: scale(1) rotate(45deg);
      }
      50% {
        transform: scale(0.7) rotate(45deg);
      }
      100% {
        transform: scale(1) rotate(45deg);
      }
    }

    @keyframes animRightClose {
      0% {
        transform: scale(1) rotate(-45deg);
      }
      50% {
        transform: scale(0.7) rotate(-45deg);
      }
      100% {
        transform: scale(1) rotate(-45deg);
      }
    }

    &:hover {
      &::before {
        animation: animLeftClose 1.5s infinite ease-in-out;
      }
      &::after {
        animation: animRightClose 1.5s infinite ease-in-out;
      }
    }

    &::before {
      transform: (rotate(45deg));
    }
    &::after {
      transform: (rotate(-45deg));
    }
  }
  .tag {
    font-family: 'Major Mono Display', monospace;
  }
</style>
