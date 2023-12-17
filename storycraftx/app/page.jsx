import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between p-5 bg-transparent z-50 bg-gradient-to-r from-purple-600 to-indigo-600">
      <Link href="/" className="flex items-center space-between text-xl">
          <Image 
          src='/storycraftx.png' 
          width={50}
          height={50}
          alt="StoryCraft X Logo"
          unoptimized={true}
          className='mr-4'
          >           
          </Image>
          StoryCraft X
        </Link>
      <div className='space-x-8 text-xl'>
        <Link href="/home" className="mx-2">Home</Link>
        <Link href="/craft" className="mx-2">Craft</Link>
        <Link href="/signin" className="mx-2">Sign In</Link>
      </div>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center">
      <Navbar />
      {/* Modern Hero Section */}
      <div className='grid-rows-2'>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Unleash Your Creativity with StoryCraft X</h1>
          <p className="text-xl mb-8">
            Join a community of storytellers shaping interactive and captivating narratives together.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Get Started
            </button>
            <a href="#how-it-works" className="text-blue-300 hover:underline">
              Learn How It Works
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="h-96">
        <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Start a Story</h3>
              <p className="text-gray-600">
                Begin your storytelling journey by starting a new story or contributing to existing ones.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Make Choices</h3>
              <p className="text-gray-600">
                Engage with the narrative by making choices at key decision points, influencing the direction of the story.
              </p>
            </div>
            {/* Add more steps as needed */}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default LandingPage;