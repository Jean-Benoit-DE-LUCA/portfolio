import { Inter } from "next/font/google";
import "../../public/css/style.css";
import Container from "../../components/Container/page";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {

return (

	<html lang="en">
		<head>
			<title>Jean-Benoit DE LUCA</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
			<link rel="icon" type="image/png" href="/pictures/logo_jb_.png" sizes="any"/>
			<script src="https://smtpjs.com/v3/smtp.js"></script>
		</head>
		<body>

			<Container>
				{children}
			</Container>

		</body>
	</html>
);
}
