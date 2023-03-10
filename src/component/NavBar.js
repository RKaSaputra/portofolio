const NavBar = () => {
    return(
        <nav class="bg-white py-4 px-4 lg:px-16 xl:py-8 fixed top-0 z-50 w-full md:px-8 xl:px-24 xxl:px-40">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Emblem_of_the_Communist_Party_of_Kampuchea.svg/602px-Emblem_of_the_Communist_Party_of_Kampuchea.svg.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Portofolio Leader Of Communist</span>
        </a>
        <div class="flex md:order-2"></div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">BERANDA</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PORTOFOLIO</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">KONTAK</a>
            </li>
        </ul>
        </div>
        </div>
    </nav>
    )
}
export default NavBar