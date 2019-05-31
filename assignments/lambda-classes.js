// CODE here for your Lambda Classes
class Person{

    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
  
  }
  
  class Instructor extends Person{
    constructor(info){
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    };
  }
  
  class Student extends Person{
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
  
    }
    listsSubjects(){
  
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(student,subject){
        return `${student} has submitted a PR for ${subject}`;
  
    }
    sprintChallenge(student,subject){
        return `${student} has begun sprint challenge on ${subject}`;
    }
  }
  
  class ProjectManager extends Instructor{
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    };
    standUp(channel){
        return `${this.name} annnouces to ${channel}, @channel standy times!`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    };
  }
  
  const bj = new Instructor({
    name: 'Billy Jean',
    location: 'Space',
    age: 37,
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `The child is yours!`
  });
  
  const jim = new Student({
      name: 'Jim',
      location: 'Atlantis',
      age: 21,
      previousBackground: 'Working for Jordan Brand',
      className: 'Web PT 60',
      favSubjects: ['CSS','JavaScript','C++','HTML']
  
  });
  
  const thomas = new ProjectManager({
      name: 'Thomas',
      location: 'U-candy',
      age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Full-stack',
    catchPhrase: `Come'on nah!`,
    gradClassName: 'WEBPT7',
    favInstructor: 'Stephanie'
  })
  
  
  console.log(bj.name);
  console.log(bj.location);
  console.log
  console.log(fred.demo("Math"));
  console.log(fred.grade(jim.name,'Math'));
  console.log(jim.listsSubjects());
  console.log(thomas.gradClassName);
  console.log(thomas.standUp('Pair-programming'));
  console.log(thomas.debugsCode(jim.name,'JavaScript'));
  console.log(jim.speak());
  