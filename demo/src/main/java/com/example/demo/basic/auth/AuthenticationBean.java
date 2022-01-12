package com.example.demo.basic.auth;

public class AuthenticationBean {
	
	public String message="";
	
	AuthenticationBean(String message)
	{
		this.message=message;
	}
	public void setMessage(String message)
	{
		this.message=message;
	}
	@Override
	public String toString()
	{
		return String.format("[message=%s]", message);
	}

}
