
function Section({ sectionName, imgUrl }) {
    return (
        <div>
            <img src={imgUrl} alt={sectionName} />
            <h2>{sectionName}</h2>
        </div>
    )
}

export default Section