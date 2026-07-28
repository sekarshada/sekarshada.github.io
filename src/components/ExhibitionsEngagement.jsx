import { useState } from "react";
import {
    ArrowUpRight,
    Images,
    Play
  } from "lucide-react";
  
  import {
    FaInstagram,
    FaLinkedin,
    FaTiktok,
  } from "react-icons/fa6";

import { engagements } from "../data/achievements";
import EngagementGalleryModal from "./EngagementGalleryModal";

const platformIcons = {
    TikTok: FaTiktok,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
  };

export default function ExhibitionsEngagement() {
  const [selectedEngagement, setSelectedEngagement] = useState(null);

  return (
    <>
      <section
        id="engagement"
        className="
          relative
          overflow-hidden
          bg-black
          px-8 
          md:px-20 
        "
      >
        <div
          className="
            pointer-events-none
            absolute right-[-140px] top-20
            h-[360px] w-[360px]
            rounded-full
            bg-[#C96A2A]/10
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p
              className="
                mb-5
                text-sm font-medium uppercase
                tracking-[0.25em]
                text-[#C96A2A]
              "
            >
              Exhibitions & Public Engagement
            </p>

            <h2
              className="
                text-4xl font-semibold
                leading-tight text-white
                md:text-6xl
              "
            >
              Research beyond the lab.
            </h2>

            <p
              className="
                mt-7 max-w-2xl
                text-lg leading-relaxed
                text-gray-400
              "
            >
              Sharing interactive research through exhibitions,
              public demonstrations, and digital media.
            </p>
          </div>

          <div className="relative mt-20">
            <div
              className="
                absolute bottom-0 left-[7px] top-0
                w-px bg-gradient-to-b
                from-[#C96A2A]
                via-white/20
                to-transparent
                md:left-[135px]
              "
            />

            <div className="space-y-24">
              {engagements.map((engagement) => (
                <article
                  key={engagement.id}
                  className="
                    relative grid gap-8
                    pl-10
                    md:grid-cols-[110px_1fr]
                    md:gap-12
                    md:pl-0
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm font-medium
                        tracking-[0.2em]
                        text-gray-500
                        md:pt-2 md:text-right
                      "
                    >
                      {engagement.year}
                    </p>
                  </div>

                  <div
                    className="
                      absolute left-0 top-1.5
                      h-4 w-4
                      rounded-full
                      border-4 border-black
                      bg-[#C96A2A]
                      shadow-[0_0_0_1px_rgba(201,106,42,0.5)]
                      md:left-[128px]
                    "
                  />

                  <div>
                    {engagement.type === "exhibition" && (
                      <ExhibitionCard
                        engagement={engagement}
                        onOpen={() =>
                          setSelectedEngagement(engagement)
                        }
                      />
                    )}

                    {engagement.type === "media" && (
                      <MediaCard engagement={engagement} />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EngagementGalleryModal
        engagement={selectedEngagement}
        onClose={() => setSelectedEngagement(null)}
      />
    </>
  );
}

function ExhibitionCard({ engagement, onOpen }) {
  return (
    <div
      className="
        group overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.035]
        transition duration-500
        hover:-translate-y-1
        hover:border-[#C96A2A]/40
        hover:bg-white/[0.055]
      "
    >
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
      >
        <div className="relative overflow-hidden">
          <img
            src={engagement.cover}
            alt={engagement.title}
            className="
              aspect-[3]
              w-full object-cover
              transition duration-700
              group-hover:scale-[1.03]
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/75
              via-transparent
              to-transparent
            "
          />

          {engagement.award && (
            <span
              className="
                absolute left-6 top-6
                rounded-full
                border border-white/15
                bg-black/55
                px-4 py-2
                text-sm font-medium
                text-white
                backdrop-blur-md
              "
            >
              {engagement.award}
            </span>
          )}

          <span
            className="
              absolute bottom-6 right-6
              flex items-center gap-2
              rounded-full
              bg-white px-4 py-2
              text-sm font-semibold
              text-black
              transition
              group-hover:bg-[#C96A2A]
              group-hover:text-white
            "
          >
            <Images size={17} />
            View gallery
          </span>
        </div>

        <div className="p-7 md:p-9">
          <div
            className="
              flex flex-col justify-between gap-6
              md:flex-row md:items-start
            "
          >
            <div>
              <h3
                className="
                  text-2xl font-semibold
                  text-white md:text-3xl
                "
              >
                {engagement.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {engagement.event} · {engagement.location}
              </p>
            </div>

            <ArrowUpRight
              className="
                hidden shrink-0 text-gray-500
                transition duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-[#C96A2A]
                md:block
              "
            />
          </div>

          <p
            className="
              mt-6 max-w-3xl
              text-base leading-relaxed
              text-gray-300
              md:text-lg
            "
          >
            {engagement.description}
          </p>
        </div>
      </button>
    </div>
  );
}

function MediaCard({ engagement }) {
    return (
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.035]
          p-7
          md:p-9
        "
      >
        <div className="max-w-3xl">
          <p
            className="
              text-sm uppercase
              tracking-[0.2em]
              text-[#C96A2A]
            "
          >
            Digital engagement
          </p>
  
          <h3
            className="
              mt-4
              text-2xl font-semibold
              text-white
              md:text-3xl
            "
          >
            {engagement.title}
          </h3>
  
          <p className="mt-2 text-gray-500">
            {engagement.event}
          </p>
  
          <p
            className="
              mt-6
              max-w-3xl
              text-base leading-relaxed
              text-gray-300
              md:text-lg
            "
          >
            {engagement.description}
          </p>
        </div>
  
        <div
          className="
            mt-10
            grid gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {engagement.items?.map((item) => {
            const Icon = platformIcons[item.platform];
  
            return (
              <a
                key={`${item.platform}-${item.title}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-black/30
                  transition duration-500
                  hover:-translate-y-1
                  hover:border-[#C96A2A]/50
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={`${item.platform} feature thumbnail`}
                    className="
                      aspect-[4/5]
                      w-full
                      object-cover
                      transition duration-700
                      group-hover:scale-105
                    "
                  />
  
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/10
                      to-transparent
                    "
                  />
  
                  <div
                    className="
                      absolute left-4 top-4
                      flex items-center gap-2
                      rounded-full
                      border border-white/15
                      bg-black/55
                      px-3 py-2
                      text-sm font-medium
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {Icon && <Icon size={17} />}
  
                    <span>{item.platform}</span>
                  </div>
  
                  {item.isVideo && (
                    <div
                      className="
                        absolute inset-0
                        flex items-center justify-center
                      "
                    >
                      <div
                        className="
                          flex h-16 w-16
                          items-center justify-center
                          rounded-full
                          border border-white/20
                          bg-black/45
                          text-white
                          backdrop-blur-md
                          transition duration-300
                          group-hover:scale-110
                          group-hover:bg-[#C96A2A]
                        "
                      >
                        <Play
                          size={25}
                          fill="currentColor"
                          className="ml-1"
                        />
                      </div>
                    </div>
                  )}
  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        {/* <p className="text-sm text-gray-300">
                          Featured by
                        </p> */}
  
                        <h4
                          className="
                            mt-1
                            text-xl font-semibold
                            text-white
                          "
                        >
                          {item.title}
                        </h4>
                      </div>
  
                      <ArrowUpRight
                        size={21}
                        className="
                          shrink-0
                          text-white/60
                          transition duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-[#E58A4D]
                        "
                      />
                    </div>
                  </div>
                </div>
  
                <div className="p-5">
                  <p
                    className="
                      text-sm leading-relaxed
                      text-gray-400
                    "
                  >
                    {item.description}
                  </p>
  
                  <span
                    className="
                      mt-5
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      text-gray-200
                      transition
                      group-hover:text-[#C96A2A]
                    "
                  >
                    {item.isVideo ? "Watch feature" : "View post"}
  
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }