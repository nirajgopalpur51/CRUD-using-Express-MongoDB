const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let allChats =[
    {
        from : "neha",
        to : "Niraj",
        msg : "send me you phone",
        created_at : new Date()
    },
    {
        from : "Niraj",
        to : "Raj",
        msg : "All the best",
        created_at : new Date()
    },
    {
        from : "Raj",
        to : "priya",
        msg : "work on thenproject",
        created_at : new Date()
    },
];

Chat.insertMany(allChats);