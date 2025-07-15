"use client";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpg";
import { AccountBookFilled } from "@ant-design/icons";
import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    // @ts-ignore
    const [isLoading, setIsLoading] = useState(false);

    const scrollToBottom = () => {
        navigate("/order");
    };

    return (
        <div
            className="relative w-full min-h-screen overflow-hidden z-10"
            style={{ backgroundImage: "url('/bg-white.jpg')" }}
        >
            <div
  className="absolute top-0 left-0  w-full sm:h-[600px] xl:h-[700px] 2xl:h-[800px] h-screen bg-cover bg-center bg-no-repeat opacity-80 -z-20"
  style={{ backgroundImage: "url('/sardor-bg.jpg')" }}
/>



            <div
             className=" flex flex-col  items-center justify-center  text-center text-white">
                <div id="header" className="bg-[rgba(0,0,0,0.5)]  pt-20 h-full pb-5 sm:h-90 max-w-4xl px-6">
                    <h1 className="!text-[#ffee00] !text-[40px] !font-semibold">
                        Asal Sedana – qadimiy shifo manbai
                    </h1>
                    <strong className="text-white block mt-2 text-lg">
                        Bu yerda siz organizmga foydali bo‘lgan asal, qora sedana yog‘i, 
                    </strong>
                    <h2 className="text-black text-[20px] font-semibold">
                        burunga tomchilar va boshqa tabiiy davo vositalarini topasiz.
                    </h2>
                    <h2 className="text-black text-[20px] font-semibold mt-2">
                        Sog‘lom hayot uchun tanlang – ishonchli va halol manbadan!
                    </h2>
                </div>

                <div
                    className="green w-full   py-10 px-6"
                    style={{ backgroundImage: "url('/bg-green.jpg')" }}
                >
                    <div className="flex flex-col  sm:flex-row  md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto">
                        <img
                            src={image1}
                            alt="Image 1"
                            className="max-w-[500px]  w-full"
                        />
                        <div className=" w-[95%]   text-center sm:w-[550px] sm:text-start text-white flex flex-col gap-4 p-6 md:p-10">
                           
                            <h3 className="!text-[#a7a5a5b1] text-[20px]  font-bold !text-start md:text-end sm:w-full">
                            Qora sedana
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Qon bosimi , qandli diabet , prostata va
                                buyrak muammolarida yordam beradi
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                Qon bosimini tartibga soladi
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Oshqozon va ichak faoliyatini yaxshilaydi,
                                jigardagi yog'larni eritadi
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                Yurak kasalliklarini xavfini kamaytiradi
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                Xolesterinni pasaytiradi , tromblarning oldini
                                oladi
                            </h3>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={scrollToBottom}
                            className="animate-bounce text-[18px] sm:text-[22px] text-white rounded-xl hover:scale-110 hover:bg-[#ffca7f] duration-500 hover:shadow-black w-[200px] h-[40px]  sm:w-[265px] sm:h-[60px] bg-gradient-to-r from-yellow-400 to-orange-500  "
                        >
                            <AccountBookFilled /> Buyurtma berish
                        </button>
                    </div>
                </div>

                <div id="white-bg" className=" w-full  py-10 md:p-2 px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto">
                        <div
                            id="texts"
                            className="flex w-[90%] flex-col gap-4 !text-start text-white p-30"
                        >
                            <h3 className="text-[#51ff00] font-bold !text-start md:text-end sm:w-full">
                            Qust al-Hindiy
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Tanani tozalovchi va tiklovchi tabiiy kuch
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Yallig'lanishlarga garshi kuchli vosita!{" "}
                                <br />  Bronxit, yo'tal va shamollashda
                                ishonchli yordamchi!
                                <br />  Nafas yo'llari uchun tabiiy himoya!
                                <br />  Immunitetni ko'taradi, viruslarga
                                garshi kurashadi!
                                <br /> Qorinning shishini, og'riqni
                                kamaytiradi!
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Qorinning shishini, og'riqni kamaytiradi!
                            </h3>
                        </div>
                        <img
                            src={image2}
                            alt="Image 1"
                            className="  w-[600px]"
                        />
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={scrollToBottom}
                            className="animate-bounce text-[18px] sm:text-[22px] text-white rounded-xl hover:scale-110 hover:bg-[#ffca7f] duration-500 hover:shadow-black w-[200px] h-[40px]  sm:w-[265px] sm:h-[60px] bg-gradient-to-r from-yellow-400 to-orange-500  "
                        >
                            <AccountBookFilled /> Buyurtma berish
                        </button>
                    </div>
                </div>

                <div
                    id="green"
                    className=" w-full mt-10 py-10 px-6 "
                    style={{ backgroundImage: "url('/bg-green.jpg')" }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto">
                        <img
                            src={image3}
                            alt="Image 1"
                            className=" w-[600px]"
                        />
                        <div
                            id="texts"
                    className="flex flex-col gap-4 !text-start text-white p-30"
                        >
                            <h2 className="!text-[24px] !text-[#52DA0E] font-bold">
                                 Tabiiy asal — sog'liq garovi!
                            </h2>
                    <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Immunitetni mustahkamlaydi, kuch-quvvat
                                beradi
                            </h3>
                    <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Asal - shamollash, yo'tal va sovuqda eng
                                yaxshi yordamchi
                            </h3>
                    <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Yurak va qon tomirlar faoliyatini yaxshilaydi
                            </h3>
                    <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Asal - bolalar, keksa va homilador ayollar
                                uchun ham foydali
                            </h3>
                    <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Hech qanday qo'shimcha va shakar yo'q ﻿faqat
                                sof tabiat!
                            </h3>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={scrollToBottom}
                            className="animate-bounce text-[18px] sm:text-[22px] text-white rounded-xl hover:scale-110 hover:bg-[#ffca7f] duration-500 hover:shadow-black w-[200px] h-[40px]  sm:w-[265px] sm:h-[60px] bg-gradient-to-r from-yellow-400 to-orange-500  "
                        >
                            <AccountBookFilled /> Buyurtma berish
                        </button>
                    </div>
                </div>

                <div className="white-bg w-full  py-5 px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto">
                        <div
                            id="texts"
                            className="flex flex-col gap-4 text-center text-white p-30"
                        >
                            <h2 className="!text-[24px] !text-[#6e4747] font-bold">
                                 Qist va sedana yog'li burun tomchisi - nafas
                                oling erkin!
                            </h2>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Burun bitishi, allergiya va shamollashda
                                tabiiy yechim!
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                Virus va bakteriyalarga qarshi kuchli himoya -
                                tabiiy yog'lardan!
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                 Burunni ochadi, shish va yallig'lanishni
                                kamaytiradi
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                Kimyoviy modda yo'q - faqat sof qist va sedana
                                yog'i
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold !text-start md:text-end sm:w-full">
                                Bolalar va kattalar uchun mos, xavfsiz va
                                tabiiy
                            </h3>
                        </div>
                        <img src={image4} alt="Image 1" className="w-[600px]" />
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center ">
                    <h1 className="text-[20px] mt-[10px] sm:text-[40px] font-bold px-[50px] sm:px-[400px]">
                        BATAFSIL MA'LUMOT UCHUN ISMINGIZ VA RAQAMINGIZNI
                        QOLDIRING!
                    </h1>
                    <p>Biz sizga tez orada bog'lanamiz!</p>
                </div>
                <div className="mt-10 mb-[50px] flex justify-center">
                    <button
                        onClick={scrollToBottom}
                        className="animate-bounce text-[18px] sm:text-[22px] text-white rounded-xl hover:scale-110 hover:bg-[#ffca7f] duration-500 hover:shadow-black w-[200px] h-[40px]  sm:w-[265px] sm:h-[60px] bg-gradient-to-r from-yellow-400 to-orange-500  "
                    >
                        <AccountBookFilled /> Buyurtma berish
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
