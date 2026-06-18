import { useState } from 'react';
import { ContentPanel } from './components/ContentPanel';
import { StylePanel } from './components/StylePanel';
import { PreviewPanel } from './components/PreviewPanel';
import type { ContentState, StyleState } from './types';

const tabs = ['Content', 'Styling'] as const;
type Tab = (typeof tabs)[number];

const initialContent: ContentState = {
  title: 'How was your experience with AppVersal?',
  subtitle: 'Tell us what worked and what we can improve.',
  ratingType: 'stars',
  rating: 4,
  options: ['Fast support', 'Easy interface', 'Helpful content'],
  allowComments: true,
  submitButtonText: 'Send Feedback',
  thankYouTitle: 'Thank you!',
  thankYouSubtitle: 'Your opinion helps us grow.',
  thankYouButtonText: 'Close',
  mediaUrl: '',
};

const initialStyle: StyleState = {
  backgroundColor: '#ffffff',
  titleColor: '#1d2939',
  subtitleColor: '#475569',
  buttonColor: '#2563eb',
  buttonTextColor: '#ffffff',
  fontSize: 16,
  fontWeight: 600,
  borderRadius: 18,
  buttonWidth: 240,
  buttonHeight: 48,
  selectedColor: '#f59e0b',
  unselectedColor: '#cbd5e1',
};

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Content');
  const [content, setContent] = useState<ContentState>(initialContent);
  const [style, setStyle] = useState<StyleState>(initialStyle);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <span className="brand">AppVersal</span>
          <p>CSAT Campaign Builder — live preview updates instantly from Content and Styling.</p>
        </div>
      </header>

      <main className="layout-grid">
        <section className="left-pane">
          <div className="tab-bar">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Content' ? (
            <ContentPanel content={content} onChange={setContent} />
          ) : (
            <StylePanel style={style} onChange={setStyle} />
          )}
        </section>

        <aside className="preview-wrapper">
          <PreviewPanel content={content} style={style} />
        </aside>
      </main>
    </div>
  );
}

export default App;
