import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map(
            ({ id, title, text, date, status, imageUrl, colorful }) => {
              // const stat = status === "done" ? "Done" : "In progress";

              return (
                <div
                  key={id}
                  className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                    colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                >
                  <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                    <div className="absolute top-0 left-0 max-w-full">
                      <img
                        src={grid}
                        className="w-full"
                        width={550}
                        height={550}
                        alt="Grid"
                      />
                    </div>

                    <div className="relative z-1">
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <Tagline>{date}</Tagline>

                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                          <img
                            src={status === "done" ? check2 : loading1}
                            className={`mr-2.5 ${
                              status !== "done" ? "animate-spin" : ""
                            }`}
                            width={16}
                            height={16}
                            alt={status}
                          />
                          <div className="tagline">{status}</div>
                        </div>
                      </div>

                      <div className="mb-10 -my-10 -mx-15">
                        <img
                          src={imageUrl}
                          className="w-full"
                          width={630}
                          height={420}
                          alt={title}
                        />
                      </div>

                      <h4 className="h4 mb-4">{title}</h4>
                      <p className="body-2 text-n-4">{text}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
