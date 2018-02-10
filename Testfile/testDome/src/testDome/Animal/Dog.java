package src.testDome.Animal;

public class Dog extends Animal {
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Dog [age=" + age + "]";
	}
	public void eat(){
		System.out.println("年龄:"+age+"狗具有吃东西的能力");
	}
	public Dog(){
		System.out.println("狗的构造方法");
	}
	
	
}
