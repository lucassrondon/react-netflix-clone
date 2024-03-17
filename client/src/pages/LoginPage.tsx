import Input from "../components/Input";
import NavBar from "../components/NavBar";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-opacity-50 bg-black">
      <NavBar />

      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md bg-black bg-opacity-50 p-16 gap-6 rounded-md">
          <h1 className="text-3xl text-white font-semibold mb-8">Sign In</h1>

          <form className="flex flex-col gap-6" action="">
            <Input />
            <Input />
            <input
              className="text-white font-semibold bg-red-600 hover:bg-red-400 cursor-pointer p-2 rounded"
              type="submit"
              value="Submit"
            />
          </form>

          <p className="mt-12">
            <span className="text-white cursor-pointer hover:underline">
              First time using netflix?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
