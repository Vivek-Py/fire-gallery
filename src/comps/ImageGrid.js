import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import CardMedia from "@material-ui/core/CardMedia";
import { Card } from "@material-ui/core";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileHover={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1,
            }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <Card initial={{ opacity: 0 }} animate={{ opacity: 0.8 }}>
              <CardMedia
                component="img"
                alt="Uploaded Pic"
                height="140"
                image={doc.url}
              />
            </Card>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
