'use client'

import { motion } from 'framer-motion';
import Nav from './components/Nav';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Nav />
      {/* Modern Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <motion.div 
        className="max-w-4xl text-center"
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Unleash Your Creativity with StoryCraft X</h1>
          <p className="text-xl mb-8">
            Join a community of storytellers shaping interactive and captivating narratives together.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="/craft">
            <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Get Started
            </button>
            </Link>
            <Link href="/about" className="text-blue-300 hover:underline">
              Learn How It Works
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;