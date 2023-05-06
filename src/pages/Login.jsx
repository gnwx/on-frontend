import LoginForm from "../components/LoginForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <>
      <LoginForm />

      {<div>user:{user} </div>}
    </>
  );
};

export default Login;
