import type { ContentState, StyleState } from '../types';

interface PreviewPanelProps {
  content: ContentState;
  style: StyleState;
}

const renderRating = (content: ContentState, style: StyleState) => {
  if (content.ratingType === 'numbers') {
    return (
      <div className="numbers-row">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((value) => (
          <span
            key={value}
            className={`rating-pill ${content.rating === value ? 'active' : ''}`}
            style={{
              backgroundColor: content.rating === value ? style.selectedColor : style.unselectedColor,
              color: content.rating === value ? '#fff' : '#111827',
            }}
          >
            {value}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="stars-row">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((rating) => (
        <span
          key={rating}
          className={content.rating >= rating ? 'star active' : 'star'}
          style={{ color: content.rating >= rating ? style.selectedColor : style.unselectedColor }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export function PreviewPanel({ content, style }: PreviewPanelProps) {
  return (
    <div className="preview-card" style={{ background: '#f8fafc' }}>
      <div className="preview-header">
        <span>Live Mobile Preview</span>
      </div>
      <div className="mobile-frame">
        <div
          className="mobile-card"
          style={{
            backgroundColor: style.backgroundColor,
            color: style.titleColor,
            borderRadius: `${style.borderRadius + 12}px`,
          }}
        >
          <div className="mobile-content" style={{ fontSize: `${style.fontSize}px`, fontWeight: style.fontWeight }}>
            <h2 style={{ color: style.titleColor }}>{content.title}</h2>
            <p style={{ color: style.subtitleColor }}>{content.subtitle}</p>

            <div className="section-block">
              <span className="section-label">Rating</span>
              {renderRating(content, style)}
            </div>

            <div className="section-block">
              <span className="section-label">What did you like?</span>
              <div className="options-list">
                {content.options.map((option, index) => (
                  <div key={index} className="pill" style={{ borderRadius: `${style.borderRadius}px` }}>
                    {option || `Option ${index + 1}`}
                  </div>
                ))}
              </div>
            </div>

            {content.allowComments && (
              <div className="section-block">
                <span className="section-label">Additional comments</span>
                <textarea readOnly placeholder="Write your feedback..." />
              </div>
            )}

            <button
              className="preview-button"
              style={{
                backgroundColor: style.buttonColor,
                color: style.buttonTextColor,
                width: `${style.buttonWidth}px`,
                height: `${style.buttonHeight}px`,
                borderRadius: `${style.borderRadius}px`,
                fontWeight: style.fontWeight,
              }}
            >
              {content.submitButtonText}
            </button>
          </div>
        </div>

        <div className="mobile-card thank-you-card" style={{ borderRadius: `${style.borderRadius + 12}px` }}>
          {content.mediaUrl && <img src={content.mediaUrl} alt="Thank you" className="thank-you-media" />}
          <div className="mobile-content thank-you-content">
            <h2 style={{ color: style.titleColor }}>{content.thankYouTitle}</h2>
            <p style={{ color: style.subtitleColor }}>{content.thankYouSubtitle}</p>
            <button
              className="preview-button"
              style={{
                backgroundColor: style.buttonColor,
                color: style.buttonTextColor,
                width: `${style.buttonWidth}px`,
                height: `${style.buttonHeight}px`,
                borderRadius: `${style.borderRadius}px`,
                fontWeight: style.fontWeight,
              }}
            >
              {content.thankYouButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
