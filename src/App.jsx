import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          gap: "0.8rem",
        }}
      >
        <button onClick={() => setIsVisible(!isVisible)}>Show/Hide</button>
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
              initial={{
                rotate: "0deg",
                scale: 0,
                y: 0,
                x: 0,
              }}
              animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, 150, -150, -150, 0, 0, 0, 0, 0],
                x: [0, 0, 0, 0, 0, 150, -150, -150, 0],
              }}
              exit={{
                rotate: "0deg",
                scale: 0,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                times: [0, 0.25, 0.35, 0.4, 0.5, 0.6, 0.85, 0.9, 1],
              }}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "black",
              }}
            >
              Hello
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          gap: "0.8rem",
        }}
      >
        <button onClick={() => setIsVisible(!isVisible)}>Show/Hide</button>
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
              initial={{
                rotate: "0deg",
                scale: 0,
                y: 0,
                x: 0,
              }}
              animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, 150, -150, -150, 0, 0, 0, 0, 0],
                x: [0, 0, 0, 0, 0, 150, -150, -150, 0],
              }}
              exit={{
                rotate: "0deg",
                scale: 0,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                times: [0, 0.25, 0.35, 0.4, 0.5, 0.6, 0.85, 0.9, 1],
              }}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "black",
              }}
            >
              Hello
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
