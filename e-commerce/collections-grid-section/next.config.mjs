/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vaqybtnqyonvlwtskzmv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/e-commerce-track-images/collections/**",
      },
    ],
  },
};

export default nextConfig;
