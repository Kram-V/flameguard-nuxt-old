
<template>
  <div class="flex flex-col" style="z-index: 99">
    <div class="mb-[40px] lg:mb-[8px]">
      <h3 class="text-[25px] xxsm:text-page-title-sm lg:text-[30px] 2xl:text-[35px] mb-2 font-medium barlow-condensed text-red-color">
        How Can We Assist You?
      </h3>
      <p class="text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] font-semibold text-gray-700">
        Welcome to our Contact Us page! We're here to provide the support and assistance
        you need. Whether you have a question, feedback, or need help with our products or
        services, we've got you covered.
      </p>
    </div>

    <div class="mb-[40px] lg:mb-[8px]">
      <h3 class="text-[25px] xxsm:text-page-title-sm lg:text-[30px] 2xl:text-[35px] mb-2 font-medium barlow-condensed text-red-color">
        You may also contact us via
      </h3>

      <p class="text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] font-semibold text-gray-700 flex items-center flex-wrap">
        <div class="flex items-center">
          <Icon name="bi:telephone-fill" class="mr-[8px] text-[19px] sm:text-[22px]"/>
          <span class="font-bold mr-2">Landline:</span>
        </div>

        <a href="tel:+63287084008">(02)8708-4008</a>
      </p>

      <p class="text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] font-semibold text-gray-700 flex items-center flex-wrap">
        <div class="flex items-center">
          <Icon name="ic:round-email" class="mr-[8px] text-[23px] sm:text-[26px]"/>
          <span class="font-bold mr-2">Email (Admin):</span>
        </div>
        <a href="mailto:admin@flameguardph.com">admin@flameguardph.com</a> 
      </p>
    </div>

    <div class="mb-2">
      <h3 class="text-[25px] xxsm:text-page-title-sm lg:text-[30px] 2xl:text-[35px] mb-2 font-medium barlow-condensed text-red-color">
        Our office is located at
      </h3>
      <p class="text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] font-semibold text-gray-700">
        191 AFP Road, Holy Spirit, Quezon City.
      </p>
    </div>

    <div class="h-[240px] sm:h-[400px] lg:h-full mb-3 lg:mb-0">
      <ContactUsGoogleMap />
    </div>
  </div>
</template>

