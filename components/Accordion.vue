<template>
  <div class="border-b border-gray-400 py-2">
      <div
          class="flex flex-wrap items-center justify-between cursor-pointer"
          @click="open"
      >
          <slot name="title">
            No Title
          </slot>
          
          <div v-if="isOpen">
              <Icon name="fa6-solid:caret-up" class="-mx-[2.5px] text-[18px] md:text-[18px] cursor-pointer" />
              
          </div>

          <div v-else>
              <Icon name="fa6-solid:caret-down" class="-mx-[2.5px] text-[18px] md:text-[18px] cursor-pointer" />
          </div>
      </div>

      <div v-if="isOpen" class="mt-2 w-full">
          <slot>
            No Content for this Accordion
          </slot>
      </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              isOpen: false
          }
      },

      methods: {
          open() {
              this.isOpen = !this.isOpen
          }
      },

      watch: {
        $route() {
          this.isOpen = false;
        }
      },
  }
</script>
