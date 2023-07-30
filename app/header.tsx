'use client'

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
	const params = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const [loggedIn, setLoggedIn] = useState<boolean>(params.has('username'))

	useEffect(() => {
		setLoggedIn(localStorage.username || params.has('username'))
	}, [params])

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
					{loggedIn
						? <div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
								<span>{params.get('username') ?? localStorage.username}</span>
							</a>
							<div className="navbar-dropdown">
								<Link className="navbar-item" href="/start">
									Get Started
								</Link>
								<a className="navbar-item has-text-danger" onClick={() => {
									localStorage.removeItem('userid')
									localStorage.removeItem('username')
									setLoggedIn(false)
									if (pathname === '/start') router.push('/')
								}}>
									Log Out
								</a>
							</div>
						</div>
						: pathname === '/' ? null : <div className="buttons">
							<Link className="button is-primary" href="/start">
								<strong>Get Started</strong>
							</Link>
						</div>
					}
				</div>
			</div>
		</div>
	</nav>
}
