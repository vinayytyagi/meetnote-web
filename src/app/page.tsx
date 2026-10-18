import MeetingMomExtractorDemo from '@/components/MeetingMomExtractorDemo';

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">
          <span>🎙️</span>
          <span>100% Offline • Windows 10 & 11 • Bot-Free Audio Loopback</span>
        </div>
        <h1 className="hero-title">
          Bot-Free Local Meeting Minutes &amp; Whisper Transcription.
        </h1>
        <p className="hero-subtitle">
          Never suffer the embarrassment of having an invasive AI bot enter your confidential client calls. 
          Meetnote records system sound and microphone streams directly via Windows WASAPI loopback, 
          transcribes audio offline using fine-tuned local Whisper models, and extracts actionable minutes with zero cloud transmission.
        </p>
        <div className="hero-cta">
          <a href="https://valentir.org/releases/meetnote/Meetnote-Setup-1.0.0.exe" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }}>
            Download Meetnote v1.0.0
          </a>
          <a href="#no-bots" className="btn btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }}>
            Why No Bots?
          </a>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Installer: <code>Meetnote-Setup-1.0.0.exe</code> • SHA256 Verified: <code>40D48039...D743</code>
        </div>
      </section>

      {/* Interactive Hero Study */}
      <MeetingMomExtractorDemo />

      {/* Why No Bots */}
      <section id="no-bots" style={{ margin: '6rem 0', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '1rem', padding: '3.5rem 2.5rem' }}>
        <h2 className="section-title">The Death of Cloud Meeting Bots</h2>
        <p className="section-desc">
          Third-party meeting bots show up in attendee lists, freak out clients, require awkward administrative calendar permissions, and send unencrypted voice recordings to foreign cloud servers.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>❌ Cloud Notetaker Bots</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Shows up as an uninvited &ldquo;Otter / Fireflies Bot&rdquo; participant. Requires host approval. Records without explicit local permission. Stores audio on remote servers indefinitely.
            </p>
          </div>
          <div>
            <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>✓ Meetnote Direct Loopback</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Zero participants added. Taps directly into Windows WASAPI speaker loopback and your mic. Operates silently on your workstation with 100% offline Whisper transcription.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ margin: '6rem 0' }}>
        <h2 className="section-title">Engineered for Executive &amp; Engineering Confidentiality</h2>
        <p className="section-desc">
          Every conversation regarding product architecture, financial balances, and proprietary agreements stays strictly on your machine.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3 className="feature-title">Native Windows WASAPI Loopback</h3>
            <p className="feature-text">
              Captures crystal-clear digital audio directly from any conference application — Zoom, Microsoft Teams, Google Meet, Slack Huddles, or Discord — with dual-channel mic and speaker separation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">Local Whisper.cpp Neural Engine</h3>
            <p className="feature-text">
              GPU-accelerated offline speech-to-text powered by DirectML. Transcribes over 95 languages accurately without sending a single byte of audio over the network.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Speaker Diarization</h3>
            <p className="feature-text">
              Distinguishes between different meeting attendees automatically using voice pitch and timing markers, attributing decisions and questions to specific individuals.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3 className="feature-title">Instant MOM &amp; Action Extraction</h3>
            <p className="feature-text">
              Generates structured Minutes of Meeting (MOM), highlighted decisions, assigned tasks, and follow-up deadlines ready to paste into Slack, Notion, or Jira.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Encrypted Local SQLite Archive</h3>
            <p className="feature-text">
              Audio recordings and transcripts are saved with optional AES-256 encryption. Search past meeting topics with sub-millisecond full-text search.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Global Quick Record Hotkey</h3>
            <p className="feature-text">
              Start and stop recording spontaneously with Win+Alt+R. A discreet tray indicator pulses to show recording status without overlaying call windows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
