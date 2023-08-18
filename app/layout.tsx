import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.sass'
import Header from './header'
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'StatusBadges',
	description: "Shields-style badges showing what you're doing, powered by Discord",
	colorScheme: 'dark',
	themeColor: '#5865f2'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
