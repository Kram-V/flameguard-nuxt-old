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

    <div class="pb-[45px] lg:pb-[70px] xl:pb-[100px] grid grid-cols-12 justify-items-center items-center mt-[30px] gap-4 2md:gap-12 lg:gap-20">
    <div class="text-white col-span-12 2md:col-span-6 order-2 2md:order-1" style="z-index: 999">
        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px] mb-10">
          Deluge systems are used to protect against rapidly growing fires by delivering
          large quantities of water in a short period. It is appropriate for facilities
          where significant amounts of highly combustible materials are present like
          transformers, fuel tanks, etc.
        </p>

        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px]">
          Preaction systems are typically found in spaces containing computers or
          communications equipment, museums, and facilities where inadvertent water
          leakage from system piping is of major concern.
        </p>
      </div>

      <div class="col-span-12 2md:col-span-6 w-full order-1 2md:order-2" style="z-index: 999">
        <UnLazyImage
          alt="Deluge & Preaction"
          class="rounded-lg"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702782963/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-17_x54lwb.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702620448/Flameguard%20Images/Products%20and%20Services/deluge-preaction_r5njzh_cq9ypu.webp"
        />
      </div>

      
    </div>

    <div class="py-[45px] lg:pb-[70px] grid grid-cols-12 justify-items-center items-center gap-4 2md:gap-12 lg:gap-20">

      <div class="col-span-12 2md:col-span-6 w-full">
        <UnLazyImage
          alt="Ensure Your Safety"
          class="rounded-lg"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702777269/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-3_tsrlkc.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702618662/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/ensure-your-safety-1_rxukdv_psnenp.webp"
        />
      </div>

      <div class="flex flex-col text-white col-span-12 2md:col-span-6">
        <h3
          class="font-medium barlow-condensed text-red-color text-[25px] xxsm:text-page-title-sm lg:text-[30px] 2xl:text-[35px] mb-[8px]">
          Ensure your safety by hiring internationally certified professionals.
        </h3>
        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px]">
          Flameguard Offers peace of mind and reduced administration costs. You are
          guaranteed that your system will be handled by certified professionals
          recognized internationally - by NFPA. You will save valuable time and resources
          while ensuring your property's safety.
        </p>
      </div>
    </div>

    <fire-protection-maintained />
  </div>
</template>


