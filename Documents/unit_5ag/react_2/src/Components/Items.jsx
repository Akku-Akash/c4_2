import "./item.css"
export const Item = ({image,label})=>{
    return <div className="itom">
        <img src={image} alt="" />
        <b>{label}</b>
    </div>
}