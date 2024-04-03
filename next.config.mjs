/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    output: 'export',
    // output: process.env.CI ? 'export' : undefined,
};

export default nextConfig;
