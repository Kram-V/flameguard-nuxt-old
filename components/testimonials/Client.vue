<template>
  <div
    class="grid grid-cols-12 justify-items-center"
  >
    <div class="mb-12 xxsm:mb-16 text-center col-span-12">
      <h2 class="text-[28px] xxsm:text-[35px] lg:text-[40px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          What Our Clients Are Saying
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h2>
    </div>

    <div style="z-index: 99" class="col-span-12 mb-20">
      <p class="text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] text-gray-700 mb-10 font-semibold">
        Our team has been honored with various international recognitions, but what truly
        matters to us is the acknowledgments we receive from our clients. Their feedback
        reflects our unwavering dedication to providing top-quality craftsmanship. We
        encourage you to discover more about us through the words of those who have
        experienced our work firsthand.
      </p>

      <p class="text-[17px] leading-8 xxsm:leading-0 xxsm:text-[20px] text-gray-700 font-semibold">
        We would love to hear from you! If you have any testimonials, feedback, or
        suggestions about your experience with Flameguard, we kindly ask that you take a
        moment to complete our
        <NuxtLink to="/customer-survey">
          <span class="text-red-color border-b border-red-color hover:border-none font-semibold"
            >customer survey</span
          >.</NuxtLink
        >
        Your thoughts are truly valued.  
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 col-span-12">
      <div class="bg-gray-100 p-6 sm:py-10 sm:px-20 order:1 lg:order-1">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />
        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          We made a smart decision in hiring Engr. Jayvee of Flameguard to design our fire
          protection system. He saved us a significant amount of money on his design that
          meets our facility's specific requirements while keeping it both effective and
          affordable. His remarkable proficiency in safeguarding facilities from the
          hazards of flammable liquids is rather impressive, something that we expect from
          someone with multiple recognitions from NFPA.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div>
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Erjay C.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">
            Asst. Vice President for System and Improvements
          </h6>

          <h5 class="text-[18px] lg:text-[20px] font-bold">CDI Sakata Inx Corp.</h5>
        </div>
      </div>

      <div class="p-6 sm:py-10 sm:px-20 order-2 lg:order-2">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />

        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          We had been facing issues with our fire pump for years until we found assistance
          from Flameguard. They not only fixed the problem for us but also educated us on
          conducting regular tests. Since then, we have been relying on their exceptional
          expertise to maintain our fire protection system.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div class="flex items-center justify-between">
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Rod P.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Property Manager</h6>
          <h5 class="text-[18px] lg:text-[20px] font-bold">One Wilson</h5>
        </div>
      </div>

      <div class="p-6 sm:py-10 sm:px-20 order-4 lg:order-3">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />

        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          The Flameguard team is top-notch in fire alarm design and maintenance. They
          consistently demonstrate exceptional on-site work that meets our high standards
          for safety and excellence. EMS has developed a strong and dependable
          relationship with Flameguard's leadership team through multiple projects. I
          assure you that their service will exceed your expectations, and I strongly
          recommend them.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div class="flex items-center justify-between">
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Kevin C.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">
            Plant Engineering Manager
          </h6>
          <h5 class="text-[18px] lg:text-[20px] font-bold">Gruppo EMS</h5>
        </div>
      </div>

      <div class="bg-gray-100 p-6 sm:py-10 sm:px-20 order-3 lg:order-4">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />
        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          I highly recommend Engr. Jayvee Yao for fire protection design, as he has proven
          to be exceptionally skilled in NFPA standards. He created a detailed and
          comprehensive plan for the deluge fire protection of our transformers.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div>
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Alfred C.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Operations Manager</h6>

          <h5 class="text-[18px] lg:text-[20px] font-bold">Malvar Enerzone</h5>
        </div>
      </div>

      <div class="bg-gray-100 p-6 sm:py-10 sm:px-20 order-5 lg:order-5">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />
        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          I am impressed by the exceptional performance of Flameguard in Fire Protection
          maintenance. Their report includes detailed information such as pump curves,
          speed readings, voltage, and other crucial details about the pump. It also has a
          summary of deficiencies with recommendations to correct them. In my opinion,
          they are the best fire protection contractor in the Philippines.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div>
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Jerswin J.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Property Engineer</h6>

          <h5 class="text-[18px] lg:text-[20px] font-bold">The Columns Ayala</h5>
        </div>
      </div>

      <div class="p-6 sm:py-10 sm:px-20 order-6 lg:order-6">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />

        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          Flameguard is the best fire protection contractor I have worked with. They
          installed quick-response sprinkler heads for us, replacing the standard ones,
          and the job went perfectly. They explained that NFPA requires quick-response
          sprinklers for light-hazard occupancies to ensure safety. We are pleased with
          their work and plan to collaborate with them on future projects. We extend our
          gratitude to the exceptional engineers and workers involved.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div class="flex items-center justify-between">
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Dennis G.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Building Manager</h6>
          <h5 class="text-[18px] lg:text-[20px] font-bold">Seda Nuvali</h5>
        </div>
      </div>

      <div class="p-6 sm:py-10 sm:px-20 order-8 lg:order-7">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />

        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          We highly recommend Flameguard as a fire protection contractor. The staff and
          engineers were both friendly and competent. They did an excellent job conducting
          our facility's fire protection system maintenance. They also provided affordable
          recommendations to improve our existing installation, which we truly appreciate.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div class="flex items-center justify-between">
            <h5 class="text-[18px] lg:text-[20px] font-bold">Susan L.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Administrator</h6>
          <h5 class="text-[18px] lg:text-[20px] font-bold">Maplehaus</h5>
        </div>
      </div>

      <div class="bg-gray-100 p-6 sm:py-10 sm:px-20 order-7 lg:order-8">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />
        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          We are impressed with Flameguard’s performance. They conducted preventive
          maintenance of our fire protection system with an engine-driven fire pump. The
          pump and engine were thoroughly inspected, including the hoses, batteries, fuel
          tank, oil, filters, and controller. I assure you that their service will exceed
          your expectations, and I strongly recommend them. We are confident in their
          abilities and look forward to continuing our successful partnership.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div>
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Patrick B.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Proprietor</h6>

          <!-- <h5 class="text-[18px] lg:text-[22px] font-bold">Kerry Manufacturing</h5> -->
        </div>
      </div>

      <div class="bg-gray-100 p-6 sm:py-10 sm:px-20 order-9 lg:order-9">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />
        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          Flameguard did an outstanding job in conducting the inspection, testing, and
          maintenance of our fire sprinkler and kitchen suppression system. They
          demonstrated great expertise in NFPA standards, and their reports were both
          comprehensive and easy to understand. We have full confidence in their ability
          to perform the preventive maintenance of our fire protection systems.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div>
            <h5 class="text-[18px] lg:text-[20px] font-bold">Engr. Celito A.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Building Engineer</h6>

          <h5 class="text-[18px] lg:text-[20px] font-bold">Seda Hotel Laguna</h5>
        </div>
      </div>

      <div class="p-6 sm:py-10 sm:px-20 order-10 lg:order-10">
        <Icon name="fa6-solid:quote-left" class="text-[40px] sm:text-[50px]  mb-6 text-gray-400" />

        <p class="text-gray-700 text-[17px] xxsm:text-[20px] font-semibold leading-8">
          Working with Flameguard for both simple and complex projects is remarkably easy.
          Their design engineers possess expertise in preparing shop drawings, while their
          field workers are always prepared to assist in completing the work promptly.
          They are both excellent in fire alarm and sprinkler installations and design. We
          eagerly anticipate working together on future projects.
        </p>

        <div class="w-full flex flex-col mt-5">
          <div class="flex items-center justify-between">
            <h5 class="text-[18px] lg:text-[20px] font-bold">Jay Q.</h5>
          </div>

          <h6 class="text-[17px] lg:text-[19px] text-red-color font-medium">Proprietor</h6>
          <h5 class="text-[18px] lg:text-[20px] font-bold">VJC Tech</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
