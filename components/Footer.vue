<template>
  <div class=" bg-black text-white">
    <div class="px-4 xl:px-0 lg:w-[100%] xl:w-[1100px] 2xl:w-[1200px] mx-auto grid grid-cols-12 py-6 md:py-0">
      <div class="col-span-12 md:col-span-6 flex flex-col items-center justify-center gap-4 lg:mr-12 mb-3">
        <div class="mb-2 text-center">
          <h2 class="text-[26px] xl:text-3xl  font-semibold relative">
            <span class="relative tracking-wide barlow-condensed pb-3 block sample">
              HELLO, PROPERTY MANAGERS!
              <span
                class="absolute bottom-0 top-[36px] lg:top-[40px] xl:top-[46px] left-1/2 transform -translate-x-1/2 w-12 lg:w-16 border-b-4 border-red-500"
              ></span>
            </span>
          </h2>
        </div>

        <div class="text-sm leading-4 text-center gap-4">
          <div class="w-full">
            <div class="text-base md:text-lg">
              Learn how to write a Fire Safety Maintenance (FSMR) Report and perform fire protection maintenance to ensure compliance with the Bureau of Fire Protection (BFP) Philippines requirements.
            </div> 
          </div>
        </div>
      </div>  

      <div class="col-span-12 md:col-span-6 flex flex-col lg:flex-row items-center gap-6 xl:gap-16 md:py-4 lg:py-2">
        <UnLazyImage
          class="rounded-sm w-[209px] h-[250px]"
          placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1703483667/Flameguard%20Images/Free%20Resources/e-book-footer-Placeholder_lc8avs.webp"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1703482628/Flameguard%20Images/eBook%20Preview/Cover_qaugpd.webp"
          alt="Fire Protection Philippines - Flameguard PH eBook"
        />


        <div class="flex flex-col gap-2">
          <div class="uppercase text-base xl:text-lg text-center">
            <h4 class="text-[28px] xl:text-[34px] 2xl:text-[40px] font-medium leading-[50px]">EMPOWER YOUR SAFETY</h4>
          </div>
          <div class="md:w-[100%] mx-auto">
            <div class="flex justify-center w-[315px] mx-auto mb-1">
              <Button @click="redirectToPreventiveMaintenanceEbookPage" btnRed isRounded btnMinWidth="w-full" class="flex items-center uppercase sm:!py-[10px] gap-1.5">
                <span>Subscribe and Get Free eBook</span> 
                <Icon name="ph:arrow-right-bold" class="text-lg -mr-[2px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black text-white text-center ">
      <div class="border-t  border-gray-600 py-4 text-base">
        <div class="w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
         Copyright &copy; 2023 Flameguard Fire Protection Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter()
const redirectToPreventiveMaintenanceEbookPage = () => {
  if(route.path === '/preventive-maintenance-ebook') {
  return Swal.fire({

      title: "You are still on the same page.",
      confirmButtonColor: '#DD2427',
    });
  }

  router.push("/preventive-maintenance-ebook")
}

</script>

<style scoped>
.rounded-l {
  border-top-left-radius: 0.5rem; 
  border-bottom-left-radius: 0.5rem; 
}
</style>