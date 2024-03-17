const text = {
  title: "Unlimited movies, TV shows, and more",
  subtitle: "Watch anywhere, Cancel anytime",
};

export default function HomeBanner() {
  return (
    <div className="relative w-screen h-screen">
      <img
        className="w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/76fcd07f-b171-49c7-8a77-6177ad5a6122/BR-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />

      <div className="absolute w-full h-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold">{text.title}</h1>

          <p className="text-white text-2xl font-bold">{text.subtitle}</p>

          <div className="mt-8">
            <a
              className="text-white text-lg p-4 px-16 rounded bg-red-700"
              href="/login"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
