'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-blue-600 text-white text-center py-20 px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Bienvenue chez Palotem Sarl
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Nous transformons vos idées en solutions digitales puissantes.
      </p>
    </motion.section>
  )
}
