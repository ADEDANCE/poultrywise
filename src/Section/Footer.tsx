function Footer() {
  return (
    <footer className="bg-green-800 px-6 py-10">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="flex flex-col">
          <h4 className="font-bold text-white">PoultryWise</h4>

          <p className="max-w-xs text-gray-300">
            Manage Your Flock. Understand Your Money. Grow Smarter.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          {/* Navigation */}
          <div className="text-gray-300">
            <h4 className="font-bold text-white">Navigation</h4>

            <ul className="mt-3 space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <a href="/#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="text-gray-300">
            <h4 className="font-bold text-white">Product</h4>

            <ul className="mt-3 space-y-2">
              <li>Flock Management</li>
              <li>Daily Records</li>
              <li>Financial Analytics</li>
              <li>Flock History</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
