import { motion } from "framer-motion";
import { CalculatorForm } from "./CalculatorForm";
import { calcReveal } from "config/animation";

export const Calculator = () => {
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.1, once: true }}
    custom={0.4}
    variants={calcReveal}
    className="w-full py-11 px-10 text-black shadow-xl rounded">
      <CalculatorForm />
    </motion.div>
  );
};
