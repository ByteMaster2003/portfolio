export const projects = [
	{
		title: "Null Talk",
		description: `A CLI-based secure chat system built in Rust 🦀. A decentralised-style chat where each user has their own public/private key pair. Your user_id is derived from your public key — meaning you can safely share it to connect. All communication is encrypted end-to-end, so only the intended recipient can read the messages.`,
		techs: ["rust", "tokio", "rustls", "async programming", "networking", "custom-protocol"],
		github: "https://github.com/ByteMaster2003/null-talk",
		live: "https://github.com/ByteMaster2003/null-talk/releases",
		image: "/projects/null-talk.webp",
	},
	{
		title: "Git Clone",
		description:
			"A lightweight version control system implemented in Rust, inspired by Git. This tool provides basic version control operations for tracking changes in your codebase.",
		techs: ["rust"],
		github: "https://github.com/ByteMaster2003/version_it",
		live: "",
		image: "/projects/vit_image.webp",
	},
	{
		title: "Create Private VPN server",
		description:
			"Build my own private VPN server on an EC2 instance using WireGuard to avoid the privacy risks associated with free VPNs. This DIY approach involved configuring network settings and routing traffic to ensure their real IP address is masked, emphasizing the importance of understanding internet fundamentals and taking control of one's online security.",
		techs: ["nginx", "wireguard", "ec2_instance", "AWS", "Linux"],
		github: "",

		live: "https://www.linkedin.com/posts/developer-vivek-sahani_cybersecurity-wireguard-vpn-activity-7326318508177313793-2f6K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADeyNmwB6KfmuZEyEvHwAq5MrBRxHqnFh0o",
		image: "/projects/private_vpn.webp",
	},
	{
		title: "Deploy Web App on Tor Network",
		description:
			"I built a Node.js backend Application and deploy it on the Tor network, accessible via a .onion address, hosted on my Raspberry Pi. Created Tor Hidden service with Nginx to handle Rest API requests",
		techs: [
			"tor_network",
			"nginx",
			"nodejs",
			"self_hosting",
			"cyber_security",
			"backend_dev",
			"linux",
		],
		github: "",
		live: "https://www.linkedin.com/posts/developer-vivek-sahani_tornetwork-nodejs-selfhosting-activity-7326660434483122176-kDny?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADeyNmwB6KfmuZEyEvHwAq5MrBRxHqnFh0o",
		image: "/projects/tor_network.webp",
	},
	{
		title: "WhatsApp Quiz Bot",
		description:
			"Developed a Quiz Bot for WhatsApp. It conducts a simple quiz on WhatsApp and shows the results accordingly. Used Flask APIs for sending and managing messages.",
		techs: ["Python", "Twilio", "Flask"],
		github: "https://github.com/VivekSite/send-whatsapp-messages-twilio",
		live: "https://drive.google.com/file/d/1gjRTsG4wvgwFR8Z5RmoEGjoL3w7KFEYA/view",
		image: "/projects/quiz_bot.webp",
	},
	{
		title: "Password Manager",
		description:
			"Created CLI based password manager which uses hybrid encryption method to encrypt passwords. Data is encrypted using AES256 key and this key is further encrypted with asymmetric encryption keys.",
		techs: ["Python", "Hybrid_Encryption"],
		github: "https://github.com/ByteMaster2003/pass_manager",
		live: "",
		image: "/projects/password_manager.webp",
	},
	{
		title: "Ecommerce App",
		description:
			"Online Shop is an ecommerce application where you can purchase variety of products. We can search for products add it to cart and place order. We also manage our address and orders.",
		techs: ["MongoDB", "ExpressJs", "NodeJs", "Angular", "PrimeNg"],
		github: "https://github.com/VivekSite/online-shop-backend",
		live: "https://online-shop-ten-ruddy.vercel.app",
		image: "/projects/online_shop.webp",
	},
	{
		title: "Chat Application (Messenger Clone)",
		description:
			"Developed a Chat application with NextJS. Login with credentials or OAuth and start chatting with anyone who is active. Used Pusher to send the message on realtime.",
		techs: ["MongoDB", "NextJs", "NodeJs", "Pusher"],
		github: "https://github.com/VivekSite/messenger-clone",
		live: "https://messenger-clone-ten-lovat.vercel.app",
		image: "/projects/chat_app.webp",
	},
];
