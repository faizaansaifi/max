import Footer from '../components/common/Footer'
import { Helmet } from 'react-helmet'

function AboutPage() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>About Us</title>
				<link
					rel="canonical"
					href="http://mysite.com/example"
				/>
			</Helmet>

			<h2>About</h2>
			<Footer />
		</div>
	)
}

export default AboutPage
