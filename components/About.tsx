import Link from "next/link";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-center px-6 border-t border-gray-100"
    >
      <h1 className="text-4xl font-bold text-orange-600 mb-4">
        About Inovation Marketplace
      </h1>
      <h2 className="text-xl text-orange-600 mb-6">
        Connecting Creativity and Commerce to BRIDA JATIM Inovation
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2>
        <Link
          href="/about"
          className="mt-6 inline-block text-blue-600 underline hover:underline-offset-2 transition-colors font-medium"
        >
          Learn More About Us
        </Link>
      </h2>
    </section>
  );
}
    