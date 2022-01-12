package com.example.demo.helloworld;

public class HelloWorldBean {
	
	public String message="";
	
	HelloWorldBean(String message)
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
