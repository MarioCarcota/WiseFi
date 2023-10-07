"use client"

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

const DragShuffleHero = () => {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState(["front", "middle", "back"]);
  const [dragging, setDragging] = useState(false);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order];
      orderCopy.unshift(orderCopy.pop());
      setOrder(orderCopy);
    }
  };

  useEffect(() => {
    const FIVE_SECONDS = 5000;

    // Automatically shuffle the list ever 5 seconds, so long
    // as it isn't being dragged
    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setOrder((pv) => {
          const orderCopy = [...pv];
          orderCopy.unshift(orderCopy.pop());
          return orderCopy;
        });
      }
    }, FIVE_SECONDS);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <section
      style={{ pointerEvents: dragging ? "none" : undefined }}
      className="w-full overflow-hidden px-8 py-24 text-slate-50"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h1 className="text-5xl font-[900] text-verdeChiaro leading-[1.25] md:text-7xl">
          Perché stressarti? Usa WiseFi!
          </h1>
          <p className="mb-8 mt-4 text-lg text-bianco">
            ...Parlare di finanza non sarà più un problema.
              Insights e terminologie finanziarie alla portata di tutti!

          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <button className="whitespace-nowrap rounded bg-verdeScuro px-3 py-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Prova subito la nostra nuova AI!
            </button>
          </form>
        </div>
        <motion.div
          whileTap={{ scale: 0.985 }}
          className="relative h-[450px] w-[350px]"
        >
          <Card
            imgUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
            testimonial="Sento di aver imparato tanto da WiseFi quanto dal mio master. È la prima cosa che leggo ogni mattina."
            author="Jenn F. - Marketing Director @ Square"
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[0]}
            dragging={dragging}
            setDragging={setDragging}
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
            testimonial="La gente pensa che io sappia cosa sto facendo. Onestamente, ho solo letto questa newsletter."
            author="Adrian Y. - Product Marketing @ Meta"
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[1]}
            dragging={dragging}
            setDragging={setDragging}
          />
          <Card
            imgUrl="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2962&q=80"
            testimonial="Non posso credere che sia gratuito. Se WiseFi costasse 5.000euro al mese, varrebbe ogni centesimo."
            author="Devin R. - Growth Marketing Lead @ OpenAI"
            handleDragEnd={handleDragEnd}
            dragProgress={dragProgress}
            position={order[2]}
            dragging={dragging}
            setDragging={setDragging}
          />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  handleDragEnd,
  dragProgress,
  testimonial,
  position,
  imgUrl,
  author,
  setDragging,
  dragging,
}) => {
  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    // When component first mounts, dragX will be a percentage
    // due to us setting the initial X value in the animate prop.
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      // Default back to 0 so that setInterval can continue
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-crema bg-verdeScuro/70 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-crema bg-verdeScuro object-cover"
      />
      <span className="text-center text-lg italic text-crema">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-verdeChiaro">
        {author}
      </span>
    </motion.div>
  );
};

export default DragShuffleHero;