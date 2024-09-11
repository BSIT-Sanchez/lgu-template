
const cardArray = [
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },
    {
        title: "The Importance of Birth Certificates",
        description: "Learn why birth certificates are crucial for legal identification.",
        image: "/content1.jpg",
        userPic: "/content2.jpg",
        username: "jhon doe",
        date: "11 Jan 2022",
        time: "5 min"
    },

]

const Content1 = () => {
    return(
        <div className="flex flex-col justify-start items-start gap-10 px-2 md:px-0">
            <div>
               <h1 className="font-[600] text-[25px] md:text-[30px] md:leading-[40px] leading-[32px] md:mt-10 mt-4 md:mb-4 mb-1">Discover Civil Registration <br />Insights</h1>
               <p>Stay informed with our latest articles and resources.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-6 md:-mt-0">
                {
                    cardArray.map((card, index) => (
                        <div key={index} className="cursor-pointer">
                            <img src={card.image} alt="image" className="rounded-sm"/>
                            <h2 className="font-[600]">{card.title}</h2>
                            <p className="text-[13px]">{card.description}</p>

                            <div className="flex justify-start items-start gap-2 mt-4">
                             <img src={card.userPic} alt="user" className="w-5 h-5 rounded-[100%]"/>
                             <div className="">
                                <p className="text-[11px] font-[500]">{card.username}</p>
                                <div className="flex justify-center items-center gap-3">
                                    <p className="text-[10px]">{card.date}</p>
                                    <p className="text-[8px]">{card.time}</p>
                                </div>
                             </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Content1