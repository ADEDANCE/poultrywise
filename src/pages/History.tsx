const History = () => {
  return (
    <section className=" w-full px-10 md:px-40 py-16">
      <div className=" text-center">
        <h1 className=" font-bold text-2xl">Flock history</h1>
        <p>
          Completed flocks are archived here. When your current flock is done,
          it will be added to this list.
        </p>

        <div className=" px-4 py-4 rounded-2xl bg-white border border-gray-300 text-start">
          <h2>Batch B-2023</h2>
          <p>
            Lohmann Brown <span>2022-06-04</span> → <span>2023-11-20 </span> 534
            days{" "}
          </p>

          <div className=" flex justify-between">
            <span className=" block">
              <p className=" text-gray-400">Initial birds</p>
              <p>2,000</p>
            </span>

            <span className=" block">
              <p className=" text-gray-600">Final birds</p>
              <p>1,712</p>
            </span>
          </div>

          <div className=" flex justify-between">
            <span className=" block">
              <p className=" text-gray-400">Eggs produced</p>
              <p>486,500</p>
            </span>

            <span className=" block">
              <p className=" text-gray-400">Total mortality</p>
              <p>288</p>
            </span>
          </div>

          <div className=" px-4 py-4 rounded-2xl bg-gray-200 border border-gray-500 mt-6">
            <h2>Expenses breakdown</h2>

            <div className=" flex justify-between">
              <p>Day-old chicks</p>
              <p>₦900,000</p>
            </div>
            <div className=" flex justify-between">
              <p>Feed</p>
              <p>₦5,600,000</p>
            </div>
            <div className=" flex justify-between">
              <p>Vaccination</p>
              <p>₦280,000</p>
            </div>
            <div className=" flex justify-between">
              <p>Medication</p>
              <p>₦150,000</p>
            </div>
            <div className=" flex justify-between border-t border-gray-100">
              <p>Total</p>
              <p>₦7,550,000</p>
            </div>
          </div>

          <div className=" px-4 py-4 rounded-2xl bg-gray-200 border border-gray-500 mt-6 flex justify-between">
            <span>
              <p>Total Expenses</p>
              <p>₦8.2M</p>
            </span>
            <span>
              <p>Revenue</p>
              <p>₦6.8M</p>
            </span>
            <span>
              <p>ROI</p>
              ₦1.4M
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
