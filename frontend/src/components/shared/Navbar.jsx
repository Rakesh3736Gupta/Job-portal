import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const logoutHandler = async () => {
  //   try {
  //     const res = await axios.get(`${USER_API_END_POINT}/logout`, {
  //       withCredentials: true,
  //     });
  //     if (res.data.success) {
  //       dispatch(setUser(null));
  //       navigate("/");
  //       toast.success(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
  //   }
  // };

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        // Clear local storage or any token storage after logout
        localStorage.removeItem("authToken");

        dispatch(setUser(null)); // Clear user data from redux
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  // Function to determine if the link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className="bg-white fixed top-0 w-full z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Hunt</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className={
                      isActiveLink("/admin/companies") ? "text-[#F83002]" : ""
                    }
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className={
                      isActiveLink("/admin/jobs") ? "text-[#F83002]" : ""
                    }
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className={isActiveLink("/") ? "text-[#F83002]" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className={isActiveLink("/jobs") ? "text-[#F83002]" : ""}
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className={isActiveLink("/browse") ? "text-[#F83002]" : ""}
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="User Avatar"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User Avatar"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <AiOutlineClose className="h-6 w-6 text-black" />
            ) : (
              <AiOutlineMenu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white">
          <ul className="flex flex-col font-medium items-start gap-4">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className={
                      isActiveLink("/admin/companies") ? "text-[#F83002]" : ""
                    }
                    onClick={toggleMobileMenu}
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className={
                      isActiveLink("/admin/jobs") ? "text-[#F83002]" : ""
                    }
                    onClick={toggleMobileMenu}
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className={isActiveLink("/") ? "text-[#F83002]" : ""}
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className={isActiveLink("/jobs") ? "text-[#F83002]" : ""}
                    onClick={toggleMobileMenu}
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className={isActiveLink("/browse") ? "text-[#F83002]" : ""}
                    onClick={toggleMobileMenu}
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex flex-col items-start gap-2 mt-4">
              <Link to="/login" onClick={toggleMobileMenu}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMobileMenu}>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <div className="mt-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User Avatar"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="User Avatar"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    {user && user.role === "student" && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile" onClick={toggleMobileMenu}>
                            View Profile
                          </Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button
                        onClick={() => {
                          logoutHandler();
                          toggleMobileMenu();
                        }}
                        variant="link"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
