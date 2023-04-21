import { useNavigate } from "react-router-dom"


export function NotFound(){
const navigate=useNavigate()
setTimeout(()=> {navigate('/')},1500)

return (
    <>
<h1 style={{fontSize:100}}> :( </h1>
<h2 style={{fontSize:100}}>CODE 404: PAGE NOT FOUND</h2>
    </>
)
}