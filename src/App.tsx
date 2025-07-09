import sardorImg from "./assets/images/sardor.png";

function App() {
    return (
        <div className="flex flex-col items-center justify-center pt-4">
            <img src={sardorImg} alt="" height={560} width={460} />
            <div className="pt-25">
                <div className="flex gap-6   flex-col items-center justify-center  ">
                    <h1 className="!text-[#ffee00] text-[40px] font-semibold">
                        AJR-Qora Sedana
                    </h1>
                    <strong className="\\\\s\\\\sssssssssssssssssqwertyuiotv wsx    vvvvvgbbaaaasssdddfffqwertyuioop  bb">
                        HAM SALOMAT BOLASIZ - HAM SAXOVAT QILASIZ
                    </strong>
                    <div className="w-[100px] h-[4px] border-b-[5px] border-red-500"></div>

                    <h2 className="text-[20px] font-semibold">
                        SARDOR RAHIMXONdan KUTILGAN ZO’R YANGILIK.
                    </h2>
                    <h2 className="text-[20px] font-semibold">
                        Aziz Xalqimizning sevimli va ishonchli Darmon Vositasiga
                        Aylangan “AJR-SEDANA” bugundan boshlab Yangi Qadoqda
                    </h2>
                    <h2 className="text-[20px] font-semibold">
                        {" "}
                        Juda ko’pchililning koriga yaragan, dardiga darmon
                        bo’lgan, jismiga oro kirgan va mazlum ko’ngillarga
                        malham bo’lishga ulgurgan O’sha O’zimizning “AJR-SEDANA”
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default App;
