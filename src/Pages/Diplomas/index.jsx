function Diploma({ imgSrc, pdfSrc, alt }) {
  return (
    <a href={pdfSrc} target="_blank" rel="noopener noreferrer">
      <img
        src={imgSrc}
        alt={alt}
        style={{ width: "200px", cursor: "pointer", borderRadius: "8px" }}
      />
    </a>
  );
}
export default Diploma;
