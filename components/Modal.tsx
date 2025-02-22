import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { setCookie, hasCookie, getCookie, deleteCookie } from "cookies-next";
import ModalContext from "@/context/ModalContext";
import { useRouter } from "next/router";
import TranslateContext from "@/context/useTranslate";
import InputMask from "react-input-mask";

function Modal() {
    const { changeModal, modalTestID } = useContext(ModalContext);
    const translation: any = useContext(TranslateContext);

    const [secondModal, setSecondModal] = useState<boolean>(
        hasCookie("infoStudent")
    );
    const [infoStudent, setInfoStudent] = useState<any>();
    const [phone, setPhone] = useState("");

    const router = useRouter();

    useEffect(() => {
        if (secondModal) {
            const getInfoStudent: any = getCookie("infoStudent");
            setInfoStudent(JSON.parse(getInfoStudent));
        }
    }, [secondModal]);

    const ModalSubmit = (e: any) => {
        e.preventDefault();

        let data: any = {
            number: phone,
        };

        const formData = new FormData(e.target);

        formData.forEach((value, key): any => {
            data[key] = value;
        });

        setCookie("infoStudent", data);
        changeModal(false);

        router.push(`/${modalTestID}`);
    };

    return (
        <div className="fixed top-0 left-0 z-[100] w-screen h-screen backdrop-blur-sm bg-black/75">
            <div className="w-[40%] max-lg:w-[80%] max-md:w-[80%] max-sm:w-[90%] py-10 max-md:p-5 rounded-2xl fixed top-1/2 left-1/2 z-[101] -translate-x-1/2 -translate-y-1/2 bg-[#ec8d18] text-center">
                <IoClose
                    onClick={() => changeModal(false)}
                    size={40}
                    className="text-white absolute top-5 right-5 max-md:top-2 max-md:right-2 cursor-pointer"
                />
                {secondModal ? (
                    <>
                        <button
                            onClick={() => {
                                router.push(`/${modalTestID}`);
                                changeModal(false);
                            }}
                            type="submit"
                            className="w-[80%] mb-5 small_text_size py-4 max-2xl:py-3 max-sm:py-2 font-medium rounded-md bg-blue text-white"
                        >
                            Продолжить как {infoStudent?.name}
                        </button>
                        <button
                            onClick={() => {
                                deleteCookie("infoStudent");
                                setSecondModal(hasCookie("infoStudent"));
                            }}
                            type="submit"
                            className="w-[80%] small_text_size py-4 max-2xl:py-3 max-sm:py-2 font-medium rounded-md bg-blue text-white"
                        >
                            {translation?.modalTestStart?.changeData}
                        </button>
                    </>
                ) : (
                    <>
                        <p className="text_size font-bold text-blue mb-5 text-center m-auto">
                            {translation?.modalTestStart?.title}
                        </p>
                        <form
                            onSubmit={ModalSubmit}
                            className="w-full flex flex-col justify-center items-center gap-5"
                        >
                            <input
                                type="text"
                                required
                                name="name"
                                placeholder={
                                    translation?.modalTestStart?.inputName
                                }
                                className="w-[80%] max-sm:w-[90%] small_text_size focus:border-blue py-2 px-3 rounded-[10px] border border-orange text-[#000] placeholder:text-[#9F9F9F]"
                            />
                            <InputMask
                                className={
                                    "w-[80%]  max-sm:w-[90%] small_text_size focus:border-blue py-2 px-3 rounded-[10px] border border-orange text-[#000] placeholder:text-[#9F9F9F]"
                                }
                                mask="+\9\98-(99)-999-99-99"
                                placeholder={
                                    translation?.modalTestStart?.inputNumber
                                }
                                required
                                value={phone}
                                onChange={(e: any) => setPhone(e.target.value)}
                            ></InputMask>
                            <label className="flex max-lg:flex-col max-lg:items-start items-center gap-2 w-[80%] max-sm:w-[90%] justify-between">
                                <p className="text-white text-lg text-start max-sm:text-xs">
                                    Выберите филиал:
                                </p>
                                <select required title="select" name="select" className="rounded-md px-3 py-1">
                                    <option value="Гагарина" selected>Гагарина</option>
                                    <option value="Гелион">Гелион</option>
                                    <option value="Вокзал">Вокзал</option>
                                    <option value="Конигиль">Конигиль</option>
                                    <option value="Мархабо">Мархабо</option>
                                    <option value="Садриддин айни">Садриддин айни</option>
                                </select>
                            </label>

                            <label className="flex items-center gap-2 w-[80%] max-sm:w-[90%]">
                                <input
                                    type="checkbox"
                                    name="locateInSchoolNow"
                                />
                                <p className="text-white text-sm text-start max-sm:text-xs">
                                    Я нахожусь в центре на данный момент
                                </p>
                            </label>
                            <button
                                type="submit"
                                className="w-[80%] small_text_size py-2 font-medium rounded-md bg-blue hover:scale-105 transition text-white"
                            >
                                {translation?.modalTestStart?.button}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Modal;
