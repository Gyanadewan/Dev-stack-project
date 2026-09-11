
import BannerImage from "../../assets/banner-stack.png";

function Hero() {
  return (
    <section className="container mx-auto px-5 py-20">
      <div className="flex items-center justify-between gap-12">

        {/* Left Side - Text */}
        <div className="w-1/2">
          <h2 className="text-5xl font-bold leading-tight">
            Build Your Ideal <span className="text-gradient">Development Stack</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-gradient  px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src={BannerImage}
            alt="Development Stack"
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

