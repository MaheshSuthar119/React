function Hello(){
    var myName = "Prashan"
    let number = 456;
    let fullName = () => {
        return "Mahesh Suthar"
    }
    return(
        <div>
        <h3>MessageNo: {number} Hello this is the future speaking. I am your master {myName}</h3>
        <h3>Hello this is the future speaking. I am your master {fullName()}</h3>
    </div>
    )
}

export default Hello;