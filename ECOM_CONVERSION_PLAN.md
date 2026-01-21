# Ayurveda Ecommerce Website Conversion Plan

## Project Overview
Convert the Endeavor Next.js project into an Ayurveda ecommerce website inspired by Arogya Jeevan Ayurveda, focusing on the home page transformation while keeping existing images and removing non-ecommerce related pages.

---

## Phase 1: Project Cleanup & Structure

### 1.1 Remove Non-Ecommerce Pages
**Files to Delete:**
- `src/app/(site)/cause/` (entire directory)
- `src/app/(site)/events/` (entire directory)
- `src/app/(site)/documentation/` (entire directory)
- `src/app/(site)/(auth)/signin/` (keep auth but update for ecommerce)
- `src/app/(site)/(auth)/signup/` (keep auth but update for ecommerce)

**Components to Remove:**
- `src/components/Cause/` (entire directory)
- `src/components/Events/` (entire directory)
- `src/components/Documentation/` (entire directory)
- `src/components/Home/UrgentDonation/` (replace with product-related section)
- `src/components/Home/FutureEvents/` (replace with blog preview or products)

**Keep:**
- `src/app/(site)/blog/` (relevant for ecommerce)
- `src/app/(site)/contact/` (essential for ecommerce)
- `src/app/(site)/(auth)/` (update for ecommerce login/register)

### 1.2 Update Navigation Menu
**File:** `src/components/Layout/Header/Navigation/menuData.tsx`

**New Menu Structure:**
```typescript
export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  {
    label: "Blog",
    href: "#",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
```

---

## Phase 2: Header Transformation

### 2.1 Top Bar (Contact Information Bar)
**File:** `src/components/Layout/Header/index.tsx`

