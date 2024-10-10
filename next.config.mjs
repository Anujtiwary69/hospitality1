/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Uncomment if you're exporting a static site
    trailingSlash: true, // Appends a trailing slash to the URLs
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true, // Permanent redirect to /en
            },
            {
                source: '/en/:path*',
                has: [
                    {
                        type: 'query',
                        key: 'redirect', // Avoid redirect loop if the query is present
                        value: 'false',
                    },
                ],
                destination: '/:path*', // Remove /en from URLs
                permanent: true,
            },
        ];
    },
}

export default nextConfig;