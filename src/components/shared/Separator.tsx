import RevealAnimation from '../animation/RevealAnimation';

const Separator = () => {
  return (
    <section className="separator">
      <div className="main-container flex flex-row gap-5 items-center">
        <div className="flex-auto">
          <RevealAnimation delay={0.1} offset={10}>
            <div className="border-t border-[#e3e2e2] h-[1px] "></div>
          </RevealAnimation>
        </div>

        <div className="div">
          <RevealAnimation delay={0.2} offset={10}>
            <a
              href="#membership-form"
              className="btn btn-md btn-accent border-[#f2f2f2] before:hidden basis-[200px] inline-flex items-center gap-2 duration-300 hover:shadow-md shadow-black/5 hover:bg-[#f8f8f8]">
              Inquire
              <svg
                className="size-[15px] -mb-2 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256">
                <path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L168,188.69V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8V188.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </a>
          </RevealAnimation>
        </div>
        <div className="flex-auto">
          <RevealAnimation delay={0.3} offset={10}>
            <div className="border-t border-[#e3e2e2] h-[1px] "></div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
export default Separator;
