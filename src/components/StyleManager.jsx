import { useState } from "react";

export default function StyleManager({ sectors, editor }) {
  const [opacity, setOpacity] = useState(0.7);

  const handleSliderChange = (e) => {
    const newVal = parseFloat(e.target.value);
    setOpacity(newVal);
    // Get iframe's document to access the actual canvas element
    const frameDoc = editor.Canvas.getDocument();
    const target = frameDoc.querySelector(".queen-one-modal__screen");
    if (target) {
      target.style.backgroundColor = `rgba(0, 0, 0, ${newVal}`;
    }
  };
  return (
    <>
      <div>
        <label>
          opacity: {opacity}
          <input
            type="range"
            min="0"
            max="1"
            value={opacity}
            onChange={handleSliderChange}
          />
        </label>
      </div>
    </>
  );
}
