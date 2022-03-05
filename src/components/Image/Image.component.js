import { useState, useffect } from "react";

import "./image.styles.css";
const Image = ({ url, size = 300 }) => {
  const defaultUrl = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  const [imgUrl, setImgUrl] = useState(
    `https://image.tmdb.org/t/p/w${size}${url}`
  );
  return <img src={imgUrl} onError={() => setImgUrl(defaultUrl)} />;
};

export default Image;
