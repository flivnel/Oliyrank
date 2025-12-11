export default function SignUpPage() {
  return (
    <main className="auth-container">
      <div className="auth-card">
        <h1>Ro‘yxatdan o‘tish</h1>
        <p className="auth-card__subtitle">
          OliyRank platformasida shaxsiy kabinetingizni yarating
        </p>

        <form className="auth-form">
          <div className="auth-field">
            <label>Ism</label>
            <input type="text" placeholder="Ismingiz" required />
          </div>
          <div className="auth-field">
            <label>Elektron pochta</label>
            <input type="email" placeholder="name@company.com" required />
          </div>
          <div className="auth-field">
            <label>Parol</label>
            <input type="password" placeholder="Kamida 8 ta belgi" required />
          </div>
          <button type="submit" className="auth-submit">
            Hisob yaratish
          </button>
        </form>

        <p className="auth-footer">
          Allaqachon hisobingiz bormi? <a href="/signin">Kirish</a>
        </p>
      </div>
    </main>
  );
}
