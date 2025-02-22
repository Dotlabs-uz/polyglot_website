import Link from "next/link";
import { useState } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";

interface MapProps {
	translation: any;
}

const Map: React.FC<MapProps> = ({ translation }) => {
	const [map, setMap] = useState<boolean>(false);
	const [branches, setBranches] = useState<string>("gagarina");
	const branchesPos: any = {
		gagarina: [
			"66.937838%2C39.658017&mode=whatshere&whatshere%5Bpoint%5D=66.935633%2C39.658443&whatshere%5Bzoom%5D=17&z=17.41",
			"!1m18!1m12!1m3!1d1651.8491916987225!2d66.93566171604618!3d39.6583262917879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d196653494931%3A0x136a5e0b5f7e6f63!2sPolyglot%20Language%20School!5e0!3m2!1sru!2s!4v1696681776786!5m2!1sru!2s",
		],
		ibnsino: [
			"66.968848%2C39.673724&mode=whatshere&whatshere%5Bpoint%5D=66.967539%2C39.673701&whatshere%5Bzoom%5D=17&z=17.41",
			"!1m18!1m12!1m3!1d1535.4674916179638!2d66.96791011097562!3d39.67367708412156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1934f4f9863b%3A0x1be470c4712f613c!2sPolyglot%20Language%20School%2002!5e0!3m2!1sru!2s!4v1696683031544!5m2!1sru!2s",
		],
		beruniy: ["", ""],
		vokzal: [
			"",
			"!1m17!1m12!1m3!1d3070.566858214302!2d66.92592307597475!3d39.68195697156729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQwJzU1LjEiTiA2NsKwNTUnNDIuNiJF!5e0!3m2!1sru!2s!4v1737543392939!5m2!1sru!2s",
		],
		ayniy: [
			"",
			"!1m17!1m12!1m3!1d3072.2340454858936!2d66.99223007597293!3d39.64444697157422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM4JzQwLjAiTiA2NsKwNTknNDEuMyJF!5e0!3m2!1sru!2s!4v1737543354553!5m2!1sru!2s",
		],
		gelion: [
			"",
			"!1m17!1m12!1m3!1d3070.93294324996!2d66.96539907597449!3d39.67372297156855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQwJzI1LjQiTiA2NsKwNTgnMDQuNyJF!5e0!3m2!1sru!2s!4v1737543290354!5m2!1sru!2s",
		],
		marxabo: [
			"66.923135%2C39.651720&mode=whatshere&whatshere%5Bpoint%5D=66.922926%2C39.651714&whatshere%5Bzoom%5D=17&z=21",
			"!1m17!1m12!1m3!1d3071.909778262281!2d66.92036407597325!3d39.65174497157284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzA2LjMiTiA2NsKwNTUnMjIuNiJF!5e0!3m2!1sru!2s!4v1737542843948!5m2!1sru!2s",
		],
	};

	return (
		<div className="bg-blue mt-14">
			<div className="custom-container py-16 max-lg:py-8">
				<div className="flex gap-2 max-sm:flex-col items-center max-sm:items-start justify-between">
					<div className="">
						<h2 className="text-[96px] max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-[32px] font-semibold leading-[90.5px] max-lg:leading-[32px] text-white">
							{translation?.title}
						</h2>
					</div>
					<div className="flex gap-3">
						<button
							onClick={() => setMap(false)}
							className="flex gap-1 items-center text-[32px] max-2xl:text-[24px] max-md:text-[18px] font-medium leading-[30px] py-3 max-2xl:py-2 max-md:py-1 px-6 max-lg:px-3 rounded-md bg-white"
						>
							<svg
								className="max-2xl:w-[20px] max-md:w-[15px]"
								xmlns="http://www.w3.org/2000/svg"
								width="26"
								height="37"
								viewBox="0 0 26 37"
								fill="none"
							>
								<g clipPath="url(#clip0_28_1251)">
									<path
										d="M16.9578 0.615268C15.7183 0.223734 14.3662 0 12.9859 0C9.0141 0 5.43663 1.78987 3.04227 4.61451L9.18311 9.73243L16.9578 0.615268Z"
										fill="#1A73E8"
									/>
									<path
										d="M3.04225 4.6145C1.15493 6.85184 0 9.76038 0 12.8927C0 15.3258 0.478873 17.2834 1.29577 19.0453L9.1831 9.73242L3.04225 4.6145Z"
										fill="#EA4335"
									/>
									<path
										d="M13.0141 7.97049C15.7747 7.97049 18 10.1799 18 12.9206C18 14.1232 17.5493 15.2418 16.8169 16.1088C16.8169 16.1088 20.7324 11.4663 24.5634 6.96368C22.9859 3.94328 20.2535 1.65 16.9578 0.615234L9.18311 9.73239C10.1127 8.66965 11.4648 7.97049 13.0141 7.97049Z"
										fill="#4285F4"
									/>
									<path
										d="M13.0141 17.8428C10.2535 17.8428 8.02817 15.6334 8.02817 12.8927C8.02817 11.6901 8.45071 10.5714 9.1831 9.73242L1.29578 19.0453C2.64789 22.0098 4.90141 24.415 7.21127 27.4074L16.8169 16.0809C15.8873 17.1716 14.5352 17.8428 13.0141 17.8428Z"
										fill="#FBBC04"
									/>
									<path
										d="M16.6479 30.5396C20.9859 23.7996 26.0282 20.7512 26.0282 12.9205C26.0282 10.7671 25.493 8.75349 24.5634 6.96362L7.21127 27.4073C7.94367 28.3582 8.70423 29.4489 9.43663 30.5676C12.0845 34.6227 11.3521 37.0279 13.0423 37.0279C14.7324 37.0279 14 34.5948 16.6479 30.5396Z"
										fill="#34A853"
									/>
								</g>
								<defs>
									<clipPath id="clip0_28_1251">
										<rect
											width="26"
											height="37"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							Google
						</button>
						{/* <button
							onClick={() => setMap(true)}
							className="flex gap-1 items-center text-[32px] max-2xl:text-[24px] max-md:text-[18px] font-medium leading-[30px] py-3 max-2xl:py-2 max-md:py-1 px-6 max-lg:px-3 rounded-md bg-white"
						>
							<FaMapMarkerAlt
								size={40}
								color="#FF4433"
								className="max-2xl:h-[30px] max-md:h-[20px] max-md:w-[20px]"
							/>
							Яндекс
						</button> */}
					</div>
				</div>
				<div className="flex max-lg:flex-col gap-28 max-2xl:gap-10 max-xl:gap-5 mt-12 max-lg:mt-5">
					<div className="max-w-[350px] max-xl:max-w-[250px] w-full flex flex-col justify-between">
						<div className="">
							<p className="text-[40px] max-2xl:text-[32px] font-bold leading-[40px] max-md:leading-[30px] max-md:mt-3 text-white">
								{translation?.text1}
							</p>
							<ul className="mt-4">
								<li
									onClick={() => setBranches("gagarina")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									{translation?.gagarina}
								</li>
								<li
									onClick={() => setBranches("ibnsino")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									{translation?.ibnsino}
								</li>
								{/* <li
									onClick={() => setBranches("beruniy")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									Beruniy
								</li> */}
								<li
									onClick={() => setBranches("vokzal")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									{translation?.vokzal}
								</li>
								<li
									onClick={() => setBranches("ayniy")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									{translation?.ayniy}
								</li>
								<li
									onClick={() => setBranches("gelion")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									{translation?.gelion}
								</li>
								<li
									onClick={() => setBranches("marxabo")}
									className="text-[32px] max-2xl:text-[24px] leading-[40px] max-xl:leading-[30px] cursor-pointer text-white"
								>
									{translation?.marxabo}
								</li>
							</ul>
						</div>
						<div className="max-lg:hidden">
							<p className="text-[24px] max-2xl:text-[20px] leading-[40px] text-white">
								<Link href="tel:+998905033030">
									{translation?.telText}:<br /> +998 (90) 503
									30-30
								</Link>
							</p>
						</div>
					</div>

					<div className="w-full min-h-[750px] max-2xl:min-h-[70vh] max-lg:min-h-[400px] max-sm:min-h-[300px] rounded-3xl overflow-hidden">
						{map ? (
							<iframe
								className={`w-full h-full max-lg:min-h-[400px] max-sm:min-h-[300px]`}
								src={`https://yandex.uz/map-widget/v1/?ll=${branchesPos[branches][0]}`}
								loading="lazy"
							></iframe>
						) : (
							<iframe
								className={`w-full h-full max-lg:min-h-[400px] max-sm:min-h-[300px]`}
								src={`https://www.google.com/maps/embed?pb=${branchesPos[branches][1]}`}
								loading="lazy"
							></iframe>
						)}
					</div>

					<div className="max-lg:block hidden">
						<p className="text-[24px] max-xl:text-[20px] leading-[40px] text-white">
							{translation?.telText}
						</p>
						<p className="text-[36px] max-xl:text-[28px] leading-[50px] font-medium text-white">
							+998 90 503 30 30
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Map;
