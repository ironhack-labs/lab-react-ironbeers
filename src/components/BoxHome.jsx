import './BoxHome.styles.css'

export const BoxHome = (props) => {
  const {img, title, description, handleClick} = props
  return(
    <div onClick={handleClick} className="boxHome">
      <img src={img} alt={title} className="background"/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}