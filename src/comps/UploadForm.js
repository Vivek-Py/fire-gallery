import React from "react";
import { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/jpeg", "image/png"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setError(null);
      setFile(selected);
      console.log("--> Selected File Information:", selected);
    } else {
      setFile(null);
      setError("Please select supported image formats (jpg or png)");
      console.log("--> Invalid format for selected image");
    }
  };

  return (
    <form>
      <label className="uploadIcon">
        <input type="file" onChange={changeHandler} />
        <CloudUploadIcon fontSize="large" />
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
