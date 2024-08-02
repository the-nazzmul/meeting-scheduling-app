import Image from "next/image";
import SocialLogins from "../SocialLogins";
import Link from "next/link";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";

const HeroWithUser = () => {
  return (
    <div className="dotted p-8 ">
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
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
          back-end-forth emails to find the perfect time......and so much more
        </h4>
        <p className=" underline mb-2">Supported platforms</p>
        <div className="flex gap-8 justify-center">
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
        <p>OR</p>
        <p className="max-w-4xl">
          You can choose any other meeting platform you like! Sounds
          interesting? Click the button below!
        </p>
        <Button size="lg" className="text-lg">
          Get Started <span className="ml-2 text-xl">🚀</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroWithUser;
