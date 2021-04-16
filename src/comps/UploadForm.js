import React from "react";
import { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

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
      setError("Please select supported image format (jpg or png)");
      console.log("--> Invalid format for selected image");
    }
  };

  return (
    <div>
      <div className="spanTitle">
        <span>Get Started Today</span>
      </div>
      <div class="things">
        <div class="content">
          <div class="arrow">
            <div class="curve"></div>
            <div class="point"></div>
          </div>
        </div>
      </div>
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <CloudUploadIcon className="uploadIcon" fontSize="large" />
        </label>

        <div layout className="output">
          {error && (
            <motion.div
              initial={{ scale: 6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="error"
              style={{ visibility: "visible" }}
            >
              *{error}
            </motion.div>
          )}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
