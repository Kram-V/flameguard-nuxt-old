<template>
  <div class="flex flex-col gap-10 mt-3" style="z-index: 99">
    <div class="p-6 sm:p-8 pb-5 box-shadow grid grid-cols-12 gap-4">
      <h2
        class="col-span-12 text-[26px] xxsm:text-[30px] 2xl:text-[34px] font-bold mb-4 text-center"
      >
        Get in Touch
      </h2>

      <div class="col-span-12 sm:col-span-6">
        <label
          for="first-name"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >First Name </label
        ><span class="text-red-600">*</span>
        <input
          id="first-name"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="First Name"
        />
      </div>

      <div class="col-span-12 sm:col-span-6">
        <label
          for="last-name"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Last Name </label
        ><span class="text-red-600">*</span>
        <input
          id="last-name"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Last Name"
        />
      </div>

      <div class="col-span-12">
        <label
          for="phone-no"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Contact No.</label
        ><span class="text-red-600 mr-3">*</span>

        <input
          id="phone-no"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Contact No"
        />
      </div>

      <div class="col-span-12">
        <label for="email" class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Email </label
        ><span class="text-red-600">*</span>
        <input
          id="email"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Email"
        />
      </div>

      <div class="col-span-12">
        <label
          for="comments"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Message
        </label>
        <span class="text-red-600">*</span>
        <textarea
          name=""
          id="comments"
          cols="30"
          rows="5"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Message"
        ></textarea>
      </div>

      <div class="col-span-12 mt-2">
        <Button
          btnRed
          btnMinWidth="min-w-[100%] !py-[10px]"
          class="flex justify-center items-center"
        >
          Send
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
