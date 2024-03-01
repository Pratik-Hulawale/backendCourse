class ApiResponse {
    constructor(statusCode,data,message="success"){
        this.statusCode,
        this.data,
        this.success=statusCode<400,
        this.message=message
    }
}
