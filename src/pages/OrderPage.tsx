import { Order } from "containers";

export const OrderPage = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center bg-[--color-background] p-10">
            <div className="relative w-[500px] p-1  text-black shadow flex justify-center items-center

            before:h-[100.5%] before:w-[100.5%] before:absolute before:rounded-[30px]
            before:bg-gradient-to-b before:from-[#194189] before:via-[#3b4980] before:via-[25%] before:to-[#8738a7]
            
            after:h-[104%] after:w-[102%] after:absolute after:bg-gradient-to-b after:from-[#194189] after:via-[#3b4980] after:via-[25%] after:to-[#8738a7] after:blur-[20px] "
            
            
            >
                <Order />
            </div>
        </div>
    );
};

// bg-[linear-gradient(#194189,#3b4980 25%,#8738a7)]
