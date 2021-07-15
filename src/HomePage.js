
import React from "react"
import HomeSection from "./HomeSection"
import sections from "./sections.json"

const HomePage = () => {
    console.log(sections)
    return (
        sections.map((section, idx) => <HomeSection key={idx} {...section} />)
    )
}

export default HomePage