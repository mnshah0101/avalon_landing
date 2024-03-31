"use client";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/dashboard.png";
import Stats from "@/components/stats";
import YouTube, { YouTubeProps } from "react-youtube";

const opts: YouTubeProps["opts"] = {
  height: "620",
  width: "1104",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

export default function Hero() {
  return (
    <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Section content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
                <div>Meet Rachel: </div>
                The ultimate AI paralegal.
              </h1>
              <p className="text-lg text-zinc-500 mb-8">
                With unmatched sophistication and precision, Rachel integrates
                user-provided documents with extensive online research, crafting
                comprehensive legal arguments and briefs with unparalleled
                efficiency. Rachel sets the standard for intelligent paralegal
                support for small to medium sized law firms.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow"
                    href="/request-demo"
                  >
                    Request Demo
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center pb-12 md:pb-20 relative before:absolute before:-top-12 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
          <YouTube
            videoId="P_0tqqeDyTk"
            opts={opts}
            className="w-full rounded-lg"
            onReady={onPlayerReady}
          />
        </div>

        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
}
