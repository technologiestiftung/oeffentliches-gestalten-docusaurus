import React, { FC } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { Link } from "../components/Link";
import Cube from "@site/static/img/citylab_cube.svg";

export default function LandingPage() {
  return (
    <Layout>
      <div
        className={clsx(
          "pt-5 pb-5 px-6 min-h-[calc(100vh-var(--ifm-navbar-height))]",
          "bg-grey-600",
          "grid grid-cols-1 lg:grid-cols-12 grid-rows-[1fr,auto] gap-x-12 gap-y-0",
          "relative",
          "overflow-hidden"
        )}
      >
        <div className="lg:col-start-2 lg:col-span-7 z-10 flex flex-col justify-center -translate-y-7">
          <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-bold leading-none">
            Öffentliches Gestalten
          </h1>
          <h2 className="mt-4 w-1/2 md:w-full text-white text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight">
            Handbuch für innovatives Arbeiten in der Verwaltung
          </h2>
          <Link
            href="/buch/einfuehrung/"
            className={clsx(
              "mt-5",
              "w-max",
              "px-4 py-1.5",
              "transition-colors bg-blue-500 hover:bg-white text-white hover:text-blue-500 !font-bold hover:!no-underline"
            )}
          >
            Zum Handbuch
          </Link>
        </div>
        <p className="h-min lg:col-span-7 lg:col-start-6 text-white text-xs italic 2xl:text-right z-10">
          Für alle, die sich mutig für eine kreative und gemeinwohlorientierte
          Transformation der öffentlichen Verwaltung einsetzen.
        </p>

        <Cube
          className={clsx(
            "absolute bottom-0 left-0 translate-y-1/2 -translate-x-8",
            "w-24 md:w-40 lg:w-56 h-auto",
            "text-blue-500"
          )}
        />
        <Cube
          className={clsx(
            "absolute top-0 right-0 -translate-y-4 translate-x-8",
            "w-16 md:w-24 h-auto",
            "text-blue-500"
          )}
        />
        <Cube
          className={clsx(
            "absolute top-10 right-0 translate-x-2",
            "w-40 sm:w-56 md:w-64 lg:w-72 xl:w-96 h-auto",
            "text-magenta-500"
          )}
        />
      </div>
    </Layout>
  );
}
