import axios from 'axios';

import { Property } from '@/models/property';
import {sanityClient} from './sanity';
import * as queries from './sanityQueries';
import { Navbar } from '@/models/navbar';
import { Review } from '@/models/review';

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

export async function getReviews() {
  const result = await sanityClient.fetch<Review[]>(
    queries.getReviewsQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}