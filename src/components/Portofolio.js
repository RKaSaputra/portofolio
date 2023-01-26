import React from "react";
import foto from "../assets/image1.jpg";
import { portofolios } from "../Data";

const Portofolio = () => {
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {portofolios.map((portofolio) => {
          return (
            <div
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              key={portofolio.id}
            >
              <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    class="block h-auto w-full"
                    src={portofolio.image}
                  />
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" href="#">
                      {portofolio.title}
                    </a>
                  </h1>
                  <p class="text-grey-darker text-sm">11/1/19</p>
                </header>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
