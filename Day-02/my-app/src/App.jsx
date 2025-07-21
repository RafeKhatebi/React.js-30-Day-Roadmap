
function App() {
  const user = "Emily";
  const age = 25;

  return (
    <>
      <h2>Welcome, {user}!</h2>
      <p>Your age doubled is {age * 2}.</p>
      <p>Your age half is {age / 2}.</p>
      <p>Your real age is {age}.</p>
    </>
  );
}

export default App;
