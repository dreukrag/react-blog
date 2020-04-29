import { useState } from "react";
import { singup } from "actions/auth";
import { signup } from "../../actions/auth";
const SignupComponent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "teste",
    email: "teste@gmail.com",
    password: "1234",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const resetError = () => {
    setError(false);
    setMessage(false);
  };

  const resetFormValues = () => {
    setFormValues({ name: "", email: "", password: "" });
  };
  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting", formValues);
    setError(false);
    setLoading(true);
    signup(formValues).then((data) => {
      console.log(data)
      if (data.error) {
        setError(data.error);
      } else {
        resetFormValues();
        setMessage(data.message);
        setShowForm(false);
      }

      setLoading(false);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const n = e.target.name;
    const v = e.target.value;
    setFormValues((old) => ({ ...old, [n]: v }));
    resetError();
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : null;
  const showError = () =>
    error ? <div className="danger alert-danger">{error}</div> : null;
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : null;

  const singupForm = () =>
    showForm ? (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            value={name}
            type="text"
            placeholder="Type your name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            value={email}
            type="text"
            placeholder="Type your email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="password"
            value={password}
            type="password"
            placeholder="Type your password"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Singup!
        </button>
      </form>
    ) : null;
  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}
      {singupForm()}
    </>
  );
};

export default SignupComponent;
