import {toast } from "react-toastify";
const getemil=localStorage.getItem("userEmail")
export const Logout=()=>{
    if(getemil){
        localStorage.removeItem('userEmail')
        toast.success("Logout sucessfull")
    }
    else{
        toast.error("plese login first")
    }
}
