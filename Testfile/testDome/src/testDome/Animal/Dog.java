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
		System.out.println("����:"+age+"�����гԶ���������");
	}
	public Dog(){
		System.out.println("���Ĺ��췽��");
	}
	
	
}
