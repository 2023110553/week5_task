const horse={
    name: "적토마",
    age: 3,
    human:{
        name: "아기사자",
        age: 13,
        printInfo: function(){
        console.log("제 이름은 "+this.name+"이고 나이는 "+this.age+"살 입니다.");}
        },
    printInfo: function(){
    console.log("제 이름은 "+this.name+"이고 나이는 "+this.age+"살 입니다.");}
}

horse.printInfo();
horse.human.printInfo();