export default function SignInPage() {
  return (
    <main className="auth-container">
      <div className="auth-card">
        <h1>Xush kelibsiz</h1>
        <p className="auth-card__subtitle">
          Profilingizga kirib, saqlangan reytinglarni boshqaring
        </p>

        <form className="auth-form">
          <div className="auth-field">
            <label>Elektron pochta</label>
            <input type="email" placeholder="name@company.com" required />
          </div>
          <div className="auth-field">
            <label>Parol</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-submit">
            Kirish
          </button>
        </form>

        <p className="auth-footer">
          Hisobingiz yo‘qmi? <a href="/signup">Ro‘yxatdan o‘tish</a>
        </p>
      </div>
    </main>
  );
}
