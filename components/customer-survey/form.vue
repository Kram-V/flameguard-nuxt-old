<template>
  <div class="grid grid-cols-12 gap-6 mb-6">
    <div class="mb-8 sm:mb-12 text-center col-span-12" style="z-index: 999">
      <h1
        class="text-[28px] xxsm:text-[35px] sm:text-[40px] font-semibold relative"
      >
        <span
          class="relative tracking-wide barlow-condensed uppercase pb-2 block"
        >
          Customer's Feedback Form
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h1>
    </div>

    <p
      class="col-span-12 text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] font-semibold text-gray-700"
      style="z-index: 999"
    >
      Thank you for choosing
      <span class="text-red-color font-semibold"
        >Flameguard Fire Protection Inc!</span
      >
      We strive to provide the best possible experience for our valued
      customers, and your feedback plays a crucial role in helping us achieve
      that goal. We kindly ask you to take a few minutes to complete this survey
      to share your thoughts with us.
    </p>

    <div
      class="p-6 sm:p-8 pb-5 box-shadow grid grid-cols-12 gap-4 col-span-12"
      style="z-index: 999"
    >
      <div class="col-span-12 lg:col-span-6">
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

      <div class="col-span-12 lg:col-span-6">
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
          for="contact-no"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Contact No.</label
        ><span class="text-red-600 mr-3">*</span>

        <input
          id="contact-no"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Contact No"
        />
      </div>

      <div class="col-span-12">
        <label
          for="company-name"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Company's Name</label
        >
        <input
          id="company-name"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Company Name"
        />
      </div>

      <div class="col-span-12">
        <label
          for="company-position"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Company's Position</label
        >
        <input
          id="company-position"
          type="text"
          class="px-2 py-3 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700"
          placeholder="Company Position"
        />
      </div>

      <div class="col-span-12">
        <label
          for="comments"
          class="text-gray-600 font-semibold xxsm:text-[18px]"
          >Describe Your Experience with Flameguard
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
          Submit
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
