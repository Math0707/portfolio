/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // A antiga página /builds repetia a home; os projetos agora ficam em /#projetos.
      { source: "/builds", destination: "/#projetos", permanent: true },
    ];
  },
};

export default nextConfig;
