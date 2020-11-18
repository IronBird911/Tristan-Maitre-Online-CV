CS50x
Problem set 8
Track Web Design

student name: Tristan Maitre 

pset8 Homepage
goal: Build a simple homepage using HTML, CSS, and JavaScript.
result: An online resume 
files: 
- 4 HTML pages (index.html, resume.html, portfolio.html, contact.html)
- 1 CSS stylesheet (styles.css)
- 2 JavaScript components (components/footer.js, components/form.js)
- images folder (/images) containing images source
- ressources folder (/ressources) containing documents/pdf source

Specification => verification of requirments:

- Contain at least four different .html pages, at least one of which is index.html (the main page of your website) 
	=> index.html, resume.html, portfolio.html, contact.html
	
- it should be possible to get from any page on your website to any other page by following one or more hyperlinks
	=> use of navbar ; hyperlinks between index and all other pages + resume-portfolio pages + resume-contact page
	
- Use at least ten (10) distinct HTML tags besides <html>, <head>, <body>, and <title>. 
	=> use of <meta> <link> <script> <nav> <div> <a> <img> <span> <ul> <il> <p> <h1> to <h6>, <i>, <button> <section> , ...
	
- Integrate one or more features from Bootstrap into your site 
	=> layout as grid, navbar, cards, margins and padding utilities, etc.
	
- Have at least one stylesheet file of your own creation, styles.css
	=> a single styles.css 
	=> backlog: room for improvement by using different .css for each page or at least a different one for index and the others 
	
	--which uses at least five (5) different CSS selectors (e.g. tag (example), class (.example), or ID (#example)), 
		=> tag: body, p, a, li > p, li > ul
		=> class: .card,.card-header,. shadow, .skill, .separator,...
		=> ID: #content

	-- within which you use a total of at least five (5) different CSS properties, such as font-size, or margin; and 
		=> font-weight, background-color, color, font-size, margin-bottom, width, height,.... 
		
- Integrate one or more features of JavaScript into your site to make your site more interactive.
	=> form.js 
		- creates an email based on the form 
		- sends alerts when fields are missing 
		- sends alerts when ok
		
	=> footer.js
		- create a footer component to avoid copy paste on each page 
		- BACKLOG: do the same for header but also keep the active page style on navbar 
		
- Ensure that your site looks nice on browsers both on mobile devices as well as laptops and desktops
	=> use of BS grid system, using col-sm-x tags to stack info on mobile 