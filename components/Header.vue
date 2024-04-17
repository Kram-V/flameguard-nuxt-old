<template>
  <div class="fixed top-0 left-0 right-0 z-10 bg-white" style="z-index: 1000" v-if="(!pageNotFound && !unsubscribeEmail)">
    <!-- START OF BLACK BACKGROUND NAV -->
    <nav class="bg-black hidden lg:block">
      <ul class="flex justify-center uppercase text-white text-sm lg:w-[100%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
        <li
          v-for="(navLink, i) in navLinks" 
          :key="navLink.title"
          class="relative group border-black font-bold flex justify-center items-center hover:bg-red-color hover:text-white duration-500"
          :class="{ 'bg-red-color text-white': isActiveLink(navLink.path) }"
        >
          <NuxtLink 
            class="h-full w-full py-2 px-6" 
            :to="navLink.path"
            v-if="navLink.children.length === 0"
            ><span
              class="hover:border-b border-white text-[13px] 2xl:text-sm"
              :class="{
                'border-b border-white': isActiveLink(navLink.path),
              }"
              >{{ navLink.title }}</span
            ></NuxtLink
          >

          <div
            v-else
            class="w-full h-full relative"
            @click="toggleDropdown"
            :class="{ 'bg-red-color': isActiveFreeLearningLink }"
          >
            <div
              class="h-full flex justify-center items-center cursor-pointer px-6"
            >
              <span
                class="hover:border-b hover:border-white hover:text-white font-bold text-[13px] 2xl:text-sm mr-[8px]"
                :class="{ 'border-b border-white text-white': isActiveFreeLearningLink }"
                >{{ navLink.title }}</span
              >
              <Icon name="fa6-solid:caret-down" class="-mx-[2.5px]" />
            </div>

            <div class="z-50 absolute top-9 w-[250px]" v-if="isOpenDropdown">
              <!-- Overlay element -->
              <div class="fixed inset-0"></div>

              <div
                class="absolute top-0 left-0 w-full h-full overlay-container drop-shadow-lg"
              >
                <div
                  @click="toggleDropdownAndGetLink(navLinkChild.path)"
                  class="flex flex-col bg-white text-black hover:bg-red-color duration-700 hover:text-white"
                  :class="{ '!bg-red-color text-white': isActiveLink(navLinkChild.path) }"
                  v-for="(navLinkChild, index) in navLink.children"
                  :key="navLinkChild"
                >
                  <NuxtLink
                    class="h-full py-2 pl-6 text-[14px] 2xl:text-[15px] font-semibold barlow-condensed"
                    :to="navLinkChild.path"
                  >
                    {{ navLinkChild.title }}</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <!-- END OF BLACK BACKGROUND NAV -->

    <!-- START OF CONTENT OF NAVBAR -->
    <div class="flex flex-col sm:flex-row items-center justify-between px-[10px] lg:px-[0px] py-[0px] 
      sm:py-[0px] lg:py-[8px] lg:w-[90%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <div class="flex items-center">
        <div>
          <h3 class="uppercase font-bold text-xl -mb-[1px] -ml-1 lg:-ml-0.5 sm:mb-0 mt-1.5 sm:mt-0">
            <NuxtLink to="/">
              <img class="h-[40px] lg:h-[60px] 2xl:h-[60px] w-[165px] lg:w-[242px]" src="../assets/logo.webp" alt="Fire Protection Philippines - Flameguard Logo" />
            </NuxtLink>
          </h3>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <p
          class="text-[20px] md:text-[23px] 2xl:text-[26px] uppercase font-bold barlow-condensed text-center -mb-1"
          :class="fadingInAnimation"
        >
          Discover The Difference. Call us at
        </p>

        <div class="flex justify-center items-center">
          <Icon name="fa6-solid:phone" class="text-[22px] lg:text-2xl 2xl:text-[30px] text-red-color text-center" :class="{ 'animate-phone-ring': isPhoneRinging }"/>
          <span class="font-bold text-[26px] lg:text-3xl 2xl:text-4xl text-red-color ml-1" @mouseover="addHoverClass" @mouseout="removeHoverClass"><a href="tel:+63287084008">(02)8708-4008</a></span>
        </div>
      </div>

      <div class="flex items-center justify-center gap-[1px] -mt-4 2xl:-mt-3.5 sm:-mb-2">
        <a
          href="https://www.facebook.com/Flameguard.ph"
          target="_blank"
          class="text-gray-800 hover:text-blue-400 duration-500 text-[30px] lg:text-[33.8px] 2xl:text-[38.5px] mt-[2.5px] 2xl:mt-[2.5px] 2xl:-mr-[0.5px]"
        >
          <Icon name="fa6-brands:square-facebook" />
        </a>

        <a
          href="https://www.youtube.com/@Flameguard"
          target="_blank"
          class="text-gray-800 hover:text-red-400 duration-500 text-[30px] sm:text-[30px] lg:text-[34px] 2xl:text-[38.5px] mt-[3.5px] sm:mt-[2.5px] 2xl:mt-[2.5px]"
        >
          <Icon name="fa6-brands:square-youtube" />
        </a>

        <a
          href="https://www.linkedin.com/company/flameguardph/"
          target="_blank"
          class="text-gray-800 hover:text-blue-400 duration-500 text-[30px] lg:text-[34px] 2xl:text-[38.5px] mt-[2.5px]  2xl:-mx-[0.5px]"
        >
          <Icon name="pajamas:linkedin" />
        </a>

        <a
          href="https://www.instagram.com/flameguard.ph/"
          target="_blank"
          class="text-gray-800 hover:text-amber-600 duration-500 text-[30px] lg:text-[34.5px] 2xl:text-[38.5px] mt-[2.5px]  lg:mt-[1.7px] 2xl:mt-[2.5px]"
        >
          <Icon name="fa6-brands:square-instagram" />
        </a>
      </div>
    </div>
    <!-- END OF CONTENT OF NAVBAR -->

    <!-- START OF RED BACKGROUND NAV -->
    <nav class="bg-red-color">
      <ul class="flex justify-center uppercase text-white text-sm lg:w-[90%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
        <li
          v-for="navLink in belowNavLinks"
          :key="navLink.title"
          class="relative group border-black font-bold flex justify-center items-center py-2 hover:bg-dark-red-color hover:text-white duration-500 hidden lg:block"
          :class="{
            'bg-dark-red-color text-white': navLink.isActiveLink,
          }"
        >
          <div
            v-if="navLink.isDropdown"
            class="w-full h-full relative hidden lg:block" 
            @click="navLink.toggleDropdown()"
          >
            <div
              class="h-full flex justify-center items-center cursor-pointer lg:px-3 xl:px-6 text-[13px] 2xl:text-sm"
            >
              <span class="mr-[8px]">
                {{ navLink.title }}
              </span>

              <Icon name="fa6-solid:caret-down" class="-mx-[2.5px]" />
            </div>

            <div class="z-50 absolute top-7 w-[300px]" v-if="navLink.isOpen">
              <!-- Overlay element -->
              <div class="fixed inset-0"></div>

              <!-- @click="navLink.toggleDropdownAndGetLink(navLinkChild.path)" --> 
              <div
                class="absolute top-0 left-0 w-full h-full overlay-container drop-shadow-lg"
              >
                <div
              
                  class="flex flex-col bg-white text-black font-bold hover:bg-red-color duration-700 hover:text-white"
                  :class="{ '!bg-red-color text-white': isActiveLink(navLinkChild.path) }"
                  v-for="navLinkChild in navLink.children"
                  :key="navLinkChild"
                >
                  <NuxtLink
                    class="h-full py-2 pl-6 text-[14px] 2xl:text-[15px] font-semibold barlow-condensed" 
                    :to="navLinkChild.path"
                  >
                    {{ navLinkChild.title }}</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div v-else class="w-full h-full relative hidden lg:block">
            <div
              class="h-full flex justify-center items-center cursor-pointer px-6 text-[13px] 2xl:text-sm"
            >
              <NuxtLink :to="navLink.path">{{ navLink.title }}</NuxtLink>
            </div>
          </div>
        </li>
      </ul>

      <!-- START OF MOBILE MENU -->
      <!-- OVERLAY -->
      <div @click="closeSidebarMenu" style="z-index: 9;" class="fixed top-0 left-0 h-screen w-full z-40 bg-black bg-opacity-60" :class="{ 'hidden': isSidebarNotActive }"></div>

      <div style="z-index: 99999;">
        <div class="block lg:hidden text-white">
          <div class="flex justify-center py-1">
            <Icon name="mingcute:menu-fill" @click="openSidebarMenu"  class="text-[22px] cursor-pointer"/>
          </div>
        </div>

        <div :class="{ '-translate-x-full': isSidebarNotActive }" class="overflow-y-auto p-4 z-50 bg-white fixed top-0 left-0 bottom-0 w-full sm:w-1/2 transform  transition-transform duration-300">
          <div class="flex justify-between items-center mb-4">
            <NuxtLink to="/">
              <span class="text-lg font-medium relative -left-[5px]"><img class="w-[220px] h-[55px]" src="../assets/logo.webp" alt="Fire Protection Philippines - Flameguard Logo"></span>
            </NuxtLink>
            
            <Icon name="material-symbols:close" @click="closeSidebarMenu"  class="text-[22px] cursor-pointer"/>
          </div>

          <div v-for="navLink in navLinks" :key="navLink.title">
            <div class="py-2 text-[18px] font-semibold border-b border-gray-400" v-if="navLink.children.length === 0">
              <NuxtLink :to="navLink.path" class="hover:text-red-color text-gray-700"  :class="{ ' text-red-color': isActiveLink(navLink.path) }">
                {{ navLink.title }}
              </NuxtLink>
            </div>

       
            <accordion v-else>
              <template #title>
                <h3 class="text-[18px] font-semibold text-gray-700" 
                  >{{ navLink.title }}
                </h3>
              </template>

              <ul class="ml-5" v-for="navLinkChild in navLink.children">
                <NuxtLink :to="navLinkChild.path" class="hover:text-red-color text-gray-500"  :class="{ ' text-red-color': isActiveLink(navLinkChild.path) }">
                  <li class="py-[10px] font-semibold text-[18px]">{{ navLinkChild.title }}</li>
                </NuxtLink>
              </ul>
            </accordion>
          </div>

          <div v-for="navLink in belowNavLinks" :key="navLink.title">
            <div class="py-2 text-[18px] font-semibold border-b border-gray-400" v-if="navLink.children.length === 0">
              <NuxtLink :to="navLink.path" class="hover:text-red-color text-gray-700"  :class="{ ' text-red-color': isActiveLink(navLink.path) }">
                {{ navLink.title }}
              </NuxtLink>
            </div>

            <accordion v-else>
              <template #title>
                <h3 class="text-[18px] font-semibold text-gray-700">{{ navLink.title }}</h3>
              </template>

              <ul class="ml-5" v-for="navLinkChild in navLink.children"> 
                <NuxtLink :to="navLinkChild.path" class="hover:text-red-color text-gray-500"  :class="{ ' text-red-color': isActiveLink(navLinkChild.path) }">
                  <li class="py-[10px] font-semibold text-[18px]">{{ navLinkChild.title }}</li>
                </NuxtLink>
              </ul>
            </accordion>
          </div>
        </div>
      </div>
      <!-- END OF MOBILE MENU --> 
    </nav>
    <!-- END OF RED BACKGROUND NAV -->
  </div>
