import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Meetnote | Bot-Free Local Meeting Minutes & Whisper Voice Transcription',
  description: 'Windows desktop meeting recorder that joins NO bots to your calls. Meetnote records WASAPI audio loopback from Zoom, Google Meet & Teams locally and transcribes offline with Whisper and auto action item extraction.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <div className="brand-icon">M</div>
              <span>Meetnote</span>
            </Link>
            <nav className="nav-links">
              <Link href="/#features" className="nav-link">Features</Link>
              <Link href="/#demo" className="nav-link">Live Studio</Link>
              <Link href="/#no-bots" className="nav-link">Why No Bots</Link>
              <Link href="/support" className="nav-link">Support</Link>
            </nav>
            <a href="https://valentir.org/releases/meetnote/Meetnote-Setup-1.0.0.exe" className="btn btn-primary">
              Download for Windows
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="brand" style={{ marginBottom: '1rem' }}>
                  <div className="brand-icon">M</div>
                  <span>Meetnote</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
                  Bot-free local meeting minutes, WASAPI audio recording, and offline Whisper voice transcription for Windows.
                </p>
              </div>
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><Link href="/#features">Features</Link></li>
                  <li><Link href="/#demo">Interactive Player</Link></li>
                  <li><a href="https://valentir.org/releases/meetnote/Meetnote-Setup-1.0.0.exe">Download v1.0.0</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Privacy &amp; Terms</h4>
                <ul>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                  <li><Link href="/eula">EULA</Link></li>
                  <li><Link href="/acceptable-use">Acceptable Use</Link></li>
                  <li><Link href="/refunds">Refund Policy</Link></li>
                  <li><Link href="/third-party-notices">Third-Party Notices</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Support</h4>
                <ul>
                  <li><Link href="/support">Audio Setup Guide</Link></li>
                  <li><a href="mailto:support@valentir.org">support@valentir.org</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div>© 2026 Valentir Software Inc. Meetnote is a trademark of Valentir.</div>
              <div>WASAPI Loopback • 100% Offline Whisper • No Cloud Bots</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
