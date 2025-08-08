/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// Si tu repositorio NO es el root (ej. username.github.io),
// y está en username.github.io/mi-web, agrega estas 2 líneas:
nextConfig.basePath = "/ayee-website"
nextConfig.assetPrefix = "/ayee-website/"

export default nextConfig
