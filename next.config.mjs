/** @type {import('next').NextConfig} */
const nextConfig = {redirects: async () => {
    return [
      {
        source: "/papas-gratis",
        destination: "https://papasgratis.lamojarreria.com",
        permanent: true, // Returns a 308 status code
      },
    ];
  }};

export default nextConfig;
