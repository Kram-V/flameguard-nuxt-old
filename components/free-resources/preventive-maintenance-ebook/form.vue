<template>
  <div class="mt-8 p-6 box-shadow mb-3 lg:mb-0">
    <h2 class="font-bold pb-5 text-[18px] xxsm:text-[20px]">
      Fill out the form below to subscribe and download the free eBook.
    </h2>

    <!-- <div class="flex mb-2 justify-center">
      <img class="border-[5px] border-gray-300 h-[200px] w-[168px] rounded-md" src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1698136743/Flameguard%20Images/Free%20Resources/eBook-v1_llrsew.png" alt="" />
    </div> -->

    <div class="grid grid-cols-2 gap-2">
      <div class="col-span-2">
        <label for="first-name" class="text-gray-600 font-semibold text-base"
          >First Name
        </label>
        <span class="text-sm text-red-600">*</span>
        <input
          id="first-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="First Name"
        />
      </div>

      <div class="col-span-2">
        <label for="last-name" class="text-gray-600 font-semibold text-base"
          >Last Name
        </label>
        <span class="text-sm text-red-600">*</span>
        <input
          id="last-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Last Name"
        />
      </div>

      <div class="col-span-2">
        <label for="company-name" class="text-gray-600 font-semibold text-base"
          >Company Name
        </label>
        <input
          id="company-name"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Company Name"
        />
      </div>

      <div class="col-span-2">
        <label for="email" class="text-gray-600 font-semibold text-base"
          >Email
        </label>
        <span class="text-sm text-red-600">*</span>
        <input
          id="email"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Email"
        />
      </div>

      <div class="col-span-2">
        <label
          for="contact-number"
          class="text-gray-600 font-semibold text-base"
          >Contact No
        </label>
        <span class="text-sm text-red-600 mr-3">*</span>

        <input
          id="contact-number"
          type="text"
          class="px-2 py-2 border border-gray-300 flex w-[100%] outline-none text-gray-500 focus:border-gray-700 text-base"
          placeholder="Contact No"
        />
      </div>

      <div class="col-span-2 text-base text-gray-600 mt-2">
        By clicking subscribe, you are agreeing to receive sales and/or
        marketing emails from Flameguard Fire Protection Inc.
      </div>

      <div class="col-span-2 mt-4">
        <Button
          btnRed
          btnMinWidth="min-w-[100%] !py-[10px]"
          class="flex justify-center items-center"
        >
          Subscribe
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
