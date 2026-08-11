import Button from "../components/Button";

const CTA = () => {
  return (
    <section className=" w-full px-4  md:px-40 py-5">
      <div className=" bg-green-800 rounded-2xl py-7 px-3 text-white text-center">
        <div>
          <h2 className=" font-bold text-2xl">
            Your flock deserves better records.
          </h2>
          <p className=" text-gray-300">
            Start managing your flock with clearer records, better financial
            visibility, and smarter decisions.
          </p>
        </div>

        <div className=" flex flex-col md:flex-row justify-center gap-4 mt-4 ">
          <Button className=" bg-orange-400 text-black w-full md:w-2xs">
            Start Using PoultryWise
          </Button>

          <Button className=" bg-green-800 border border-gray-200 w-full md:w-2xs">
            Log In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