**Changes:**
- Add yellow/amber top bar with contact information
- Display: Phone (+91-9667794027) and Email (arogyajeevancc@gmail.com)
- Add language selector (English, Deutsch, Italia) on the right
- Style: Yellow/amber background (#F59E0B or similar)

### 2.2 Main Navigation Bar
**Changes:**
- Update logo to "Arogya Jeevan Ayurveda" (keep existing logo images)
- Add shopping cart icon with item count badge
- Add wishlist icon with count badge
- Add search functionality
- Update "Sign In" / "Sign Up" to "Login & Register" or separate buttons
- Remove donation button, replace with cart/wishlist

### 2.3 Header Features to Add
- Search bar for products
- Shopping cart dropdown (showing cart items)
- User account menu (when logged in)
- Wishlist icon with count

---

## Phase 3: Home Page Sections Transformation

### 3.1 Hero Section
**File:** `src/components/Home/Hero/index.tsx`

**Current:** Donation-focused hero with cause information
**New:** Welcome banner with Ayurveda messaging

**Content:**
- Title: "WELCOME TO AROGYA JEEVAN AYURVEDA"
- Subtitle: "The journey of Arogya Jeevan Ayurveda began many years ago with the vision to improve the quality of life by making herbal healthcare available in India and Internationally."
- Description: "Our endeavor is to meticulously research and formulate standardized products of the highest quality. We firmly believe that the customer is of paramount importance and therefore we place customer satisfaction as our supreme priority."
- CTA Button: "Shop Now" (links to /shop)
- Keep existing hero background image (`/images/hero/banner-bg.jpg`)

### 3.2 Why Choose Us Section
**File:** `src/components/Home/Help/index.tsx` (Rename/Transform)

**Current:** Help section with donation, volunteer, food supply
**New:** "Why Choose Arogya Jeevan Ayurveda" section

**Content:**
Three feature cards:
1. **Works on Root Cause**
   - Icon: Keep existing help icons or use medical/health icon
   - Text: "Ayurveda addresses the root cause of health issues, not just symptoms"

2. **No Side Effects**
   - Icon: Natural/herbal icon
   - Text: "100% natural, herbal products with no harmful side effects"

3. **Balance Tridosha**
   - Icon: Balance/harmony icon
   - Text: "Helps balance the three doshas (Vata, Pitta, Kapha) for optimal health"

**Keep existing images from `/images/help/` directory**

### 3.3 Featured Products Section
**File:** `src/components/Home/Causes/index.tsx` (Transform to Products)

**Current:** Causes carousel with donation goals
**New:** Featured Products carousel

**Product Data Structure:**
```typescript
export const FeaturedProducts: {
  image: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}[] = [
  {
    image: "/images/causes/cause-1.jpg", // Keep existing images
    name: "AROGYA LIVER LIFE",
    slug: "arogya-liver-life",
    description: "Natural liver support and detoxification formula",
    price: "₹1,555.00",
  },
  {
    image: "/images/causes/cause-2.jpg",
    name: "AROGYA MADHUNASHAK CAPSULE",
    slug: "arogya-madhunashak-capsule",
    description: "Ayurvedic solution for blood sugar management",
    price: "₹1,483.00",
  },
  {
    image: "/images/causes/cause-3.jpg",
    name: "AROGYA WOMEN CARE",
    slug: "arogya-women-care",
    description: "Complete women's health and wellness support",
    price: "₹1,876.00",
  },
  {
    image: "/images/causes/cause-4.jpg",
    name: "AROGYA VITAL POWER PLUS",
    slug: "arogya-vital-power-plus",
    description: "Enhance vitality and overall energy",
    price: "₹1,490.00",
  },
];
```

**Features:**
- Product cards with image, name, price
- "Add to Cart" button
- "Add to Wishlist" icon
- Keep existing slider/carousel functionality
- Use existing cause images as product images

### 3.4 WhatsApp CTA Section
**New Component:** `src/components/Home/WhatsAppCTA/index.tsx`

**Content:**
- Banner section: "WHATSAPP ORDERING SERVICE – PLACE YOUR ORDERS AT +91-9667794027"
- WhatsApp icon and clickable link
- Styled as prominent CTA banner

### 3.5 Blog Preview Section
**File:** `src/components/Home/NewsLetter/index.tsx` (Transform)

**Current:** Newsletter subscription
**New:** Latest Blog Posts Preview

**Content:**
- Section title: "OUR BLOG"
- Display 3 latest blog posts
- Each post: Image, title, excerpt, "Continue Reading" link
- Link to full blog page

**Blog Posts:**
1. "Ayurveda: Guide to Ayurveda, The Science & Its Benefits"
2. "Kidney Stones: Causes, Ayurvedic Treatment & Remedies"
3. "Everything You Need to Know About Ayurvedic Treatments"

### 3.6 Testimonials Section
**File:** `src/components/Home/Testimonial/index.tsx` (Update Content)

**Current:** Generic testimonials
**New:** Customer reviews for Ayurveda products

**Update:** `src/app/api/data.tsx` - Reviews array
```typescript
export const Reviews: {
  clientImg: string;
  clientName: string;
  review: string;
  post: string;
}[] = [
  {
    clientImg: "/images/testimonial/client-1.jpg",
    clientName: "Adam Sendler",
    review: "Arogya Jeevan Ayurveda products have transformed my health. The natural approach works wonders!",
    post: "Designer",
  },
  {
    clientImg: "/images/testimonial/client-2.jpg",
    clientName: "Mila Kunis",
    review: "I've been using their products for months and the results are amazing. Highly recommended!",
    post: "Manager",
  },
];
```

**Keep existing testimonial images**

### 3.7 Newsletter Section (Optional)
**File:** `src/components/Home/NewsLetter/index.tsx` (Keep or Transform)

**Option 1:** Keep as newsletter subscription
**Option 2:** Transform to "Get 25% OFF" popup (like original site)

---

## Phase 4: Footer Transformation

### 4.1 Footer Structure
**File:** `src/components/Layout/Footer/index.tsx`

**New Footer Sections:**

1. **About/Company Info (Left Column)**
   - Logo
   - Description: "You can relay on our amazing features list and also our customer services will be great experience."
   - Keep existing logo images

2. **Need Help (Second Column)**
   - Title: "NEED HELP"
   - Phone: +91-9667794027
   - Email: arogyajeevancc@gmail.com
   - Address: A-142, Sec-63, Noida-201301

3. **Account (Third Column)**
   - Title: "ACCOUNT"
   - Links: About, Blogs, My account, Order Tracking, Checkout

4. **Support (Fourth Column)**
   - Title: "SUPPORT"
   - Links: Contact, Term & Conditions, Privacy Policy, Return & Refund Policy, FAQ

5. **Social Media & Copyright (Bottom)**
   - Social icons: Facebook, Twitter, YouTube, Pinterest, Instagram
   - Copyright: "© 2022 Arogya Jeevan Ayurveda"

**Update:** `src/app/api/data.tsx` - footerLinks array
```typescript
export const footerLinks: { link: string; href?: string }[] = [
  { link: "About", href: "/about" },
  { link: "Blogs", href: "/blog" },
  { link: "My account", href: "/account" },
  { link: "Order Tracking", href: "/orders" },
  { link: "Checkout", href: "/checkout" },
  { link: "Contact", href: "/contact" },
  { link: "Term & Conditions", href: "/terms" },
  { link: "Privacy Policy", href: "/privacy-policy" },
  { link: "Return & Refund Policy", href: "/returns" },
  { link: "FAQ", href: "/faq" },
];
```

---

## Phase 5: Content & Data Updates

### 5.1 Update Data File
**File:** `src/app/api/data.tsx`

**Changes:**
- Remove `CauseData` array (or transform to `FeaturedProducts`)
- Remove `Eventdata` array
- Update `helpdata` to "Why Choose Us" data
- Update `footerLinks` for ecommerce
- Update `Reviews` with Ayurveda testimonials
- Keep `menuItems` or remove if not used

### 5.2 Update Metadata
**File:** `src/app/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Arogya Jeevan Ayurveda - Natural Herbal Healthcare Products",
  description: "Premium Ayurvedic products for natural health and wellness. Shop authentic herbal remedies and supplements.",
};
```

---

## Phase 6: Styling & Design Updates

### 6.1 Color Scheme
**File:** `src/app/globals.css`

**Add/Update CSS Variables:**
- Primary: Yellow/Amber (#F59E0B or similar)
- Secondary: Green/Teal (for natural/health feel)
- Text: Dark slate
- Background: White/light gray

### 6.2 Typography
- Keep Montserrat font (or update to Poppins/Inter if preferred)
- Ensure readability for product descriptions

### 6.3 Component Styling
- Update button styles for "Add to Cart", "Shop Now"
- Ensure product cards are visually appealing
- Add hover effects on product cards
- Update form styles for newsletter/search

---

## Phase 7: New Components to Create

### 7.1 Product Card Component
**File:** `src/components/Product/ProductCard.tsx`

**Features:**
- Product image
- Product name
- Price (with original price if discounted)
- "Add to Cart" button
- "Add to Wishlist" icon
- Link to product detail page

### 7.2 Shopping Cart Component
**File:** `src/components/Cart/CartDropdown.tsx`

**Features:**
- Dropdown showing cart items
- Item count badge
- Total price
- "View Cart" and "Checkout" buttons

### 7.3 WhatsApp CTA Component
**File:** `src/components/Home/WhatsAppCTA/index.tsx`

**Features:**
- Prominent banner
- WhatsApp icon
- Clickable phone number link

---

## Phase 8: Page Structure Updates

### 8.1 Home Page
**File:** `src/app/page.tsx`

**New Structure:**
```typescript
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs /> {/* Transformed Help component */}
      <FeaturedProducts /> {/* Transformed Causes component */}
      <WhatsAppCTA /> {/* New component */}
      <BlogPreview /> {/* Transformed Newsletter component */}
      <Testimonial />
      {/* Remove: UrgentDonation, FutureEvents, Volunteer */}
    </main>
  )
}
```

---

## Phase 9: Image Assets

### 9.1 Keep Existing Images
- All images in `/public/images/` directory
- Use cause images as product images
- Use blog images for blog posts
- Use testimonial images for reviews
- Use hero background image

### 9.2 Image Usage Mapping
- `/images/causes/cause-*.jpg` → Product images
- `/images/blog/blog_*.jpg` → Blog post images
- `/images/testimonial/client-*.jpg` → Customer review images
- `/images/hero/banner-bg.jpg` → Hero background
- `/images/help/*.svg` → Why Choose Us icons

---

## Phase 10: Implementation Checklist

### Phase 1: Cleanup
- [ ] Delete non-ecommerce pages (cause, events, documentation)
- [ ] Remove non-ecommerce components
- [ ] Update navigation menu data

### Phase 2: Header
- [ ] Add top contact bar (yellow/amber)
- [ ] Add language selector
- [ ] Update main navigation
- [ ] Add shopping cart icon with badge
- [ ] Add wishlist icon with badge
- [ ] Add search functionality

### Phase 3: Home Page Sections
- [ ] Transform Hero section
- [ ] Transform Help → Why Choose Us
- [ ] Transform Causes → Featured Products
- [ ] Create WhatsApp CTA component
- [ ] Transform Newsletter → Blog Preview
- [ ] Update Testimonials content

### Phase 4: Footer
- [ ] Update footer structure
- [ ] Add Need Help section
- [ ] Add Account section
- [ ] Add Support section
- [ ] Update social media links
- [ ] Update copyright text

### Phase 5: Data & Content
- [ ] Update data.tsx with product data
- [ ] Update testimonials/reviews
- [ ] Update footer links
- [ ] Update page metadata

### Phase 6: Styling
- [ ] Update color scheme
- [ ] Update typography (if needed)
- [ ] Style product cards
- [ ] Style buttons and CTAs

### Phase 7: New Components
- [ ] Create ProductCard component
- [ ] Create CartDropdown component
- [ ] Create WhatsAppCTA component

### Phase 8: Testing
- [ ] Test home page layout
- [ ] Test responsive design
- [ ] Verify all links work
- [ ] Check image loading
- [ ] Test navigation

---

## Notes

1. **Keep All Images:** All existing images in `/public/images/` should be preserved and repurposed
2. **Maintain Structure:** Keep the existing Next.js App Router structure
3. **Component Reuse:** Transform existing components rather than creating everything from scratch
4. **Responsive Design:** Ensure all changes maintain mobile responsiveness
5. **TypeScript:** Maintain type safety throughout
6. **No Database Changes:** This is frontend-only transformation (no backend changes needed for now)

---

## Future Enhancements (Not in Scope)

- Product detail pages
- Shopping cart functionality
- Checkout process
- User authentication for ecommerce
- Product search functionality
- Category pages
- Wishlist functionality

---

## Estimated Timeline

- **Phase 1-2:** 2-3 hours (Cleanup & Header)
- **Phase 3:** 3-4 hours (Home Page Sections)
- **Phase 4:** 1-2 hours (Footer)
- **Phase 5-6:** 2-3 hours (Data & Styling)
- **Phase 7:** 2-3 hours (New Components)
- **Phase 8:** 1-2 hours (Testing)

**Total:** 13-17 hours

---

## Success Criteria

✅ Home page displays Ayurveda ecommerce content
✅ All non-ecommerce pages removed
✅ Navigation updated for ecommerce
✅ Featured products section functional
✅ Footer updated with ecommerce links
✅ All existing images preserved and used
✅ Responsive design maintained
✅ No broken links or missing components
