class Student{
    constructor(fname){
        this.fname=fname
    }
    //const auto initializes all the parameters
    learn(){
        return this.fname+"learning"
        // console.log("learning");
        //mansi is learning
    }
    static bunk(){
        console.log("bunking");

    }
}
/*obj=let student={
}
*/
let obj = new Student("mansi"); //this ()
// obj.learn()
console.log(obj.learn());
// Student.bunk()


class User extends Student{
    constructor(fname,email){
        super(fname)// 'super' is used to access it from the parent class
        this.email=email
        
    }
            login(){
                return this.learn()
            }
}

let user1=new User()
// user1.login()
console.log(fname.login)


