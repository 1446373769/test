package src.phone;

public class smartPhone extends Telphone implements IPlayGame {

	@Override
	public void call() {
		// TODO Auto-generated method stub
		System.out.println("通过语音打电话");
	}

	@Override
	public void Message() {
		// TODO Auto-generated method stub
		System.out.println("通过语音发短信");
	}
	public void playGame(){
		System.out.println("手机具有玩游戏功能");
	}

}
