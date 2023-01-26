const Footer = () => {
    return(
        <footer class="text-center bg-gray-200 flex flex-col px-4 py-12 sm:text-left lg:px-16 md:px-8 xl:px-24 xxl:px-40">
        <div class="sm:flex flex-wrap">
          <div class="sm:w-1/2 lg:w-1/5">
            <h6 class="text-sm text-gray-600 font-bold uppercase">Contact</h6>
    
            <div class="mt-4">
              <a href="#" class="block text-md text-gray-900">support@dikastr.com</a>
              <a href="#" class="block text-md text-gray-900 mt-2">+91 000 000 0000</a>
            </div>
          </div>
    
          <div class="mt-8 sm:w-1/2 sm:mt-0 lg:w-1/5 lg:mt-0">
            <h6 class="text-sm text-gray-600 font-bold uppercase">Company</h6>
            <ul class="mt-4">
              <li><a href="#">Resources</a></li>
              <li class="mt-2"><a href="#">Careers</a></li>
              <li class="mt-2"><a href="#">Projects</a></li>
              <li class="mt-2"><a href="#">About Us</a></li>
            </ul>
          </div>
    
          <div class="mt-8 sm:w-1/2 sm:mt-12 lg:w-1/5 lg:mt-0">
            <h6 class="text-sm text-gray-600 font-bold uppercase">Legal</h6>
            <ul class="mt-4">
              <li><a href="#">Terms and Conditions</a></li>
              <li class="mt-2"><a href="#">Privacy Policy</a></li>
              <li class="mt-2"><a href="#">Refund & Cancellation</a></li>
              <li class="mt-2"><a href="#">Core Values</a></li>
            </ul>
          </div>
    
          <div class="mt-12 sm:w-1/2 lg:w-2/5 lg:mt-0 lg:pl-12">
    
    
            <p class="text-base text-gray-600 mt-4">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna.</p>
          </div>
        </div>
    
        <div class="mt-12">
          <p class="text-sm text-gray-600">© Inc. All rights reserved.</p>
        </div>
      </footer>
    )   
}

export default Footer
