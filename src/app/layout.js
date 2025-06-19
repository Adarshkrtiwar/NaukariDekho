import './global.css'


export const metadata = {
  title: 'Job Portal Created in Next.js and Tailwind Css ',
  description: 'Created  by Adarsh Kr Tiwari ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
