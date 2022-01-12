package com.example.demo.Todo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;
@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private long id;
	private String username;
	private String description;
	private Date date;
	private boolean isDone;
	protected Todo()
	{
		
	}
	Todo(long id,String username,String description,Date date,boolean isDone)
	{
		super();
		this.id=id;
		this.username=username;
		this.description=description;
		this.date=date;
		this.isDone=isDone;
	}
	public long getId()
	{
		return id;
	}
	public String getUsername()
	{
		return username;
	}
	public String getDescription()
	{
		return description;
	}
	public Date getDate()
	{
		return date;
	}
	public boolean getIsDone()
	{
		return isDone;
	}
	public void setId(long id)
	{
		this.id=id;
	}
	public void setUsername(String username)
	{
		this.username=username;
	}
	public void setDescription(String description)
	{
		this.description=description;
	}
	public void setDate(Date date)
	{
		this.date=date;
	}
	public void setIsDone(boolean isDone)
	{
		this.isDone=isDone;
	}
	@Override
	public boolean equals(Object obj)
	{
		if(this==obj)
		{
			return true;
		}
		if(obj==null)
		{
			return false;
		}
		if(getClass()!=obj.getClass())
		{
			return false;
		}
		Todo other=(Todo)obj;
		if(id!=other.id)
		{
			return false;
		}
		return true;
	}

}

