export default function({review}){


    const colors = [
        'bg-red-600',
        'bg-blue-600',
        'bg-green-600',
        'bg-yellow-600',
        'bg-purple-600',
        'bg-pink-600',
        'bg-indigo-600',
        'bg-gray-600',
    ];
    
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return <div className="w-full md:w-1/3 flex flex-col p-6 shadow-lg rounded border border-[#ededed] bg-[#fefefe] font-sans">
        <div className="flex justify-between flex-wrap">
            <div className="flex items-center gap-x-2">
                <div>
                    {review.profile != null ?
                    
                        
                            <img className="w-7 h-7 rounded-full" src={review.profile} alt="image" />
                        
                    :
                        <div>
                           <div className={`flex justify-center items-center w-7 h-7 rounded-full text-white ${getRandomColor()}`}>
                                {review.name[0]}
                           </div>
                        </div>    
                    }
                </div>
                <div className="flex flex-col"> 
                    <span>
                        {review.name}
                    </span>
                    <span className="text-xs">
                        {review.market}
                    </span>
                </div>
            </div>
            <div className="">
                <span className="text-sm">
                    {review.date}
                </span>
            </div>
        </div>
        <div className="my-3 flex align-center gap-x-3 flex-wrap">
            <img className="w-32" src={review.starImg} alt="" />
            <span>
                {review.star} out of 5.0
            </span>
        </div>
        <div className="font-semibold"> 
            "{review.heading}"
        </div>
        <div className="font-extralight line-clamp-3 mb-3">
            {review.description}
        </div>
        <div className="flex justify-center mt-auto">
            <button className="w-auto text-lg px-16 py-1 rounded-3xl border border-[#5a39a2] text-[#5a39a2] font-bold hover:bg-[#5a39a2] hover:text-white">
                Read more
            </button>
        </div>
    </div>
}