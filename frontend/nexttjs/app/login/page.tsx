export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-10 rounded-2xl w-96">

        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            className="p-4 rounded-lg bg-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="p-4 rounded-lg bg-gray-700 text-white"
          />

          <button className="bg-red-500 p-4 rounded-lg text-white hover:bg-red-700">
            Login
          </button>

        </div>

      </div>

    </div>
  );
}