import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Login() {
  return (
    <div>
      <header className="p-4 text-2xl font-bold">ChatGPT</header>

      <div className="max-w-xs mx-auto text-center mt-16">
        <h1 className="text-3xl font-semi-bold">Login Or Signup</h1>
        <p className="text-gray-500 mt-3 text-sm leading-5">
          You will get smarter response and can upload files, images, and more.
        </p>
        <div className="mt-7">
          <div>
            <form>
              <Input
                className="py-6 px-4 outline-0 focus-visible:ring-0 rounded-4xl"
                placeholder="Email"
              />
              <Button className="p-6 my-6 rounded-4xl w-full bg-black text-white cursor-pointer ">
                Continue
              </Button>
            </form>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <div className="px-1 font-bold text-xs text-gray-800">OR</div>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          <div className="mt-7">
            <Button
              variant={"outline"}
              className="cursor-pointer rounded-4xl py-6 w-full  my-1"
            >
              <FaGoogle height={20} width={20} /> Continue With Google
            </Button>
            <Button
              variant={"outline"}
              className="cursor-pointer rounded-4xl py-6 w-full  my-1"
            >
              <FaApple height={20} width={20} /> Continue With Apple
            </Button>
            <Button
              variant={"outline"}
              className="cursor-pointer rounded-4xl py-6 w-full  my-1"
            >
              <FaPhoneAlt height={20} width={20} /> Continue With Phone
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
