import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
	return (
		<main className="home px-0">
			<section className="hero home-hero">
				<div className="hero-body">
					<h1 className="title has-text-centered">
						StatusBadges
					</h1>
					<p className="subtitle has-text-centered">
						Shields-style badges showing what you&apos;re doing, powered by Discord
					</p>
				</div>
			</section>

			<section className="has-text-centered">
				<Link className="button is-primary cta" href="/start">
					<span className="icon is-small">
						<FontAwesomeIcon icon={faRocket} />
					</span>
					<span>Get Started</span>
				</Link>
				<p className="disclaimer">
					To access your presence, you&apos;ll be added to our Discord server.
				</p>
			</section>

			<section className="examples px-5">
				<span id="ex3">
				<span id="ex2">
				<Image
					src="/example-badges/status.svg"
					alt="currently online"
					width={204}
					height={40}
				/>
				<Image
					src="/example-badges/playing.svg"
					alt="playing Minecraft"
					width={220}
					height={40}
				/>
				</span>
				<Image
					src="/example-badges/vscode.svg"
					alt="coding app.ts in statusbadges"
					width={398}
					height={40}
				/>
				</span>
				<Image
					src="/example-badges/spotify.svg"
					alt="listening to Am I Dreaming by Metro Boomin, A$AP Rocky, and Roisee"
					width={854}
					height={40}
				/>
			</section>

			<section>
			<p className="subtitle has-text-centered">
				Created by <a href="https://advaith.io" target="_blank" rel="noopener" className="link">advaith</a>
			</p>
			</section>
		</main>
	)
}
