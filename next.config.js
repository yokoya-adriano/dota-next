/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.opendota.com',
                port: '',
                pathname: '/apps/dota2/images/dota_react/heroes/icons/**',
            },
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.opendota.com',
                port: '',
                pathname: '/apps/dota2/images/dota_react/heroes/**',
            },
        ],
    },
}

module.exports = nextConfig
