import LoginForm from "../components/LoginForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const { user } = useAuthContext();
  return (
    <>
      <LoginForm />

      {<div>user:{user} </div>}
    </>
  );
};

export default Login;
