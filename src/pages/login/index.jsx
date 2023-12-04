import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside className="">
      <div className="sidebar md:flex">
        <div className={`hidden md:inline-block flex-1 bg-no-repeat bg-cover bg-[url('src/assets/gambar.png')]`}>

        </div>
        <div className="h-screen flex-1 flex flex-col justify-center bg-white">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    </aside>
  );
};

export default Login;