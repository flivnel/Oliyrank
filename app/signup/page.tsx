export default function SignUpPage() {
    return (
      <main className="auth">
        <div className="auth__card">
          <h1>Ro‘yxatdan o‘tish</h1>
          <p>
            Shaxsiy profil yarating va sizga mos universitet va o‘quv markazlarini saqlab boring.
          </p>
  
          <form className="auth__form">
            <div className="field">
              <label>Ism</label>
              <input type="text" placeholder="Ismingiz" required />
            </div>
            <div className="field">
              <label>Elektron pochta</label>
              <input type="email" placeholder="email@example.com" required />
            </div>
            <div className="field">
              <label>Parol</label>
              <input type="password" placeholder="Kamida 8 ta belgi" required />
            </div>
            <button type="submit" className="btn btn--primary">
              Ro‘yxatdan o‘tish
            </button>
          </form>
  
          <p className="auth__hint">
            Allaqachon hisobingiz bormi? <a href="/signin">Kirish</a>
          </p>
        </div>
      </main>
    );
  }
  