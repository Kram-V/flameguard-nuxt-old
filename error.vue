<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <img class=" w-[300px] text-center mb-10" src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1694846779/Flameguard%20Images/Flaticons/404-error_piqwk0.webp" alt="">

    <h4 class="text-gray-500 text-5xl mb-10 text-center">PAGE NOT FOUND</h4>

    <NuxtLink to="/">
      <Button btnGrayOutlined btnMinWidth="min-w-[100px] !py-[10px]" class="flex justify-center items-center">
        <Icon name="tabler:arrow-left" class="text-[18px] md:text-[24px] cursor-pointer mr-1" /> Go Back to Home Page
      </Button>
    </NuxtLink>
  </div>
</template>
