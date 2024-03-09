import axios from 'axios';

import { Property } from '@/models/property';
import {sanityClient} from './sanity';
import * as queries from './sanityQueries';
import { Navbar } from '@/models/navbar';
import { Review } from '@/models/review';
import { BlogPost } from '@/models/blogPost';

export async function getNavbar() {
  const result = await sanityClient.fetch<Navbar>(
    queries.getNavbarQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getProperties() {
  const result = await sanityClient.fetch<Property[]>(queries.getPropertiesQuery, {}, { cache: 'no-cache' });
  return result;
}

export async function getProperty(slug: string) {
  const result = await sanityClient.fetch<Property>(
    queries.getPropertyQuery,
    { slug },
    { cache: 'no-cache' }
  );

  return result;
}

export async function getBlogPosts() {
  const result = await sanityClient.fetch<BlogPost[]>(
    queries.getBlogPostsQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getBlogPost(slug: string) {
  const result = await sanityClient.fetch<BlogPost>(
    queries.getBlogPostQuery,
    { slug },
    { cache: 'no-cache' }
  );

  return result;
}

export async function getLatestProperties() {
  const result = await sanityClient.fetch<Property[]>(
    queries.getLatestPropertiesQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getLatestCommercial() {
  const result = await sanityClient.fetch<Property[]>(
    queries.getLatestCommercialQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getLivingRent() {
  const result = await sanityClient.fetch<Property[]>(
    queries.getLivingRentQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getLivingSale() {
  const result = await sanityClient.fetch<Property[]>(
    queries.getLivingSaleQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getCommercialRent() {
  const result = await sanityClient.fetch<Property[]>(
    queries.getCommercialRentQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getCommercialSale() {
  const result = await sanityClient.fetch<Property[]>(
    queries.getCommercialSaleQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getReviews() {
  const result = await sanityClient.fetch<Review[]>(
    queries.getReviewsQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}