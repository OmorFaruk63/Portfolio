import React from "react";

const CircleText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="text">
      <p>
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: `rotate(${i * 9.5}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CircleText;
