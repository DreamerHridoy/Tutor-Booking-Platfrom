const Newsletter = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 m-2 text-center">NewsLetter </h1>
      <div className="w-full bg-blue-100 py-10 px-4 md:px-20 lg:px-40 text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Updated with Tutor Booking Platform!
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to get the latest updates on available
          tutors, special offers, and educational resources delivered right to
          your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </>
  );
};

export default Newsletter;
