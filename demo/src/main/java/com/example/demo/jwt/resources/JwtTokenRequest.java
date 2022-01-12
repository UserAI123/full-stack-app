package com.example.demo.jwt.resources;



import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;
	
	//{
	//    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYzOTQ2MTY0NywiaWF0IjoxNjM4ODU2ODQ3fQ.-qrv0WHUGhmmHvuZAtmnlczMHWJyMofOdgmTY7uzbhouu5hdQb2AU4cYMnkmZ0nrhdy2CS2ti3GoqWhDAmx7Jg";
	//}

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}

