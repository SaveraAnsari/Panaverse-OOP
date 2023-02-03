#! /usr/bin/env nodec
class student{
    fullname :string;
    static schoolname:string  ="Bab-ul-ilm Public Secondary School";
    readonly schoolcodeno :number=5555

constructor(fullname:string){
    this.fullname=fullname;
    
}
    
    getinfo(){
        console.log(`fullname ${this.fullname}  school : ${student.schoolname}`);
        
    }
static sayhello(){
    console.log("Hi, How are you?");    
}
    }
  
    

    
    let st = new student("Savera Ansari")
    st.getinfo()
   student.sayhello();