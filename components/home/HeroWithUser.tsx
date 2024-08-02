import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroWithUser = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center dotted p-8 pt-24 lg:pt-16 min-h-screen">
      <div>
        <Image
          src="/nazzly-logo-for-white.png"
          height={300}
          width={300}
          alt="logo"
        />
      </div>
      <h1 className="text-4xl lg:text-7xl font-bold text-center">
        Easy Scheduling ahead
      </h1>
      <h4 className="text-xl  lg:max-w-4xl mx-auto text-center mt-4 mb-8">
        Nazzly is your scheduling automation platform for eliminating the
        back-end-forth emails to find the perfect time...
      </h4>
      <p className=" underline mb-2">Supported platforms</p>
      <div className="flex gap-4 justify-center">
        <div className="flex gap-2 items-center">
          <Image
            src="/meet.png"
            height={30}
            width={30}
            alt="Google meet logo"
          />
          <p>Google Meet</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/zoom.png" height={30} width={30} alt="Zoom logo" />
          <p>Zoom</p>
        </div>
      </div>
      <p className="text-sm">OR</p>
      <p className="max-w-4xl">
        You can choose any other meeting platform you like! Sounds interesting?
        Click the button below!
      </p>
      <Link href="/dashboard/meeting-type">
        <Button size="lg" className="text-lg">
          Get Started <span className="ml-2 text-xl">🚀</span>
        </Button>
      </Link>
    </div>
  );
};

export default HeroWithUser;
