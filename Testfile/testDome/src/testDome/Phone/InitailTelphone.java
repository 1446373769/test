package src.testDome.Phone;

public class InitailTelphone {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//ͨ���޲ι��췽���������
		Telphone phone=new Telphone();
		phone.sendMessage();
		//ͨ���вι��췽��������󲢸�ʵ����������ֵ
		Telphone phone1=new Telphone(1.5f,1.9f,8.0f);
		phone1.sendMessage();
		System.out.println("cpu"+phone1.getCpu()); 
	}

}