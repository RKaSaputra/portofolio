import React from "react";
import { introduction, portofolios } from "../Data";
const Beranda = () => {
  return (
    <section>
      {introduction.map((intro) => {
        return (
          <div key={intro.id}>
            <div className="section flex justify-center items-center">
              <div className="grid place-items-center gap-8">
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
                  <img
                    src={intro.image}
                    alt="TAK DE"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
                  {intro.name}
                </h2>
                <div className="flex justify-center items-center">
                  <p className="text-justify opacity-80 text-[2rem]">
                    {intro.description}
                  </p>
                </div>
                <section>
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
                                  <a
                                    class="no-underline hover:underline text-black"
                                    href="#"
                                  >
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
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Beranda;
