package src.phone;

public class Initail {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Telphone tel1= new cellPhone();
		tel1.call();
		tel1.Message();
		Telphone tel2= new smartPhone();
		tel2.call();
		tel2.Message();
		
		IPlayGame ip1=new smartPhone();
		ip1.playGame();
		IPlayGame ip2=new Psp();
		ip2.playGame();
		//�����ڲ���������ʽ
		IPlayGame ip3=new IPlayGame() {
			
			@Override
			public void playGame() {
				// TODO Auto-generated method stub
				System.out.println("ʹ�������ڲ���ķ�ʽʵ�ֽӿ�");
			}
		};
		ip3.playGame();
		
		new IPlayGame(){

			@Override
			public void playGame() {
				// TODO Auto-generated method stub
				System.out.println("ʹ�������ڲ���ķ�ʽʵ�ֽӿڷ�ʽ2");
			}
			
		}.playGame();
	}

}