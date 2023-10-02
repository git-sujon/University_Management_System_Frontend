import jwtDecode from "jwt-decode"

export const decodedToken = async(token:string) =>  {
    return jwtDecode(token)
}