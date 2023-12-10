import { useLocation, useNavigate } from "react-router-dom";
import { OrderProvider } from "../context/OrderContext";
import { FormBuy } from "./Buy/FormBuy";
import { FormSell } from "./Sell/FormSell";

const Order = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (!location.state.send) navigate("/");
    return location.state.send.type === "money" ? <FormSell /> : <FormBuy />;
};

export const OrderForm = () => {
    return (
        <OrderProvider>
            <div className="bg-black/50 text-white z-[1] w-[100%] rounded-[28px] p-10">
                <Order />
            </div>
        </OrderProvider>
    );
};
