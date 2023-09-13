import {Link} from "react-router-dom"
const  HeroSection = ()=> {
  return (
    <div className="mt-10 relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8  text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          Boost Your Job Search with Effective Referral Requests.
          </h1>
          <p className="mt-8  text-slate-600/100 text-lg text-gray-700">
          Elevate Your Career:<br/> Send Referral Requests to Your Dream Job Now.
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Link to="/give-referrals">
                 Give Referrals &nbsp; &rarr;
                </Link>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md border border-black px-6 py-2 text-md font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Link to="refer-me">
                Refer Me &nbsp; &#128100;

                </Link>
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] rounded-lg bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://images.pexels.com/photos/7255416/pexels-photo-7255416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
