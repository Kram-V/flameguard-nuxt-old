<template>
  <div style="z-index: 999">
    <div class="mb-12 xxsm:mb-16 text-center">
      <h2 class="text-[28px] xxsm:text-[35px] lg:text-[40px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          Services
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h2>
    </div>

    <div style="z-index: 999"> 
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 mb-24">
        <div>
          <div class="overflow-hidden rounded-lg">
            <NuxtLink to="/preventive-maintenance">
              <UnLazyImage
                alt="Inspection, Testing & Maintenance"
                class="w-full  transition-transform duration-300 transform hover:scale-110 rounded-lg"
                placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702628438/Flameguard%20Images/Placeholder%20For%20Image%20Loader/services-inspection-testing-maintenance_zzzgkl.webp"
                src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702617272/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/services-inspection-testing-_-maintenance_oy0lu7_xpbirw.webp"
              />
            </NuxtLink>
          </div>

          <h3 class="text-[20px] xxsm:text-[24px] font-semibold hover:text-red-600 duration-500 mt-2 text-center">
            <NuxtLink to="/preventive-maintenance">
              Inspection, Testing & Maintenance
            </NuxtLink>
          </h3>
        </div>

        <div>
          <div class="overflow-hidden rounded-lg">
            <NuxtLink to="/design-and-installation">
              <UnLazyImage
                alt="Design and Installation"
                class="w-full transition-transform duration-300 transform hover:scale-110 rounded-lg"
                placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702779303/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-8_akczmj.webp"
                src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702617252/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/services-design-_-installation_lqfqy0_r0kxgc.webp"
              />
            </NuxtLink>
          </div>

          <h3 class="text-[20px] xxsm:text-[24px] font-semibold hover:text-red-600 duration-500 mt-2 text-center">
            <NuxtLink to="/design-and-installation">Design and Installation</NuxtLink>
          </h3>
        </div>
      </div>

      <div class="mb-12 xxsm:mb-16 text-center">
        <h2 class="text-[28px] xxsm:text-[35px] lg:text-[40px] font-semibold relative">
          <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
            Systems
            <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
            ></span>
          </span>
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 2md:grid-cols-3 gap-6 xl:gap-16 mb-6"> 
        <div
          class="p-4 pb-6 rounded-md box-shadow"
          v-for="(item, i) in productsServices"
          :key="i"
        >
          <div class="mb-2 border-2 overflow-hidden">
            <NuxtLink :to="item.link">
              <UnLazyImage
                :alt="item.name"
                class="transition-transform duration-300 transform hover:scale-110"
                :placeholder-src="item.placeholder"
                :src="item.image"
              />
            </NuxtLink>
          </div>

          <h3 class="uppercase text-[18.5px] xxsm:text-xl font-semibold mb-1 barlow-condensed">
            <span class="hover:text-red-color duration-500"
              ><NuxtLink :to="item.link">{{ item.name }}</NuxtLink></span
            >
          </h3>

          <p class="text-[16.5px] xxsm:text-[18px] pb-1 text-gray-700">
            {{ limitDescription(item.description) }}
          </p>

          <NuxtLink
            :to="item.link"
            class="border-b border-red-color text-red-color hover:border-none font-medium"
            ><span>Learn More.</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const productsServices = reactive([
  {
    name: "Fire Sprinkler",
    description:
      "Fire sprinkler systems are designed to automatically spray water onto a fire with specified patterns at predetermined temperatures. They are highly reliable and effective in reducing the risk of death in case of a fire by up to 75%. This, of course, is only true for systems that have been designed and installed properly. Without your fire protection system in working order, a small fire that could have been put out can quickly turn into an uncontrollable blaze.",
    link: "/design-and-installation",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868569/Flameguard%20Images/Products%20and%20Services/fire-sprinkler_dpdlf1.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050445/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-sprinkler_glptat.webp'
  },

  {
    name: "Fire Alarm",
    description:
      "Fire alarm systems play an important role in providing life safety. These systems detect smoke, fire, and other hazardous conditions and provide notification to occupants and responders, making buildings safer in the event of an emergency.",
    link: "/design-and-installation",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868569/Flameguard%20Images/Products%20and%20Services/fire-alarm_lxr14n.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050436/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-alarm_clshyt.webp'
  },

  {
    name: "Clean Agent Extinguishing System",
    description: `These systems are non-conductive, and that does not leave a residue. They are
          advantageous for special hazard applications, including data centers, computer
          rooms, telecommunication facilities, and areas where water suppression is not
          desirable.`,
    link: "/clean-agent-extinguishing-system",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868569/Flameguard%20Images/Products%20and%20Services/clean-agent-extinguishing-system_tsqzfj.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050423/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-clean-agent-extinguishing-system_qkia3x.webp'
  },

  {
    name: "Standpipe & Hose System",
    description: `Standpipe systems can significantly improve the efficiency of manual
          firefighting operations by eliminating the need for long and cumbersome hose
          lays from fire apparatus to a fire. Even in buildings protected by automatic
          sprinklers, standpipe systems can play an important role in building fire safety
          by serving as a backup for and complement to sprinklers.`,
    link: "/standpipe-and-hose-system",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619716/Flameguard%20Images/Products%20and%20Services/standpipe-_-hose-system_kiptrx_kajveh.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050462/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-standpipe-_-hose-system_cx3tdm.webp'
  },

  {
    name: "Fire Hydrants",
    description: `A fire hydrant is a visible connection point strategically placed in designated
          areas for firefighters to access a water source. Its purpose is to promptly
          provide the necessary water for firefighters to put out fires.`,
    link: "/fire-hydrant",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868570/Flameguard%20Images/Products%20and%20Services/fire-hydrant_gvqoyd.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050439/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-hydrant_dppjbe.webp'
  },

  {
    name: "Fire Pumps",
    description: `Fire pumps increase the water supply pressure available from tanks or other
          sources. Dedicated fire pumps for fire protection use are more compact, more
          reliable, and easier to maintain.`,
    link: "/fire-pumps",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868796/Flameguard%20Images/Products%20and%20Services/fire-pumps_gr2heh.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050442/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-fire-pump_hfg0jc.webp'
  },

  {
    name: "Deluge & Preaction",
    description: `Deluge systems are used to protect against rapidly growing fires by delivering
          large quantities of water in a short period. It is appropriate for facilities
          where significant amounts of highly combustible materials are present like
          transformers, fuel tanks, etc. Preaction systems are typically found in spaces
          containing computers or communications equipment, museums, and facilities where
          inadvertent water leakage from system piping is of major concern.`,
    link: "/deluge-and-preaction",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868569/Flameguard%20Images/Products%20and%20Services/deluge-preaction_y91pta.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050425/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-deluge-preaction_elwtu0.webp'
  },


  {
    name: "Foam Extinguishing System",
    description: `Firefighting foams are used primarily to combat flammable and combustible liquid fuel fires. Due to the growing global concern about PFAS, it is advisable to only use these systems when absolutely necessary.`,
    link: "/foam-extinguishing-system",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868570/Flameguard%20Images/Products%20and%20Services/foam-extinguishing-system_q4ecnc.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050447/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-foam-extinguishing-system_m1k18j.webp'
  },

  {
    name: "Special Hazards",
    description: `Kitchen Fire Suppression. Water Mist Suppression. Aerosol Fire Suppression. Fire Extinguishers.`,
    link: "/special-hazards",
    image: "https://res.cloudinary.com/ds5ovkisn/image/upload/v1694868570/Flameguard%20Images/Products%20and%20Services/special-hazards_hwfpls.webp",
    placeholder: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1703050450/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-Resized-products-services_nftnna.webp'
  },
]);

const limitDescription = (desc) => {
  const limitedDesc = desc.slice(0, 100).trim();

  return limitedDesc + "...";
};

</script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
