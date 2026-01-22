# NOT_FOUND Error - Complete Explanation & Fix Guide

## 1. The Fix Applied ✅

### Changes Made:

**File: `src/app/(site)/blog/[slug]/page.tsx`**
- ✅ Added `import { notFound } from "next/navigation"`
- ✅ Added null check: `if (!post) { notFound(); }` before using `post`
- ✅ Added `generateStaticParams()` function for proper static generation

**File: `src/components/Blog/BlogHeader/index.tsx`**
- ✅ Added `import { notFound } from "next/navigation"`
- ✅ Added null check: `if (!post) { notFound(); }` before using `post`

### Why This Works:

When a blog post doesn't exist, `getPostBySlug()` returns `null`. Instead of trying to access properties on `null` (which throws a runtime error), we now call `notFound()`, which:
- Properly triggers Next.js's built-in 404 handling
- Shows your custom `not-found.tsx` page
- Returns the correct HTTP 404 status code
- Prevents runtime errors that were causing the NOT_FOUND issue on Vercel

---

## 2. Root Cause Analysis 🔍

### What Was Actually Happening:

1. **The Code Flow:**
   ```
   User visits /blog/non-existent-post
   → getPostBySlug("non-existent-post") returns null
   → Code tries: post.content (ERROR: Cannot read property 'content' of null)
   → Runtime error occurs
   → Next.js/Vercel shows NOT_FOUND error
   ```

2. **The Problematic Code (Before Fix):**
   ```typescript
   const post = getPostBySlug(data.slug, [...]);
   const content = await markdownToHtml(post.content || ""); // ❌ post could be null!
   // Later: post.date, post.title, post.coverImage - all fail if post is null
   ```

3. **What It Needed to Do:**
   - Check if `post` exists before using it
   - If it doesn't exist, properly signal to Next.js that this is a 404
   - Use Next.js's `notFound()` function to trigger the 404 page

### Conditions That Triggered This Error:

1. **Direct URL Access:** User visits `/blog/invalid-slug` directly
2. **Stale Links:** Old blog posts were deleted but links still exist
3. **Typo in URL:** User mistypes a blog slug
4. **Build-Time vs Runtime:** Post exists during build but not at runtime (rare)
5. **File System Issues:** On Vercel, if markdown files aren't properly deployed

### The Misconception:

**Wrong Assumption:** "If a post doesn't exist, `getPostBySlug()` will return an empty object or the code will gracefully handle it."

**Reality:** `getPostBySlug()` returns `null` when a post doesn't exist, and accessing properties on `null` throws a runtime error. The error handling in `getPostBySlug()` prevents crashes but doesn't prevent the calling code from trying to use a null value.

---

## 3. Understanding the Concept 🎓

### Why Does This Error Exist?

The `NOT_FOUND` error in Next.js/Vercel exists to:

1. **Prevent Silent Failures:** Without proper 404 handling, users might see broken pages or empty content
2. **SEO Protection:** Search engines need proper 404 status codes to understand content doesn't exist
3. **User Experience:** Users should see a clear "not found" page, not a broken layout
4. **Error Boundaries:** Helps Next.js distinguish between "content doesn't exist" (404) vs "something broke" (500)

### The Correct Mental Model:

**Next.js App Router 404 Handling:**

```
┌─────────────────────────────────────┐
│  User requests /blog/invalid-slug  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Page Component Executes             │
│  getPostBySlug() returns null        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Check: if (!post) notFound()        │ ← YOU MUST DO THIS
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Next.js renders not-found.tsx       │
│  Returns HTTP 404 status             │
└─────────────────────────────────────┘
```

**Key Principle:** In Next.js App Router, you must **explicitly** call `notFound()` when content doesn't exist. Next.js won't automatically detect this for you.

### How This Fits Into Next.js Framework:

1. **Static Generation (`generateStaticParams`):**
   - Tells Next.js which routes to pre-render at build time
   - Prevents unnecessary runtime lookups
   - Improves performance

2. **Dynamic Routes (`[slug]`):**
   - Next.js doesn't know all possible slugs at build time
   - You must handle both "exists" and "doesn't exist" cases
   - `notFound()` is the proper way to signal "doesn't exist"

3. **Error Handling Hierarchy:**
   ```
   notFound() → Shows not-found.tsx (404)
   throw Error → Shows error.tsx (500)
   Both are caught by Next.js error boundaries
   ```

---

## 4. Warning Signs & Prevention 🚨

### Code Smells That Indicate This Issue:

1. **❌ Accessing Properties Without Null Checks:**
   ```typescript
   // BAD
   const post = getPostBySlug(slug);
   return <div>{post.title}</div>; // Will crash if post is null
   
   // GOOD
   const post = getPostBySlug(slug);
   if (!post) notFound();
   return <div>{post.title}</div>;
   ```

2. **❌ Using Optional Chaining as a Band-Aid:**
   ```typescript
   // BAD - Hides the real problem
   const post = getPostBySlug(slug);
   return <div>{post?.title || "No title"}</div>; // Still shows page, but wrong
   
   // GOOD - Properly handles missing content
   const post = getPostBySlug(slug);
   if (!post) notFound();
   return <div>{post.title}</div>;
   ```

3. **❌ Functions That Return Null Without Documentation:**
   ```typescript
   // If a function can return null, always check before using
   const result = someFunction();
   if (!result) {
     // Handle appropriately: notFound(), redirect(), or show empty state
   }
   ```

### Patterns to Watch For:

1. **Dynamic Route Pages Without Null Checks:**
   - `[id]/page.tsx` - Check if resource exists
   - `[slug]/page.tsx` - Check if content exists
   - `[...catchAll]/page.tsx` - Validate path segments

