import React from "react";
import "./Data.scss";

const Data = ({
  data,
  containerClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  buttonClassName,
  hrefButton,
}) => {
  const handleDownloadClick = () => {
    // Buat elemen <a> untuk download file
    const downloadLink = document.createElement("a");
    downloadLink.href = "../../assets/Muhamad Kopal.pdf"; // Tentukan URL file PDF
    downloadLink.download = "Kopalmuhamad.pdf"; // Ganti "nama_file" sesuai keinginan Anda
    downloadLink.click();
  };
  const { title, subtitle, description, button, icons } = data;

  return (
    <div className={`data-container ${containerClassName}`}>
      <h1 className={`data-title ${titleClassName}`}>{title}</h1>
      <h3 className={`data-subtitle ${subtitleClassName}`}>{subtitle}</h3>
      <p className={`data-description ${descriptionClassName}`}>
        {description}
      </p>
      <a
        download=""
        href={hrefButton}
        className={`data-button ${buttonClassName}`}
        onClick={handleDownloadClick}
      >
        {button}
        <i className={icons}></i>
      </a>
    </div>
  );
};

export default Data;
