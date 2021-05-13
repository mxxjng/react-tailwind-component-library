import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NewsPage: React.FC = () => (
    <Layout>
        <SEO title="Matches" />
        <div className="max-w-7xl mx-auto px-4 mt-4">
            <h1 className="text-3xl text-headline font-headline">
                Coming soon...
            </h1>
        </div>
    </Layout>
);

export default NewsPage;
