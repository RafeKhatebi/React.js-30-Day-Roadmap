import './App.css'

function App() {

  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h2 className="login-title">ورود به حساب کاربری</h2>
          <div className="form-group">
            <label htmlFor="username">نام کاربری</label>
            <input type="text" id="username" name="username" className="form-control" placeholder="نام کاربری" />
          </div>
          <div className="form-group">
            <label htmlFor="password">رمز عبور</label>
            <input type="password" id="password" name="password" className="form-control" placeholder="رمز عبور" />
          </div>
          <button type="submit" className="login-btn">ورود</button>
        </form>
      </div>
    </>
  )
}

export default App
