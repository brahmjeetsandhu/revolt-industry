export default function SectionHeading({
  title,
  subtitle,
  textcolor,
}) { 

  return (
    <div className="section-header" style={{ marginBottom: 16 }}>
      <p
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: {textcolor}
        }}
      >
        {title}
      </p>

      {subtitle && (
        <p
          style={{
            marginTop: 4,
            fontSize: 16,
            color: "#b9b3b3",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}