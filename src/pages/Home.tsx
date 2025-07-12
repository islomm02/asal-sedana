"use client";
import sardorImg from "../assets/images/sardor.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
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
        <div className=" relative w-full min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80 -z-10"
                style={{ backgroundImage: "url('/bg-white.jpg')" }}
            />

            <div className="flex flex-col items-center justify-center pt-10 text-center text-white">
                <img
                    src={sardorImg}
                    className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-[1250px] h-[560px]"
                    alt="Sardor"
                    height={560}
                    width={860}
                />
                <div className="mt-10 max-w-4xl px-6">
                    <h1 className="!text-[#ffee00] !text-[40px] !font-semibold">
                        AJR-Qora Sedana
                    </h1>
                    <strong className="block mt-2 text-lg">
                        HAM SALOMAT BOLASIZ - HAM SAXOVAT QILASIZ
                    </strong>
                    <div className="w-[100px] h-[4px] border-b-[5px] border-red-500 mx-auto my-4"></div>
                    <h2 className="text-[20px] font-semibold">
                        SARDOR RAHIMXONdan KUTILGAN ZO’R YANGILIK.
                    </h2>
                    <h2 className="text-[20px] font-semibold mt-2">
                        Aziz Xalqimizning sevimli va ishonchli Darmon Vositasiga
                        aylangan “AJR-SEDANA” bugundan boshlab yangi qadoqda!
                    </h2>
                    <h2 className="text-[20px] font-semibold mt-2">
                        Juda ko’pchililning koriga yaragan, dardiga darmon
                        bo’lgan, jismiga oro kirgan va mazlum ko’ngillarga
                        malham bo’lishga ulgurgan o’sha o’zimizning “AJR-SEDANA”
                    </h2>
                </div>

                <div
                    className="green w-full  mt-10 py-10 px-6"
                    style={{ backgroundImage: "url('/bg-green.jpg')" }}
                >
                    <div className="flex flex-col  sm:flex-row  md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto">
                        <img
                            src={image1}
                            alt="Image 1"
                            className="max-w-[500px]  w-full"
                        />
                        <div className=" w-[95%]   text-center sm:w-[550px] md:text-end text-white flex flex-col gap-4 p-6 md:p-10">
                            <h2 className="!text-[24px] !text-[#52DA0E] font-bold">
                                "AJR" - NOMI BILAN AJR
                            </h2>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Ajr Qora Sedana bilan xayriya qiling!
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Mahsulotdan tushgan daromadning 30% qismi yetim
                                bolalarga xayriya qilinadi.
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Mahsulotimiz sifatiga ishonch hosil qilishingiz
                                mumkin, u sertifikatlar bilan tasdiqlangan.
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
                            className="flex w-[90%] flex-col gap-4 text-center text-white p-30"
                        >
                            <h2 className="!text-[24px] !text-[#52DA0E] font-bold">
                                Imunitetni kuchaytirishda yordam beradi!
                            </h2>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Ajr Qora Sedana - bu qora sedana asosidagi 100%
                                tabiiy davolash va profilaktika qilish
                                mahsulotidir. Tarkibida bo'yoqlar, konservantlar
                                va kimyoviy qo'shimchalar mavjud emas va albatta
                                100% Halol!
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Ajr Qora Sedana: -qon bosimida; <br /> -qandli
                                diabetda;
                                <br /> -prostatada;
                                <br /> -buyrak shamollashida;
                                <br />
                                -holsizlikda;
                                <br /> -bog'im
                                og'riqlari(artrit,artroz,poleartrit)da;
                                <br /> -anemiyada;
                                <br /> -jigardagi yoglarnieritib beradi;
                                <br /> -oshqozon ichak trakti uchun;
                                <br /> -immunitetni kotarishda;
                                <br /> -infarkt, insultkassaliklarida;
                                <br /> judayam foydali hisoblanadi.
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                ✅ Qora sedana yog'ini ishlab chiqarish uchun
                                biz eng yaxshi va sifatli qora sedana urug'ini
                                ishlatamiz
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
                            className="flex flex-col gap-4 text-center text-white p-30"
                        >
                            <h2 className="!text-[24px] !text-[#52DA0E] font-bold">
                                Har uchinchi odam bo'g'imlarda og'riq kechiradi.
                                Bugungi kunda bu qariyalarning kasalligi emas,
                                bu muammo yoshlarni bezovta qila boshladi.
                            </h2>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Ajr Qora Sedana - bo'g'im og'rig'idan aziyat
                                chekadigan odamlar uchun shifobaxsh xazina. Bu
                                100% tabiiy mahsulot va 100% Halol.
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Mahsulotdagi asosiy qimmatli to'yingan va
                                to'yinmagan yog'li kislotalardir. 46% gacha
                                bo'lgan fosfolipidlar, fosfatidilkolinlar
                                shifolashning haqiqiy mo'jizalaridir. Ular
                                bizning hujayralarimizning yaxlitligini
                                ta'minlaydi va nerv-mushak funktsiyalarini
                                yaxshilaydi.
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                - E vitamini, tokoferol, mobil bo'g'imlarning
                                membranalarini himoya qiladi, bo'g'imlarda
                                xaftaga tushadigan to'qimalarni tiklashga yordam
                                beradi. - D vitamini, kalsiferol, tibbiyot ko'p
                                hollarda o'tkir qo'shma og'riqlar kalsiferol
                                etishmovchiligi bilan bog'liqligini aniqladi. -
                                S vitamini qon tomir devorlarining elastikligini
                                ta'minlaydi. - B vitaminlari guruhi uglevod
                                almashinuvini normallantiradi, kollagen
                                tolalarini mustahkamlaydi va yallig'lanishga
                                qarshi ta'sirga ega. - Kaltsiy suyak
                                to'qimalarining asosidir. - Fosfor skelet
                                massasini shakllantirish uchun muhim element
                                bo'lib, hujayra faoliyatini qo'llab-quvvatlaydi.
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

                <div  className="white-bg w-full  py-5 px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto">
                        <div
                            id="texts"
                            className="flex flex-col gap-4 text-center text-white p-30"
                        >
                            <h2 className="!text-[24px] !text-[#52DA0E] font-bold">
                                Qon bosimimiga qarshi tabiiy vosita
                            </h2>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Shu sababli, qon bosimini normallashtirish uchun
                                dori-darmonlar va xalq davolanishlari birinchi
                                zaruriy vositalardir. Xo'sh, eng samaralisi esa
                                qora sedana, aniqrog'i, uning yog'i.
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Kaliforniya fan universiteti olimlari tomonidan
                                olib borilgan so'nggi tadqiqotlarga ko'ra,
                                gipertoniya uchun qora sedana yog'i qimmat
                                dori-darmonlar bilan bir xil terapevtik ta'sirga
                                ega. Shunday qilib, qora sedanani muntazam
                                ravishda qabul qilish sizga quyidagilarga imkon
                                beradi: - Arterial gipertaniyadan xalos bo'lish;
                                - Qon tomirlarining elastikligini oshirish; -
                                Xolesterin darajasini pasaytirish; - Qon
                                tromblarini paydo bo'lishining oldini olish; -
                                Kichik qon tomirlarining o'tkazuvchanligini
                                kamaytirish; - Ateroskleroz rivojlanish xavfini
                                kamaytirish; - Qon tomirlari spazmini
                                to'xtatish; - Yurak mushaklarini kuchaytirish; -
                                Yo'ldosh kasalliklarning rivojlanishini oldini
                                olish - varikoz tomirlari, tromboflebit,
                                buyraklarning yallig'lanishi va boshqalar.
                            </h3>
                            <h3 className="text-[#bac9b3] font-bold text-center md:text-end sm:w-full">
                                Qon bosimi bilan yashamang, Ajr Qora Sedana
                                qadimiy shifobaxsh mahsuloti bilan noxush
                                alomatni yo'q qiling
                            </h3>
                        </div>
                        <img
                            src={image4}
                            alt="Image 1"
                            className="w-[600px]"
                        />
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
