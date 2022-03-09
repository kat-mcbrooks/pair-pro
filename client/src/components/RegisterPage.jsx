import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { registerCall } from "../apiCalls";
import Languages from './Languages';
import Level from './Level';

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
    github: "",
  });

  const { name, email, password, password2, languages, bio, github } = formData;

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
        github,
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
  const [githubValue] = useState();
  

  return (
    <>
      <div className="sml-banner-image">
        <div className="white-bg dark-teal-text full-width">
          <h1 className="purple-text" data-testid="register text">
            Sign Up Here
          </h1>
          <h3 className="dark-teal-text courier" data-testid="register phrase">
            You'll be Pair Programming in no time!
          </h3>
        </div>
      </div>

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
          <div data-testid="github input" className="form-group">
            <input
              type="text"
              className="form-control"
              id="github"
              name="github"
              value={githubValue}
              placeholder="Add GitHub account eg. github.com/pair-pro"
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
      <Languages />
      <Level />

  
    </>
  );
};

export default Register;
