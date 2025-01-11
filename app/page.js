import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  // console.log(require.resolve("@/components/ui/button"));

  return (
    <>
      <div>
        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Unlock Your Potential
                <strong className="font-extrabold text-red-700 sm:block">
                  {" "}
                  Crack Your Dream Job.{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Get personalized mock interviews based on your job description
                and receive feedback. Practice anytime, anywhere, and boost your
                confidence🙂
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-red-600  px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href={"/dashboard"}
                >
                  Prepare for Success🚀
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// bg-[#8b5cf6]
//  bg-[#a855f7]
// bg-[#facc15]
// bg-[#fde047]
