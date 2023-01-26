import background from '../assets/img/banner.jpg';

const Header = () => {
    return(
      <header class="relative flex pt-32 pb-48 sm:pt-32 sm:pb-64 lg:pb-48 px-4 bg-blue-100 w-full md:pb-40 lg:px-16 lg:pt-48 xl:pt-40 xl:pb-64 xl:h-screen md:px-8 xl:px-24 xxl:px-40">
        <div class="text-center md:text-left md:w-1/2 z-10 xxl:max-w-2xl">
          <h1 class="text-3xl xl:text-5xl text-gray-900 font-bold leading-tight">
            Lorem Ipsum
          </h1>
          <p class="text-base xl:text-xl text-gray-600 mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore error provident tempore fugiat doloribus, deleniti perspiciatis blanditiis fugit, eligendi dolores itaque adipisci ratione voluptatem ipsa.
          </p>

          <p class="text-sm xl:text-base text-gray-600 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, error?
          </p>
          <a href="#" class="bg-blue-500 hover:bg-blue-700 px-6 py-4 text-white rounded block sm:inline-block mt-4 text-center font-bold">
            Find Projects
          </a>
        </div>
    </header>
    )
}

export default Header