</template>

<script setup>
const route = useRoute();

let phoneRingingTimeout;

const isSidebarNotActive = ref(true);

const pageNotFound = ref(false);
const unsubscribeEmail = ref(false);

const isOpenDropdown = ref(false);
const isActiveFreeLearningLink = ref(false);

const isPhoneRinging = ref(false);

const fadingInAnimation = ref("");

const navLinks = reactive([
  {
    title: "Home",
    path: "/",
    children: [],
  },
  {
    title: "About Us",
    path: "/about-us",
    children: [],
  },
  {
    title: "Systems & Services",
    path: "/systems-and-services",
    children: [],
  },
  {
    title: "Free Resources",
    children: [
      {
        title: "Videos",
        path: "/videos",
      },
      {
        title: "Blogs",
        path: "/blogs",
      },
      {
        title: "Preventive Maintenance Ebook",
        path: "/preventive-maintenance-ebook",
      },
    ],
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    children: [],
  },
  {
    title: "Careers",
    path: "/careers",
    children: [],
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    children: [],
  },
]);

let belowNavLinks = reactive([
  {
    isDropdown: true,
    isOpen: false,
    isActiveLink: false,
    title: "Fire Sprinkler & Suppression",

    children: [
      {
        title: "Inspection, Testing, & Maintenance",
        path: "/preventive-maintenance",
      },
      {
        title: "Design & Installation",
        path: "/design-and-installation",
      },
      {
        title: "Standpipe & Hose System",
        path: "/standpipe-and-hose-system",
      },
      {
        title: "Fire Hydrant",
        path: "/fire-hydrant",
      },
      {
        title: "Fire Pumps",
        path: "/fire-pumps",
      },
      {
        title: "Deluge and Pre-action",
        path: "/deluge-and-preaction",
      },
      {
        title: "Foam Extinguishing System",
        path: "/foam-extinguishing-system",
      },
    ],

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    // toggleDropdownAndGetLink(path) {
    //   console.log("ROUTE PATH", route.name)
    //   if (route.path === path) {
    //     console.log("IF")
    //     this.isOpen = true;
    //     this.isActiveLink = true;
    //     return;
    //   }
    //   console.log("ELSE")

    //   this.isOpen = !this.isOpen;
    //   this.isActiveLink = !this.isActiveLink;
    // },
  },

  {
    isDropdown: true,
    isOpen: false,
    isActiveLink: false,
    title: "Fire Alarms",
    children: [
      {
        title: "Inspection, Testing, & Maintenance",
        path: "/fire-alarm-maintenance",
      },
      {
        title: "Design & Installation",
        path: "/fire-alarm-design-and-installation",
      },
    ],

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    // toggleDropdownAndGetLink(path) {
    //   if (route.path === path) {
    //     this.isOpen = true;
    //     this.isActiveLink = true;
    //     return;
    //   }

    //   this.isOpen = !this.isOpen;
    //   this.isActiveLink = !this.isActiveLink;
    // },
  },

  {
    isDropdown: false,
    isActiveLink: false,
    title: "Clean Agent Extinguishing System",
    path: "/clean-agent-extinguishing-system",
    children: [],
  },

  {
    isDropdown: true,
    isOpen: false,
    isActiveLink: false,
    title: "Special Hazards",
    children: [
      {
        title: "Kitchen Fire Suppression",
        path: "/special-hazards#kitchen-fire-suppression",
      },
      {
        title: "Aerosol Fire Suppression",
        path: "/special-hazards#aerosol-fire-suppression",
      },
      {
        title: "Water Mist Suppression",
        path: "/special-hazards#water-mist-fire-suppression-system",
      },
      {
        title: "Fire Extinguishers",
        path: "/special-hazards#fire-extinguishers",
      },
    ],

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
]);

watch(
  () => route.path,
  () => {
    isOpenDropdown.value = false;
    isActiveFreeLearningLink.value = false;
    isPhoneRinging.value = true;
    isSidebarNotActive.value = true;

    if (route.name === "Page Not Found") {
      pageNotFound.value = true;
    } else {
      pageNotFound.value = false;
    }

    if (route.name === "Unsubscribe Email") {
      unsubscribeEmail.value = true;
    } else {
      unsubscribeEmail.value = false;
    }
    

    clearTimeout(phoneRingingTimeout);

    phoneRingingTimeout = setTimeout(() => {
      isPhoneRinging.value = false;
    }, 2000);


    if(route.path === "/videos") {
      isActiveFreeLearningLink.value = true;
    } else if (route.path === "/blogs") {
      isActiveFreeLearningLink.value = true;
    } else if (route.path === "/preventive-maintenance-ebook") {
      isActiveFreeLearningLink.value = true;
    } else {
      isActiveFreeLearningLink.value = false;
    }
  

    belowNavLinks.forEach((navLink) => {
      if (navLink.title === "Fire Sprinkler & Suppression") {
        
        const thereIsCurrentLink = navLink.children.some(
          (childLink) => childLink.path === route.path
        );
  

        if (thereIsCurrentLink) {
          navLink.isActiveLink = true;
        } else {
          navLink.isActiveLink = false;
        }
      } else if (navLink.title === "Fire Alarms") {
        const thereIsCurrentLink = navLink.children.some(
          (childLink) => childLink.path === route.path
        );


        if (thereIsCurrentLink) {
          navLink.isActiveLink = true;
        } else {
          navLink.isActiveLink = false;
        }
      } else if (navLink.title === "Special Hazards") {
        const thereIsCurrentLink = navLink.children.some(
          (childLink) => childLink.path == route.path + route.hash  
        );

        if (thereIsCurrentLink) {
          navLink.isActiveLink = true;
        } else if (route.path.includes("special-hazards")) {
          navLink.isActiveLink = true;
        } else {
          navLink.isActiveLink = false;
        }
      } else {
        route.path !== navLink.path
          ? (navLink.isActiveLink = false)
          : (navLink.isActiveLink = true);
      }
    });
  }
);

watch(
  () => route.hash,
  () => {
    isSidebarNotActive.value = true
  }
);



watch(fadingInAnimation, (value) => {
  if (value === "text-gray-100") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-200 duration-1000";
    }, 1000);
  }

  if (value === "text-gray-200 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-300 duration-1000";
    }, 500);
  }

  if (value === "text-gray-300 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-400 duration-1000";
    }, 500);
  }

  if (value === "text-gray-400 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-500 duration-1000";
    }, 500);
  }

  if (value === "text-gray-500 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-600 duration-1000";
    }, 500);
  }

  if (value === "text-gray-600 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-700 duration-1000";
    }, 500);
  }

  if (value === "text-gray-700 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-800 duration-1000";
    }, 500);
  }

  if (value === "text-gray-800 duration-1000") {
    setTimeout(() => {
      fadingInAnimation.value = "text-gray-100";
    }, 10000);
  }
});

const addHoverClass = () => {
  isPhoneRinging.value = true;
}

const removeHoverClass = () => {
  isPhoneRinging.value = false;
}

const isActiveLink = (path) => {
  return path === route.path + route.hash;
};

const openSidebarMenu = () => {
  isSidebarNotActive.value = false;
}

const closeSidebarMenu = () => {
  isSidebarNotActive.value = true;
}

const toggleDropdownAndGetLink = (path) => {
  if (route.path === path) {
    isActiveFreeLearningLink.value = true;
    isOpenDropdown.value = true;
    return;
  }

  isOpenDropdown.value = !isOpenDropdown.value;
  isActiveFreeLearningLink.value = !isActiveFreeLearningLink.value;
};

const toggleDropdown = () => {
  isOpenDropdown.value = !isOpenDropdown.value;
};



onMounted(() => {
  fadingInAnimation.value = "text-gray-100";
});
</script>

<style scoped>
@keyframes phone-ring {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* .scroll-padding {
  transition: padding 0.5s;
} */

/* .scroll-padding.reduce-padding {
  padding: 0px 220px 0px 220px;
} */

.animate-phone-ring {
  animation-name: phone-ring;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}

.asd {
  color: #1b1919a0;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
