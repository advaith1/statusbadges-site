'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HeaderUser() {
	const params = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const [loggedIn, setLoggedIn] = useState<boolean>(params.has('username'))

	useEffect(() => {
		setLoggedIn(localStorage.username || params.has('username'))
	}, [params])

	if (loggedIn) return <div className="navbar-item has-dropdown is-hoverable">
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

	if (pathname === '/') return null

	return <div className="buttons">
		<Link className="button is-primary" href="/start">
			<strong>Get Started</strong>
		</Link>
	</div>
}
