import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'StatusBadges Docs'
}

export default function Start() {
	return (
		<main className="px-3 mb-6">
			<section className="hero">
				<div className="hero-body">
					<h1 className="title is-1 has-text-centered">
						Docs
					</h1>
				</div>
			</section>
			<section className="format-buttons">
				<div className="container">
					<p className="mb-1">To quickly generate badge code, go to <Link className="link" href="/start">Get Started</Link>. This page has detailed endpoint documentation.</p>
					<p className="mb-1">StatusBadges uses <a href="https://shields.io" className="link" target="_blank" rel="noopener">Shields.io</a>&apos;s badge-maker library, so the badge query params follow the Shields format.</p>
					<p className="mb-1">All query params are optional. Logos only display on the flat, flat-square, and plastic styles.</p>
				</div>
			</section>
			<section>
				<div className="container">
					<h2 className="title is-2">Badges</h2>

					<h3 className="title">Status</h3>
					<code className="endpoint">https://api.statusbadges.me<wbr />/badge<wbr />/status<wbr />/:id</code>
					<p className="docs-badge-list mb-1">
						<img src="/example-badges/status.svg" alt="currently online" />
						<img src="/example-badges/status-idle.svg" alt="currently idle" />
						<img src="/example-badges/status-dnd.svg" alt="currently dnd" />
						<img src="/example-badges/status-offline.svg" alt="currently offline" />
					</p>
					<p className="mb-1">Query Params</p>
					<table className="table">
						<thead>
							<tr>
								<th>Param</th>
								<th>Description</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>simple</td>
								<td>whether to show online for idle and dnd statuses</td>
								<td>false</td>
							</tr>
							<tr>
								<td>label</td>
								<td>the text on the left side</td>
								<td>currently</td>
							</tr>
							<tr>
								<td>labelColor</td>
								<td>the color of the left side</td>
								<td>gray</td>
							</tr>
							<tr>
								<td>color</td>
								<td>the color of the right side</td>
								<td>brightgreen if online, yellow if idle, red if dnd, lightgray if offline</td>
							</tr>
							<tr>
								<td>style</td>
								<td>flat, flat-square, plastic, for-the-badge, or social</td>
								<td>flat</td>
							</tr>
						</tbody>
					</table>
	
					<h3 className="title">Playing</h3>
					<code className="endpoint">https://api.statusbadges.me<wbr />/badge<wbr />/playing<wbr />/:id</code>
					<p className="docs-badge-list mb-1">
						<img src="/example-badges/playing.svg" alt="playing Minecraft" />
						<img src="/example-badges/playing-nothing.svg" alt="playing nothing rn" />
					</p>
					<p className="mb-1">Query Params</p>
					<table className="table">
						<thead>
							<tr>
								<th>Param</th>
								<th>Description</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>label</td>
								<td>the text on the left side</td>
								<td>playing</td>
							</tr>
							<tr>
								<td>fallback</td>
								<td>text to show on the left side if nothing is being played</td>
								<td>nothing rn</td>
							</tr>
							<tr>
								<td>labelColor</td>
								<td>the color of the left side</td>
								<td>gray</td>
							</tr>
							<tr>
								<td>color</td>
								<td>the color of the right side</td>
								<td>#5865f2</td>
							</tr>
							<tr>
								<td>style</td>
								<td>flat, flat-square, plastic, for-the-badge, or social</td>
								<td>flat</td>
							</tr>
						</tbody>
					</table>

					<h3 className="title">Visual Studio Code</h3>
					<code className="endpoint">https://api.statusbadges.me<wbr />/badge<wbr />/vscode<wbr />/:id</code>
					<p className="docs-badge-list mb-1">
						<img src="/example-badges/vscode.svg" alt="coding app.ts in statusbadges" />
						<img src="/example-badges/vscode-nothing.svg" alt="coding nothing rn" />
					</p>
					<p className="mb-1">Query Params</p>
					<table className="table">
						<thead>
							<tr>
								<th>Param</th>
								<th>Description</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>label</td>
								<td>the text on the left side</td>
								<td>coding</td>
							</tr>
							<tr>
								<td>fallback</td>
								<td>text to show on the left side if VS Code isn&apos;t in use</td>
								<td>nothing rn</td>
							</tr>
							<tr>
								<td>labelColor</td>
								<td>the color of the left side</td>
								<td>gray</td>
							</tr>
							<tr>
								<td>color</td>
								<td>the color of the right side</td>
								<td>#23a7f2</td>
							</tr>
							<tr>
								<td>style</td>
								<td>flat, flat-square, plastic, for-the-badge, or social</td>
								<td>flat</td>
							</tr>
							<tr>
								<td>hideLogo</td>
								<td>whether to disable the VS Code logo</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>

					<h3 className="title">IntelliJ IDEA</h3>
					<code className="endpoint">https://api.statusbadges.me<wbr />/badge<wbr />/intellij<wbr />/:id</code>
					<p className="docs-badge-list mb-1">
						<img src="/example-badges/intellij.svg" alt="coding app.ts in statusbadges" />
						<img src="/example-badges/intellij-nothing.svg" alt="coding nothing rn" />
					</p>
					<p className="mb-1">Query Params</p>
					<table className="table">
						<thead>
							<tr>
								<th>Param</th>
								<th>Description</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>label</td>
								<td>the text on the left side</td>
								<td>coding</td>
							</tr>
							<tr>
								<td>fallback</td>
								<td>text to show on the left side if IntelliJ IDEA isn&apos;t in use</td>
								<td>nothing rn</td>
							</tr>
							<tr>
								<td>labelColor</td>
								<td>the color of the left side</td>
								<td>gray</td>
							</tr>
							<tr>
								<td>color</td>
								<td>the color of the right side</td>
								<td>#fe315d</td>
							</tr>
							<tr>
								<td>style</td>
								<td>flat, flat-square, plastic, for-the-badge, or social</td>
								<td>flat</td>
							</tr>
							<tr>
								<td>hideLogo</td>
								<td>whether to disable the IntelliJ logo</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>

					<h3 className="title">Spotify</h3>
					<code className="endpoint">https://api.statusbadges.me<wbr />/badge<wbr />/spotify<wbr />/:id</code>
					<p className="docs-badge-list mb-1">
						<img src="/example-badges/spotify.svg" alt="listening to Am I Dreaming by Metro Boomin, A$AP Rocky, and Roisee" />
						<img src="/example-badges/spotify-nothing.svg" alt="listening to nothing rn" />
					</p>
					<p className="mb-1">Query Params</p>
					<table className="table">
						<thead>
							<tr>
								<th>Param</th>
								<th>Description</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>label</td>
								<td>the text on the left side</td>
								<td>listening to</td>
							</tr>
							<tr>
								<td>fallback</td>
								<td>text to show on the left side if Spotify isn&apos;t in use</td>
								<td>nothing rn</td>
							</tr>
							<tr>
								<td>labelColor</td>
								<td>the color of the left side</td>
								<td>gray</td>
							</tr>
							<tr>
								<td>color</td>
								<td>the color of the right side</td>
								<td>#1db954</td>
							</tr>
							<tr>
								<td>style</td>
								<td>flat, flat-square, plastic, for-the-badge, or social</td>
								<td>flat</td>
							</tr>
							<tr>
								<td>hideLogo</td>
								<td>whether to disable the Spotify logo</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>
					
					<h3 className="title">Crunchyroll</h3>
					<code className="endpoint">https://api.statusbadges.me<wbr />/badge<wbr />/crunchyroll<wbr />/:id</code>
					<p className="docs-badge-list mb-1">
						<img src="/example-badges/crunchyroll.svg" alt="watching TONIKAWA: Over The Moon For You" />
						<img src="/example-badges/crunchyroll-nothing.svg" alt="watching nothing rn" />
					</p>
					<p className="mb-1">Query Params</p>
					<table className="table">
						<thead>
							<tr>
								<th>Param</th>
								<th>Description</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>label</td>
								<td>the text on the left side</td>
								<td>listening to</td>
							</tr>
							<tr>
								<td>fallback</td>
								<td>text to show on the left side if Crunchyroll isn&apos;t in use</td>
								<td>nothing rn</td>
							</tr>
							<tr>
								<td>labelColor</td>
								<td>the color of the left side</td>
								<td>gray</td>
							</tr>
							<tr>
								<td>color</td>
								<td>the color of the right side</td>
								<td>#f47521</td>
							</tr>
							<tr>
								<td>style</td>
								<td>flat, flat-square, plastic, for-the-badge, or social</td>
								<td>flat</td>
							</tr>
							<tr>
								<td>hideLogo</td>
								<td>whether to disable the Spotify logo</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>

					<h2 className="title is-2">Open Spotify</h2>
					<code className="endpoint">https://api.statusbadges.me<wbr />/openspotify<wbr />/:id</code>
					Redirects to the track page of the song you&apos;re listening to on Spotify.

					<h2 className="title is-2 mt-5">Presence</h2>
					<code className="endpoint">https://api.statusbadges.me<wbr />/presence<wbr />/:id</code>
					Returns a JSON object of your presence so you can integrate it another way.
				</div>
			</section>
		</main>
	)
}
