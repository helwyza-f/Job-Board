export default function Hero() {
  return (
    <section className="py-12 ">
      <h1 className="text-5xl font-bold text-center py-6">
        Find your next <br /> dream job
      </h1>
      <form className="flex max-w-lg mx-auto gap-2 mt-3">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md text-center"
          placeholder="Search for jobs..."
        />
        <button className="bg-teal-500 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
