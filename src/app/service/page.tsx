'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Création de sites web',
    description: 'Développement de sites vitrines, e-commerce et applications web performantes.',
  },
  {
    title: 'Design UI/UX',
    description: 'Conception d’interfaces intuitives et esthétiques centrées sur l’utilisateur.',
  },
  {
    title: 'Référencement SEO',
    description: 'Optimisation de la visibilité sur les moteurs de recherche pour attirer plus de clients.',
  },
  {
    title: 'Stratégie digitale',
    description: 'Accompagnement global dans la stratégie de communication et de présence en ligne.',
  },
]

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-blue-600"
      >
        Nos services
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
