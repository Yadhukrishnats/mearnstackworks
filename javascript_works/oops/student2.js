class student{
    setstudent(stu_name,roll_no,course){
        this.stu_name=stu_name,
        this.roll_no=roll_no,
        this.course=course
    }
    printstudent(){
        console.log(this.stu_name,this.roll_no,this.course);
    }
}

var stu1=new student();
stu1.setstudent("jeevan",33,"meanstack")
stu1.printstudent()


var stu2=new student();
stu2.setstudent("asha",21,"meanstack")
stu2.printstudent()