import { defineCollection, z } from 'astro:content';

const productImage = z.object({
  url: z.string().url(),
  alt: z.string(),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    // Which shop category this product belongs to. Drives which
    // category index page and which nav item the product appears under.
    category: z.enum(['tech', 'skincare-beauty', 'books', 'audible', 'tools']),
    // Short line shown on cards and in listings.
    excerpt: z.string(),
    // Exact affiliate/referral URL supplied for this entry. Never altered or invented.
    affiliateUrl: z.string().url(),
    // Label for the CTA button, e.g. "See it on Amazon →"
    ctaLabel: z.string().default('See it on Amazon →'),
    // Optional: no image was supplied for some service/membership entries
    // (e.g. Audible plans, Hotmart resource). Left unset rather than invented —
    // the UI falls back to a neutral placeholder in that case.
    heroImage: productImage.optional(),
    galleryImages: z.array(productImage).default([]),
    // Optional small editorial badge, e.g. "Editor's Pick"
    badge: z.string().optional(),
    featured: z.boolean().default(false),
    // Override the default Amazon Associates disclosure line for
    // non-Amazon entries (Revolut referral, Hotmart, Audible, etc.)
    disclosureText: z.string().optional(),
    // Flag content that is in Portuguese rather than English, so the UI
    // can label it clearly instead of presenting it as English content.
    language: z.enum(['en', 'pt']).default('en'),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['tech', 'skincare-beauty', 'books', 'audible', 'tools', 'general']),
    heroImage: productImage.optional(),
    relatedProducts: z.array(z.string()).default([]),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
  }),
});

export const collections = { products, articles };
