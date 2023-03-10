import Card from "../components/Card";
import { ILaunchDataMap, ILaunchDataMapList } from "../App";
import { motion, Variants } from "framer-motion";

const variants: Record<string, Variants> = {
  cardContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  },
  card: {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  },
};

const ListOfCards: React.FC<ILaunchDataMapList> = ({
  launchData,
}: ILaunchDataMapList): JSX.Element => {
  return (
    <motion.div
      className="mt-8 grid lg:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 gap-5 sm:gap-8 lg:gap-14"
      variants={variants.cardContainer}
      initial="hidden"
      animate="visible"
    >
      {launchData?.map((card: ILaunchDataMap, index: number) => (
        <motion.div key={index} variants={variants.card}>
          <Card {...card} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ListOfCards;
