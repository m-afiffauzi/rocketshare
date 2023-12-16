import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="font-extrabold text-primary">Upload, Save</span>{" "}
            and
            <span className="font-extrabold text-primary"> Share</span> your
            files easily.
          </h1>

          <p className="mt-8 sm:text-xl/relaxed">
            Upload and save your files in our cloud and share it to your friends
            using email securely with file password protection.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
              href="/files"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary/90 focus:outline-none focus:ring active:text-primary/80 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
