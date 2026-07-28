import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function EngagementGalleryModal({
  engagement,
  onClose,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [engagement]);

  useEffect(() => {
    if (!engagement) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [engagement, activeIndex]);

  if (!engagement) return null;

  const images = engagement.gallery ?? [];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/85
        px-4 py-8
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full max-w-6xl
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#111111]
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="
            absolute right-5 top-5 z-20
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-white/10
            bg-black/50
            text-white
            transition
            hover:bg-white hover:text-black
          "
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-[1.5fr_0.8fr]">
          <div className="relative flex min-h-[420px] items-center bg-black">
            {images.length > 0 && (
              <img
                src={images[activeIndex]}
                alt={`${engagement.title} gallery ${activeIndex + 1}`}
                className="
                  h-full max-h-[75vh]
                  w-full
                  object-contain
                "
              />
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                  className="
                    absolute left-4 top-1/2
                    flex h-11 w-11 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-black/60
                    text-white
                    transition
                    hover:bg-white hover:text-black
                  "
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="
                    absolute right-4 top-1/2
                    flex h-11 w-11 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-black/60
                    text-white
                    transition
                    hover:bg-white hover:text-black
                  "
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <div
              className="
                absolute bottom-4 left-1/2
                flex -translate-x-1/2 gap-2
              "
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-2 rounded-full transition-all
                    ${
                      activeIndex === index
                        ? "w-7 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#C96A2A]">
              {engagement.year} · {engagement.location}
            </p>

            <h3 className="text-3xl font-semibold text-white">
              {engagement.title}
            </h3>

            <p className="mt-2 text-lg text-gray-400">
              {engagement.event}
            </p>

            {engagement.award && (
              <div
                className="
                  mt-6 w-fit rounded-full
                  border border-[#C96A2A]/40
                  bg-[#C96A2A]/10
                  px-4 py-2
                  text-sm font-medium
                  text-[#E58A4D]
                "
              >
                {engagement.award}
              </div>
            )}

            <p className="mt-7 leading-relaxed text-gray-300">
              {engagement.description}
            </p>

            {engagement.engagement && (
              <p className="mt-5 leading-relaxed text-gray-400">
                {engagement.engagement}
              </p>
            )}

            {images.length > 0 && (
              <p className="mt-8 text-sm text-gray-500">
                {activeIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}