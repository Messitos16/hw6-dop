
class User{

    constructor( name, surname){
        this.name = name
        this.surname = surname
       

    }
   
    print(){
        console.log(`name - ${this.name}; фамилия - ${this.surname}`);
        
    }
}


let user = new User("Muhammaddior", "Esanbaev")
console.log(user);
class Student extends User{
    #password
    constructor( username, password){
super(username, password)
this.#password = password
}
print(password){
    if (password === this.#password) {
        console.log (`name-${this.username}, password-${this.password}`);
    }  
}
}
let student = new Student("Dior", '1234')
console.log(student);