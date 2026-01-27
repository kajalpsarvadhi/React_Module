import Header from "./Header"
import Main from "./Main"
import UserCard from "./UserCard"

const HomePage = ()=>{
    const name = "React"
    const users:string[] = ["Node","Express","React"]
    return(
        <div>
            <Header title={`Hello ${name}`} />
            <Main/>
            <UserCard name={"Kajal"}/>
            <ul>
            {users.map((user)=>(
                <li key = {user}>{user}</li>
            ))}
            </ul>
        </div>
    )
}
export default HomePage


