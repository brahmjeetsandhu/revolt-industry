import React from "react";

export default function SectionHeading({
  title,
  subtitle,
  textcolor = "#ffffff",
  style = {},
  className = "",
}) {
  return (
    <div
      className={`section-header ${className}`}
      style={style}
    >
      {title && (
        <p
          id="title"
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: textcolor,
            margin: 0,
          }}
        >
          {title}
        </p>
      )}

      {subtitle && (
        <p
          style={{
            marginTop: 4,
            marginBottom: 0,
            fontSize: 16,
            color: "#b9b3b3",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}