package src.phone;

public class smartPhone extends Telphone implements IPlayGame {

	@Override
	public void call() {
		// TODO Auto-generated method stub
		System.out.println("ͨ��������绰");
	}

	@Override
	public void Message() {
		// TODO Auto-generated method stub
		System.out.println("ͨ������������");
	}
	public void playGame(){
		System.out.println("�ֻ���������Ϸ����");
	}

}
