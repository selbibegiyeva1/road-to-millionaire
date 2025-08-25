import { useState } from "react";

// CSS
import "../styles/JoinWishlist.css";

import { MdOutlineCancel } from "react-icons/md";

import { MdKeyboardArrowDown } from "react-icons/md";

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function JoinWishlist({ effect, click }) {
    const [full_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("Turkmenistan");
    const [heard_from, setSource] = useState("Instagram");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("full_name", full_name);
        fd.append("email", email);
        fd.append("country", country);
        fd.append("heard_from", heard_from);

        try {
            setLoading(true);
            const res = await fetch("https://n8n.unite-venture.com/webhook/waitlist", {
                method: "POST",
                // DO NOT set headers here; let the browser set multipart/form-data
                body: fd,
            });

            if (!res.ok) throw new Error("Request failed");
            alert("✅ Successfully joined the waitlist!");
            setName(""); setEmail(""); setCountry("Turkmenistan"); setSource("Instagram");
        } catch (err) {
            console.error(err);
            alert("❌ Failed to join. Please try again later.");
        } finally {
            setLoading(false); // stop loading
        }
    };

    return (
        <div className={effect ? "JoinWishlist show" : "JoinWishlist"} data-lenis-prevent>
            <button className='close' onClick={click}>
                <i><MdOutlineCancel /></i>
            </button>
            <form className={effect ? "popForm" : ""} onSubmit={handleSubmit}>
                <center>
                    <div className="logo">
                        <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.0641 18.9474V24H11.9359V18.9474H37.0641ZM43.9744 12C43.9744 8.16307 40.8805 5.05263 37.0641 5.05263H11.9359C8.11947 5.05263 5.02564 8.16307 5.02564 12C5.02564 15.8369 8.11947 18.9474 11.9359 18.9474V24C5.34388 24 0 18.6274 0 12C0 5.37258 5.34388 1.01725e-08 11.9359 0H37.0641L37.6788 0.0160362C43.9851 0.33769 49 5.57986 49 12C49 18.4201 43.9851 23.6623 37.6788 23.984L37.0641 24V18.9474C40.8805 18.9474 43.9744 15.8369 43.9744 12Z" fill="white" />
                        </svg>
                        <p>Road To Millionaire</p>
                    </div>
                </center>
                <center><p className="form-head">Join to <span>Waitlist</span></p></center>
                <center>
                    <p className='form-desc'>Be the first to experience our new product! <br />- Early access to exclusive beta testing <br />- Almost free for our first participants</p>
                </center>
                <br /><br />
                <div className='formInput'>
                    <span>Name</span>
                    <input type="text" placeholder='Write your name' value={full_name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div className='formInput'>
                    <span>Email</span>
                    <input type="email" placeholder='Write your email' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div className='formInput'>
                    <span>Country</span>
                    <div>
                        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
                            {countries.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <i><MdKeyboardArrowDown /></i>
                    </div>
                </div>
                <br />
                <div className='formInput'>
                    <span>Where did you hear about us?</span>
                    <div>
                        <select value={heard_from} onChange={(e) => setSource(e.target.value)} required>
                            <option>Instagram</option>
                            <option>LinkedIn</option>
                            <option>X (formerly Twitter)</option>
                            <option>Friend Referral</option>
                            <option>Google Search</option>
                        </select>
                        <i><MdKeyboardArrowDown /></i>
                    </div>
                </div>
                <br />
                <button type="submit">{loading ? "Loading..." : "Join now"}</button>
                <br /><br /><br />
                <center>
                    <span className='terms'>By continuing, you acknowledge that you have read and agree to Chronicle's <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.</span>
                </center>
            </form>
        </div>
    )
}

export default JoinWishlist