const HowItWork = () => {
  return (
    <section className=" w-full px-6 py-5">
      <div className=" mx-auto text-center">
        <h4 className=" text-green-800">How IT WORKS</h4>

        <h2 className=" font-bold text-4xl text-black mb-6 mt-3">
          Three simple steps
        </h2>
        <div className="text-black flex flex-col  md:flex-row justify-between items-center text-center gap-4">
          <div className=" flex flex-col items-center w-2xs md:w-2xl ">
            <div className=" rounded-full bg-green-700 text-white w-14 h-14 py-2 px-2 flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h4 className=" font-semibold">Start Your Flock</h4>
            <p className=" text-gray-600">
              Enter flock information when the birds arrive. PoultryWise
              automatically sets the lifecycle stage.
            </p>
          </div>
          <div className=" flex flex-col items-center w-2xs md:w-2xl ">
            <div className=" rounded-full bg-green-700 text-white w-14 h-14 py-2 px-2 flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h4 className=" font-semibold">Record Daily Activity</h4>
            <p className=" text-gray-600">
              Add expenses, egg sales, mortality, and flock notes quickly from
              your phone — right from the farm.
            </p>
          </div>
          <div className=" flex flex-col items-center w-2xs md:w-2xl">
            <div className=" rounded-full bg-green-700 text-white w-14 h-14 py-2 px-2 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h4 className=" font-semibold">Understand Your Performance</h4>
            <p className=" text-gray-600">
              PoultryWise turns your records into meaningful flock and financial
              insights automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
