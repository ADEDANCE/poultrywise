import { FiX } from "react-icons/fi";

const Problem = () => {
  return (
    <section id="benefits" className=" bg-gray-300 w-full px-10 py-8">
      <div className=" mx-auto text-black items-center text-center  lg:px-32">
        <h3 className=" font-bold">
          Running a poultry farm shouldn't feel like guessing.
        </h3>
        <p className=" lg:px-24">
          Farmers juggle feed costs, medication, vaccination, labour, egg sales,
          and mortality — all at once. When records are scattered, it's
          impossible to know if your flock is actually profitable.
        </p>

        <div className=" flex flex-col md:flex-row gap-6">
          <div className=" mt-8 px-3 py-3 rounded-2xl bg-white border-gray-200 text-start w-full">
            <h5 className=" text-red-300">The Traditional Way</h5>
            <div>
              <ul className="space-y-3 mt-5 font-light">
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 bg-red-100">
                    <FiX size={12} className="text-red-500" />
                  </span>
                  Notebook records
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 bg-red-100">
                    <FiX size={12} className="text-red-500" />
                  </span>
                  Scattered expenses
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 bg-red-100">
                    <FiX size={12} className="text-red-500" />
                  </span>
                  Manual calculations
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 bg-red-100">
                    <FiX size={12} className="text-red-500" />
                  </span>
                  Unclear profit or loss
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 bg-red-100">
                    <FiX size={12} className="text-red-500" />
                  </span>
                  Forgotten vaccinations
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-8 px-3 py-3 rounded-2xl bg-green-800 text-white text-start w-full">
            <h5 className=" text-gray-400">With PoultryWise</h5>
            <div>
              <ul className="space-y-3 mt-5 font-light">
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-500 bg-green-700">
                    <FiX size={12} className="text-white" />
                  </span>
                  Organized daily records
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-500 bg-green-700">
                    <FiX size={12} className="text-white" />
                  </span>
                  Automatic calculations
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-500 bg-green-700">
                    <FiX size={12} className="text-white" />
                  </span>
                  Real financial insight
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-500 bg-green-700">
                    <FiX size={12} className="text-white" />
                  </span>
                  Clear profit and loss view
                </li>
                <li className="flex items-center gap-3 border-b border-gray-300 pb-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-500 bg-green-700">
                    <FiX size={12} className="text-white" />
                  </span>
                  Smart vaccination reminders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
