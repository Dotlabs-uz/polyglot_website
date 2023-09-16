import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface TeacherProps {}

const Teacher: React.FC<TeacherProps> = () => {
   return (
      <div className="custom-container">
         <div className="flex max-md:flex-col justify-between items-start mt-24">
            <div className="max-w-[745px] w-full">
               <h2 className="text-[64px] max-2xl:text-[47px] max-xl:text-[36px] max-md:text-[32px] font-semibold leading-[68px] max-2xl:leading-[55px] max-xl:leading-[45px] max-md:leading-[34.778px] text-blue">
                  Какие профессионалы работают у нас, и кто проложит вам путь к
                  успеху
               </h2>
            </div>
            <div className="max-w-[650px] w-full">
               <h2 className="text-[64px] max-2xl:text-[47px] max-xl:text-[36px] max-md:text-[32px] font-semibold leading-[68px] max-2xl:leading-[55px] max-xl:leading-[45px] max-md:leading-[34.778px] mb-4 max-md:my-4 text-orange">
                  Самое время познакомиться!
               </h2>
               <p className="text-[36px] max-2xl:text-[28px] max-xl:text-[22px] max-sm:text-[18px] leading-[45px] max-xl:leading-[30px] max-md:leading-[23.015px] text-orange">
                  Наши специалисты не просто любят своё дело, но также вместе с
                  вами совершенствуются с каждым днём
               </p>
            </div>
         </div>

         <div className="mt-14 mb-7 flex items-center justify-between">
            <div className="">
               <h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[28px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-blue">
                  Преподаватели
               </h2>
            </div>
            <div className="flex gap-3 max-sm:gap-1 items-center">
               <button className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="25"
                     height="25"
                     viewBox="0 0 25 25"
                     fill="none"
                  >
                     <path
                        d="M4.04448 12.4645C4.04466 12.2603 4.12591 12.0646 4.27037 11.9203L11.4579 4.73278C11.656 4.54019 11.9417 4.46791 12.2076 4.54317C12.4734 4.61843 12.6789 4.82979 12.7466 5.09764C12.8144 5.36548 12.7341 5.64912 12.536 5.84171L5.91323 12.4645L12.536 19.0872C12.742 19.2792 12.8268 19.5684 12.7571 19.8412C12.6875 20.1141 12.4744 20.3271 12.2016 20.3968C11.9287 20.4665 11.6396 20.3817 11.4476 20.1756L4.2601 12.9881C4.12432 12.8473 4.04723 12.6601 4.04448 12.4645Z"
                        fill="white"
                     />
                     <path
                        d="M4.05474 12.4645C4.06028 12.0415 4.40184 11.6999 4.82483 11.6944L20.2266 11.6944C20.5017 11.6944 20.756 11.8412 20.8935 12.0794C21.0311 12.3177 21.0311 12.6113 20.8935 12.8495C20.756 13.0878 20.5017 13.2346 20.2266 13.2346L4.82483 13.2346C4.40184 13.229 4.06028 12.8875 4.05474 12.4645Z"
                        fill="white"
                     />
                     <path
                        d="M3.29492 12.4645C3.29528 12.0561 3.45779 11.6646 3.74671 11.3761L10.9342 4.18859C11.5381 3.58748 12.515 3.58978 13.1161 4.19372C13.7172 4.79766 13.7149 5.77454 13.111 6.37564L7.00162 12.4645L13.0905 18.5431C13.6944 19.1442 13.6967 20.121 13.0956 20.725C12.4945 21.3289 11.5176 21.3312 10.9137 20.7301L3.72617 13.5426C3.44727 13.2533 3.29251 12.8664 3.29492 12.4645Z"
                        fill="white"
                     />
                     <path
                        d="M3.29492 12.4645C3.29492 11.6139 3.98449 10.9243 4.8351 10.9243L20.2369 10.9243C21.0875 10.9243 21.7771 11.6139 21.7771 12.4645C21.7771 13.3151 21.0875 14.0047 20.2369 14.0047L4.8351 14.0047C3.98449 14.0047 3.29492 13.3151 3.29492 12.4645Z"
                        fill="white"
                     />
                  </svg>
               </button>
               <button className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-10 max-md:h-10 flex items-center justify-center bg-blue rounded-full">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="25"
                     viewBox="0 0 24 25"
                     fill="none"
                  >
                     <path
                        d="M19.9759 12.4918C19.9758 12.6874 19.8979 12.8749 19.7596 13.0131L12.8743 19.8984C12.6845 20.0828 12.4108 20.1521 12.1561 20.08C11.9015 20.0079 11.7046 19.8054 11.6397 19.5488C11.5748 19.2923 11.6518 19.0205 11.8415 18.8361L18.1858 12.4918L11.8415 6.14753C11.6442 5.96363 11.5629 5.68666 11.6297 5.42528C11.6964 5.16391 11.9005 4.95981 12.1619 4.89306C12.4233 4.8263 12.7002 4.90755 12.8841 5.10491L19.7694 11.9902C19.8995 12.1251 19.9733 12.3044 19.9759 12.4918Z"
                        fill="white"
                     />
                     <path
                        d="M19.9661 12.4918C19.9608 12.897 19.6336 13.2242 19.2284 13.2295L4.47431 13.2295C4.21075 13.2295 3.96721 13.0889 3.83544 12.8606C3.70366 12.6324 3.70366 12.3512 3.83544 12.1229C3.96721 11.8947 4.21075 11.7541 4.47431 11.7541L19.2284 11.7541C19.6336 11.7594 19.9608 12.0866 19.9661 12.4918Z"
                        fill="white"
                     />
                     <path
                        d="M20.694 12.4918C20.6936 12.883 20.538 13.258 20.2612 13.5344L13.3759 20.4197C12.7974 20.9955 11.8616 20.9933 11.2858 20.4147C10.71 19.8362 10.7122 18.9004 11.2907 18.3246L17.1432 12.4918L11.3104 6.66885C10.7318 6.09302 10.7296 5.15722 11.3055 4.57868C11.8813 4.00014 12.8171 3.99794 13.3956 4.57376L20.2809 11.459C20.548 11.7362 20.6963 12.1068 20.694 12.4918Z"
                        fill="white"
                     />
                     <path
                        d="M20.694 12.4918C20.694 13.3066 20.0334 13.9672 19.2186 13.9672L4.46447 13.9672C3.64962 13.9672 2.98906 13.3066 2.98906 12.4918C2.98906 11.6769 3.64962 11.0164 4.46447 11.0164L19.2186 11.0164C20.0334 11.0164 20.694 11.677 20.694 12.4918Z"
                        fill="white"
                     />
                  </svg>
               </button>
            </div>
         </div>

         <Swiper
            className=""
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
               1536: {
                  slidesPerView: 4,
                  spaceBetween: 35,
               },
               1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
            }}
         >
            {[0, 1, 2, 3, 4, 5].map((item: number) => {
               return (
                  <SwiperSlide className="" key={item}>
                     <div className="relative rounded-[43px] max-lg:rounded-[30px] max-md:rounded-[19.569px] bg-orange">
                        <div className="max-2xl:h-[600px] max-2xl:px-8 max-lg:p-0 max-lg:h-full">
                           <Image
                              className="bg-cover"
                              src={"/images/daler-teacher.png"}
                              width={1000}
                              height={1000}
                              alt="teacher"
                           />
                        </div>

                        <div className="w-full absolute bottom-0 max-sm:-bottom-0 left-0 py-6 max-2xl:py-3 px-9 max-3xl:px-5 max-md:px-4 max-sm:px-2 rounded-[20px] max-md:rounded-[9.102px] bg-blue">
                           <div className="">
                              <p className="text-[40px] max-3xl:text-[36px] max-2xl:text-[28px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[16px] leading-[40.5px] max-lg:leading-[30px]  max-sm:leading-[18.431px] font-bold text-white">
                                 Шарифкулов Далер
                              </p>
                              <p className="max-w-[200px] text-[18px] max-md:text-[14px] max-sm:text-[10px] leading-[20.5px] max-md:leading-[9.329px] mt-2 max-2xl:mt-0 text-white">
                                 Преподаватель по Английскому Языку
                              </p>
                           </div>
                           <div className="flex items-center justify-between mt-3 max-2xl:mt-2 text-white">
                              <p className="px-1 py-2 relative z-10 text-[34px] max-3xl:text-[28px] max-xl:text-[20px] max-md:text-[16px] max-sm:text-[12px] leading-[22px] max-md:leading-[10.012px] font-bold">
                                 <svg
                                    className="w-full h-full absolute -top-0 -left-0 z-[-1]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    // width="170"
                                    // height="44"
                                    viewBox="0 0 182 44"
                                    fill="none"
                                 >
                                    <path
                                       d="M2.22941 11.3498C2.60792 6.73537 6.42567 3.16097 11.055 3.08675L171.87 0.508695C177.188 0.42345 181.419 4.94297 180.985 10.2433L179.177 32.2824C178.798 36.8968 174.981 40.4712 170.351 40.5454L9.5357 43.1235C4.21822 43.2087 -0.0132092 38.6892 0.421572 33.3889L2.22941 11.3498Z"
                                       fill="#EC8D18"
                                    />
                                 </svg>
                                 IELTS 7.5
                              </p>

                              <button className="flex items-center gap-1 max-3xl:text-[16px] max-sm:text-[10px] max-md:text-[10px]">
                                 Подробнее
                                 <svg
                                    className="max-md:w-4 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="25"
                                    viewBox="0 0 26 25"
                                    fill="none"
                                 >
                                    <path
                                       d="M25.3857 3.10726C25.3913 2.69591 25.2303 2.29976 24.9394 2.00886C24.6485 1.71796 24.2524 1.55702 23.841 1.56262C22.9879 1.56262 22.2964 2.25418 22.2964 3.10726V19.7276L3.08101 0.491667C2.69594 0.0784169 2.11601 -0.0916915 1.56873 0.0480753C1.02144 0.187842 0.594092 0.615192 0.454325 1.16248C0.314559 1.70976 0.484667 2.28969 0.897917 2.67476L20.1339 21.9107H3.51351C2.66043 21.9107 1.96887 22.6023 1.96887 23.4554C1.96887 24.3084 2.66043 25 3.51351 25H23.8616C24.7147 25 25.4062 24.3084 25.4062 23.4554L25.3857 3.10726Z"
                                       fill="white"
                                    />
                                 </svg>
                              </button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default Teacher;