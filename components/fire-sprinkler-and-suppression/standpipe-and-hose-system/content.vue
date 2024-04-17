<template>
  <div>
    <div style="z-index: 999">
      <h2 class="font-bold uppercase relative text-[28px] xxsm:text-[30px] lg:text-[32px] 2xl:text-[37px] mt-[46px] sm:mt-[30px] md:mt-[40px] lg:mt-[0px] xl:mt-[30px] 2xl:mt-0">
        <span class="relative">
          Overview
          <span class="absolute bottom-0 top-[43px] lg:top-[48px] xl:top-[52px] 2xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[40px] md:w-12 border-b-4 border-red-500"></span>
        </span> 
      </h2>
    </div>

    <div
      class="pb-[45px] lg:pb-[70px] xl:pb-[100px] grid grid-cols-12 justify-items-center items-center mt-[30px] gap-4 2md:gap-12 lg:gap-20">
      <div class="text-white col-span-12 2md:col-span-6 order-2 2md:order-1">
        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px]">
          Standpipe systems can significantly improve the efficiency of manual
          firefighting operations by eliminating the need for long and cumbersome hose
          lays from fire apparatus to a fire. Even in buildings protected by automatic
          sprinklers, standpipe systems can play an important role in building fire safety
          by serving as a backup for and complement to sprinklers.
        </p>
      </div>

      <div class="col-span-12 2md:col-span-6 w-full order-1 2md:order-2" style="z-index: 999">
        <UnLazyImage
          alt="Standpipe & Hose System"
          class="rounded-lg"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702780513/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-11_vsj6rp.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619716/Flameguard%20Images/Products%20and%20Services/standpipe-_-hose-system_kiptrx_kajveh.webp"
        />
      </div>
    </div> 

    <div class="py-[45px] lg:pb-[70px] grid grid-cols-12 justify-items-center items-center gap-4 2md:gap-12 lg:gap-20">
      <div class="col-span-12 2md:col-span-6 w-full">
        <UnLazyImage
          alt="Ensure Your Safety"
          class="rounded-lg"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702780679/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-12_khah0v.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619819/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/ensure-yout-safety-3_asbn9v_o5brgz.webp"
        />
      </div>

      <div class="flex flex-col text-white col-span-12 2md:col-span-6">
        <h3 class="font-medium barlow-condensed text-red-color text-[25px] xxsm:text-page-title-sm lg:text-[30px] 2xl:text-[35px] mb-[8px]">
          Ensure your safety by hiring internationally certified professionals.
        </h3>

        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px]">
          With Flameguard, you can trust that your system is being designed and installed
          by professionals with prestigious NFPA certifications. Not only will you save
          time and resources by choosing us, but you'll also be taking a big step toward
          making sure your property is secure.
        </p>
      </div>
    </div>

    <fire-protection-maintained />
  </div>
</template>

