'use client';

import React, { useState } from 'react';

interface TranscriptSegment {
  speaker: string;
  time: string;
  text: string;
  color: string;
}

const SAMPLE_TRANSCRIPT: TranscriptSegment[] = [
  {
    speaker: 'Alex (Product Lead)',
    time: '04:12',
    text: 'Okay team, for the Q4 release we must ensure that all 13 desktop softwares support zero-cloud offline license activation.',
    color: '#38bdf8'
  },
  {
    speaker: 'Priya (Core Eng)',
    time: '04:35',
    text: 'Understood. I will implement Ed25519 signature checks in the Windows installer payloads so they verify without calling back home.',
    color: '#34d399'
  },
  {
    speaker: 'David (Finance & CA)',
    time: '05:02',
    text: 'Make sure the GST Rule 46 invoice generator splits IGST vs CGST/SGST based on the customer state code. I need the GSTR-1 CSV ledger exported by the 5th.',
    color: '#f59e0b'
  },
  {
    speaker: 'Alex (Product Lead)',
    time: '05:28',
    text: 'Great. Priya owns the installer verification by Friday, David coordinates CA ledger validation next Tuesday.',
    color: '#38bdf8'
  }
];

export default function MeetingMomExtractorDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const momText = `### Executive Meeting Summary (MOM)
**Date:** 18-Oct-2026 • **Call Duration:** 34 mins • **Platform:** Google Meet (Local WASAPI Loopback)

**Key Decisions:**
• Mandated zero-cloud offline Ed25519 license activation across all 13 desktop releases.
• Standardized GST Rule 46 automated invoice generator with state-based tax splits.

**Assigned Action Items:**
- [ ] **Priya:** Implement Ed25519 signature verification in Windows installer payloads (Deadline: Friday).
- [ ] **David:** Validate GSTR-1 CSV ledger export format with external CA (Deadline: Next Tuesday).
- [ ] **Alex:** Review public repository documentation and installer release hashes.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(momText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="interactive-demo" id="demo">
      <div className="demo-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="demo-dots">
            <span className="demo-dot dot-red"></span>
            <span className="demo-dot dot-yellow"></span>
            <span className="demo-dot dot-green"></span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Meetnote Bot-Free Local Meeting Minutes &amp; Diarization Studio
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.2rem 0.5rem',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.2)',
            color: '#10b981',
            fontWeight: 700
          }}>
            🔴 WASAPI LOOPBACK ACTIVE (NO BOTS)
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: '440px' }}>
        {/* Live Audio Transcript */}
        <div style={{ padding: '1.75rem', borderRight: '1px solid var(--border-color)', background: 'rgba(18, 21, 38, 0.4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)' }}>
              Live Whisper Diarization
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                padding: '0.2rem 0.6rem',
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              {isPlaying ? '⏸ Pause Stream' : '▶ Resume Stream'}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {SAMPLE_TRANSCRIPT.map((seg, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '0.85rem 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: seg.color }}>
                    {seg.speaker}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {seg.time}
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  {seg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Extracted Minutes & Action Items */}
        <div style={{ padding: '1.75rem', background: '#0a0d18', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>
                Extracted Action Items &amp; MOM
              </span>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                AUTO-SYNTHESIZED
              </span>
            </div>

            <pre style={{
              background: 'var(--bg-primary)',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              border: '1px solid var(--border-color)',
              color: '#f8fafc',
              fontSize: '0.8rem',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
              fontFamily: 'var(--font-mono)',
              minHeight: '260px'
            }}>
              {momText}
            </pre>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button onClick={handleCopy} className="btn btn-primary" style={{ width: '100%' }}>
              {copied ? '✓ Copied Minutes to Clipboard!' : '📋 Copy MOM & Action Items'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
