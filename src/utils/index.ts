import { ChatDataT, ChatGrouppedT } from "@/types";
import moment from "moment";

export const convertToChatGroup = (chats: ChatDataT[]):ChatGrouppedT[] => {
  const datas:ChatGrouppedT[] = [];

  chats.forEach((chat, index) => {
    const dataIndex = datas.length ? datas.length - 1 : 0
    if (index && datas[dataIndex].isBot === chat.isBot) {
      datas[dataIndex].messages.push(chat);
    } else {
      datas.push({
        isBot: chat.isBot,
        name: chat.name,
        messages: [chat]
      })
    }
  })

  return datas;
}

export const greetings = ():string => {
  const datas = [
    {start:0, end: 4, message: "Good night"}, 
    {start:5, end: 11, message: "Good morning"},
    {start:12, end: 17, message: "Good afternoon"},
    {start:18, end: 24, message: "Good night"}
  ];
  const hr = moment().hour();
  let message = "";

  datas.forEach((data) => {
    if(hr >= data.start && hr <= data.end){
      message = data.message
    }

  })
  return message;
}