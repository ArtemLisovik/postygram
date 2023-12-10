import axios from "axios";

interface IData {
    name: string;
    email: string;
    number: string;
    text?: string;
}

export const sendMessageTelegram = async (message: any) => {
    const TOKEN = "5565595935:AAFd9xVdnBHYxoQ3xS8XGOKAW_ECw2e036U";
    const CHAT_ID = "-627104078";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    await axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
    });
};
