import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
           
            <br />
            <p>
                WHAT WE DO
                We, at Bangalore Food Bank, feed the hungry and the needy. We serve the hungry in the community through various feeding programmes such as the "NGO Feeding Program" to support NGOs running residential programs with their monthly grocery requirements, "Food Rescue Program" to prevent food wastage, "Breakfast Feeding Program at schools" and "Food Relief Programs" to address food insecurity in emergency situations. Bangalore Food Bank acquires donations in the form of dry shelf stable food, fresh produce or monitory aids to feed the poor, through a network of community-owned agencies and NGOs.

                We help corporates in the food industry to extend your supply chain, past the end of the commercial line into an effective distribution through a philanthropic extension. This is important because food banks help corporates to continue to see their products used for their intended purpose, which is feeding people, rather than it being 'dumped' at landfills, even though the commercial value may have ceased to be viable at some point up the commercial chain.

                This way, the excess food is used for its intended purpose, and you will be looked at as a socially responsible organization who cares enough. This is your opportunity to invest in Social Return on Investment (SROI) and corporate goodwill. In this way, we strengthen the community and also, protect the environment. That is the power of food banking.
            </p>
            <br />
            <p>
                "The NGO Feeding Program" to support NGOs running residential programs with their monthly grocery requirements, "Food Rescue Program" to prevent food wastage, "Breakfast Feeding Program for school children" at schools and "Food Relief Programs" in emergency situations. Thanks to the efforts of our benefactor donors, Bangalore Food Bank has procured 519 tons of food products till date. Through this, we were able to make more than 54 lakhs feeds to the needy.
            </p>
            <br />

            <h3>Browse through some of our videos</h3>
            <br />
            <div className="videos">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kizzJiD_9MA/"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/uyP6JwF-gNA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/uyG9arleAo4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ci0HWDRRdx4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default About;