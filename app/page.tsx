import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <section className="dotted m-2 border-2 rounded-lg border-gray-700 p-8 ">
      <div className="flex flex-col gap-4 items-center justify-center custom-height">
        <h1 className="text-4xl lg:text-7xl font-bold text-center">
          Easy Scheduling ahead
        </h1>
        <h4 className="text-xl  lg:max-w-4xl mx-auto text-center mt-4 mb-8">
          Scheduly is your scheduling automation platform for eliminating the
          back-end-forth emails to find the perfect time......and so much more
        </h4>

        <p className="text-lg text-center">
          Sign up for free with Google or Github
        </p>
        <div className="flex gap-4">
          <Button
            variant="destructive"
            size="lg"
            className="text-lg flex gap-2"
          >
            <FaGoogle size={24} />
            <p>Google</p>
          </Button>
          <Button size="lg" className="text-lg flex gap-2">
            <FaGithub size={24} />
            <p>Github</p>
          </Button>
          <Button variant="blue" size="lg" className="text-lg flex gap-2">
            <FaFacebook size={24} />
            <p>Facebook</p>
          </Button>
        </div>
        <span className="mt-4 font-medium">OR</span>
        <p className="text-lg text-center">
          <Link href="/" className="text-red-500">
            Signup with Email
          </Link>
          , no credit card required!
        </p>
      </div>
    </section>
  );
}
