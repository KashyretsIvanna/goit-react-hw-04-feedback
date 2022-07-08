const Section=({children,title})=>{
    return(
        <div className="container">
                <h2>{title}</h2>
                {children}
        </div>
    )
}
export default Section;