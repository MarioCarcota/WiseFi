"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiAward,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiInbox,
  FiUser,
} from "react-icons/fi";

const CollapseCardFeatures = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="w-full overflow-hidden  px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl text-crema font-bold leading-[1.2] md:text-5xl">
            Siamo giusti per te. <span className="text-verdeChiaro">Ecco perchè.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-verdeChiaro p-4 text-2xl text-crema transition-colors hover:bg-black-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-verdeChiaro p-4 text-2xl text-crema transition-colors hover:bg-black-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-nero text-bianco" : " bg-bianco"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;

const features = [
  {
    title: "Conversazione Istantanea",
    Icon: FiUser,
    description:
      "Ora con WiseFi puoi parlare istantaneamente con un Intelligenza Artificale, istruita solo con i migliori darti trovabili internazionalemnte online, selezionati con cura per darti solo risultati perfetti!",
  },
  {
    title: "99.99% Delle Volte Non Sbaglia",
    Icon: FiAward,
    description:
      "La nostra piattaforma è sviluppata per creare il percorso perfetto per te e al 99,99% ti darà sempre e solo contenuti che ti affascineranno.",
  },
  {
    title: "Email Giornaliere",
    Icon: FiInbox,
    description:
      "Ti manderemo tutti i giorni alle 08:00 deiu fun facts e argomenti innovativi sulla finanza personale per accrescere il tuo bagaglio culturale sempre di più, non ti preoccupare saranno corti questi fun fact ;)",
  },
  {
    title: "Trova i migliori advisor",
    Icon: FiCheckCircle,
    description:
      "Ti consigliamo in base alle tue esigenze i migliori advisor della tua zona, che ti seguiranno passo dopo passo nel tuo percorso di investimenti",
  }
];