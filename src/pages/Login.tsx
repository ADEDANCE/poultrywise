import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <section className=" w-full px-20 md:px-40 py-16">
      <div className=" text-center">
        <h1 className=" font-bold text-2xl mb-6">PoultryWise</h1>

        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
          <h2 className=" font-semibold">Welcome back</h2>
          <p>Log in to your PoultryWise account.</p>

          <div className=" flex flex-col gap-3">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Your Password"
              passwordToggle
            />

            <a href="" className=" underline text-green-700 text-right text-xs">
              Forgot Password?
            </a>
          </div>

          <Button className=" text-white bg-green-800 mt-3">Login</Button>

          <p>Don't have an account?</p>
          <a href="" className=" text-green-800">
            Create account
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
