<template>
  <div
    style="z-index: 99"
    class="grid grid-cols-12 justify-items-center items-center gap-4 sm:gap-8 lg:gap-6 xl:gap-10"
  >
    <div
      style="z-index: 99"
      class="flex flex-col col-span-12 lg:col-span-7 xl:col-span-7 my-0"
    >
      <UnLazyImage
        alt="Fire Protection eBook"
        class="border-[4px] border-slate-300 rounded-sm lg:h-full w-full"
        placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1703482487/Flameguard%20Images/Placeholder%20For%20Image%20Loader/Free-Resources/Cover-Placeholder_srmbxq.webp"
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1703482628/Flameguard%20Images/eBook%20Preview/Cover_qaugpd.webp"
      />
    </div>

    <div
      style="z-index: 99"
      class="col-span-12 lg:col-span-5 xl:col-span-5 w-[100%] text-[20px]"
    >
      <div>
        <h1 class="text-[18px] lg:text-[18px] xl:text-[20px] font-bold pt-5 xl:pt-0 px-2 lg:leading-[24px] xl:leading-normal 2xl:leading-relaxed">
         Fire protection maintenance is crucial to ensure the safety of the people and assets within your building. The extensive NFPA 25 maintenance handbook and related
         handbook and related documents can be overwhelming, with over 1,000 pages to read and can cost a fortune.
          <br>
          <br>
         We've summarized them into one simplified book you can download for free!
        </h1>
        <FreeResourcesPreventiveMaintenanceEbookForm />
      </div>
    </div>
  </div>
</template>



<script setup>
import { api as viewerApi } from 'v-viewer'

const images = [
  "https://res.cloudinary.com/ds5ovkisn/image/upload/v1698236687/Flameguard%20Images/eBook%20Preview/ebook-1_vb9kcv.png",
  "https://res.cloudinary.com/ds5ovkisn/image/upload/v1698236687/Flameguard%20Images/eBook%20Preview/ebook-2_r9lqdb.png",
]

const showViewer = () => {
  viewerApi({
    images
  })
}
</script>
