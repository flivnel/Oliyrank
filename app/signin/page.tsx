export default function SignInPage() {
    return (
      <main className="auth">
        <div className="auth__card">
          <h1>Kirish</h1>
          <p>
            Profilingizga kirib, saqlangan taqqoslashlar va tanlangan universitetlarni ko‘rishingiz mumkin.
          </p>
  
          <form className="auth__form">
            <div className="field">
              <label>Elektron pochta</label>
              <input type="email" placeholder="email@example.com" required />
            </div>
            <div className="field">
              <label>Parol</label>
              <input type="password" placeholder="********" required />
            </div>
            <button type="submit" className="btn btn--primary">
              Kirish
            </button>
          </form>
  
          <p className="auth__hint">
            Hisobingiz yo‘qmi? <a href="/signup">Ro‘yxatdan o‘tish</a>
          </p>
        </div>
      </main>
    );
  }
  