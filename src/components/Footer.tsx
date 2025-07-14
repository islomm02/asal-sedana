import {
    FacebookOutlined,
    InstagramOutlined,
    PhoneFilled,
} from "@ant-design/icons";

function Footer() {
    return (
        <div>
            <div className="bottom-0 w-full z-50 bg-[#3B3B3B] px-6 md:px-[50px] lg:px-[100px] xl:px-[215px] py-10 flex flex-col lg:flex-row gap-10 justify-between">
  <div className="w-full lg:w-[327px]">
    <div className="w-full lg:w-[243px]">
      <div className="flex items-center gap-3 pb-8 justify-between ">
        <h1 className="text-white text-[20px] md:text-[25px]  font-semibold">Asal Sedana</h1>
        <img src="/sedana-logo.png" alt="" width={80} height={80} />
      </div>
      <strong className="font-light text-[14px] md:text-[16px] text-[#CCCCCC]">
        TABIIY SALOMATLIK 🌱 | SOG’LIG’INGIZ UCHUN QAYG’URAMIZ 💚
      </strong>
      <div className="flex flex-col gap-4 pt-5">
        <strong className="font-light text-[14px] md:text-[16px] text-[#CCCCCC]">
          Bizning Ijtimoiy Tarmoqlar
        </strong>
        <ul className="flex gap-3">
          <ul className="flex gap-[10px]">
                                <li className="text-[#858584] cursor-pointer ">
                                    <a
                                        className="block transition-transform duration-300 hover:translate-y-1"
                                        href="https://t.me/asalsedana"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-telegram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="text-[#858584] cursor-pointer">
                                    <a
                                        className="block transition-transform duration-300 hover:translate-y-1"
                                        href="https://www.instagram.com/asal_sedana?igsh=Z2dydGM1bWlwZHI2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FacebookOutlined
                                            style={{ fontSize: "32px" }}
                                        />
                                    </a>
                                </li>

                                <li className="text-[#858584] cursor-pointer ">
                                    <a
                                    className="block transition-transform duration-300 hover:translate-y-1"
                                    href="https://www.instagram.com/asal_sedana?igsh=Z2dydGM1bWlwZHI2">
                                    <InstagramOutlined
                                        style={{ fontSize: "32px" }}
                                    /></a>
                                </li>
                            </ul>
        </ul>
      </div>
    </div>
  </div>

  <div className="w-full lg:w-[420px]">
    <div className="flex flex-col gap-5">
      <div className="w-full lg:w-[295px] flex flex-col gap-6">
        <h1 className="text-white text-[20px] md:text-[25px] font-semibold">Murojaat uchun</h1> 
      </div>
      <a href="tel:+998339003033">
  <button className="bg-[#A259FF] text-white font-semibold px-6 md:px-10 py-4 rounded-[20px] hover:shadow-[0_4px_20px_rgba(162,89,255,0.6)] transition-shadow duration-300">
    <PhoneFilled /> Qong'iroq qilish
  </button>
</a>
    </div>
  </div>
</div>
        </div>
    );
}

export default Footer;
