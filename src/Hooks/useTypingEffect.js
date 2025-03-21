import { useState, useEffect } from "react";

const useTypingEffect = (texts, speed = 100, delay = 1500) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentText.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, index, texts, speed, delay]);

  return text;
};

export default useTypingEffect;
