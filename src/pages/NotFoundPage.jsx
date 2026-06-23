import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page Not Found | Oliveira Landscaping" description="The page you were looking for could not be found." path="/404" />
      <section className="min-h-[70vh] flex items-center justify-center bg-brand-cream pt-32 pb-20">
        <div className="text-center px-4">
          <p className="font-heading text-7xl md:text-9xl font-extrabold text-brand-green-dark">404</p>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mt-4 mb-3">Page Not Found</h1>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Looks like this path is a little overgrown. Let&apos;s get you back to solid ground.
          </p>
          <Link to="/">
            <Button className="btn-custom-green"><Home className="w-5 h-5" /> Back to Home</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
