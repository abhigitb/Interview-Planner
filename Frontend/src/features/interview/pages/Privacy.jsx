import "../style/legal.scss"

function Privacy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: September 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how this application collects, uses,
            and protects information provided by users while using the
            interview preparation service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>When you use the application, we may collect:</p>
          <ul>
            <li>Your name and account information.</li>
            <li>Your email address and authentication information.</li>
            <li>Your uploaded resume.</li>
            <li>Job descriptions and self-descriptions submitted by you.</li>
            <li>Interview reports and preparation information generated for you.</li>
          </ul>
        </section>

        <section>
          <h2>3. How Your Information Is Used</h2>
          <p>
            The information you provide is used to provide and improve the
            application's interview preparation features. Resume and job
            description information may be processed to generate interview
            questions, skill-gap analysis, preparation plans, and other
            personalized results.
          </p>
        </section>

        <section>
          <h2>4. AI Processing</h2>
          <p>
            This application uses Google's Gemini API to process information
            submitted for AI-powered interview analysis and content generation.
            Information required to generate these results may therefore be
            transmitted to the relevant third-party AI service.
          </p>
        </section>

        <section>
          <h2>5. Data Storage</h2>
          <p>
            Account information and interview-related information may be stored
            in the application's database so that users can access their
            interview reports and related features.
          </p>
        </section>

        <section>
          <h2>6. Authentication and Cookies</h2>
          <p>
            The application uses authentication cookies to maintain your
            signed-in session. These cookies are used for authentication and
            access control.
          </p>
        </section>

        <section>
          <h2>7. Data Security</h2>
          <p>
            Reasonable technical measures are used to protect information
            handled by the application. However, no internet-based service can
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>8. Data Retention and Deletion</h2>
          <p>
            Information may be retained for as long as necessary to provide the
            application's features and maintain your account and interview
            history. If you would like information associated with your account
            to be deleted, you may contact the developer.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Services</h2>
          <p>
            The application may rely on third-party services for functionality
            such as AI processing, database hosting, authentication-related
            infrastructure, and application hosting. Their own privacy policies
            and terms may also apply.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Any changes
            will be reflected on this page.
          </p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>
            For questions or concerns regarding privacy, please contact the
            developer through the Help link provided in the application.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Privacy