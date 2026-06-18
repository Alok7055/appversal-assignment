import type { StyleState } from '../types';

interface StylePanelProps {
  style: StyleState;
  onChange: (value: StyleState) => void;
}

export function StylePanel({ style, onChange }: StylePanelProps) {
  const updateField = <K extends keyof StyleState>(key: K, value: StyleState[K]) => {
    onChange({ ...style, [key]: value });
  };

  return (
    <div className="card">
      <h2>Styling Configuration</h2>

      <div className="section-block">
        <div className="row">
          <label>
            Background color
            <input
              type="color"
              value={style.backgroundColor}
              onChange={(event) => updateField('backgroundColor', event.target.value)}
            />
          </label>
          <label>
            Title color
            <input
              type="color"
              value={style.titleColor}
              onChange={(event) => updateField('titleColor', event.target.value)}
            />
          </label>
        </div>

        <div className="row">
          <label>
            Subtitle color
            <input
              type="color"
              value={style.subtitleColor}
              onChange={(event) => updateField('subtitleColor', event.target.value)}
            />
          </label>
          <label>
            Button color
            <input
              type="color"
              value={style.buttonColor}
              onChange={(event) => updateField('buttonColor', event.target.value)}
            />
          </label>
        </div>

        <div className="row">
          <label>
            Button text color
            <input
              type="color"
              value={style.buttonTextColor}
              onChange={(event) => updateField('buttonTextColor', event.target.value)}
            />
          </label>
          <label>
            Rating selected color
            <input
              type="color"
              value={style.selectedColor}
              onChange={(event) => updateField('selectedColor', event.target.value)}
            />
          </label>
        </div>

        <label>
          Rating unselected color
          <input
            type="color"
            value={style.unselectedColor}
            onChange={(event) => updateField('unselectedColor', event.target.value)}
          />
        </label>
      </div>

      <div className="section-block">
        <div className="row">
          <label>
            Font size
            <input
              type="range"
              min={14}
              max={26}
              value={style.fontSize}
              onChange={(event) => updateField('fontSize', Number(event.target.value))}
            />
            <span className="range-value">{style.fontSize}px</span>
          </label>
          <label>
            Font weight
            <input
              type="range"
              min={400}
              max={900}
              step={100}
              value={style.fontWeight}
              onChange={(event) => updateField('fontWeight', Number(event.target.value))}
            />
            <span className="range-value">{style.fontWeight}</span>
          </label>
        </div>

        <div className="row">
          <label>
            Border radius
            <input
              type="range"
              min={8}
              max={32}
              value={style.borderRadius}
              onChange={(event) => updateField('borderRadius', Number(event.target.value))}
            />
            <span className="range-value">{style.borderRadius}px</span>
          </label>
          <label>
            Button width
            <input
              type="range"
              min={160}
              max={320}
              value={style.buttonWidth}
              onChange={(event) => updateField('buttonWidth', Number(event.target.value))}
            />
            <span className="range-value">{style.buttonWidth}px</span>
          </label>
        </div>

        <label>
          Button height
          <input
            type="range"
            min={36}
            max={64}
            value={style.buttonHeight}
            onChange={(event) => updateField('buttonHeight', Number(event.target.value))}
          />
          <span className="range-value">{style.buttonHeight}px</span>
        </label>
      </div>
    </div>
  );
}
