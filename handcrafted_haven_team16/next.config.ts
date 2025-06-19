/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 👇 Esto desactiva el chequeo de ESLint durante el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
