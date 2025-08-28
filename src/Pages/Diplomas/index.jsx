function Diploma({
  imgSrc,
  pdfSrc,
  alt,
  style = {
    "@media (max-width: 1023px)": {
      width: "100px",
      cursor: "pointer",
      borderRadius: "8px",
    },
  },
}) {
  return (
    <a href={pdfSrc} target="_blank" rel="noopener noreferrer">
      <img
        src={imgSrc}
        alt={alt}
        style={{ width: "150px", cursor: "pointer", borderRadius: "8px" }}
      />
    </a>
  );
}
export default Diploma;
