export interface IMeta {
    limit:number,
    page:number,
    size:number,
    

}


export interface IResponseSuccessType {
    data:any,
    meta:IMeta
}

export interface IResponseErrorType {
    statusCode:string
    message:string
    errorMessages:string
}