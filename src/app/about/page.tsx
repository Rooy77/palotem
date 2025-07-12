'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-600">À propos de nous</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Palotem Sarl est une agence digitale spécialisée dans la création de solutions web sur mesure...
      </p>
    </motion.section>
  )
}
