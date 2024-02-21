import '../Styles/FAQ.modules.css';

interface Props {
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
}

function ContactUs({aboutUsHandler, contactHandler, FAQHandler}: Props) {
    return (
        <div>
            <div id="website-title">Website.com</div>
            <div id="contact-us"> FAQ </div>
        </div>
    )
}

export default ContactUs;