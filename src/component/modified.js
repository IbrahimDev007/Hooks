import "./modified.js";
export default function Modified() {
	return (
		<>
			<div className="post-content">
				<p>
					When first introduced to Git, it's typical for developers to feel
					uncomfortable with the process.{" "}
				</p>
				<p>
					You might feel uncertainty when encountering the Git commit message,
					unsure how to properly summarize the changes you've made and why
					you've made them. But the earlier in your career you can develop good
					committing habits, the better.
				</p>
				<p>
					Have you ever wondered how you can improve your Git commit messages?
					This guide outlines steps to elevate your commit messages that you can
					start implementing today.
				</p>
				<p>
					This article assumes you already understand basic Git workflow. If
					not, I suggest reading through the{" "}
					<a
						href="https://guides.github.com/introduction/git-handbook/"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						Git Handbook
					</a>
					.
				</p>
				<p>
					It is also important to note that you should follow your team's
					conventions first and foremost. These tips are based on suggestions
					based upon research and general consensus from the community. But by
					the end of this article you may have some implementations to suggest
					that may help your team's workflow.
				</p>
				<blockquote>
					I think git enters a whole other realm the moment you start working in
					teams -- there are so many cool different flows and ways that people
					can commit code, share code, and add code to your repo open-source or
					closed-source-wise. —{" "}
					<a
						href="https://syntax.fm/"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						Scott Tolinski, Syntax.fm
					</a>
					.
				</blockquote>
				<h2 id="why-should-you-write-better-commit-messages">
					Why should you write better commit messages?
				</h2>
				<p>
					I challenge you to open up a personal project or any repository for
					that matter and run <code>git log</code> to view a list of old commit
					messages. The vast majority of us who have run through tutorials or
					made quick fixes will say "Yep... I have absolutely no idea what I
					meant by 'Fix style' 6 months ago."{" "}
				</p>
				<p>
					Perhaps you have encountered code in a professional environment where
					you had no idea what it was doing or meant for. You've been left in
					the dark without code comments or a traceable history, and even
					wondering "what are the odds this will break everything if I remove
					this line?"
				</p>
				<h3 id="back-to-the-future">Back to the Future</h3>
				<p>
					By writing good commits, you are simply future-proofing yourself. You
					could save yourself and/or coworkers hours of digging around while
					troubleshooting by providing that helpful description.{" "}
				</p>
				<p>
					The extra time it takes to write a thoughtful commit message as a
					letter to your potential future self is extremely worthwhile. On large
					scale projects, documentation is imperative for maintenance.{" "}
				</p>
				<p>
					Collaboration and communication are of utmost importance within
					engineering teams. The Git commit message is a prime example of this.
					I highly suggest setting up a convention for commit messages on your
					team if you do not already have one in place.
				</p>
				<h2 id="the-anatomy-of-a-commit-message">
					The Anatomy of a Commit Message
				</h2>
				<h4 id="basic-">Basic:</h4>
				<p>
					<code>{"git commit -m <message>"}</code>
				</p>
				<h4 id="detailed-">Detailed:</h4>
				<p>
					<code>{"git commit -m <title> -m <description>"}</code>
				</p>
				<figure
					className="kg-card kg-image-card kg-width-wide"
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "1.5em 0px 3em",
					}}>
					<img
						className="kg-image"
						src="https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-03-at-10.31.49-AM.png"
						srcSet="https://www.freecodecamp.org/news/content/images/size/w600/2022/01/Screen-Shot-2022-01-03-at-10.31.49-AM.png 600w, https://www.freecodecamp.org/news/content/images/size/w1000/2022/01/Screen-Shot-2022-01-03-at-10.31.49-AM.png 1000w, https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-03-at-10.31.49-AM.png 1192w"
						style={{
							boxSizing: "inherit",
							padding: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							border: "0px",
							verticalAlign: "middle",
							display: "block",
							height: "auto",
							margin: "0px auto",
							maxWidth: "1040px",
						}}
					/>
				</figure>
				<h2 id="5-steps-to-write-better-commit-messages">
					5 Steps to Write Better Commit Messages
				</h2>
				<p> Let's summarize the suggested guidelines:</p>
				<ol
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						paddingLeft: "1.3em",
						paddingRight: "1.5em",
						listStyle: "decimal",
						maxWidth: "100%",
						minWidth: "100%",
					}}>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
							marginTop: "0px",
						}}>
						Capitalization and Punctuation: Capitalize the first word and do not
						end in punctuation. If using Conventional Commits, remember to use
						all lowercase.{" "}
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						Mood: Use imperative mood in the subject line. Example –{" "}
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							Add fix for dark mode toggle state
						</code>
						. Imperative mood gives the tone you are giving an order or request.
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						Type of Commit: Specify the type of commit. It is recommended and
						can be even more beneficial to have a consistent set of words to
						describe your changes. Example: Bugfix, Update, Refactor, Bump, and
						so on. See the section on Conventional Commits below for additional
						information.{" "}
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						Length: The first line should ideally be no longer than 50
						characters, and the body should be restricted to 72 characters.
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						Content: Be direct, try to eliminate filler words and phrases in
						these sentences (examples: though, maybe, I think, kind of). Think
						like a journalist.{" "}
					</li>
				</ol>
				<h3 id="how-to-find-your-inner-journalist">
					How to Find Your Inner Journalist
				</h3>
				<p>
					I never quite thought my Journalism minor would benefit my future
					career as a Software Engineer, but here we are!{" "}
					<br style={{ boxSizing: "inherit" }} />
					<br style={{ boxSizing: "inherit" }} />
					Journalists and writers ask themselves questions to ensure their
					article is detailed, straightforward, and answers all of the reader's
					questions.{" "}
				</p>
				<p>
					When writing an article they look to answer{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						who
					</em>
					,{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						what
					</em>
					,{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						where
					</em>
					,{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						when
					</em>
					,{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						why
					</em>{" "}
					and{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						how.
					</em>{" "}
					 For committing purposes, it is most important to answer the what and
					why for our commit messages.{" "}
				</p>
				<p>To come up with thoughtful commits, consider the following: </p>
				<ul
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						paddingLeft: "1.3em",
						paddingRight: "1.5em",
						listStyle: "disc",
						maxWidth: "100%",
						minWidth: "100%",
					}}>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
							marginTop: "0px",
						}}>
						Why have I made these changes?
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						What effect have my changes made?
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						Why was the change needed?
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						What are the changes in reference to?
					</li>
				</ul>
				<p>
					Assume the reader does not understand what the commit is addressing.
					They may not have access to the story addressing the detailed
					background of the change.
				</p>
				<p>
					Don't expect the code to be self-explanatory. This is similar to the
					point above.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					It might seem obvious to you, the programmer, if you're updating
					something like CSS styles since it is visual. You may have intimate
					knowledge on why these changes were needed at the time, but it's
					unlikely you will recall why you did that hundreds of pull requests
					later.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Make it clear{" "}
					<em
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontStyle: "italic",
							color: "hsla(240,30%,75%,1)",
						}}>
						why
					</em>{" "}
					that change was made, and note if it may be crucial for the
					functionality or not.
					<br style={{ boxSizing: "inherit" }} />
					<br style={{ boxSizing: "inherit" }} />
					See the differences below:
				</p>
				<ol
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						paddingLeft: "1.3em",
						paddingRight: "1.5em",
						listStyle: "decimal",
						maxWidth: "100%",
						minWidth: "100%",
					}}>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
							marginTop: "0px",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							git commit -m 'Add margin'
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							git commit -m 'Add margin to nav items to prevent them from
							overlapping the logo'
						</code>
					</li>
				</ol>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					It is clear which of these would be more useful to future readers.{" "}
					<br style={{ boxSizing: "inherit" }} />
					<br style={{ boxSizing: "inherit" }} />
					Pretend you're writing an important newsworthy article. Give the
					headline that will sum up what happened and what is important. Then,
					provide further details in the body in an organized fashion.{" "}
					<br style={{ boxSizing: "inherit" }} />
					<br style={{ boxSizing: "inherit" }} />
					In filmmaking, it is often quoted "show, don't tell" using visuals as
					the communication medium compared to a verbal explanation of what is
					happening.
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					In our case, "
					<strong
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							fontWeight: 700,
							color: "hsla(240,30%,75%,1)",
						}}>
						tell
					</strong>
					, don't [just] show" – though we have some visuals at our disposal
					such as the browser, most of the specifics come from reading the
					physical code.
					<br style={{ boxSizing: "inherit" }} />
					<br style={{ boxSizing: "inherit" }} />
					If you're a VSCode user, download the{" "}
					<a
						href="https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						Git Blame
					</a>{" "}
					extension. This is a prime example of when useful commit messages are
					helpful to future developers.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					This plugin will list the person who made the change, the date of the
					changes, as well as the commit message commented inline.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Imagine how useful this could be in troubleshooting a bug or
					back-tracing changes made. Other honorable mentions to see Git
					historical information are{" "}
					<a
						href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						Git History
					</a>{" "}
					and{" "}
					<a
						href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						GitLens
					</a>
					.{" "}
				</p>
				<figure
					className="kg-card kg-image-card kg-width-wide"
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "1.5em 0px 3em",
					}}>
					<img
						className="kg-image"
						sizes="(min-width: 1200px) 1200px"
						src="https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-03-at-10.45.49-AM.png"
						srcSet="https://www.freecodecamp.org/news/content/images/size/w600/2022/01/Screen-Shot-2022-01-03-at-10.45.49-AM.png 600w, https://www.freecodecamp.org/news/content/images/size/w1000/2022/01/Screen-Shot-2022-01-03-at-10.45.49-AM.png 1000w, https://www.freecodecamp.org/news/content/images/size/w1600/2022/01/Screen-Shot-2022-01-03-at-10.45.49-AM.png 1600w, https://www.freecodecamp.org/news/content/images/2022/01/Screen-Shot-2022-01-03-at-10.45.49-AM.png 2068w"
						style={{
							boxSizing: "inherit",
							padding: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							border: "0px",
							verticalAlign: "middle",
							display: "block",
							height: "auto",
							margin: "0px auto",
							maxWidth: "1040px",
						}}
					/>
				</figure>
				<h2 id="conventional-commits">Conventional Commits</h2>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Now that we've covered basic commit structure of a good commit
					message, I'd like to introduce Conventional Commits to help provide
					some detail on creating solid commit messages.{" "}
					<br style={{ boxSizing: "inherit" }} />
					<br style={{ boxSizing: "inherit" }} />
					At D2iQ, we use Conventional Commit which is a great practice among
					engineering teams. Conventional Commit is a formatting convention that
					provides a set of rules to formulate a consistent commit message
					structure like so:
				</p>
				<pre
					style={{
						boxSizing: "inherit",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						verticalAlign: "baseline",
						fontFamily: '"Roboto Mono", monospace',
						minWidth: "100%",
						margin: "1.5em 0px 3em",
						padding: "20px",
						background: "hsla(0,0%,16%,1)",
						overflowX: "auto",
						maxWidth: "100%",
						color: "hsla(240,30%,75%,1)",
						fontSize: "1.4rem",
						lineHeight: "1.5em",
						position: "relative",
					}}>
					<code
						style={{
							boxSizing: "inherit",
							margin: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontStretch: "inherit",
							verticalAlign: "baseline",
							fontFamily: '"Roboto Mono", monospace',
							padding: "0px",
							background: "transparent",
							fontSize: "inherit",
							lineHeight: "inherit",
							fontWeight: 400,
						}}>{`<type>[optional scope]: <description>

[optional body]

[optional footer(s)]`}</code>
					<div
						className="open_grepper_editor"
						title="Edit & Save To Grepper"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
						}}
					/>
				</pre>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					The commit type can include the following:
				</p>
				<ul
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						paddingLeft: "1.3em",
						paddingRight: "1.5em",
						listStyle: "disc",
						maxWidth: "100%",
						minWidth: "100%",
					}}>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
							marginTop: "0px",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							feat
						</code>{" "}
						– a new feature is introduced with the changes
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							fix
						</code>{" "}
						– a bug fix has occurred
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							chore
						</code>{" "}
						– changes that do not relate to a fix or feature and don't modify
						src or test files (for example updating dependencies)
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							refactor
						</code>{" "}
						– refactored code that neither fixes a bug nor adds a feature{" "}
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							docs
						</code>{" "}
						– updates to documentation such as a the README or other markdown
						files
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							style
						</code>{" "}
						– changes that do not affect the meaning of the code, likely related
						to code formatting such as white-space, missing semi-colons, and so
						on.
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							test
						</code>{" "}
						– including new or correcting previous tests{" "}
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							perf
						</code>{" "}
						– performance improvements
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							ci
						</code>{" "}
						– continuous integration related
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							build
						</code>{" "}
						– changes that affect the build system or external dependencies{" "}
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							revert
						</code>{" "}
						– reverts a previous commit{" "}
					</li>
				</ul>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					The commit type subject line should be all lowercase with a character
					limit to encourage succinct descriptions.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					The optional commit body should be used to provide further detail that
					cannot fit within the character limitations of the subject line
					description.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					It is also a good location to utilize{" "}
					<code>{"BREAKING CHANGE: <description>"}</code> to note the reason for
					a breaking change within the commit.{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					The footer is also optional. We use the footer to link the JIRA story
					that would be closed with these changes for example:{" "}
					<code>{"Closes D2IQ-<JIRA #>"}</code> .
				</p>
				<h4 id="full-conventional-commit-example">
					Full Conventional Commit Example{" "}
				</h4>
				<pre
					style={{
						boxSizing: "inherit",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						verticalAlign: "baseline",
						fontFamily: '"Roboto Mono", monospace',
						minWidth: "100%",
						margin: "1.5em 0px 3em",
						padding: "20px",
						background: "hsla(0,0%,16%,1)",
						overflowX: "auto",
						maxWidth: "100%",
						color: "hsla(240,30%,75%,1)",
						fontSize: "1.4rem",
						lineHeight: "1.5em",
						position: "relative",
					}}>
					<code
						style={{
							boxSizing: "inherit",
							margin: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontStretch: "inherit",
							verticalAlign: "baseline",
							fontFamily: '"Roboto Mono", monospace',
							padding: "0px",
							background: "transparent",
							fontSize: "inherit",
							lineHeight: "inherit",
							fontWeight: 400,
						}}>{`fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz. 

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345`}</code>
					<div
						className="open_grepper_editor"
						title="Edit & Save To Grepper"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
						}}
					/>
				</pre>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					To ensure that these committing conventions remain consistent across
					developers, commit message linting can be configured before changes
					are able to be pushed up.{" "}
					<a
						href="https://commitizen-tools.github.io/commitizen/"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						Commitizen
					</a>{" "}
					is a great tool to enforce standards, sync up semantic versioning,
					along with other helpful features.
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					To aid in adoption of these conventions, it's helpful to include
					guidelines for commits in a contributing or README markdown file
					within your projects.
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Conventional Commit works particularly well with semantic versioning
					(learn more at{" "}
					<a
						href="https://semver.org/"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						SemVer.org
					</a>
					) where commit types can update the appropriate version to release.
					 You can also{" "}
					<a
						href="https://www.conventionalcommits.org/en/v1.0.0/"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						read more about Conventional Commits here
					</a>
					.
				</p>
				<h2 id="commit-message-comparisons">Commit Message Comparisons</h2>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Review the following messages and see how many of the suggested
					guidelines they check off in each category.
				</p>
				<h4 id="good">Good</h4>
				<ul
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						paddingLeft: "1.3em",
						paddingRight: "1.5em",
						listStyle: "disc",
						maxWidth: "100%",
						minWidth: "100%",
					}}>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
							marginTop: "0px",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							feat: improve performance with lazy load implementation for images
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							chore: update npm dependency to latest version
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							Fix bug preventing users from submitting the subscribe form
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							Update incorrect client phone number within footer body per client
							request
						</code>
					</li>
				</ul>
				<h4 id="bad">Bad</h4>
				<ul
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						paddingLeft: "1.3em",
						paddingRight: "1.5em",
						listStyle: "disc",
						maxWidth: "100%",
						minWidth: "100%",
					}}>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
							marginTop: "0px",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							fixed bug on landing page
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							Changed style
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							oops
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						<code
							style={{
								boxSizing: "inherit",
								margin: "0px",
								border: "0px",
								fontVariant: "inherit",
								fontStyle: "inherit",
								fontStretch: "inherit",
								verticalAlign: "baseline",
								fontFamily: '"Roboto Mono", monospace',
								padding: "0px 5px 2px",
								background: "hsla(0,0%,27%,1)",
								fontSize: "0.8em",
								lineHeight: "1em",
								fontWeight: 400,
							}}>
							I think I fixed it this time?
						</code>
					</li>
					<li
						style={{
							boxSizing: "inherit",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							margin: "0.5em 0px",
							paddingLeft: "0.3em",
							lineHeight: "1.6em",
							wordBreak: "break-word",
						}}>
						empty commit messages
					</li>
				</ul>
				<h2 id="conclusion">Conclusion</h2>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Writing good commit messages is an extremely beneficial skill to
					develop, and it helps you communicate and collaborate with your team.
					Commits serve as an archive of changes. They can become an ancient
					manuscript to help us decipher the past, and make reasoned decisions
					in the future.
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					There is an existing set of agreed-upon standards we can follow, but
					as long as your team agrees upon a convention that is descriptive with
					future readers in mind, there will undoubtedly be long-term benefits.
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					In this article, we've learned some tactics to level up our commit
					messages. How do you think these techniques can improve your commits?
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					I hope you've learned something new, thanks for reading!{" "}
				</p>
				<p
					style={{
						boxSizing: "inherit",
						padding: "0px",
						border: "0px",
						fontVariant: "inherit",
						fontStyle: "inherit",
						fontWeight: "inherit",
						fontStretch: "inherit",
						lineHeight: "inherit",
						fontFamily: "inherit",
						fontSize: "100%",
						verticalAlign: "baseline",
						margin: "0px 0px 1.5em",
						minWidth: "100%",
					}}>
					Connect with me on Twitter{" "}
					<a
						href="https://twitter.com/ui_natalie"
						style={{
							boxSizing: "inherit",
							margin: "0px",
							padding: "0px",
							border: "0px",
							fontVariant: "inherit",
							fontStyle: "inherit",
							fontWeight: "inherit",
							fontStretch: "inherit",
							lineHeight: "inherit",
							fontFamily: "inherit",
							fontSize: "100%",
							verticalAlign: "baseline",
							backgroundColor: "transparent",
							cursor: "pointer",
							textDecoration: "underline",
							color: "hsla(240,56%,75%,1)",
							wordBreak: "break-word",
						}}>
						@ui_natalie
					</a>
					.
				</p>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
html {
  color: rgb(191, 191, 191);
  filter: contrast(100%) brightness(100%) saturate(100%);
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-variant: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  text-size-adjust: 100%;
  overflow-y: scroll;
  font-size: 62.5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
  background: rgb(31, 31, 31);
  background-image: none;
}

body {
  box-sizing: inherit;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-variant: inherit;
  font-stretch: inherit;
  vertical-align: baseline;
  overflow-x: hidden;
  background: rgb(28, 28, 33);
  color: hsla(240,56%,75%,1);
  font-family: Lato, sans-serif;
  font-size: 1.5rem;
  line-height: 1.6em;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-rendering: optimizelegibility;
  background-color: rgb(28, 28, 33);
  -webkit-font-smoothing: antialiased;
  background-image: none;
}
`,
				}}
			/>
		</>
	);
}
