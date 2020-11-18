// Javascript to call a footer on each page
// integrate in HTML page using <footer-component></footer-component>
// Adapted from https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <style>
        .footer {
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            text-align: left;
            font-size: 12px;
            letter-spacing: 2px;
        }

        .footer a{
            color:white
        }

        .footer a:hover{
            color: #24408F !important;
        }
      </style>
    <div class="container-fluid footer bg-dark">
        <div class="row justify-content-between">
            <div class="col-sm-4">
                <b>Copyright</b><br /> &copy; Tristan Maitre (2020) 
            </div>
            <div class="col-sm-4">
                <b>Write</b> <br /> <a href="mailto:hire.tristan.maitre@gmail.com">hire.tristan.maitre@gmail.com</a>
            </div>
            <div class="col-sm-2">
                <b>Call</b> <br /> <a href="skype:tristan.maitre_1?call"><i class="fa fa-skype" style="font-size:15px"></i></a>
            </div>
            <div class="col-sm-2">
                <b>Stay in touch</b> <br /> 
                <a href="https://www.linkedin.com/in/tristanmaitre/" target="_blank"><i class="fa fa-linkedin" style="font-size:15px"></i></a>
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define('footer-component', Footer);