<template>
  <div class="py-12 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto"> 
    <div class="mb-10 text-center">
      <h2 class="text-[28px] xxsm:text-[35px] lg:text-[40px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          OUR FIRE PROTECTION PRODUCTS & SERVICES
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span> 
        </span>
      </h2>
    </div> 

    <p class="text-center font-medium mb-12 text-[21px] xxsm:text-[25px] md:text-[27px] barlow-condensed">
      We are a fire protection supplier, designer, installer, and contractor of Automatic Fire Sprinkler System, Fire Detection and Alarm System, FM200 Fire Suppression System, Novec-1230 Fire Suppression, CO2 Fire Suppression System, Kitchen Fire Suppression, Foam Fire Suppression system, and Deluge Water Spray. 
    </p>

    <p class="text-center font-medium mb-12 sm:mb-20 text-[24px] xxsm:text-[28px] md:text-[30px] barlow-condensed hidden lg:block">
      Explore detailed information about these systems by clicking the interactive images.
    </p>

    <p class="text-center font-medium mb-12 sm:mb-20 text-[24px] xxsm:text-[28px] md:text-[30px] barlow-condensed block lg:hidden">
      Explore detailed information about these systems by tapping the interactive images.
    </p>

    <div class="relative">
      <span 
        @click="showProduct('all')"
        :class="
        {
          'opacity-0 pointer-events-none': clickedProduct === 'all',
          'opacity-1': clickedProduct !== 'all'
        }" 
        class="absolute top-[45%] text-red-color font-medium flex items-center gap-2 cursor-pointer transition-all duration-300 z-50">
        <Icon name="heroicons:arrow-long-left-20-solid" class="text-2xl xl:text-4xl" />
      </span>

      <span 
        @click="showProductForMobile('all')" 
          :class="
          {
            'opacity-0 pointer-events-none': clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile !== 'all',
            '!top-[42%]': clickedProductForMobile === 'fire hydrant' || clickedProductForMobile === 'deluge'
          }" 
          class="absolute top-[26%] text-red-color font-medium flex items-center gap-2 cursor-pointer transition-all duration-300 z-50"
        >
        <Icon name="heroicons:arrow-long-left-20-solid" class="text-2xl xl:text-4xl" />
      </span>
   

      <!-- START OF IMAGE FOR SHOWING ALL PRODUCTS -->
        <UnLazyImage
          :class="
          {
            'opacity-1': clickedProduct === 'all',
            'opacity-0': clickedProduct !== 'all'
          }" 
          class="hidden sm:block"
          alt="Fire Protection Philippines"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702975432/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-flameguard_glxy7t.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702706097/Flameguard%20Images/Company%20Profile/Flameguard_Revised_1_yfro2p_tvltua.webp"
        />

        <UnLazyImage
          :class="
          {
            'opacity-1': clickedProductForMobile === 'all',
            'opacity-0': clickedProductForMobile !== 'all'
          }" 
          class="block sm:hidden"
          alt="Fire Protection Philippines"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702975695/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-flameguard-mobile_wutybx.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702706340/Flameguard%20Images/Company%20Profile/company-profile-for-mobile-screen_exayaj_qmbkog.webp"
        />
      <!-- END OF IMAGE FOR SHOWING ALL PRODUCTS -->

      <!-- START OF INDIVIDUAL PRODUCT FOR MOBILE --> 
      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'fire pump' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'fire pump'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702705780/Flameguard%20Images/Company%20Profile/fire-pump-cropped_fmwvku.webp" alt="Fire Protection Philippines - Fire Pump"
      >

      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'fire alarm' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'fire alarm'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702705678/Flameguard%20Images/Company%20Profile/fire-alarm-cropped_ewqdfe.webp" alt="Fire Protection Philippines - Fire Alarm"
      >

      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'clean agent' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'clean agent'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702705605/Flameguard%20Images/Company%20Profile/clean-agent-cropped_osbm3n.webp" alt="Fire Protection Philippines - Clean Agent"
      >

      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'fire extinguisher' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'fire extinguisher'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702705523/Flameguard%20Images/Company%20Profile/fire-extinguisher-cropped_i0vhnb.webp" alt="Fire Protection Philippines - Fire Extinguisher"
      >

      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'standpipe' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'standpipe'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702705408/Flameguard%20Images/Company%20Profile/standpipe-cropped_haamap.webp" alt="Fire Protection Philippines - Standpipe & Hose System"
      >
      
      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'kitchen suppression' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'kitchen suppression'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702705028/Flameguard%20Images/Company%20Profile/kitchen-suppression-cropped_ac1unq.webp" alt="Fire Protection Philippines - Kitchen Suppression"
      >

      <img 
        class="block sm:hidden absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'fire sprinkler' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'fire sprinkler'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702704711/Flameguard%20Images/Company%20Profile/fire-sprinkler-cropped_sag4ll.webp" alt="Fire Protection Philippines - Fire Sprinkler"
      >
      <!-- END OF INDIVIDUAL PRODUCT FOR MOBILE -->
      
      <!-- START OF INDIVIDUAL PRODUCT -->
      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'fire pump' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'fire pump'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702704127/Flameguard%20Images/Company%20Profile/flameguard-fire-pump-with-arrow_mnbluj.webp" alt="Fire Protection Philippines - Fire Pump"
      >

      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'fire alarm' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'fire alarm'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702703986/Flameguard%20Images/Company%20Profile/flameguard-fire-alarm-with-arrow_brrzhz.webp" alt="Fire Protection Philippines - Fire Alarm"
      >

      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'fire sprinkler' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'fire sprinkler'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702703876/Flameguard%20Images/Company%20Profile/flameguard-fire-sprinkler-with-arrow_gzxcbm.webp" alt="Fire Protection Philippines - Fire Sprinkler"
      >

      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'fire extinguisher' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'fire extinguisher'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702703762/Flameguard%20Images/Company%20Profile/flameguard-fire-extinguisher-with-arrow_tumthu.webp" alt="Fire Protection Philippines - Fire Extinguisher"
      >

      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'standpipe' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'standpipe'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702703621/Flameguard%20Images/Company%20Profile/flameguard-standpipe-and-hose-with-arrow_qslmqp.webp" alt="Fire Protection Philippines - Standpipe & Hose System"
      >

      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'kitchen suppression' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'kitchen suppression'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702703440/Flameguard%20Images/Company%20Profile/flameguard-kitchen-suppression-with-arrow_tzoenn.webp" alt="Fire Protection Philippines - Kitchen Suppression"
      >

      <img 
        class="absolute top-[0px]"
        :class="
          {
            'opacity-0': clickedProduct !== 'clean agent' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'clean agent'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702703227/Flameguard%20Images/Company%20Profile/flameguard-clean-agent-with-arrow_adeuqu.webp" alt="Fire Protection Philippines - Clean Agent"
      >

      <img 
        class="absolute top-[16.5%]"
        :class="
          {
            'opacity-0': clickedProduct !== 'fire hydrant' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'fire hydrant'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702702407/Flameguard%20Images/Company%20Profile/flameguard-fire-hydrant-without-arrow_gll7iu.webp" alt="Fire Protection Philippines - Fire Hydrant"
      >

      <img 
        class="absolute top-[16.5%]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'fire hydrant' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'fire hydrant'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702702569/Flameguard%20Images/Company%20Profile/flameguard-fire-hydrant-without-arrow-for-mobile_alkq8k.webp" alt="Fire Protection Philippines - Fire Hydrant"
      >

      <img 
        class="absolute top-[16.5%]"
        :class="
          {
            'opacity-0': clickedProduct !== 'deluge' || clickedProduct === 'all',
            'opacity-1': clickedProduct === 'deluge'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702701740/Flameguard%20Images/Company%20Profile/flameguard-deluge-preaction-without-arrow_kmwhux.webp" alt="Fire Protection Philippines - Deluge & Preaction"
      >

      <img 
        class="absolute top-[16.5%]"
        :class="
          {
            'opacity-0': clickedProductForMobile !== 'deluge' || clickedProductForMobile === 'all',
            'opacity-1': clickedProductForMobile === 'deluge'
          }"  
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702701875/Flameguard%20Images/Company%20Profile/flameguard-deluge-preaction-without-arrow-for-mobile_cxyp5x.webp" alt="Fire Protection Philippines - Deluge & Preaction"
      >
      <!-- END OF INDIVIDUAL PRODUCT -->


      <!-- START OF PRODUCT LIST -->
        <!-- START OF CLEAN AGENT PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('clean agent')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'clean agent' && clickedProduct !== 'all') || clickedProduct === 'clean agent',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }"  
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] 
            sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] sm:top-[15%]  md:top-[13%] 2md:top-[15%] xl:top-[13%] 
            sm:left-[5.5%] 2md:left-[4.5%] xl:left-[6.8%] 2xl:left-[5.5%] rounded-[20px] transition-all duration-300 border-4
            border-red-color hover:border-yellow-color hidden sm:block" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-clean-agent_f54sng.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702534772/Flameguard%20Images/Company%20Profile/clean-agent_vvi3b7.webp"
            alt="Fire Protection Philippines - Clean Agent"
          />

          <UnLazyImage
            @click="showProductForMobile('clean agent')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'clean agent' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'clean agent',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }"  
            class="absolute w-[39px] h-[28px] top-[12%] -left-[1%] xsm2:top-[13%] xsm2:left-[1.5%] xsm:top-[14%] xsm:left-[1.5%] 2xl:left-[5.5%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-clean-agent_f54sng.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702534772/Flameguard%20Images/Company%20Profile/clean-agent_vvi3b7.webp"
            alt="Fire Protection Philippines - Clean Agent"
          />
        </div>
        <!-- END OF CLEAN AGENT PRODUCT -->

        <!-- START OF FIRE EXTINGUISHER PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('fire extinguisher')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'fire extinguisher' && clickedProduct !== 'all') || clickedProduct === 'fire extinguisher',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }" 
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] 
            sm:top-[2.6%] xl:top-[2.6%] sm:left-[45.9%] xl:left-[45.9%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color 
            hidden sm:block"
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-extinguisher_shxbia.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702534902/Flameguard%20Images/Company%20Profile/fire-extinguisher_rywqba.webp"
            alt="Fire Protection Philippines - Fire Extinguisher"
          />

          <UnLazyImage
            @click="showProductForMobile('fire extinguisher')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'fire extinguisher' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'fire extinguisher',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }" 
            class="absolute w-[39px] h-[28px] -top-[1.6%] left-[42.9%] xsm:-top-[1.6%] xsm:left-[45.9%] sm:top-[2.6%] sm:left-[45.9%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-extinguisher_shxbia.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702534902/Flameguard%20Images/Company%20Profile/fire-extinguisher_rywqba.webp"
            alt="Fire Protection Philippines - Fire Extinguisher"
          />
        </div>
        <!-- END OF FIRE EXTINGUISHER PRODUCT -->

        <!-- START OF STANDPIPE PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('standpipe')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'standpipe' && clickedProduct !== 'all') || clickedProduct === 'standpipe',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }" 
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] 
            sm:top-[10.9%] sm:left-[62.5%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color hidden sm:block"
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973541/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-standpipe_fpgnvw.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535025/Flameguard%20Images/Company%20Profile/standpipe_iunwdl.webp"
            alt="Fire Protection Philippines - Standpipe"
          />

          <UnLazyImage
            @click="showProductForMobile('standpipe')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'standpipe' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'standpipe',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }" 
            class="absolute w-[39px] h-[28px] top-[5.9%] left-[58.5%] xsm:top-[7.9%] xsm:left-[62.5%] sm:top-[10.9%] sm:left-[62.5%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973541/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-standpipe_fpgnvw.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535025/Flameguard%20Images/Company%20Profile/standpipe_iunwdl.webp"
            alt="Fire Protection Philippines - Standpipe"
          />
        </div>
        <!-- END OF STANDPIPE PRODUCT -->

        <!-- START OF KITCHEN SUPPRESSION PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('kitchen suppression')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'kitchen suppression' && clickedProduct !== 'all') || clickedProduct === 'kitchen suppression',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }" 
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] sm:top-[21.1%] sm:left-[79.2%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color  hidden sm:block" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973540/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-kitchen-suppression_ss0zex.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535120/Flameguard%20Images/Company%20Profile/kitchen-suppresion_d6cw96.webp"
            alt="Fire Protection Philippines - Kitchen Suppression"
          />

          <UnLazyImage
            @click="showProductForMobile('kitchen suppression')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'kitchen suppression' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'kitchen suppression',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }" 
            class="absolute w-[39px] h-[28px] top-[17.1%] left-[77.2%] xsm:top-[18.1%] xsm:left-[78.2%] xxsm:top-[19.1%] xxsm:left-[79.2%] sm:top-[21.1%] sm:left-[79.2%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973540/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-kitchen-suppression_ss0zex.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535120/Flameguard%20Images/Company%20Profile/kitchen-suppresion_d6cw96.webp"
            alt="Fire Protection Philippines - Kitchen Suppression"
          />
        </div>
        <!-- END OF KITCHEN SUPPRESSION PRODUCT -->

        <!-- START OF FIRE PUMP PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('fire pump')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'fire pump' && clickedProduct !== 'all') || clickedProduct === 'fire pump',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }" 
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px]  2xl:h-[95px] sm:top-[66.7%] sm:left-[8.4%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color hidden sm:block" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973539/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-pump_pd4syh.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535244/Flameguard%20Images/Company%20Profile/fire-pump_xnerba.webp"
            alt="Fire Protection Philippines - Fire Pump"
          />

          <UnLazyImage
            @click="showProductForMobile('fire pump')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'fire pump' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'fire pump',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }" 
            class="absolute w-[39px] h-[28px] top-[69.7%] left-[6.4%] xsm:left-[7.4%] xxsm:top-[69.7%] xxsm:left-[8.4%] sm:top-[66.7%] sm:left-[8.4%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973539/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-pump_pd4syh.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535244/Flameguard%20Images/Company%20Profile/fire-pump_xnerba.webp"
            alt="Fire Protection Philippines - Fire Pump"
          />
        </div>
        <!-- END OF FIRE PUMP PRODUCT -->

        <!-- START OF FIRE ALARM PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('fire alarm')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'fire alarm' && clickedProduct !== 'all') || clickedProduct === 'fire alarm',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }" 
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] sm:top-[75%] sm:left-[25%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color hidden sm:block" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-alarm_trfqun.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535321/Flameguard%20Images/Company%20Profile/fire-alarm_jhhdnf.webp"
            alt="Fire Protection Philippines - Fire Alarm"
          />

          <UnLazyImage
            @click="showProductForMobile('fire alarm')" 
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'fire alarm' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'fire alarm',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }" 
            class="absolute w-[39px] h-[28px] top-[79%] left-[23%] xsm:top-[79%] xsm:left-[24%] xxsm:top-[79%] xxsm:left-[25%] sm:top-[75%] sm:left-[25%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-alarm_trfqun.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535321/Flameguard%20Images/Company%20Profile/fire-alarm_jhhdnf.webp"
            alt="Fire Protection Philippines - Fire Alarm"
          />
        </div>
        <!-- END OF FIRE ALARM PRODUCT -->

        <!-- START OF FIRE SPRINKLER PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('fire sprinkler')"
            :class="{
              'opacity-0 pointer-events-none': (clickedProduct !== 'fire sprinkler' && clickedProduct !== 'all') || clickedProduct === 'fire sprinkler',
              'opacity-1 cursor-pointer': clickedProduct === 'all',
            }" 
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] sm:top-[83.4%] sm:left-[40.9%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color hidden sm:block"
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973540/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-sprinkler_vmtfy9.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535395/Flameguard%20Images/Company%20Profile/fire-sprinkler_ljmhp9.webp"
            alt="Fire Protection Philippines - Fire Sprinkler"
          />

          <UnLazyImage
            @click="showProductForMobile('fire sprinkler')"
            :class="{
              'opacity-0 pointer-events-none': (clickedProductForMobile !== 'fire sprinkler' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'fire sprinkler',
              'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
            }" 
            class="absolute w-[39px] h-[28px] top-[87.4%] left-[38.9%] xsm2:top-[87.4%] xsm2:left-[40.9%] sm:top-[83.4%] sm:left-[40.9%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973540/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-sprinkler_vmtfy9.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535395/Flameguard%20Images/Company%20Profile/fire-sprinkler_ljmhp9.webp"
            alt="Fire Protection Philippines - Fire Sprinkler"
          />
        </div>
        <!-- END OF FIRE SPRINKLER PRODUCT -->

        <!-- START OF FIRE HYDRANT PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('fire hydrant')"
            :class="
              { 
                'opacity-0 pointer-events-none': (clickedProduct !== 'fire hydrant' && clickedProduct !== 'all') || clickedProduct === 'fire hydrant',
                'opacity-1 cursor-pointer': clickedProduct === 'all',
              }
            "  
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] sm:top-[79.5%] sm:left-[80%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color hidden sm:block" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973539/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-hydrant_f2gkgu.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535471/Flameguard%20Images/Company%20Profile/fire-hydrant_xhkvn5.webp"
            alt="Fire Protection Philippines - Fire Hydrant"
          />

          <UnLazyImage
            @click="showProductForMobile('fire hydrant')"
            :class="
              { 
                'opacity-0 pointer-events-none': (clickedProductForMobile !== 'fire hydrant' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'fire hydrant',
                'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
              }
            "  
            class="absolute w-[39px] h-[28px] top-[85.5%] left-[81%] sm:top-[79.5%] sm:left-[80%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973539/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-hydrant_f2gkgu.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535471/Flameguard%20Images/Company%20Profile/fire-hydrant_xhkvn5.webp"
            alt="Fire Protection Philippines - Fire Hydrant"
          />
        </div>
        <!-- END OF FIRE HYDRANT PRODUCT -->

      
        <!-- START OF DELUGE PREACTION PRODUCT -->
        <div>
          <UnLazyImage
            @click="showProduct('deluge')"
            :class="
              { 
                'opacity-0 pointer-events-none': (clickedProduct !== 'deluge' && clickedProduct !== 'all') || clickedProduct === 'deluge',
                'opacity-1 cursor-pointer': clickedProduct === 'all',
              }
            "  
            class="absolute sm:w-[61px] md:w-[78px] 2md:w-[89px] xl:w-[118px] 2xl:w-[139px] sm:h-[40px] md:h-[52px] 2md:h-[62px] xl:h-[74px] 2xl:h-[95px] sm:top-[62.9%] sm:left-[91.7%] rounded-[20px] transition-all duration-300 border-4 border-red-color hover:border-yellow-color hidden sm:block" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-deluge_b8oikc.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535560/Flameguard%20Images/Company%20Profile/deluge_azbxel.webp"
            alt="Fire Protection Philippines - Deluge"
          />

          <UnLazyImage
            @click="showProductForMobile('deluge')"
            :class="
              { 
                'opacity-0 pointer-events-none': (clickedProductForMobile !== 'deluge' && clickedProductForMobile !== 'all') || clickedProductForMobile === 'deluge',
                'opacity-1 cursor-pointer': clickedProductForMobile === 'all',
              }
            "  
            class="absolute w-[39px] h-[28px] top-[70.9%] left-[90.9%] sm:top-[62.9%] sm:left-[91.7%] rounded-[20px] transition-all duration-300 border-[2px] border-red-color hover:border-yellow-color block sm:hidden" 
            placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702973538/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-deluge_b8oikc.webp"
            src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702535560/Flameguard%20Images/Company%20Profile/deluge_azbxel.webp"
            alt="Fire Protection Philippines - Deluge"
          />
        </div>
        <!-- END OF DELUGE PREACTION PRODUCT -->
      <!-- END OF PRODUCT LIST -->
    </div>
  </div>
</template>

<script setup>
const clickedProduct = ref("all");
const clickedProductForMobile = ref("all");

const showProduct = (str) => {
  clickedProduct.value = str;
}

const showProductForMobile = (str) => {
  clickedProductForMobile.value = str;
}

</script>
