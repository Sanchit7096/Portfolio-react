import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-2xl flex items-center gap-2 border border-gray-200 pointer-events-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
