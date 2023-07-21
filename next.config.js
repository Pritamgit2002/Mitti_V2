/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:[
      "images.unsplash.com",
      "i.pinimg.com",
      "images.pexels.com"
    ]
  } 
}

module.exports = nextConfig
