import Image from "next/image";
import SocialLogins from "../SocialLogins";
import Link from "next/link";

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
      </div>
    </div>
  );
};

export default HeroWithUser;
