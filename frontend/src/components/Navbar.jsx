import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User, Layers2Icon, ScrollText } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return ( 
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="px-5 h-16 w-full shadow-lg">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg flex items-center justify-center">
                <Layers2Icon className="w-5 h-5 text-accent animate-pulse" />
              </div>
              <h1 className="text-lg font-bold">Stacks</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2"> 

            <Link 
              to={"/settings"}
              className={`
              btn btn-ghost btn-accent gap-2 transition-colors hover:animate-pulse
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            <Link 
              to={"/updates"}
              className={`
              btn btn-ghost btn-accent gap-2 transition-colors hover:animate-pulse
              
              `}
            >
              <ScrollText className="w-4 h-4" />
              <span className="hidden sm:inline">Updates</span>
            </Link>

            

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-ghost btn-accent gap-2 hover:animate-pulse`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline ">Profile</span>
                </Link>

                <button className="flex gap-2 items-center hover:opacity-40" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;