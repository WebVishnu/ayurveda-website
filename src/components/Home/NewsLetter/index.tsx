import Link from "next/link";
import { getAllPosts } from "@/utils/markdown";
import BlogCard from "./blogCard";

const Newsletter = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    return (
        <section className="lg:py-28 py-16 dark:bg-dark">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-medium mb-4">
                        OUR BLOG
                    </h2>
                    <p className="text-base text-muted dark:text-white/60 max-w-2xl mx-auto">
                        Stay informed about Ayurveda, natural health, and wellness. Read our latest articles on traditional medicine, herbal remedies, and healthy living.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {posts.slice(0, 3).map((blog, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={`${i * 150}`} data-aos-duration="1000">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/blog" className="text-error hover:text-warning text-base font-semibold inline-flex items-center gap-2">
                        View All Blogs
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;