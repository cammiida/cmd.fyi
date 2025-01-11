import { useState, useEffect } from "react";
import classes from "./Typewriter.module.css";

export default function Typewriter({ text }: { text: string }) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (textIndex < text.length) {
      timeout = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, Math.random() * 100);
    }

    return () => clearTimeout(timeout);
  }, [textIndex, text.length]);

  return <p className={classes.writingBox}>{text.slice(0, textIndex)}</p>;
}
