import Button from "./button/Button";
import Logo from "./Logo";

function Footer() {
  return (
    <footer>
      <div className="px-1 sm:px-0 flex flex-col gap-5 lg:flex-row lg:justify-between">
        <div className="lg:h-[62px]">
          <h1 className="text-xl font-semibold text-neutral-900 mb-2">Join our newsletter</h1>
          <p className="text-base text-neutral-600">We’ll send you a nice letter once per week. No spam.</p>
        </div>
        <form className="h-fit lg:w-[400px] flex flex-col sm:flex-row gap-4 lg:justify-end">
          <input
            className="w-full h-fit px-3.5 py-2.5 sm:basis-[86.25%] lg:sm:basis-[67.5%] bg-neutral-50 shadow-inputDefault text-sm placeholder:text-neutral-500 rounded"
            type="email"
            placeholder="Enter your email"
          />
          <div className="sm:basis-[14.3%] lg:basis-[24.5%]">
            <Button variant={"primary"} size={"md"}>
              Subcribe
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-12 px-1">
        <div>
          <Logo />
          <p className="text-base text-neutral-600 mt-6">Craft stunning style journeys that weave more joy into every thread.</p>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <ul className="flex flex-col gap-3">
            <h3 className="mb-1 text-sm text-neutral-500">SHOP CATEGORIES</h3>
            <li>
              <a className="text-base text-neutral-600 font-medium">Unisex</a>
            </li>
            <li>
              <a className="text-base text-neutral-600 font-medium">Women</a>
            </li>
            <li>
              <a className="text-base text-neutral-600 font-medium">Men</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h3 className="mb-1 text-sm text-neutral-500">SHOP COLLECTIONS</h3>
            <li>
              <a className="text-base text-neutral-600 font-medium">Latest Arrivals</a>
            </li>
            <li>
              <a className="text-base text-neutral-600 font-medium">Urban Oasis</a>
            </li>
            <li>
              <a className="text-base text-neutral-600 font-medium">Cozy Comfort</a>
            </li>
            <li>
              <a className="text-base text-neutral-600 font-medium">Fresh Fusion</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
