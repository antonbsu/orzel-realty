import Image from "next/image";
import { Metadata } from "next";
import { getProperty } from '@/libs/apis';
import type { Property } from '@/models/property';
// import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    slug: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project: Property = await getProperty(slug);

  return {
    title: `${project.pageTitle} | Project`,
    description: project.metaDescription,
  };
}

export default async function Project({ params }: Props) {
  const slug = params.slug;
  const project: Property = await getProperty(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>
        </div>
      </div>
    </main>
  );
}