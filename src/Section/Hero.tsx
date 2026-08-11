import Button from "../components/Button";

function Hero() {
  return (
    <section
      className=" relative min-h-[600px] bg-cover bg-center w-full px-6 py-4"
      style={{
        backgroundImage: "url('src/assets/Images/Hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50">
        {/* content */}
        <div className="relative z-10 flex min-h-[600px] items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl text-white">
              <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Manage Your Flock.{" "}
                <span className=" text-green-600">Understand Your Money.</span>{" "}
                Grow Smarter.
              </h2>

              <p>
                PoultryWise helps layer poultry farmers track their flock,
                expenses, revenue, profitability, and performance from day-old
                chicks to the end of the flock lifecycle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className=" bg-green-800 text-white rounded-2xl">
                  {" "}
                  Get Started
                </Button>

                <Button className=" bg-white text-black rounded-2xl shadow">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
