import { useState } from "react";

const SignupComponent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "teste",
    email: "teste@gmail.com",
    password: "1234",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting", formValues);
  };

  const resetError = () => {
    setError(false)
    setMessage(false)
  }

  const handleChange = (e) => {
    e.preventDefault();
    const n = e.target.name;
    const v = e.target.value;
    setFormValues((old) => ({ ...old, [n]: v }));
    resetError();
  };

  const singupForm = () => (
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
  );
  return <>{singupForm()}</>;
};

export default SignupComponent;
