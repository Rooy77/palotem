'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Contactez-nous</h1>
      <p className="text-lg text-gray-700 mb-8">
        Une question, un projet, ou simplement envie de dire bonjour ? Remplissez le formulaire ci-dessous !
      </p>

      <form
        action="https://formsubmit.co/tonemail@domaine.com"
        method="POST"
        className="grid gap-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://ton-domaine.com/merci" />

        <input
          type="text"
          name="name"
          required
          placeholder="Votre nom"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Votre email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          required
          placeholder="Votre message"
          rows={5}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
    </motion.section>
  )
}
