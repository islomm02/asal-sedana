import { useRef, useState } from "react";
import CustomModal from "../components/CustomModal";
import axios from "axios";
import { Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function OrderPage() {
    const chanelId = -1002886819915;

    const [tel, setTel] = useState("+998");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")?.toString().trim() || "";
        const phone = formData.get("tel-nomer")?.toString().trim() || "";

        if (name.length < 4) {
            setModalMessage("Ism kamida 4 ta harfdan iborat bo‘lishi kerak!");
            setIsModalOpen(true);
            return;
        }

        const phoneRegex = /^\+998\d{9}$/;
        if (!phoneRegex.test(phone)) {
            setModalMessage(
                "Telefon raqam +998 bilan boshlanib 9 ta raqamdan iborat bo‘lishi kerak!"
            );
            setIsModalOpen(true);
            return;
        }

        const message = `<b>Ismi:</b> ${name}\n<b>Nomer:</b> ${phone
            .split(" ")
            .join()}`;
        try {
            await axios.post(
                `https://api.telegram.org/bot8084795345:AAHviDo0hWjLWn7BftEAYaDZw0_06aBw5XA/sendMessage`,
                {
                    chat_id: chanelId,
                    text: message,
                    parse_mode: "HTML",
                }
            );

            setModalMessage("Buyurtma yuborildi ✅");
            setIsModalOpen(true);
            if (formRef.current) formRef.current.reset();
            setTel("+998 ");
        } catch (error) {
            console.error("Xatolik:", error);
            setModalMessage("Xatolik yuz berdi ❌");
            setIsModalOpen(true);
        }
    };

    const [name, setName] = useState("");

    <CustomModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
    />;

    const [isLoading] = useState(false);

    return (
        <div className="bg-gradient-to-b from-[#00cc96] to-[#152529] w-full h-[100vh]">
            <div>
                <button
                    style={{
                        boxShadow: "0 4px 15px rgba(255, 255, 255, 0.4)",
                    }}
                    onClick={() => navigate("/")}
                    className=" bg-[#152529] absolute top-5 left-5 text-white font-semibold px-6 md:px-10 py-4 rounded-[20px] hover:shadow-lg transition-all duration-300"
                >
                    <ArrowLeftOutlined /> Orqaga
                </button>
            </div>
            <div className="pt-[150px] flex flex-col justify-center ">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-[20px] mt-[10px] text-center sm:text-[40px] font-bold px-[50px] sm:px-[400px]">
                        BATAFSIL MA'LUMOT UCHUN ISMINGIZ VA RAQAMINGIZNI
                        QOLDIRING!
                    </h1>
                    <p>Biz sizga tez orada bog'lanamiz!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4 sm:mt-0 w-[300px] sm:w-[560px] mx-auto flex flex-col gap-4">
                        <div className=" mt-2 flex flex-col items-start">
                            <p className="text-[15px] sm:text-[20px] text-[#152529] sm:mb-2 ">
                                Ismingiz:
                            </p>
                            <Input
                                placeholder="Ismingizni kiriting"
                                size="large"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-[15px] sm:text-[20px] text-[#152529] sm:mb-2 ">
                                Telefon Raqamingiz:
                            </p>
                            <Input
                                size="large"
                                name="tel-nomer"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#ff7300] text-white text-[20px] rounded-md h-12 w-[300px] sm:w-[560px]"
                            disabled={isLoading}
                        >
                            {isLoading
                                ? "Yuborilmoqda..."
                                : "Ro'yxatdan o'tish"}
                        </button>
                    </div>
                </form>

                <CustomModal
                    message={modalMessage}
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
}

export default OrderPage;
