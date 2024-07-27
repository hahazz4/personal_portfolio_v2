/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/personal_portfolio_v2' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/personal_portfolio_v2' : '',
    images:{
        unoptimized: true,
    },
    trailingSlash: true,
    output: 'export',
};

export default nextConfig;