2. **Data Fetching Functions:**
   - Functions that read from file system
   - Database queries that might return null
   - API calls that might fail

3. **Build vs Runtime Differences:**
   - Content exists during build but not in production
   - File paths differ between local and Vercel
   - Environment-specific data

### Prevention Checklist:

- [ ] Always check if data exists before using it in dynamic routes
- [ ] Use `notFound()` for missing content (not empty states)
- [ ] Add `generateStaticParams()` for dynamic routes when possible
- [ ] Test with invalid slugs/IDs during development
- [ ] Add TypeScript types that reflect nullability: `Post | null`
- [ ] Use optional chaining only for optional properties, not missing resources

---

## 5. Alternative Approaches & Trade-offs 🔄

### Approach 1: Using `notFound()` (✅ Recommended - What We Did)

**Pros:**
- ✅ Proper HTTP 404 status code
- ✅ Shows custom `not-found.tsx` page
- ✅ SEO-friendly
- ✅ Follows Next.js best practices
- ✅ Clear separation: "content doesn't exist" vs "error occurred"

**Cons:**
- ⚠️ Requires explicit check in every dynamic route
- ⚠️ Must remember to call it

**When to Use:** When content genuinely doesn't exist (missing blog post, deleted user, etc.)

---

### Approach 2: Redirect to Homepage or List Page

```typescript
import { redirect } from 'next/navigation';

if (!post) {
  redirect('/blog'); // Redirect to blog list
}
```

**Pros:**
- ✅ User stays on site
- ✅ No "dead end" experience

**Cons:**
- ❌ Loses the URL (user might be confused)
- ❌ Not SEO-friendly (should return 404)
- ❌ Hides the fact that content doesn't exist

**When to Use:** When you want to redirect users to related content instead of showing 404

---

### Approach 3: Show Empty State with Message

```typescript
if (!post) {
  return (
    <div>
      <h1>Post Not Found</h1>
      <p>This blog post doesn't exist.</p>
      <Link href="/blog">Back to Blog</Link>
    </div>
  );
}
```

**Pros:**
- ✅ Custom messaging
- ✅ Can include helpful links

**Cons:**
- ❌ Returns HTTP 200 (wrong status code)
- ❌ Bad for SEO
- ❌ Search engines might index "not found" pages
- ❌ Doesn't use Next.js's built-in 404 handling

**When to Use:** Never for missing content. Use `notFound()` instead, which can still show custom content via `not-found.tsx`.

---

### Approach 4: Try-Catch with Error Boundary

```typescript
try {
  const post = getPostBySlug(slug);
  if (!post) throw new Error('Post not found');
  // ... use post
} catch (error) {
  // Error boundary catches this
}
```

**Pros:**
- ✅ Centralized error handling

**Cons:**
- ❌ Treats "not found" as an error (it's not - it's a valid state)
- ❌ Shows error.tsx (500) instead of not-found.tsx (404)
- ❌ Wrong HTTP status code
- ❌ Confuses "something broke" with "content missing"

**When to Use:** For actual errors (network failures, parsing errors), not for missing content.

---

### Approach 5: Middleware-Level Validation

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.split('/').pop();
  if (!isValidSlug(slug)) {
    return NextResponse.redirect(new URL('/404', request.url));
  }
}
```

**Pros:**
- ✅ Centralized validation
- ✅ Runs before page loads

**Cons:**
- ❌ Requires maintaining a list of valid slugs
- ❌ Doesn't work well with dynamic content
- ❌ More complex setup

**When to Use:** For route-level validation (e.g., ensuring slug format is correct), but still need page-level checks.

---

## Summary: Best Practice

**For Missing Content:**
```typescript
const post = getPostBySlug(slug);
if (!post) {
  notFound(); // ✅ Correct: Returns 404, shows not-found.tsx
}
```

**For Errors:**
```typescript
try {
  const post = await fetchPost(slug);
} catch (error) {
  throw error; // ✅ Correct: Shows error.tsx, returns 500
}
```

**For Optional Content:**
```typescript
const post = getPostBySlug(slug);
return (
  <div>
    {post ? <PostContent post={post} /> : <EmptyState />}
  </div>
); // ✅ Correct: Content is optional, not missing
```

---

## Testing Your Fix

1. **Test with Invalid Slug:**
   ```
   Visit: https://your-site.vercel.app/blog/this-does-not-exist
   Expected: Should show your not-found.tsx page (404)
   ```

2. **Test with Valid Slug:**
   ```
   Visit: https://your-site.vercel.app/blog/blog_1
   Expected: Should show the blog post normally
   ```

3. **Check HTTP Status:**
   ```bash
   curl -I https://your-site.vercel.app/blog/invalid
   # Should return: HTTP/2 404
   ```

4. **Check Vercel Logs:**
   - Go to Vercel Dashboard → Your Project → Functions
   - Look for any runtime errors
   - Should see no errors for 404 cases (just normal 404 responses)

---

## Additional Resources

- [Next.js notFound() Documentation](https://nextjs.org/docs/app/api-reference/functions/not-found)
- [Next.js Error Handling](https://nextjs.org/docs/app/api-reference/file-conventions/error)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Vercel Error Documentation](https://vercel.com/docs/errors)

---

## Quick Reference: When to Use What

| Situation | Solution | HTTP Status |
|-----------|----------|-------------|
| Content doesn't exist | `notFound()` | 404 |
| Something broke | `throw Error` | 500 |
| Content is optional | Conditional render | 200 |
| Need to redirect | `redirect()` | 307/308 |
| Invalid route format | Middleware validation | 404 |
