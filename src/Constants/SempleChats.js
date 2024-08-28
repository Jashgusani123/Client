import moment from "moment"

export const SempleChats = [{
    avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
    name: "JashGusani",
    _id: "1",
    groupChat: false,
    members: ["1", "2"]
},
{
    avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0K8CiKG5CuQyWV9L2YOepIHMnzTxwYNFXTw&s"],
    name: "Its Raj",
    _id: "2",
    groupChat: false,
    members: ["1", "2"]
},

]

export const sempleUser = [
    {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
        name: "JashGusani",
        _id: "1",
    }
    ,
    {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0K8CiKG5CuQyWV9L2YOepIHMnzTxwYNFXTw&s"],
        name: "Its Raj",
        _id: "2",
    }
]

export const sempleNotification = [
    {
        sender: {
            avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
            name: "JashGusani",
        },
        _id: "1",
    }
    ,
    {
        sender: {
            avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0K8CiKG5CuQyWV9L2YOepIHMnzTxwYNFXTw&s"],
            name: "Its Raj",
        },
        _id: "2",
    }
]


export const sempleMassage = [
    {
        attachments: [

        ],
        content: "O Massage Aagya hai",
        _id: "jfkdlsjkfs",
        sender: {
            _id: "user._id",
            name: "Raj",
        },
        chat: "chatId",
        createdAt: "2024-02-01T10:41:30.630Z"
    },
    {
        attachments: [
            {
                public_id: "fdsfds2",
                url: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png"
            },
        ],
        _id: "jfkdlsjkfs78",
        sender: {
            _id: "fds",
            name: "Jash",
        },
        chat: "chatId2",
        createdAt: "2024-02-01T10:41:30.630Z"
    },
]


export const DashBoardData = {
    users: [
        {
            avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
            name: "JashGusani",
            _id: "1",
            friends: 20,
            groups: 13,
            joind: moment("2024-01-08T18:30:00.000Z").fromNow()
        }
        , {
            avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
            name: "JayAkhania",
            _id: "2",
            friends: 40,
            groups: 35,
            joind: moment("2023-11-08T18:30:00.000Z").fromNow()
        }
    ],
    chats: [{
        name: "Colleg Groups",
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
        _id: "1",
        gorupChat: false,
        members: [{ _id: "1", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s" }, { _id: "2", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s" }],
        totalMembers: 2,
        totalMessages: 20,
        creator: {
            name: "Jash Gusani",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"
        },
    },
    {
        name: "School Groups",
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"],
        _id: "2",
        gorupChat: false,
        members: [{ _id: "1", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s" }, { _id: "2", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s" }, { _id: "3", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s" }],
        totalMembers: 3,
        totalMessages: 40,
        creator: {
            name: "Jash Gusani",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s"
        },
    },
    ],
    messages: [
        {
            attachments: [],
            content: "Hello , How are You?",
            _id: "fdsfe",
            sender: {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s",
                name: "Chaman",
            },
             chat: "chatId",
             groupsChat:false,
             createdAt:"2023-12-11T11:41:33,630Z"
        },
        {
            attachments: [
                {
                    public_id:"aefdse 2",
                    url:"https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
                },
            ],
            content: "",
            _id: "fsfese",
            sender: {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mMl3CT2uoskVlH-fsZtwb7WejBDMVtlPrw&s",
                name: "Raj",
            },
             chat: "chatId",
             groupsChat:true,
             createdAt:"2023-12-11T11:41:33,630Z"
        },
    ]
}