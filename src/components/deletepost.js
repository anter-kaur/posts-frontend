
const Deletepost=async(id,setErrors,fetchingdata)=>{
    
    const response=await fetch(`https://bk-posts-first-edit.vercel.app/api/user/deleteuser/`+id,{
        method:"DELETE"
    })
    const result=await response.json()
    if(!response.ok){ 
        setErrors(result.error)
    }
    if(response.ok){
        setTimeout(()=>{
            setErrors("")
            fetchingdata()
        },1000) 
    }
}

export default Deletepost;