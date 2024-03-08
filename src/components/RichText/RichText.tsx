import { urlFor } from "@/libs/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

export const RichText = {
  type: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
            alt="Post image"
            width={700}
            height={700}
            className="object-contain py-6"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <div className="ml-10 py-5 space-y-5">
        {React.Children.map(children, (child, index) => (
          <ul className="flex items-start" key={index}>
            <IoArrowRedoOutline className="mr-2 w-6 mt-1 text-yellow-600" />
            {child}
          </ul>
        ))}
      </div>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl mt-10 mb-2 font-bold ">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl mt-10 mb-2 font-bold text-yellow-600">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl mt-10 mb-2 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl mt-10 mb-2 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-yellow-600 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};