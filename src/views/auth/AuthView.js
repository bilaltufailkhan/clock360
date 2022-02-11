import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/actions/authAction";
import { Button } from "reactstrap";
const AuthView = (props) => {
  let dispatch = useDispatch();
  return (
    <>
      <h1>Auth View</h1>
    </>
  );
};

export default AuthView;
