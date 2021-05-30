const Card = ({destination, arrival,duration,price,company,note}) => {
    return (
        <div className="flex rounded">
              
            <div className="text-left px-4 py-4 bg-gray-800 w-full justify-end border-t-2 border-gray-900">
                <div to="jobdet" class="flex items-center flex-wrap">
                    <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" />
                    <span class="flex flex-col flex-grow pl-4">
                        <span className="font-bold text-lg text-gray-100 -mt-4">Software developer</span>
                        <span className="text-sm text-gray-500 uppercase font-bold">From: Lomndon sdf</span>
                        <span className="text-sm text-gray-500 uppercase font-bold">To: Lomndon sdf</span>
                    </span>
                </div>
                <div className="flex items-center flex-wrap ">
                    <div to="jobdet" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm">Remote Full Time</div>
                    <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">New </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">6 days</span>
               </div>
            </div>
         </div>
    );
  }
  
  export default Card;
