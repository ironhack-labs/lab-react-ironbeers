function Section(props) {
  const {imgSrc, title, cardText } = props
  return (
    <div className="Section card" style={{ border: 'none', width: '100%' }}>
      <img src={imgSrc} className="card-img-top" alt="card-Img" style={{borderRadius: 0}}/>
      <div className="card-body pb-0 pt-0">
        <h5>{title}</h5>
        <p style={{fontSize: '0.6rem', color: 'gray'}} >{cardText}</p>
      </div>
    </div>
  )
}

export default Section