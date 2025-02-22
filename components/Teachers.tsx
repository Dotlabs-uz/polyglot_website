import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrClose } from "react-icons/gr";

interface TeacherProps {
	translation: any;
}

const Teacher: React.FC<TeacherProps> = ({ translation }) => {
	const [swiperRef, setSwiperRef] = useState<any>(null);

	const [modalInfo, setModalInfo] = useState<any>(null);
	const [modalHandel, setModalHandel] = useState<any>(false);

	const prevHandler = () => {
		swiperRef.slidePrev();
	};

	const nextHandler = () => {
		swiperRef.slideNext();
	};

	useEffect(() => {
		const body: any = document.querySelector("body");

		if (modalHandel) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "auto";
		}
	}, [modalHandel]);

	return (
		<div className="custom-container">
			<div className="flex max-md:flex-col justify-between items-start mt-24">
				<div className="max-w-[745px] w-full">
					<h2 className="text-[64px] max-2xl:text-[47px] max-xl:text-[36px] max-md:text-[32px] font-semibold leading-[68px] max-2xl:leading-[55px] max-xl:leading-[45px] max-md:leading-[34.778px] text-blue">
						{translation?.title1}
					</h2>
				</div>
				<div className="max-w-[650px] w-full">
					<h2 className="text-[64px] max-2xl:text-[47px] max-xl:text-[36px] max-md:text-[32px] font-semibold leading-[68px] max-2xl:leading-[55px] max-xl:leading-[45px] max-md:leading-[34.778px] mb-4 max-md:my-4 text-orange">
						{translation?.title2}
					</h2>
					<p className="text-[36px] max-2xl:text-[28px] max-xl:text-[22px] max-sm:text-[18px] leading-[45px] max-xl:leading-[30px] max-md:leading-[23.015px] text-orange">
						{translation?.p}
					</p>
				</div>
			</div>

			<div
				id="teacher"
				className="mt-9 max-lg:mb-5 max-md:mb-1 mb-7 flex items-center justify-between"
			>
				<div className="">
					<h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[28px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-blue">
						{translation?.h1}
					</h2>
				</div>
				<div className="flex gap-3 max-sm:gap-1 items-center">
					<button
						title="prev"
						onClick={prevHandler}
						className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-7 max-md:h-7 flex items-center justify-center bg-blue rounded-full"
					>
						<svg
							className="w-5 max-sm:w-4"
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
					<button
						title="next"
						onClick={nextHandler}
						className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-md:w-7 max-md:h-7 flex items-center justify-center bg-blue rounded-full"
					>
						<svg
							className="w-5 max-sm:w-4"
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
				className="cursor-grab"
				spaceBetween={20}
				slidesPerView={4}
				onSwiper={(swiper) => setSwiperRef(swiper)}
				breakpoints={{
					1536: {
						slidesPerView: 4,
						spaceBetween: 35,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					0: {
						slidesPerView: 2,
					},
				}}
			>
				{translation?.teacher?.map(
					(
						item: {
							id: number;
							img: string;
							name: string;
							job_title: string;
							local: string;
						},
						idx: number
					) => {
						return (
							<SwiperSlide className="" key={item.id}>
								<div className="relative rounded-[43px] max-lg:rounded-[30px] max-md:rounded-[19.569px] hover:-translate-y-1 hover:shadow-[0_7px_20px_gray] ease-in duration-150 bg-orange min-h-[300px] max-sm:min-h-[220px]">
									<div className="h-[707px] max-3xl:h-[550px] max-xl:h-full -translate-y-12 max-xl:-translate-y-10 max-sm:-translate-y-8">
										<Image
											className={`bg-cover ${
												item.id == 10 ||
												item.id == 12 ||
												item.id == 13 ||
												item.id == 6
													? "translate-y-[10%] max-sm:translate-y-[15%] max-sm:w-[97%]"
													: null
											}`}
											src={`/images/teachers/${item.img}.webp`}
											width={1000}
											height={1000}
											alt="teacher"
										/>
									</div>

									<div
										onClick={() => {
											setModalInfo(item),
												setModalHandel(true);
										}}
										className="w-full absolute -bottom-3 left-0 py-7 max-2xl:py-3 max-md:py-2 px-9 max-3xl:px-5 max-md:px-4 max-sm:px-2 rounded-[20px] max-md:rounded-[9.102px] bg-blue"
									>
										<div className="">
											<p className="text-[36px] max-3xl:text-[36px] max-2xl:text-[28px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[16px] leading-[40.5px] max-lg:leading-[30px]  max-sm:leading-[18.431px] font-bold text-white">
												{item?.name}
											</p>
											<p className="max-w-[200px] text-[23px] max-md:text-[14px] max-sm:text-[10px] leading-[20.5px] max-md:leading-[9.329px] mt-2 max-2xl:mt-0 text-white">
												{item?.job_title}
											</p>
										</div>
										<div className="flex items-center justify-between mt-3 max-sm:mt-2">
											<div></div>
											<div className="flex items-center gap-2">
												<p className="text-white max-sm:text-[11px]">
													{translation?.moreInfo}
												</p>
												<Image
													src={
														"/icons/moreinfoIcon.svg"
													}
													width={17}
													height={17}
													alt=""
													className="max-sm:w-[10px] max-sm:h-[10px]"
												/>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					}
				)}
			</Swiper>

			{modalHandel ? (
				<div className="fixed top-0 left-0 bg-[#0000008e] backdrop-blur-sm w-full h-full z-[60] flex items-center justify-center">
					<div className="relative bg-[#EC8D18] max-sm:mt-7 max-sm:w-[90%] flex max-lg:flex-col gap-5 max-lg:gap-0 h-[80vh] max-xl:h-[70vh] max-lg:h-[90vh] max-lg:w-[650px] max-md:w-[70%] w-[90vw] rounded-[20px] max-md:rounded-[9.102px] overflow-auto pr-20 max-xl:pr-12 max-lg:pr-0">
						<div className="relative w-[1100px] max-lg:w-full h-full max-sm:h-fit">
							<Image
								src={`/images/teachers/${modalInfo?.img}.webp`}
								alt=""
								width={600}
								height={600}
								className={`w-full max-lg:w-[400px] max-lg:m-auto ${
									modalInfo?.id == 10
										? "max-[1470px]:translate-y-10 max-xl:translate-y-0"
										: "translate-y-10 max-3xl:-translate-y-10 max-2xl:translate-y-2 max-[1350px]:translate-y-6 max-xl:-translate-y-5 max-lg:-translate-y-24 max-md:-translate-y-14 max-sm:-translate-y-16"
								}`}
							/>
							<div className="w-full absolute bottom-0 left-0 p-5  rounded-[20px] max-lg:rounded-b-none bg-blue">
								<p className="text-[36px] max-lg:mb-5 max-3xl:text-[36px] max-2xl:text-[28px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] leading-[40.5px] max-lg:leading-[30px]  max-sm:leading-[18.431px] font-bold text-white">
									{modalInfo?.name}
								</p>
								<p className="max-w-[200px] max-lg:max-w-full text-[23px] max-md:text-[18px] max-sm:text-[16px] leading-[20.5px] max-md:leading-[9.329px] mt-2 max-2xl:mt-0 text-white">
									{modalInfo?.job_title}
								</p>
							</div>
						</div>

						<div className="relative w-full p-5 pl-10  max-3xl:pl-5 max-lg:bg-blue max-lg:rounded-none">
							<p className="text-white text-5xl max-3xl:text-4xl max-2xl:text-3xl max-xl:text-xl max-sm:text-base mb-4 max-3xl:mb-2 font-semibold">
								{modalInfo?.id == 2
									? modalInfo?.job_title
									: modalInfo?.name}
							</p>
							<p className="text-white text-2xl font-medium max-2xl:text-xl max-xl:text-lg max-sm:text-base w-[500px] max-3xl:w-[450px] max-xl:w-[250px] mb-1">
								{modalInfo?.modal?.text}
							</p>
							<p className="text-white text-2xl font-medium max-2xl:text-xl max-xl:text-lg max-sm:text-base w-[500px] max-3xl:w-[450px] max-xl:w-[250px] max-sm:w-full  mb-1">
								{modalInfo?.modal?.text2}
							</p>
							<p className="text-white text-2xl font-medium max-2xl:text-xl max-xl:text-lg max-sm:text-base w-[500px] max-3xl:w-[450px] max-xl:w-[250px] mb-5 max-3xl:mb-3">
								{modalInfo?.modal?.text3}
							</p>
							<p className="text-white text-2xl font-medium max-2xl:text-xl max-xl:text-lg max-sm:text-base w-[300px] max-3xl:w-[350px] max-xl:w-[250px] mb-5 max-3xl:mb-3">
								{modalInfo?.modal?.title}
							</p>
							<p className="text-white text-xl  max-xl:text-lg max-sm:text-base max-w-[500px] max-3xl:w-[450px] max-xl:w-[300px] mb-5 max-3xl:mb-3">
								{modalInfo?.modal?.info}
							</p>
							<p className="text-white text-xl  max-xl:text-lg max-sm:text-base max-w-[500px] max-3xl:w-[450px] max-xl:w-[300px]">
								{modalInfo?.modal?.info1}
							</p>
						</div>
						<div className="relative w-full py-5 max-lg:bg-blue max-lg:p-5 max-lg:rounded-none">
							<p className="text-[white] text-4xl  max-3xl:text-3xl max-2xl:text-2xl max-xl:text-xl max-sm:text-lg mb-4 max-xl:mb-2 font-semibold">
								{modalInfo?.modal?.title2}
							</p>
							<p className="text-xl max-3xl:text-lg max-2xl:text-base max-xl:text-sm max-sm:text-xs text-white mb-7 max-2xl:mb-4">
								{modalInfo?.modal?.info2}
							</p>
							<p className="text-xl  max-3xl:text-lg max-2xl:text-base max-xl:text-sm max-sm:text-xs text-white">
								{modalInfo?.modal?.info3}
							</p>
						</div>
						<GrClose
							size={40}
							color="white"
							onClick={() => setModalHandel(false)}
							className="cursor-pointer absolute max-lg:fixed top-5 right-5 max-xl:top-3 max-xl:right-3 invert-[100] max-xl:w-[27px] max-lg:w-[30px]"
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Teacher;
