import { ChatDataT, ChatGrouppedT } from "@/types";

export const dummyChatGroupInit:ChatGrouppedT[] = [
  {
    isBot: true,
    name: "Work Buddy",
    messages: [{
      isBot: true,
      name: "Work Buddy",
      message: "Hello, I'm your work-buddy. I will listen to your story and give you advice when you need"
    },{
      isBot: true,
      name: "Work Buddy",
      message: "But, firstly I need to know more about you. Please fill the data form below"
    }]
  }
];

export const dummyChatGroupAssement:ChatGrouppedT[] = [
  {
    isBot: true,
    name: "Work Buddy",
    messages: [{
      isBot: true,
      name: "Work Buddy",
      message: "Okay noted with thanks."
    },{
      isBot: true,
      name: "Work Buddy",
      message: "Also, I need to know about your personality so I could give you the personalized recomendation that fit your profile"
    },{
      isBot: true,
      name: "Work Buddy",
      message: <div>Please take this short assesment: <a href="https://www.talentlytica.com/top" target="_blank">Talentlytica Assesment</a></div>
    }]
  }
];

export const dummyChatGroupAgreement:ChatGrouppedT[] = [
  {
    isBot: true,
    name: "Work Buddy",
    messages: [{
      isBot: true,
      name: "Work Buddy",
      message: "Great, now I know you better!"
    },{
      isBot: true,
      name: "Work Buddy",
      message: "Feelfree to share story about your workday or ask for advice by chatting here"
    }]
  }
];

export const dummyChatGroupInteraction:ChatDataT[] = [
  {
    isBot: true,
    name: "Work Buddy",
    message: "I'm sorry to hear that. Would you like to share what happened today?",
    state: "understanding",
    order: 1
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "I understand. were you blammed solely for being late, or was there something else?",
    state: "understanding",
    order: 2
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "You mentioned your manager. Could you tell me his name? That yaw, I can remember and recognize him in the future",
    state: "recognizing",
    order: 3
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "Okay, so Freddy Salosa is your manager, and he was upset with you this morning.",
    state: "recognizing",
    order: 4
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "What did he say to you when he was mad?",
    state: "recognizing",
    order: 4
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "I think the first thing you shound do is apologize. Then, you can rebuild his trust by showing your comitment to being on time for all future meetings",
    state: "advice",
    order: 5
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "To support that, I can set an alarm and reminder for you every workday if you'd like?",
    state: "advice",
    order: 5
  }, {
    isBot: true,
    name: "Work Buddy",
    message: "Yes sure.",
    state: "advice",
    order: 6
  }
];

export const templateIntake = [
  "I feel sad today, buddy",
  "I was late for the morning meeting by 15 minutes, and my manager blamed me",
  "Yes, I was late, but he was upset because I wasn't well-prepared for the presentation.",
  "His name is Fred Salosa, but I also call him Freddy",
  "He called me a rebel and a useless person. That made me really sad. I've never heard him speak like that to anyone, even when someone else was late. What can I do tomorrow to improve my relationship with him?",
  "Yes, please set an alarm for 8:00 AM every workday.  Also, can you suggest the best way to apologize?"
]