import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please add email");
    } else if (!password) {
      toast.error("Please add password");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="md:mt-0 md:col-span-2 w-full lg:w-1/3 mx-auto  py-20">
        <section className="py-14 text-center text-xl">
          <h1>Login</h1>
          <p>Login to system</p>
        </section>
        <form onSubmit={onSubmit}>
          <div className="shadow-xl rounded-lg sm:overflow-hidden bg-gray-100">
            <div className="px-2 sm:p-4">
              <div className="grid grid-cols-6 gap-5 p-5">
                <div className="col-span-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    className="rounded-lg w-full"
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-6">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    className="rounded-lg w-full"
                    onChange={onChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto float-right py-2 mr-6 m-5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none"
              >
                <span className="transform transition-transform hover:scale-110 duration-500 ease-in-out">
                  Login
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
