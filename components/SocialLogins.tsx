import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

const SocialLogins = () => {
    return (
      <div className="flex gap-4 flex-col md:flex-row">
        <Button variant="destructive" size="lg" className="text-lg flex gap-2">
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
    );
}
 
export default SocialLogins;