/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.dummyjson.com'],
    },
    webpack: (config, options) => {
        config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        });
    
        return config;
    },
};

export default nextConfig;
