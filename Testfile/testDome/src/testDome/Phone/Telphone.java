package src.testDome.Phone;

public class Telphone {
	/**
	 * @return the screen
	 */
	public float getScreen() {
		return screen;
	}
	/**
	 * @param screen the screen to set
	 */
	public void setScreen(float screen) {
		this.screen = screen;
	}
	/**
	 * @return the cpu
	 */
	public float getCpu() {
		return cpu;
	}
	/**
	 * @param cpu the cpu to set
	 */
	public void setCpu(float cpu) {
		this.cpu = cpu;
	}
	/**
	 * @return the mem
	 */
	public float getMem() {
		return mem;
	}
	/**
	 * @param mem the mem to set
	 */
	public void setMem(float mem) {
		this.mem = mem;
	}
	//��������(��Ա����)
	private float screen;
	private float cpu;
	private float mem;
	
	//��������
	void call(){
		System.out.println("Telphone�д�绰����");
	} 
	void sendMessage(){
		System.out.println("screen:"+screen+"cpu:"+cpu+"mem"+mem+"Telphone�з����Ź���");
	}
	//�޲ι��췽��
	public Telphone() {
		System.out.println("ִ���޲ι��췽��");
	}
	//�вι��췽��
	public Telphone(float newScreen,float newCpu,float newMem) {
		if(newScreen<3.5){
			System.out.println("������Ĳ��������⣬�Զ���ֵ3.5");
			screen=3.5f;
		}else{
			screen=newScreen;
		}
		cpu=newCpu;
		mem=newMem;
		System.out.println("ִ���вι��췽��");
	}
}