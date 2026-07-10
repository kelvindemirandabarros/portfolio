/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com'
      }
    ]
  },
  allowedDevOrigins: ['192.168.0.101'] // Colocar o IP da máquina que está rodando o projeto, mas não fazer commit. Este é um exemplo.
};

export default nextConfig;
