interface UserInterface {
    name: string,
    email: string,
    age: number,
    register();
    payInvoice();
}

class User implements UserInterface {
    private name: string;
    private email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created: " + this.name);
    }

    public  register() {
        console.log(this.name + "Is now registered");
    }

    static addUser(){
        console.log(this.name + "User has been added successfully!");
    }

    payInvoice() {
        console.log(this.name + ' paid invoice');
    }
}

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age:number) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice(){
        super.payInvoice();
    }

    
}



let mike  = new Member(1, "Mike Smith", 'mike@gmail.com', 30);

Member.addUser();