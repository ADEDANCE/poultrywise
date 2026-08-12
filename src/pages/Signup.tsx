import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-full px-20 md:px-40 py-16">
      <div className=" text-center">
        <h1 className=" font-bold text-2xl mb-6">PoultryWise</h1>

        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
          <h2 className=" font-semibold">Create your account</h2>
          <p>Start managing your layer flock today.</p>

          <div className=" flex flex-col gap-3">
            <Input
              label="FullName"
              className=""
              placeholder="e.g Ballo Basit"
            />

            <Input label="Email Address" placeholder="you@example.com" />
            <Input
              label="Password"
              type="password"
              placeholder="Create a Strong Password"
              passwordToggle
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Repeat your Password"
              passwordToggle
            />
          </div>
          <p className=" text-xs mt-4">
            By creating an account you agree to our
            <a href=" " className=" underline text-green-700">
              Terms of Service
            </a>{" "}
            and {}
            <a href="" className=" underline text-green-700">
              Privacy Policy
            </a>
          </p>

          <Button
            className=" text-white bg-green-800 mt-3"
            onClick={() => navigate("/setupflock")}
          >
            Create Account
          </Button>

          <p>Already have an account?</p>
          <a href="" className=" text-green-800">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signup;
