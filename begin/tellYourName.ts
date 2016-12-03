interface Person{
  firstName: string;
  lastName: string;
}

export default function tellYourName(person:Person){
  console.log("hello",person.firstName,person.lastName)
}
