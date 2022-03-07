import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { registerCall } from "../apiCalls";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    languages: "",
    bio: "",
  });

  const { name, email, password, password2, languages, bio } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        languages,
        bio,
      };
      registerCall(userData, dispatch); //calls api in separate file
    }
  };

  const [nameValue] = useState();
  const [emailValue] = useState();
  const [passwordValue] = useState();
  const [confirmpasswordValue] = useState();
  const [languagesValue] = useState();
  const [bioValue] = useState();

  return (
    <>
      <section className="heading">
        <h1 data-testid="register text">
          <FaUser />
          Register
        </h1>
        <p data-testid="register phrase">Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div data-testid="name input" className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={nameValue}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div data-testid="email input" className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={emailValue}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div data-testid="password input" className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={passwordValue}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div data-testid="confirm password input" className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={confirmpasswordValue}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div data-testid="languages input" className="form-group">
            <input
              type="text"
              className="form-control"
              id="languages"
              name="languages"
              value={languagesValue}
              placeholder="What languages do you use or are learning?"
              onChange={onChange}
            />
          </div>
          <div data-testid="bio input" className="form-group">
            <input
              type="text"
              className="form-control"
              id="bio"
              name="bio"
              value={bioValue}
              placeholder="Tell everyone a bit about yourself"
              onChange={onChange}
            />
          </div>
          <div data-testid="add-btn" className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
