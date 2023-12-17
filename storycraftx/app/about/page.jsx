'use client'

import React from 'react'
import Image from 'next/image';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

function about() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center">
      <Navbar />
      {/* Modern About Section */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <motion.div 
        className="max-w-4xl text-center mt-24"
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-4">How to Craft a Story</h1>
          <p className="text-xl mb-20">
           How It Works
          </p>
        </motion.div>


        {/* Steps Section */}
        <motion.div
        className='max-w-4xl text-left leading-relaxed mt-12'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
            <h2 className='text-3xl font-bold mb-4 underline'>Story Padawan</h2>
            <p className='text-xl leading-loose pr-48'>Begin your creative journey by starting a new story or diving into existing ones. Whether you're a seasoned wordsmith or a novice storyteller, StoryCraft X welcomes all contributors. The storytelling canvas is yours to explore and shape.</p>
            <Image
            src='/storypadawan.jpeg'
            width={400}
            height={400}
            alt="Story Padawan"></Image>
        </motion.div>
        <motion.div
        className='max-w-4xl text-right leading-relaxed mt-12'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
            <h2 className='text-3xl font-bold mb-4 underline'>MediaAlchemy Master</h2>
            <p className='text-xl leading-loose pl-48'>Master the art of MediaAlchemy, fusing text, images, videos, and sound to conjure immersive storytelling magic.</p>
            <Image
            className='ml-[500px]'
            src='/medialchemymaster.jpeg'
            width={400}
            height={400}
            alt="Alchemist"></Image>
        </motion.div>
        <motion.div
        className='max-w-4xl text-left leading-relaxed mt-12'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
            <h2 className='text-3xl font-bold mb-4 underline'>ChoiceWeaver Sensei</h2>
            <p className='text-xl leading-loose pr-48'>Weave the fabric of your narrative with interactive ChoiceWeaver points, where readers mold the tale with their decisions.</p>
            <Image
            src='/choiceweaver.jpeg'
            width={400}
            height={400}
            alt="Sensei"></Image>
        </motion.div>
        <motion.div
        className='max-w-4xl text-right justify-end leading-relaxed mt-12'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
            <h2 className='text-3xl font-bold mb-4 underline'>Collaboration Wizard</h2>
            <p className='text-xl leading-loose pl-48'>Immerse yourself in a world of Collaborative Enchantment, where the StoryCraft X community shapes the unfolding stories in real-time.</p>
            <Image
            className='ml-[500px]'
            src='/collabwizard.jpeg'
            width={400}
            height={400}
            alt="wizards"></Image>
        </motion.div>
      </section>
    </div>
    </>
    
  )
}

export default about