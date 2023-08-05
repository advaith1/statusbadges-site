'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

enum Format {
	Markdown,
	HTML
}

export default function Start() {
	const params = useSearchParams()
	const router = useRouter()

	const [format, setFormat] = useState(Format.Markdown)
	const [simple, setSimple] = useState(true)
	const [linkSong, setLinkSong] = useState(true)
	const [style, setStyle] = useState('flat')

	let { userid, username } = localStorage

	if (params.has('userid') && params.has('username')) {
		const idParam = params.get('userid')
		const nameParam = params.get('username')
		localStorage.userid = idParam
		userid = idParam
		localStorage.username = nameParam
		username = nameParam
		router.replace('/start')
	}

	if (!userid || !username) {
		location.href = 'https://login.statusbadges.me'
		return <section className="hero">
			<div className="hero-body">
				<p className="title is-1 has-text-centered">
					Logging in...
				</p>
			</div>
		</section>
	}

	const badgeURL = (type: string) => {
		let url = `https://api.statusbadges.me/badge/${type}/${userid}`
		let separator = '?'
		if (type === 'status' && simple) {
			url += '?simple=true'
			separator = '&'
		}
		if (style !== 'flat') url += `${separator}style=${style}`
		return url
	}

	const songURL = `https://api.statusbadges.me/openspotify/${userid}`

	const generateCode = (type: string, url: string, link?: string | false) => {
		switch (format) {
			case Format.Markdown:
				if (link) return `[![${type}](${url})](${link})`
				return `![${type}](${url})`
			case Format.HTML:
				if (link) return `<a href="${link}" target="_blank" rel="noopener"><img src="${url}" alt="${type}"></a>`
				return `<img src="${url}" alt="${type}">`
		}
	}

	const formatButtonClass = (buttonFormat: Format) =>
		buttonFormat === format ? 'button is-primary is-selected' : 'button'

	return (
		<main className="start px-3">
			<section className="hero">
				<div className="hero-body">
					<p className="title is-1 has-text-centered">
						Welcome, {username}!
					</p>
					<p className="subtitle has-text-centered pt-1">
						Generate Markdown or HTML to use on your profile or website
					</p>
				</div>
			</section>
			<section className="format-buttons">
				<div className="container">
					<div className="field is-grouped">
						<div className="control">
							<div className="buttons has-addons">
								<button className={formatButtonClass(Format.Markdown)} onClick={() => setFormat(Format.Markdown)}>
									<span className="icon is-small">
										<FontAwesomeIcon icon={faMarkdown} />
									</span>
									<span>Markdown</span>
								</button>
								<button className={formatButtonClass(Format.HTML)} onClick={() => setFormat(Format.HTML)}>
									<span className="icon is-small">
										<FontAwesomeIcon icon={faCode} />
									</span>
									<span>HTML</span>
								</button>
							</div>
						</div>
						<div className="control">
							<div className="select">
								<select onChange={e => setStyle(e.target.value)}>
									<option value="flat">flat</option>
									<option value="flat-square">flat-square</option>
									<option value="plastic">plastic</option>
									<option value="for-the-badge">for-the-badge</option>
									<option value="social">social</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<p className="title">Status</p>
					<p><img src={badgeURL('status')} alt="status" /></p>
					<p><label className="checkbox">
						<input type="checkbox" checked={simple} onChange={() => setSimple(!simple)} />
						Simple mode (show online instead of idle and dnd)
					</label></p>
					<pre><code>{generateCode('status', badgeURL('status'))}</code></pre>
	
					<p className="title">Playing</p>
					<p><img src={badgeURL('playing')} alt="playing" /></p>
					<pre><code>{generateCode('playing', badgeURL('playing'))}</code></pre>

					<p className="title">Visual Studio Code</p>
					<p><img src={badgeURL('vscode')} alt="vscode" /></p>
					<pre><code>{generateCode('vscode', badgeURL('vscode'))}</code></pre>

					<p className="title">IntelliJ IDEA</p>
					<p><img src={badgeURL('intellij')} alt="intellij" /></p>
					<pre><code>{generateCode('intellij', badgeURL('intellij'))}</code></pre>

					<p className="title">Spotify</p>
					<p><a href={linkSong ? songURL : undefined} target="_blank" rel="noopener" style={{ cursor: linkSong ? 'pointer' : 'default' }}><img src={badgeURL('spotify')} alt="spotify"/></a></p>
					<p><label className="checkbox">
						<input type="checkbox" checked={linkSong} onChange={() => setLinkSong(!linkSong)} />
						Link to song
					</label></p>
					<pre><code>{generateCode('spotify', badgeURL('spotify'), linkSong && songURL)}</code></pre>

					<p className="title">Crunchyroll</p>
					<p><img src={badgeURL('crunchyroll')} alt="crunchyroll" /></p>
					<pre><code>{generateCode('crunchyroll', badgeURL('crunchyroll'))}</code></pre>
				
					<p className="mb-1">For endpoint details, go to <Link className="link" href="/docs">the docs</Link>.</p>
				</div>
			</section>
		</main>
	)
}
