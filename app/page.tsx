import Header from "./ui/header";
import Button from "./ui/button";
import Step from "./ui/step";

const steps = [
  {counter: 1, title: "Sing up"},
  {counter: 2, title: "Paste URL and shorten it"},
  {counter: 3, title: "For more information, read the docs"}
]

export default function Home() {
  return (
    <main className="flex-grow px-4 md:px-16 lg:px-32">
      <div className="mt-5 md:mt-40">
        <div className="space-y-10 flex flex-col items-center justify-center">
          <Header
            centered
            title="Simplify your links"
            description="Customize each short URL to make the most of its potential"
          />
          <Button className="bg-cyan-900">
            Get Started
          </Button>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
          <div className="flex justify-center md:justify-end items-center">
            <img
              src="/web_search.svg"
              alt="image of link shortener"
              width={480}
              height={410}
            />
          </div>
          <div className="flex sm:justify-center md:justify-start items-center">
            <div>
              <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Next steps
              </div>
              {steps.map(({counter, title}) => (
                <Step key={counter} counter={counter} title={title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
