import Link from 'next/link'
import HeaderUser from './user'
import { Suspense } from 'react'

export default function Header() {
	return <nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<Link className="navbar-item" href="/">
				StatusBadges
			</Link>
		</div>

		<div className="navbar-menu">
			<div className="navbar-start">
				<Link className="navbar-item" href="/docs">
					Docs
				</Link>
			</div>

			<div className="navbar-end">
				<div className="navbar-item">
					<Suspense><HeaderUser /></Suspense>
				</div>
			</div>
		</div>
	</nav>
}
