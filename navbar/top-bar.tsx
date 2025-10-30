import NavLinks from "./nav-links"

export default function TobBarComponent() {
    return(
        <div className="flex flex-row justify-between">
            <h3>TechOven</h3>
            <NavLinks/>
            <p>Contact Us</p>
        </div>
    )
}