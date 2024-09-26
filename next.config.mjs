/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com'], // Allow images from Unsplash
  },
  env: {
    NEXT_PUBLIC_EMAIL_USERNAME:"secret.account@outlook.com",
    NEXT_PUBLIC_EMAIL_PASSWORD : "password123",
    NEXT_PUBLIC_PERSONAL_EMAIL : "myemail@gmail.com",
  }
  };
  
  export default nextConfig;
  