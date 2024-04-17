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
      <div class="col-span-12 2md:col-span-6 w-full order-1 2md:order-2" style="z-index: 999">
          <UnLazyImage
            alt="Clean Agent Extinguishing System"
            class="rounded-lg"
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702863603/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-21_ohrkmc.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702622234/Flameguard%20Images/Products%20and%20Services/clean-agent-extinguishing-system_ypullk_gfr0eg.webp"
          />
        </div>
  
        <div class="text-white col-span-12 2md:col-span-6 order-2 2md:order-1" style="z-index: 999">
        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px] mb-3">
          These systems are non-conductive, and that does not leave a residue. They are
          advantageous for special hazard applications, including data centers, computer
          rooms, telecommunication facilities, and areas where water suppression is not
          desirable.
        </p>
  
        <p class="text-[17px] xxsm:text-[20px] flex ml-4 mb-2">
          <div class="flex items-center mr-2">
            <Icon name="mi:chevron-double-right" class="text-red-600" />
          </div>
  
          <div class="text-gray-700">
            FM-200
          </div>
        </p> 
  
        <p class="text-[17px] xxsm:text-[20px] flex ml-4 mb-2">
          <div class="flex items-center mr-2">
            <Icon name="mi:chevron-double-right" class="text-red-600" />
          </div>
  
          <div class="text-gray-700">
            Novec-1230
          </div>
        </p> 
  
        <p class="text-[17px] xxsm:text-[20px] flex ml-4 mb-2">
          <div class="flex items-center mr-2">
            <Icon name="mi:chevron-double-right" class="text-red-600" />
          </div>
  
          <div class="text-gray-700">
            Inert Gas (Argon, Nitrogen, Argonite)  
          </div>
        </p> 
      </div>
  
    </div>
  
    <div class="py-[45px] lg:pb-[70px] grid grid-cols-12 justify-items-center items-center gap-4 2md:gap-12 lg:gap-20">
      <div class="col-span-12 2md:col-span-6 w-full">
        <UnLazyImage
          alt="Ensure Your Safety"
          class="rounded-lg"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702782865/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-16_pdp7j7.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702620349/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/ensure-your-safety-5_dpikhx_fm2une.webp"
        />
      </div>
  
      <div class="flex flex-col text-white col-span-12 2md:col-span-6">
        <h3 class="font-medium barlow-condensed text-red-color text-[25px] xxsm:text-page-title-sm lg:text-[30px] 2xl:text-[35px] mb-[8px]">
          Ensure your safety by hiring internationally certified professionals.
        </h3>
        
        <p class="text-gray-700 leading-8 font-semibold text-[17px] xxsm:text-[20px]">
          By hiring Flameguard, you are guaranteed that your system will be handled by
          certified professionals recognized internationally – by NFPA. You will save
          valuable time and resources while ensuring your property’s safety. We will also
          teach you how to conduct basic periodic inspections free of charge!
        </p>
      </div>
    </div>
  
    <fire-protection-maintained />
  </div>
  </template>
  
  