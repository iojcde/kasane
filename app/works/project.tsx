"use client";
import Image from "next/image";
import { useEffect } from "react";
import { cursor } from "../preloader";
import Link from "next/link";

export const Project = ({
  img,
  name,
  desc,
  type,
  slug,
}: {
  img: string;
  name: string;
  desc: string;
  type: string;
  slug: string;
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="relative project-overview"
      data-cursor-text="↗"
    >
      <Image
        alt=""
        className="rounded-lg"
        src={img}
        width={1000}
        height={500}
      />

      <div className="text-2xl mt-4 font-semibold font-display">
        {name}{" "}
        <span className="text-gray-11 font-normal text-lg">- {type}</span>
      </div>
      <div className="text-gray-10 mt-1">{desc}</div>
    </Link>
  );
};
