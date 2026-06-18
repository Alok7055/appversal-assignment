import type { ContentState } from '../types';

interface ContentPanelProps {
  content: ContentState;
  onChange: (value: ContentState) => void;
}

export function ContentPanel({ content, onChange }: ContentPanelProps) {
  const updateField = <K extends keyof ContentState>(key: K, value: ContentState[K]) => {
    onChange({ ...content, [key]: value });
  };

  const updateOption = (index: number, value: string) => {
    const next = [...content.options];
    next[index] = value;
    onChange({ ...content, options: next });
  };

  const removeOption = (index: number) => {
    const next = content.options.filter((_, i) => i !== index);
    onChange({ ...content, options: next });
  };

  const addOption = () => {
    onChange({ ...content, options: [...content.options, 'New option'] });
  };

  return (
    <div className="card">
      <h2>Content Configuration</h2>

      <section className="section-block">
        <h3>Initial feedback</h3>
        <label>
          Title
          <input
            value={content.title}
            onChange={(event) => updateField('title', event.target.value)}
            placeholder="Feedback title"
          />
        </label>
        <label>
          Subtitle
          <input
            value={content.subtitle}
            onChange={(event) => updateField('subtitle', event.target.value)}
            placeholder="Feedback subtitle"
          />
        </label>
      </section>

      <section className="section-block">
        <h3>Feedback page</h3>
        <div className="row">
          <label>
            Rating style
            <select
              value={content.ratingType}
              onChange={(event) => updateField('ratingType', event.target.value as ContentState['ratingType'])}
            >
              <option value="stars">Stars (1–5)</option>
              <option value="numbers">Numbers (1–5)</option>
            </select>
          </label>
          <label>
            Default rating
            <input
              type="number"
              min={1}
              max={5}
              value={content.rating}
              onChange={(event) => updateField('rating', Number(event.target.value))}
            />
          </label>
        </div>

        <div className="options-group">
          <div className="options-header">
            <span>Dynamic options</span>
            <button type="button" className="small-button" onClick={addOption}>
              Add option
            </button>
          </div>
          {content.options.map((option, index) => (
            <div key={index} className="option-row">
              <input
                value={option}
                onChange={(event) => updateOption(index, event.target.value)}
                placeholder="Option text"
              />
              <button type="button" className="small-button secondary" onClick={() => removeOption(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={content.allowComments}
            onChange={(event) => updateField('allowComments', event.target.checked)}
          />
          Additional comment toggle
        </label>

        <label>
          Submit button text
          <input
            value={content.submitButtonText}
            onChange={(event) => updateField('submitButtonText', event.target.value)}
            placeholder="Submit button text"
          />
        </label>
      </section>

      <section className="section-block">
        <h3>Thank-you page</h3>
        <label>
          Media URL (PNG, JPG, GIF, JSON/Lottie)
          <input
            value={content.mediaUrl}
            onChange={(event) => updateField('mediaUrl', event.target.value)}
            placeholder="https://..."
          />
        </label>
        <label>
          Title
          <input
            value={content.thankYouTitle}
            onChange={(event) => updateField('thankYouTitle', event.target.value)}
            placeholder="Thank you title"
          />
        </label>
        <label>
          Subtitle
          <input
            value={content.thankYouSubtitle}
            onChange={(event) => updateField('thankYouSubtitle', event.target.value)}
            placeholder="Thank you subtitle"
          />
        </label>
        <label>
          Button text
          <input
            value={content.thankYouButtonText}
            onChange={(event) => updateField('thankYouButtonText', event.target.value)}
            placeholder="Button text"
          />
        </label>
      </section>
    </div>
  );
}
