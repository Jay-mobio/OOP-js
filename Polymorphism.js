class Animal
  {
    speak()
    {
      console.log("Animals have different sounds");
    }
  }
class Cat extends Animal
  {
  }
class Dog extends Animal
{

}
var cat = new Cat();  
cat.speak();
var dog  = new Dog();
 dog.speak();