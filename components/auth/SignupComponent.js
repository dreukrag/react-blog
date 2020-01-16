const SignupComponent = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitting');
  };

  const handleChange = e => {
    console.log(e.target.value);
  };
  const singupForm = () => (
    <form onSubmit={handleSubmit}>
        <input
        name='name'
        type='text'
        placeholder='Type your name'
        onChange={handleChange}
      />
      <input
        name='email'
        type='text'
        placeholder='Type your email'
        onChange={handleChange}
      />
      <input
        name='password'
        type='password'
        placeholder='Type your email'
        onChange={handleChange}
      />
    </form>
  );
  return singupForm();
};

export default SignupComponent;
