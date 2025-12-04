import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'The Hobbit Advent Calendar - A Journey Through December',
    description: 'Experience the journey of Bilbo Baggins with our The Hobbit themed advent calendar. Unlock a new surprise each day leading up to Christmas.',
    keywords: ['advent calendar', 'The Hobbit', 'LOTR', 'Middle-earth', 'Christmas', 'Tolkien'],

    // Favicon
    icons: {
        icon: '/favicon.ico',
    },

    // Open Graph metadata (for Facebook, Discord, LinkedIn, etc.)
    openGraph: {
        title: 'The Hobbit Advent Calendar',
        description: 'Experience the journey of Bilbo Baggins with our The Hobbit themed advent calendar. Unlock a new surprise each day!',
        images: [
            {
                url: '/render3.jpg',
                width: 1200,
                height: 630,
                alt: 'The Hobbit Advent Calendar',
            },
        ],
        type: 'website',
    },

    // Twitter Card metadata
    twitter: {
        card: 'summary_large_image',
        title: 'The Hobbit Advent Calendar',
        description: 'Experience the journey of Bilbo Baggins with our The Hobbit themed advent calendar!',
        images: ['/render3.jpg'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
