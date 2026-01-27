type UserCardProps = {
    name:string
    age?:number
}

function UserCard({name,age=18}:UserCardProps){
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
        </div>
    )
}

export default UserCard