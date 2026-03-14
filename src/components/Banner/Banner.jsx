import { useState } from "react";
import ProgressBg from "../../assets/vector1.png";
import ResolvedBg from "../../assets/vector2.png";

function Banner() {

  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  return (
    <div className="max-w-7xl mx-auto my-10 grid grid-cols-none md:grid-cols-2 gap-4">

      {/* In Progress Card */}
      <div
        className="h-24 rounded-lg flex flex-col items-center justify-center text-white bg-cover bg-center bg-[#422AD5] h-[300px]"
        style={{ backgroundImage: `url(${ProgressBg})` }}
      >
        <p className="text-2xl my-3">In-Progress</p>
        <h1 className="text-4xl font-bold">{inProgress}</h1>

        {/* Setting Button Temporarilly  */}
        <button
            onClick={() => setInProgress(inProgress + 1)}
            className="bg-white text-black px-4 py-2 rounded mt-4"
            >
            Add In-Progress
        </button>
      </div>

      {/* Resolved Card */}
      <div
        className="h-24 rounded-lg flex flex-col items-center justify-center text-white bg-cover bg-center bg-green-700 h-[300px]"
        style={{ backgroundImage: `url(${ResolvedBg})` }}
      >
        <p className="text-2xl my-3">Resolved</p>
        <h1 className="text-4xl font-bold">{resolved}</h1>

        {/* Setting Button Temporarilly  */}
        <button
            onClick={() => setResolved(resolved + 1)}
            className="bg-white text-black px-4 py-2 rounded mt-4"
            >
            Resolve Task
        </button>
      </div>

      

        

    </div>

    
  );
}

export default Banner;