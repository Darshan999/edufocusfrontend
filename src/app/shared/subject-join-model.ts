export class SubjectJoinModel {

    public constructor(public sub_id:number,public sub_name:string,public sub_photo:string,public fk_course_id:number,public fk_u_email_id:string,
    public course_id:number,public course_name:string,
    public u_email_id:string,public u_name:string,public u_password:string,public u_photo:string,public u_mobile_no:string,public u_gender:string,public u_active:string,public u_status:string,public u_type:string)
    {

    }
}
