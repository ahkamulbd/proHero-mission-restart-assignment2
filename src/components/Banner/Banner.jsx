// import { useState } from "react";
import ProgressBg from "../../assets/vector1.png";
import ResolvedBg from "../../assets/vector2.png";

function Banner({inProgress, resolved}) {

  // const [inProgress, setInProgress] = useState(0);
  // const [resolved, setResolved] = useState(0);

  return (
    <div className="max-w-7xl mx-auto my-10 grid grid-cols-none md:grid-cols-2 gap-4">

        {/* In Progress */}
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-[#422AD5] h-[300px]"
          style={{ backgroundImage: `url(${ProgressBg})`, backgroundSize: "cover"}}>

            <p className="text-2xl my-3">In-Progress</p>
            <h1 className="text-4xl font-bold">{inProgress}</h1>

        </div>

        {/* Resolved */}
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-green-700 h-[300px]"
          style={{ backgroundImage: `url(${ResolvedBg})`, backgroundSize: "cover"}}>

            <p className="text-2xl my-3">Resolved</p>
            <h1 className="text-4xl font-bold">{resolved}</h1>

        </div>

    </div>

    
  );
}

export default Banner;