import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/LoadingOverlay";
import type { SubmitEvent } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginData = {
    email: formData.email,
    password: formData.password,
  };

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // Controls the loading popup
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");
    // Start loading
    setIsLoading(true);

    try {
      const response = await loginUser(loginData);

      response.token;

      localStorage.setItem("token", response.token);

      setMessage(response.message);

      setFormData({
        email: "",
        password: "",
      });

      navigate("/setupflock");
    } catch (error: any) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      // Stop loading whether request succeeds or fails
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay message="login you in" />}

      <section className=" w-full px-20 md:px-40 py-16">
        <div className=" text-center">
          <h1 className=" font-bold text-2xl mb-6">PoultryWise</h1>

          <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
            <h2 className=" font-semibold">Welcome back</h2>
            <p>Log in to your PoultryWise account.</p>

            {message && <p className=" text-green-600">{message}</p>}

            {error && <p className=" text-red-500">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-3">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  passwordToggle
                  value={formData.password}
                  onChange={handleChange}
                />

                <a
                  href=""
                  className=" underline text-green-700 text-right text-xs"
                >
                  Forgot Password?
                </a>
              </div>

              <Button type="submit" className=" text-white bg-green-800 mt-3">
                Login
              </Button>
            </form>

            <p>Don't have an account?</p>
            <a href="" className=" text-green-800">
              Create account
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
