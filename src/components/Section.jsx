import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function Section({ id, num, title, icon: Icon, children }) {
  return (
    <motion.section
      id={id}
      className="block"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } }
      }}
    >
      <motion.h2 className="block-title" variants={variants} transition={{ duration: 0.6 }}>
        <span className="num">{num}</span>
        {Icon && (
          <span className="block-icon">
            <Icon size={20} />
          </span>
        )}
        <span>{title}</span>
      </motion.h2>
      <motion.div variants={variants} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </motion.section>
  );
}
